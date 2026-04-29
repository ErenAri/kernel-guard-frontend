import { Outlet, useNavigate } from 'react-router-dom';
import { useAdmin, AdminProvider } from '../../context/AdminContext';
import AdminLogin from './AdminLogin';
import SEO from '../../components/SEO';
import { LogOut, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function AdminContent() {
  const { config, logout } = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!config) {
    return <AdminLogin />;
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-24 font-mono">
      <SEO title="Kernel Guard | Admin Portal" description="Secure Administration Portal" noIndex />
      
      {/* Admin Navbar */}
      <div className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-foreground/60 hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              KG_ADMIN_PORTAL
            </span>
            <span className="hidden sm:inline-block text-xs text-foreground/40 border-l border-border pl-4">
              {config.email}
            </span>
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 border border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white transition-colors uppercase tracking-wider text-xs font-semibold"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline-block">Logout</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8">
        <Outlet />
      </div>
    </div>
  );
}

export default function AdminLayout() {
  return (
    <AdminProvider>
      <AdminContent />
    </AdminProvider>
  );
}
