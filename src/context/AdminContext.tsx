import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { GithubConfig, GithubService } from '../services/githubApi';

interface AdminIdentity {
  email: string;
}

interface AdminContextType {
  identity: AdminIdentity | null;
  config: GithubConfig | null;
  service: GithubService | null;
  login: (identity: AdminIdentity) => void;
  logout: () => Promise<void>;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);
const ADMIN_IDENTITY_STORAGE_KEY = 'kg_admin_identity';
const LEGACY_ADMIN_CONFIG_STORAGE_KEY = 'kg_admin_config';

export function AdminProvider({ children }: { children: ReactNode }) {
  const [identity, setIdentity] = useState<AdminIdentity | null>(null);
  const [service, setService] = useState<GithubService | null>(null);
  const config = identity ? { email: identity.email } : null;

  useEffect(() => {
    const saved = sessionStorage.getItem(ADMIN_IDENTITY_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as AdminIdentity;
        if (parsed.email) {
          setIdentity({ email: parsed.email });
          setService(new GithubService({ email: parsed.email }));
        }
      } catch (e) {
        sessionStorage.removeItem(ADMIN_IDENTITY_STORAGE_KEY);
      }
    }

    sessionStorage.removeItem(LEGACY_ADMIN_CONFIG_STORAGE_KEY);
    localStorage.removeItem(LEGACY_ADMIN_CONFIG_STORAGE_KEY);
  }, []);

  const login = (newIdentity: AdminIdentity) => {
    const nextIdentity = { email: newIdentity.email };
    sessionStorage.setItem(ADMIN_IDENTITY_STORAGE_KEY, JSON.stringify(nextIdentity));
    localStorage.removeItem(LEGACY_ADMIN_CONFIG_STORAGE_KEY);
    setIdentity(nextIdentity);
    setService(new GithubService(nextIdentity));
  };

  const logout = async () => {
    const activeService = service;
    sessionStorage.removeItem(ADMIN_IDENTITY_STORAGE_KEY);
    sessionStorage.removeItem(LEGACY_ADMIN_CONFIG_STORAGE_KEY);
    localStorage.removeItem(LEGACY_ADMIN_CONFIG_STORAGE_KEY);
    setIdentity(null);
    setService(null);

    if (activeService) {
      try {
        await activeService.logout();
      } catch {
        // Client state is already cleared; a failed cookie cleanup should not block logout.
      }
    }
  };

  return (
    <AdminContext.Provider value={{ identity, config, service, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
