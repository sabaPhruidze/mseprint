"use server";
import { neon } from "@neondatabase/serverless";
import { cache } from "react";

export const sql = neon(process.env.DATABASE_URL!);

export const getDataPattern = cache(async <T extends object>(
  tableName: string,
  limit: number = 1000
): Promise<T[]> => {
  try {
 
    const query = `SELECT * FROM ${tableName} ORDER BY id LIMIT $1`;
    const rawData: unknown = await sql(query, [limit]); 

    if (!Array.isArray(rawData)) {
      throw new Error("Invalid data received from database");
    }

    return rawData as T[]; 
  } catch (error) {
    console.error(`Error fetching ${tableName}:`, error);
    throw new Error(`Database error: ${error}`);
  }
});
