/* ------------------------------------------------------------------
   lib/getCurrentUser.ts
   ------------------------------------------------------------------
   Returns the signed-in user’s row or null (guest)
------------------------------------------------------------------- */
'use server';

import { cookies } from 'next/headers';
import { sql }     from 'lib/supabaseClient';

export interface CurrentUser {
  firstname:  string | null;
  lastname:   string | null;
  email:      string | null;
  phone:      string | null;
  jobTitle:   string | null;
  company:    string | null;
  extension:  string | null;
}

export async function getCurrentUser(): Promise<CurrentUser | null> {
  /* read-only cookie jar is fine here */
  const cookieStore = await cookies();
  const uid = cookieStore.get('uid')?.value;
  if (!uid) return null;

  const rows = (await sql`
      SELECT first_name AS "firstname",
             last_name  AS "lastname",
             email,
             phone,
             job_title  AS "jobTitle",
             company,
             extension
        FROM users
       WHERE id = ${uid}
       LIMIT 1
  `) as CurrentUser[];

  return rows[0] ?? null;
}
