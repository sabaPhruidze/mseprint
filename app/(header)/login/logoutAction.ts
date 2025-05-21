/* ------------------------------------------------------------------
   app/logout/logoutAction.ts
   ------------------------------------------------------------------
   Deletes both auth-related cookies and redirects to /login
------------------------------------------------------------------- */
'use server';

import { cookies }   from 'next/headers';
import { redirect }  from 'next/navigation';

export async function logoutAction(): Promise<void> {
  // mutable cookie jar (no await)
  const c =await cookies();

  /* expire both cookies immediately */
  c.set('uid',          '', { path: '/', maxAge: 0, sameSite: 'lax' });
  c.set('displayName',  '', { path: '/', maxAge: 0, sameSite: 'lax' });

  redirect('/login');           // change to "/" if you prefer
}
