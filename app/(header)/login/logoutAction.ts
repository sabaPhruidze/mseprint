// app/logout/logoutAction.ts
'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

/**
 * Clears the `displayName` cookie and returns the user
 * to the login screen (change to "/" if you prefer).
 */
export async function logoutAction(): Promise<void> {
  const cookieStore = await cookies();

  /* remove cookie by resetting it with maxAge 0 */
  cookieStore.set('displayName', '', {
    path: '/',
    maxAge: 0,
    sameSite: 'lax',
  });

  redirect('/login');
}
