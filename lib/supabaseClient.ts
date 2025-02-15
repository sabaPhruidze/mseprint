import { createClient } from '@supabase/supabase-js';
import { cache } from 'react';
// Define the Supabase types
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getDataPattern = cache(async <T>(tableName: string): Promise<T[]> => {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .order('id');

    if (error) {
      throw new Error(`Database error: ${error.message}`);
    }

    if (!data) {
      return [];
    }

    return data as T[];
  } catch (error) {
    console.error(`Error fetching ${tableName}:`, error);
    throw error; // Let Next.js error boundary handle this
  }
});