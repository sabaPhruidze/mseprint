'use server';

import { sql } from '../../../lib/supabaseClient';       // or '@/lib/db'
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';
import { RegisterFormValues } from 'components/Header/GetRegisterClient';

/**
 * Creates a user row; returns `{ error?: string }` so the client
 * can decide what to display.  Success triggers a redirect to /login.
 */
export async function registerAction(
  data: RegisterFormValues,
): Promise<{ error?: string }> {
  /* extra client-side validations already ran, but duplicate-mail check is here */
  if (data.email !== data.emailVerification)
    return { error: 'Emails do not match.' };
  if (data.password !== data.passwordVerification)
    return { error: 'Passwords do not match.' };

  const hash = await bcrypt.hash(data.password, 10);

  try {
    await sql`
      INSERT INTO users
            (first_name,  last_name,  email,  phone,
             job_title,   company,    extension,   password_hash)
      VALUES (${data.firstname}, ${data.lastname}, ${data.email}, ${data.phone},
              ${data.jobTitle}, ${data.company}, ${data.extension}, ${hash})
    `;
  } catch (err: any) {
    /* Postgres unique-constraint violation → code 23505 */
    if (err?.code === '23505') {
      return { error: 'This e-mail is already registered.' };
    }
    /* re-throw anything else so Next.js error overlay shows it */
    throw err;
  }

  /* success → send the browser to /login */
  redirect('/login');
}
