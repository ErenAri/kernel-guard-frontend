import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { GithubConfig, GithubService } from '../services/githubApi';

interface AdminContextType {
  config: GithubConfig | null;
  service: GithubService | null;
  login: (config: GithubConfig) => void;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);
const ADMIN_CONFIG_STORAGE_KEY = 'kg_admin_config';

export function AdminProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<GithubConfig | null>(null);
  const [service, setService] = useState<GithubService | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem(ADMIN_CONFIG_STORAGE_KEY) || localStorage.getItem(ADMIN_CONFIG_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setConfig(parsed);
        setService(new GithubService(parsed));
        sessionStorage.setItem(ADMIN_CONFIG_STORAGE_KEY, saved);
        localStorage.removeItem(ADMIN_CONFIG_STORAGE_KEY);
      } catch (e) {
        sessionStorage.removeItem(ADMIN_CONFIG_STORAGE_KEY);
        localStorage.removeItem(ADMIN_CONFIG_STORAGE_KEY);
      }
    }
  }, []);

  const login = (newConfig: GithubConfig) => {
    sessionStorage.setItem(ADMIN_CONFIG_STORAGE_KEY, JSON.stringify(newConfig));
    localStorage.removeItem(ADMIN_CONFIG_STORAGE_KEY);
    setConfig(newConfig);
    setService(new GithubService(newConfig));
  };

  const logout = () => {
    sessionStorage.removeItem(ADMIN_CONFIG_STORAGE_KEY);
    localStorage.removeItem(ADMIN_CONFIG_STORAGE_KEY);
    setConfig(null);
    setService(null);
  };

  return (
    <AdminContext.Provider value={{ config, service, login, logout }}>
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
