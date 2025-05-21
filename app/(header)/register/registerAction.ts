'use server';

import { sql } from 'lib/supabaseClient';  // adjust alias if needed
import bcrypt    from 'bcryptjs';
import { redirect } from 'next/navigation';
import type { RegisterFormValues } from 'components/Header/GetRegisterClient';

/**
 * Saves a new user row and redirects to /login.
 * Returns `{ error?: string }` for client-side banner display.
 */
export async function registerAction(
  data: RegisterFormValues,
): Promise<{ error?: string }> {
  /* extra client-side checks already ran but duplicate-mail guard stays here */
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
  } catch (err: unknown) {
    /** Narrow to a type that MAY have `code` */
    const pgErr = err as { code?: string };

    /* Postgres unique-constraint violation → code 23505 */
    if (pgErr?.code === '23505')
      return { error: 'This e-mail is already registered.' };

    /* Unknown error – surface it in the Next.js overlay */
    throw err;
  }

  redirect('/login');
}
