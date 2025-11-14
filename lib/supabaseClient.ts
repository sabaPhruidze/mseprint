"use server";

import { neon } from "@neondatabase/serverless";
import { cache } from "react";

// 1. Initialize the sql connection *once* outside the function.
// This is efficient and correct.
export const sql = neon(process.env.DATABASE_URL!);

/**
 * A generic, cached function to fetch data from any table.
 */
export const getDataPattern = cache(
  async <T extends Record<string, unknown>>(
    tableName: string,
    limit: number = 1000
  ): Promise<T[]> => {
    try {
     
      const rows = await sql`
        SELECT * FROM ${sql.unsafe(tableName)}
        ORDER BY id
        LIMIT ${limit}
      `;
      return rows as T[];

    } catch (error) {
      console.error(`Error fetching ${tableName}:`, error);
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(`Database error fetching ${tableName}: ${message}`);
    }
  }
);