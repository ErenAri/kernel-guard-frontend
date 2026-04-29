import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { GithubConfig, GithubService } from '../services/githubApi';

interface AdminContextType {
  config: GithubConfig | null;
  service: GithubService | null;
  login: (config: GithubConfig) => void;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<GithubConfig | null>(null);
  const [service, setService] = useState<GithubService | null>(null);

  useEffect(() => {
    // Load from local storage on mount
    const saved = localStorage.getItem('kg_admin_config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setConfig(parsed);
        setService(new GithubService(parsed));
      } catch (e) {
        localStorage.removeItem('kg_admin_config');
      }
    }
  }, []);

  const login = (newConfig: GithubConfig) => {
    localStorage.setItem('kg_admin_config', JSON.stringify(newConfig));
    setConfig(newConfig);
    setService(new GithubService(newConfig));
  };

  const logout = () => {
    localStorage.removeItem('kg_admin_config');
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
