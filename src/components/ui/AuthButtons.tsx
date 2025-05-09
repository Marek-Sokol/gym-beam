'use client';

import { Button } from '@/components';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useCallback } from 'react';
import { logoutAction } from '@/app/_lib/actions/logout';

export function AuthButtons() {
  const { isLoggedIn, signOut } = useAuth();

  const logout = useCallback(async () => {
    await logoutAction();
    signOut();
  }, [signOut]);

  return (
    <>
      {isLoggedIn ? (
        <Button onClick={logout}>Odhlásiť</Button>
      ) : (
        <Link href="/login">
          <Button>Prihlásiť</Button>
        </Link>
      )}
    </>
  );
}
