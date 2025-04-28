"use client";

import { Button } from "@/components";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

export function AuthButtons() {
  const { token, clearToken } = useAuth();

  return (
    <>
      {token ? (
        <Button onClick={clearToken}>Odhlásiť</Button>
      ) : (
        <Link href="/login">
          <Button>Prihlásiť</Button>
        </Link>
      )}
    </>
  );
}