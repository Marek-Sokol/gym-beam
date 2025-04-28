'use client';
import {
  createContext,
  useContext,
  type ReactNode,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from 'react';

interface AuthContextType {
  token: string | null;
  storeToken: (token: string) => void;
  clearToken: () => void;
}

const TOKEN_KEY = 'gb-token';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      setToken(token);
    }
  }, []);

  const storeToken = useCallback((token: string) => {
    if (!token) return;

    localStorage.setItem(TOKEN_KEY, token);
    setToken(token);
  }, []);

  const clearToken = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
  }, []);

  const authState = useMemo(
    () => ({
      token,
      storeToken,
      clearToken,
    }),
    [token, storeToken, clearToken]
  );

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');

  return context;
}
