// lib/getDataPattern.ts
import { supabase } from '@/lib/supabaseClient'
import { cache } from 'react'

export const getDataPattern = cache(async (tableName: string) => {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .order('id')

    if (error) {
      throw new Error(error.message)
    }

    return data
  } catch (error) {
    console.error(`Error fetching ${tableName}:`, error)
    return []
  }
})