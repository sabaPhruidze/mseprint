'use server';

import { sql } from 'lib/supabaseClient';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { LoginFormValues } from 'components/Header/GetLoginClient';

export async function loginAction(
  data: LoginFormValues,
): Promise<{ error?: string }> {
  /* ───────────── fetch user row ───────────── */
  const rows = (await sql`
      SELECT id, password_hash, first_name, last_name
        FROM users
       WHERE email = ${data.email}
       LIMIT 1
  `) as {
    id: string;
    password_hash: string;
    first_name: string;
    last_name: string;
  }[];

  if (rows.length === 0) return { error: 'No account found for that e-mail.' };
  if (!(await bcrypt.compare(data.password, rows[0].password_hash)))
    return { error: 'Incorrect password.' };

  /* ───────────── set cookies ──────────────── */
  const cookieStore = await cookies();           //  ✅ NO await
  cookieStore.set('displayName',
                  `${rows[0].first_name} ${rows[0].last_name}`,
                  {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7,   // 7 days
                    sameSite: 'lax',
                  });

  cookieStore.set('uid', rows[0].id, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
    httpOnly: true,   // keeps it out of client JS
    secure: true,     // send only over HTTPS in prod
    sameSite: 'lax',
  });

  /* ───────────── redirect home ────────────── */
  redirect('/');
}
