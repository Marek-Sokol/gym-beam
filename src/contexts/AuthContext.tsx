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

import { checkAuth } from '@/app/_lib/checkAuth.query';
import { redirect } from 'next/navigation';

interface AuthContextType {
  isLoggedIn: boolean;
  signOut: () => void;
  signIn: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        checkAuth().then((result) => {
          setIsLoggedIn(result);

          if (!result) {
            redirect('/login');
          }
        });
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const signIn = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const signOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const authState = useMemo(
    () => ({
      isLoggedIn,
      signIn,
      signOut,
    }),
    [isLoggedIn, signIn, signOut]
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
