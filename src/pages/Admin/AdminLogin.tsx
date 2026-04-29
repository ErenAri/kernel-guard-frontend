import { useState, type FormEvent } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { Lock, ArrowRight, AlertCircle, Home, Loader2 } from 'lucide-react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { GithubService, type GithubConfig } from '../../services/githubApi';

const LOGIN_ERROR_KEY = 'kg_admin_login_error';

function consumeLoginError() {
  if (typeof sessionStorage === 'undefined') return '';

  const savedError = sessionStorage.getItem(LOGIN_ERROR_KEY) || '';
  sessionStorage.removeItem(LOGIN_ERROR_KEY);
  return savedError;
}

export default function AdminLogin() {
  const { login } = useAdmin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticating, setAuthenticating] = useState(false);
  const [error, setError] = useState(consumeLoginError);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const config: GithubConfig = {
      email: email.trim(),
      password: password.trim()
    };

    if (!config.email || !config.password) {
      setError('Credentials are required.');
      return;
    }

    setAuthenticating(true);

    try {
      await new GithubService(config).getJsonFile('src/data/projects.json');
      login(config);
    } catch (err: any) {
      const message = err?.message || '';
      setError(
        message.toLowerCase().includes('invalid credentials')
          ? 'Email veya şifre yanlış.'
          : `Authentication failed: ${message || 'Unable to verify credentials.'}`
      );
    } finally {
      setAuthenticating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 font-mono relative">
      <SEO title="Kernel Guard | Secure Auth" description="Admin Login" noIndex />
      
      <Link 
        to="/" 
        className="absolute top-8 left-8 flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors text-xs uppercase tracking-widest"
      >
        <Home className="w-4 h-4" />
        Return to Surface
      </Link>

      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-primary bg-primary/10 text-primary mb-6">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="text-2xl text-foreground font-light tracking-widest uppercase mb-2">
            System Override
          </h1>
          <p className="text-foreground/50 text-sm">
            Verify administrator credentials before opening the dashboard.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-surface border border-border p-8 space-y-6">
          {error && (
            <div className="flex items-start gap-3 p-4 border border-red-500/50 bg-red-500/10 text-red-500 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-xs uppercase tracking-widest text-foreground/70 mb-2">
              Administrator Email
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                disabled={authenticating}
                className="w-full bg-background border border-border focus:border-primary text-foreground py-3 pl-10 pr-4 outline-none transition-colors"
                placeholder="Enter administrator email"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-foreground/70 mb-2">
              Secure Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                disabled={authenticating}
                className="w-full bg-background border border-border focus:border-primary text-foreground py-3 pl-10 pr-4 outline-none transition-colors"
                placeholder="••••••••••••"
              />
            </div>
            <p className="text-xs text-foreground/40 mt-2">
              Your session is securely verified through our zero-trust backend.
            </p>
          </div>

          <button
            type="submit"
            disabled={authenticating}
            className="w-full flex items-center justify-between p-4 bg-primary text-white hover:bg-primary-dark transition-colors uppercase tracking-widest text-sm font-medium group disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span>{authenticating ? 'Verifying...' : 'Authenticate'}</span>
            {authenticating ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
