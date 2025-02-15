"use server";
import { neon } from "@neondatabase/serverless";
import { cache } from "react";

const sql = neon(process.env.DATABASE_URL!);

// Cache the function for better performance in Next.js
export const getDataPattern = cache(async <T extends Record<string, any>>(
  tableName: string,
  limit: number = 100
): Promise<T[]> => {
  try {
    // Corrected SQL query (Avoids using sql(tableName) incorrectly)
    const query = `SELECT * FROM ${tableName} ORDER BY id LIMIT ${limit}`;
    const data: Record<string, any>[] = await sql(query);

    return data as T[];
  } catch (error) {
    console.error(`Error fetching ${tableName}:`, error);
    throw new Error(`Database error: ${error}`);
  }
});
