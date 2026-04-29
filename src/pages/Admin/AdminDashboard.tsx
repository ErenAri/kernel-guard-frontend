import { useState, useEffect } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { Link, useNavigate } from 'react-router-dom';
import { FolderGit2, FolderCheck, Plus, ExternalLink, RefreshCw, AlertCircle, LogOut, Trash2, Loader2 } from 'lucide-react';

export default function AdminDashboard() {
  const { service, logout } = useAdmin();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'open_source' | 'completed'>('open_source');
  
  const [projects, setProjects] = useState<any[]>([]);
  const [completedProjects, setCompletedProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState('');
  const [error, setError] = useState('');

  const getFilePath = (tab: 'open_source' | 'completed') =>
    tab === 'open_source' ? 'src/data/projects.json' : 'src/data/completedProjects.json';

  const setItemsForTab = (tab: 'open_source' | 'completed', items: any[]) => {
    if (tab === 'open_source') {
      setProjects(items);
    } else {
      setCompletedProjects(items);
    }
  };

  const loadData = async () => {
    setLoading(true);
    setError('');
    try {
      if (service) {
        const [projRes, compRes] = await Promise.all([
          service.getJsonFile<{items: any[]}>('src/data/projects.json'),
          service.getJsonFile<{items: any[]}>('src/data/completedProjects.json'),
        ]);
        setProjects(projRes.content.items || []);
        setCompletedProjects(compRes.content.items || []);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch data from GitHub.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [service]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleDelete = async (item: any) => {
    if (!service || deletingId) return;

    const confirmed = window.confirm(`Delete "${item.title || item.id}" from ${activeTab === 'open_source' ? 'Open Source' : 'Completed'} projects?`);
    if (!confirmed) return;

    const tab = activeTab;
    setDeletingId(item.id);
    setError('');

    try {
      const filePath = getFilePath(tab);
      const latest = await service.getJsonFile<{items: any[]}>(filePath);
      const latestItems = latest.content.items || [];

      if (!latestItems.some((project: any) => project.id === item.id)) {
        throw new Error('Project was not found in the latest remote data.');
      }

      const updatedItems = latestItems.filter((project: any) => project.id !== item.id);

      await service.updateJsonFile(
        filePath,
        { items: updatedItems },
        `Delete ${tab} project: ${item.id}`,
        latest.sha
      );

      setItemsForTab(tab, updatedItems);
    } catch (err: any) {
      setError(err.message || 'Failed to delete project.');
    } finally {
      setDeletingId('');
    }
  };

  const activeItems = activeTab === 'open_source' ? projects : completedProjects;

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <h1 className="text-2xl font-light text-foreground uppercase tracking-widest">
          Database Management
        </h1>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 border border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white transition-colors text-sm uppercase tracking-wider"
            title="Logout and return to site"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
          <button 
            onClick={loadData}
            className="flex items-center gap-2 px-4 py-2 border border-border bg-surface text-foreground hover:bg-border transition-colors text-sm uppercase tracking-wider"
            disabled={loading}
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Sync
          </button>
          <Link
            to={`/admin/edit/${activeTab}/new`}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white hover:bg-primary-dark transition-colors text-sm uppercase tracking-wider"
          >
            <Plus className="w-4 h-4" />
            New Entry
          </Link>
        </div>
      </div>

      {error && (
        <div className="flex items-start gap-3 p-4 border border-red-500/50 bg-red-500/10 text-red-500 text-sm mb-8">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <div>
            <p className="font-semibold mb-1">Synchronization Error</p>
            <p>{error}</p>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b border-border mb-8">
        <button
          onClick={() => setActiveTab('open_source')}
          className={`flex items-center gap-2 px-6 py-4 uppercase tracking-wider text-sm transition-colors ${
            activeTab === 'open_source' 
              ? 'border-b-2 border-primary text-primary bg-surface' 
              : 'text-foreground/50 hover:text-foreground hover:bg-surface/50'
          }`}
        >
          <FolderGit2 className="w-4 h-4" />
          Open Source
        </button>
        <button
          onClick={() => setActiveTab('completed')}
          className={`flex items-center gap-2 px-6 py-4 uppercase tracking-wider text-sm transition-colors ${
            activeTab === 'completed' 
              ? 'border-b-2 border-primary text-primary bg-surface' 
              : 'text-foreground/50 hover:text-foreground hover:bg-surface/50'
          }`}
        >
          <FolderCheck className="w-4 h-4" />
          Completed
        </button>
      </div>

      {/* List */}
      <div className="space-y-4">
        {loading ? (
          <div className="py-12 text-center text-foreground/50 text-sm uppercase tracking-widest animate-pulse">
            Fetching remote state...
          </div>
        ) : activeItems.length === 0 ? (
          <div className="py-12 text-center border border-dashed border-border text-foreground/50 text-sm">
            No entries found.
          </div>
        ) : (
          activeItems.map((item) => (
            <div 
              key={item.id}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-surface border border-border hover:border-primary/50 transition-colors gap-4"
            >
              <div className="flex items-center gap-4">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover border border-border bg-background" />
                ) : (
                  <div className="w-16 h-16 flex items-center justify-center border border-border bg-background text-foreground/20">
                    NO IMG
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">{item.title}</h3>
                  <div className="flex gap-2">
                    {item.tags?.slice(0, 3).map((t: string) => (
                      <span key={t} className="text-xs bg-background border border-border px-2 py-0.5 text-foreground/70">
                        {t}
                      </span>
                    ))}
                    {(item.tags?.length || 0) > 3 && (
                      <span className="text-xs text-foreground/50 px-1 py-0.5">+{item.tags.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                {item.github && (
                  <a href={item.github} target="_blank" rel="noreferrer" className="p-2 text-foreground/50 hover:text-primary transition-colors" title="View Source">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <Link
                  to={`/admin/edit/${activeTab}/${item.id}`}
                  className="w-full sm:w-auto text-center px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors text-sm uppercase tracking-wider"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  onClick={() => handleDelete(item)}
                  disabled={deletingId === item.id}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 border border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white transition-colors text-sm uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Delete project"
                >
                  {deletingId === item.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
