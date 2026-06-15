import { useState, useEffect, useRef, type ChangeEvent } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import { ArrowLeft, Save, Image as ImageIcon, Trash2, Plus, AlertCircle, Loader2 } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { LANGUAGE_LABELS, SUPPORTED_LANGUAGES } from '../../i18n/route';
import type { Language } from '../../context/LanguageContext';
import type { JsonValue } from '../../services/githubApi';

type LocalizedTextEditor = Partial<Record<Language, string>>;

interface EditorAccount {
  email: string;
  role: string;
  password?: string;
}

interface EditableProject {
  id: string;
  title: string;
  description: LocalizedTextEditor;
  tags: string[];
  image?: string;
  technicalDetails?: LocalizedTextEditor;
  marketingDetails?: LocalizedTextEditor;
  github?: string;
  link?: string;
  diagram?: string;
  longDescription?: LocalizedTextEditor;
  url?: string;
  accounts?: EditorAccount[];
  [key: string]: string | string[] | LocalizedTextEditor | EditorAccount[] | undefined;
}

interface ProjectFile {
  items: EditableProject[];
}

interface TextInputProps {
  label: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}

interface TextAreaProps {
  label: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const LANGUAGE_EDITOR_LABELS: Record<Language, string> = {
  tr: 'Turkish',
  en: 'English',
  de: 'German',
  ja: 'Japanese',
  'zh-CN': 'Chinese',
  es: 'Spanish',
  fr: 'French',
  ko: 'Korean',
};

const emptyLocalizedText = () =>
  Object.fromEntries(SUPPORTED_LANGUAGES.map((language) => [language, ''])) as LocalizedTextEditor;

function errorMessage(error: unknown, fallback: string) {
  return error instanceof Error ? error.message : fallback;
}

export default function ProjectEditor() {
  const { type, id } = useParams<{ type: string; id: string }>();
  const isNew = id === 'new';
  const navigate = useNavigate();
  const { service } = useAdmin();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState<EditableProject | null>(null);
  const [fileSha, setFileSha] = useState('');
  const [allData, setAllData] = useState<EditableProject[]>([]);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getFilePath = () => type === 'open_source' ? 'src/data/projects.json' : 'src/data/completedProjects.json';
  const sanitizeAccounts = (accounts: EditorAccount[] = []) =>
    accounts.map(({ password, ...account }) => ({
      email: account.email || '',
      role: account.role || ''
    }));
  const sanitizeProject = (project: EditableProject) =>
    type === 'completed'
      ? { ...project, accounts: sanitizeAccounts(project.accounts || []) }
      : project;

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        if (!service) return;
        const res = await service.getJsonFile<ProjectFile>(getFilePath());
        setAllData(res.content.items || []);
        setFileSha(res.sha);

        if (isNew) {
          // Initialize empty structure
          const base = {
            id: '', title: '', 
            description: emptyLocalizedText(),
            tags: [], image: ''
          };
          if (type === 'open_source') {
            setFormData({
              ...base,
              technicalDetails: emptyLocalizedText(),
              marketingDetails: emptyLocalizedText(),
              github: '', link: '', diagram: ''
            });
          } else {
            setFormData({
              ...base,
              longDescription: emptyLocalizedText(),
              url: '', github: '',
              accounts: []
            });
          }
        } else {
          const item = res.content.items?.find((project) => project.id === id);
          if (!item) throw new Error('Project not found');
          setFormData(sanitizeProject(structuredClone(item)));
        }
      } catch (err: unknown) {
        setError(errorMessage(err, 'Failed to fetch data'));
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id, type, service, isNew]);

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !service) return;

    setSaving(true);
    const reader = new FileReader();
    reader.onerror = () => {
      setError('Image upload failed.');
      setSaving(false);
    };
    reader.onloadend = async () => {
      try {
        const base64 = reader.result as string;
        const filename = `${uuidv4()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
        
        // Upload image directly to GitHub
        const urlPath = await service.uploadImage(filename, base64);
        setFormData((prev) => prev ? ({ ...prev, image: urlPath }) : prev);
        setSaving(false);
      } catch (err: unknown) {
        setError(`Image upload failed: ${errorMessage(err, 'Unable to upload image.')}`);
        setSaving(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    if (!service || !formData) return;
    setSaving(true);
    setError('');
    
    try {
      // Validate
      if (!formData.id.trim() || !formData.title.trim()) {
        throw new Error('ID and Title are required.');
      }

      const updatedData = [...allData];
      if (isNew) {
        if (updatedData.find(i => i.id === formData.id)) {
          throw new Error('ID must be unique.');
        }
        updatedData.push(sanitizeProject(formData));
      } else {
        const index = updatedData.findIndex(i => i.id === id);
        if (index > -1) {
          updatedData[index] = sanitizeProject(formData);
        }
      }

      await service.updateJsonFile(
        getFilePath(), 
        { items: updatedData } as unknown as JsonValue,
        `Update ${type} project: ${formData.id}`, 
        fileSha
      );
      
      navigate('/admin');
    } catch (err: unknown) {
      setError(errorMessage(err, 'Failed to save'));
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="py-12 text-center animate-pulse">Loading data...</div>;
  }

  if (error && !formData) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-4">
        <div className="flex items-center gap-3 p-4 border border-red-500/50 bg-red-500/10 text-red-500">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{error}</span>
        </div>
        <Link to="/admin" className="text-primary hover:underline">Return to Dashboard</Link>
      </div>
    );
  }

  if (!formData) return null;

  const Input = ({ label, value, onChange, placeholder = '', disabled = false }: TextInputProps) => (
    <div className="mb-6">
      <label className="block text-xs uppercase tracking-widest text-foreground/70 mb-2">{label}</label>
      <input
        type="text"
        value={value || ''}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full bg-background border border-border focus:border-primary text-foreground p-3 outline-none disabled:cursor-not-allowed disabled:opacity-60"
      />
    </div>
  );

  const TextArea = ({ label, value, onChange }: TextAreaProps) => (
    <div className="mb-6">
      <label className="block text-xs uppercase tracking-widest text-foreground/70 mb-2">{label}</label>
      <textarea value={value || ''} onChange={onChange} className="w-full bg-background border border-border focus:border-primary text-foreground p-3 outline-none min-h-[100px] font-mono text-sm" />
    </div>
  );

  const setLocalizedField = (field: string, language: Language, value: string) => {
    setFormData((current) => current ? ({
      ...current,
      [field]: {
        ...((current[field] as LocalizedTextEditor | undefined) || {}),
        [language]: value,
      },
    }) : current);
  };

  const addAccount = () => {
    setFormData((current) => current ? ({
      ...current,
      accounts: [...(current.accounts || []), { email: '', role: '' }],
    }) : current);
  };

  const removeAccount = (index: number) => {
    setFormData((current) => {
      if (!current) return current;
      const accounts = [...(current.accounts || [])];
      accounts.splice(index, 1);
      return { ...current, accounts };
    });
  };

  const updateAccount = (index: number, field: keyof EditorAccount, value: string) => {
    setFormData((current) => {
      if (!current) return current;
      const accounts = [...(current.accounts || [])];
      const account = accounts[index] || { email: '', role: '' };
      accounts[index] = { ...account, [field]: value };
      return { ...current, accounts };
    });
  };

  const getLocalizedFieldValue = (field: string, language: Language) =>
    ((formData[field] as LocalizedTextEditor | undefined)?.[language] ?? '');

  const LocalizedTextAreas = ({ field, markdown = false }: { field: string; markdown?: boolean }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {SUPPORTED_LANGUAGES.map((language) => (
        <TextArea
          key={`${field}-${language}`}
          label={`${LANGUAGE_EDITOR_LABELS[language]} (${LANGUAGE_LABELS[language]})${markdown ? ' Markdown' : ''}`}
          value={getLocalizedFieldValue(field, language)}
          onChange={(e) => setLocalizedField(field, language, e.target.value)}
        />
      ))}
    </div>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <Link to="/admin" className="text-foreground/60 hover:text-primary transition-colors flex items-center gap-2 text-sm uppercase tracking-wider">
          <ArrowLeft className="w-4 h-4" /> Back to List
        </Link>
        <button 
          onClick={handleSave} 
          disabled={saving}
          className="flex items-center gap-2 px-6 py-2 kg-action-primary transition-colors uppercase tracking-wider disabled:opacity-50"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {saving ? 'Committing...' : 'Commit Changes'}
        </button>
      </div>

      {error && (
        <div className="flex items-start gap-3 p-4 border border-red-500/50 bg-red-500/10 text-red-500 text-sm mb-8">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Core Info */}
          <div className="bg-surface border border-border p-6">
            <h2 className="text-lg font-light mb-6 uppercase tracking-widest border-b border-border pb-2">Core Identity</h2>
            <div className="grid grid-cols-2 gap-4">
              <Input label="ID (Unique, no spaces)" value={formData.id} onChange={(e) => setFormData({...formData, id: e.target.value})} disabled={!isNew} />
              <Input label="Project Title" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
            </div>
            
            <h3 className="text-xs uppercase tracking-widest text-foreground/70 mb-2 mt-4">Short Description</h3>
            <LocalizedTextAreas field="description" />
          </div>

          {/* Details based on type */}
          {type === 'open_source' ? (
            <div className="bg-surface border border-border p-6">
              <h2 className="text-lg font-light mb-6 uppercase tracking-widest border-b border-border pb-2">Technical & Marketing</h2>
              <h3 className="text-xs uppercase tracking-widest text-foreground/70 mb-2 mt-4">Technical Details (Markdown)</h3>
              <LocalizedTextAreas field="technicalDetails" markdown />
              <h3 className="text-xs uppercase tracking-widest text-foreground/70 mb-2 mt-4">Marketing Details (Markdown)</h3>
              <LocalizedTextAreas field="marketingDetails" markdown />
            </div>
          ) : (
            <div className="bg-surface border border-border p-6">
              <h2 className="text-lg font-light mb-6 uppercase tracking-widest border-b border-border pb-2">Long Description</h2>
              <LocalizedTextAreas field="longDescription" markdown />
            </div>
          )}
        </div>

        <div className="space-y-8">
          {/* Media & Links */}
          <div className="bg-surface border border-border p-6">
            <h2 className="text-lg font-light mb-6 uppercase tracking-widest border-b border-border pb-2">Media & Links</h2>
            
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-widest text-foreground/70 mb-2">Project Image</label>
              {formData.image && (
                <div className="mb-4 relative group">
                  <img src={formData.image} alt="Preview" className="w-full h-auto border border-border" />
                  <button onClick={() => setFormData({...formData, image: ''})} className="absolute top-2 right-2 bg-red-500 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )}
              <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
              <button onClick={() => fileInputRef.current?.click()} className="w-full flex items-center justify-center gap-2 p-3 border border-dashed border-primary/50 text-primary hover:bg-primary/5 transition-colors">
                <ImageIcon className="w-4 h-4" />
                {saving ? 'Uploading...' : 'Upload Image to GitHub'}
              </button>
            </div>

            <Input label="Tags (Comma separated)" value={formData.tags?.join(', ')} onChange={(e) => setFormData({...formData, tags: e.target.value.split(',').map((tag) => tag.trim()).filter(Boolean)})} />
            
            <Input label="GitHub Link" value={formData.github} onChange={(e) => setFormData({...formData, github: e.target.value})} />
            
            {type === 'open_source' ? (
              <>
                <Input label="Live Preview Link" value={formData.link} onChange={(e) => setFormData({...formData, link: e.target.value})} />
                <TextArea label="Mermaid Diagram" value={formData.diagram} onChange={(e) => setFormData({...formData, diagram: e.target.value})} />
              </>
            ) : (
              <Input label="Project URL" value={formData.url} onChange={(e) => setFormData({...formData, url: e.target.value})} />
            )}
          </div>

          {/* Accounts (Completed Projects only) */}
          {type === 'completed' && (
            <div className="bg-surface border border-border p-6">
              <div className="flex items-center justify-between mb-6 border-b border-border pb-2">
                <h2 className="text-lg font-light uppercase tracking-widest">Test Accounts</h2>
                <button 
                  onClick={addAccount}
                  className="p-1 hover:bg-border transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-4">
                {formData.accounts?.map((acc, idx) => (
                  <div key={idx} className="p-4 border border-border bg-background relative">
                    <button 
                      onClick={() => removeAccount(idx)}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <input type="text" placeholder="Email / Username" value={acc.email} onChange={e => {
                      updateAccount(idx, 'email', e.target.value);
                    }} className="w-full bg-transparent border-b border-border p-2 outline-none mb-2 text-sm" />
                    <input type="text" placeholder="Role (e.g. Admin)" value={acc.role} onChange={e => {
                      updateAccount(idx, 'role', e.target.value);
                    }} className="w-full bg-transparent border-b border-border p-2 outline-none text-sm" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
