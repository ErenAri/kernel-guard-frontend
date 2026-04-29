import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import { ArrowLeft, Save, Image as ImageIcon, Trash2, Plus, AlertCircle, Loader2 } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

export default function ProjectEditor() {
  const { type, id } = useParams<{ type: string; id: string }>();
  const isNew = id === 'new';
  const navigate = useNavigate();
  const { service } = useAdmin();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState<any>(null);
  const [fileSha, setFileSha] = useState('');
  const [allData, setAllData] = useState<any[]>([]);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getFilePath = () => type === 'open_source' ? 'src/data/projects.json' : 'src/data/completedProjects.json';

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        if (!service) return;
        const res = await service.getJsonFile<{items: any[]}>(getFilePath());
        setAllData(res.content.items || []);
        setFileSha(res.sha);

        if (isNew) {
          // Initialize empty structure
          const base = {
            id: '', title: '', 
            description: { en: '', tr: '' },
            tags: [], image: ''
          };
          if (type === 'open_source') {
            setFormData({
              ...base,
              technicalDetails: { en: '', tr: '' },
              marketingDetails: { en: '', tr: '' },
              github: '', link: '', diagram: ''
            });
          } else {
            setFormData({
              ...base,
              longDescription: { en: '', tr: '' },
              url: '', github: '',
              accounts: []
            });
          }
        } else {
          const item = res.content.items?.find((i: any) => i.id === id);
          if (!item) throw new Error('Project not found');
          setFormData(JSON.parse(JSON.stringify(item)));
        }
      } catch (err: any) {
        setError(err.message || 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id, type, service, isNew]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !service) return;

    setSaving(true);
    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = reader.result as string;
        const filename = `${uuidv4()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
        
        // Upload image directly to GitHub
        const urlPath = await service.uploadImage(filename, base64);
        setFormData((prev: any) => ({ ...prev, image: urlPath }));
        setSaving(false);
      };
      reader.readAsDataURL(file);
    } catch (err: any) {
      setError('Image upload failed: ' + err.message);
      setSaving(false);
    }
  };

  const handleSave = async () => {
    if (!service) return;
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
        updatedData.push(formData);
      } else {
        const index = updatedData.findIndex(i => i.id === id);
        if (index > -1) {
          updatedData[index] = formData;
        }
      }

      await service.updateJsonFile(
        getFilePath(), 
        { items: updatedData }, 
        `Update ${type} project: ${formData.id}`, 
        fileSha
      );
      
      navigate('/admin');
    } catch (err: any) {
      setError(err.message || 'Failed to save');
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

  const Input = ({ label, value, onChange, placeholder = '' }: any) => (
    <div className="mb-6">
      <label className="block text-xs uppercase tracking-widest text-foreground/70 mb-2">{label}</label>
      <input type="text" value={value || ''} onChange={onChange} placeholder={placeholder} className="w-full bg-background border border-border focus:border-primary text-foreground p-3 outline-none" />
    </div>
  );

  const TextArea = ({ label, value, onChange }: any) => (
    <div className="mb-6">
      <label className="block text-xs uppercase tracking-widest text-foreground/70 mb-2">{label}</label>
      <textarea value={value || ''} onChange={onChange} className="w-full bg-background border border-border focus:border-primary text-foreground p-3 outline-none min-h-[100px] font-mono text-sm" />
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
          className="flex items-center gap-2 px-6 py-2 bg-primary text-white hover:bg-primary-dark transition-colors uppercase tracking-wider disabled:opacity-50"
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
              <Input label="ID (Unique, no spaces)" value={formData.id} onChange={(e: any) => setFormData({...formData, id: e.target.value})} disabled={!isNew} />
              <Input label="Project Title" value={formData.title} onChange={(e: any) => setFormData({...formData, title: e.target.value})} />
            </div>
            
            <h3 className="text-xs uppercase tracking-widest text-foreground/70 mb-2 mt-4">Short Description</h3>
            <div className="grid grid-cols-2 gap-4">
              <TextArea label="English" value={formData.description?.en} onChange={(e: any) => setFormData({...formData, description: {...formData.description, en: e.target.value}})} />
              <TextArea label="Turkish" value={formData.description?.tr} onChange={(e: any) => setFormData({...formData, description: {...formData.description, tr: e.target.value}})} />
            </div>
          </div>

          {/* Details based on type */}
          {type === 'open_source' ? (
            <div className="bg-surface border border-border p-6">
              <h2 className="text-lg font-light mb-6 uppercase tracking-widest border-b border-border pb-2">Technical & Marketing</h2>
              <h3 className="text-xs uppercase tracking-widest text-foreground/70 mb-2 mt-4">Technical Details (Markdown)</h3>
              <div className="grid grid-cols-2 gap-4">
                <TextArea label="English" value={formData.technicalDetails?.en} onChange={(e: any) => setFormData({...formData, technicalDetails: {...formData.technicalDetails, en: e.target.value}})} />
                <TextArea label="Turkish" value={formData.technicalDetails?.tr} onChange={(e: any) => setFormData({...formData, technicalDetails: {...formData.technicalDetails, tr: e.target.value}})} />
              </div>
              <h3 className="text-xs uppercase tracking-widest text-foreground/70 mb-2 mt-4">Marketing Details (Markdown)</h3>
              <div className="grid grid-cols-2 gap-4">
                <TextArea label="English" value={formData.marketingDetails?.en} onChange={(e: any) => setFormData({...formData, marketingDetails: {...formData.marketingDetails, en: e.target.value}})} />
                <TextArea label="Turkish" value={formData.marketingDetails?.tr} onChange={(e: any) => setFormData({...formData, marketingDetails: {...formData.marketingDetails, tr: e.target.value}})} />
              </div>
            </div>
          ) : (
            <div className="bg-surface border border-border p-6">
              <h2 className="text-lg font-light mb-6 uppercase tracking-widest border-b border-border pb-2">Long Description</h2>
              <div className="grid grid-cols-2 gap-4">
                <TextArea label="English (Markdown)" value={formData.longDescription?.en} onChange={(e: any) => setFormData({...formData, longDescription: {...formData.longDescription, en: e.target.value}})} />
                <TextArea label="Turkish (Markdown)" value={formData.longDescription?.tr} onChange={(e: any) => setFormData({...formData, longDescription: {...formData.longDescription, tr: e.target.value}})} />
              </div>
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

            <Input label="Tags (Comma separated)" value={formData.tags?.join(', ')} onChange={(e: any) => setFormData({...formData, tags: e.target.value.split(',').map((t: string) => t.trim()).filter(Boolean)})} />
            
            <Input label="GitHub Link" value={formData.github} onChange={(e: any) => setFormData({...formData, github: e.target.value})} />
            
            {type === 'open_source' ? (
              <>
                <Input label="Live Preview Link" value={formData.link} onChange={(e: any) => setFormData({...formData, link: e.target.value})} />
                <TextArea label="Mermaid Diagram" value={formData.diagram} onChange={(e: any) => setFormData({...formData, diagram: e.target.value})} />
              </>
            ) : (
              <Input label="Project URL" value={formData.url} onChange={(e: any) => setFormData({...formData, url: e.target.value})} />
            )}
          </div>

          {/* Accounts (Completed Projects only) */}
          {type === 'completed' && (
            <div className="bg-surface border border-border p-6">
              <div className="flex items-center justify-between mb-6 border-b border-border pb-2">
                <h2 className="text-lg font-light uppercase tracking-widest">Test Accounts</h2>
                <button 
                  onClick={() => setFormData({...formData, accounts: [...(formData.accounts||[]), {email:'', password:'', role:''}]})}
                  className="p-1 hover:bg-border transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-4">
                {formData.accounts?.map((acc: any, idx: number) => (
                  <div key={idx} className="p-4 border border-border bg-background relative">
                    <button 
                      onClick={() => {
                        const newAcc = [...formData.accounts];
                        newAcc.splice(idx, 1);
                        setFormData({...formData, accounts: newAcc});
                      }}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <input type="text" placeholder="Email / Username" value={acc.email} onChange={e => {
                      const newAcc = [...formData.accounts]; newAcc[idx].email = e.target.value; setFormData({...formData, accounts: newAcc});
                    }} className="w-full bg-transparent border-b border-border p-2 outline-none mb-2 text-sm" />
                    <input type="text" placeholder="Password" value={acc.password} onChange={e => {
                      const newAcc = [...formData.accounts]; newAcc[idx].password = e.target.value; setFormData({...formData, accounts: newAcc});
                    }} className="w-full bg-transparent border-b border-border p-2 outline-none mb-2 text-sm" />
                    <input type="text" placeholder="Role (e.g. Admin)" value={acc.role} onChange={e => {
                      const newAcc = [...formData.accounts]; newAcc[idx].role = e.target.value; setFormData({...formData, accounts: newAcc});
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
