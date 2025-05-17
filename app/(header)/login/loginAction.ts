'use server';

import { sql } from 'lib/supabaseClient';   // ← your Postgres.js helper
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';
import { LoginFormValues } from './page';

export async function loginAction(
  data: LoginFormValues,
): Promise<{ error?: string }> {
  /* 1 · fetch the user row by e-mail — two generics: <RowMode, RowShape> */
 const rows =
  (await sql`
     SELECT id, password_hash
       FROM users
      WHERE email = ${data.email}
      LIMIT 1
   `) as { id: string; password_hash: string }[];

  if (rows.length === 0) {
    return { error: 'No account found for that e-mail.' };
  }

  /* 2 · verify password */
  const ok = await bcrypt.compare(data.password, rows[0].password_hash);
  if (!ok) {
    return { error: 'Incorrect password.' };
  }

  /* 3 · TODO: set a real session cookie / JWT here */
  redirect('/');
}
