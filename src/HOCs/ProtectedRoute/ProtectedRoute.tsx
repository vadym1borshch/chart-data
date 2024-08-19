'use client';
import { useSession } from 'next-auth/react';
import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return session ? <>{children}</> : null;

}
