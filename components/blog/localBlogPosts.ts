/* localBlogPosts.ts – DB‑only version (flatten fix)
   -------------------------------------------------------------
   Returns blog posts from PostgreSQL/Supabase via
   getSpecialPagesData('/blog'). Handles edge‑case where the
   driver returns BlogPost[][] (array of row arrays).
----------------------------------------------------------------*/

import { BlogPost } from 'types/commonTypes';
import { getSpecialPagesData } from 'db/GetSpecialPagesData';

const sortAscending = (arr: BlogPost[]): BlogPost[] =>
  arr
    .sort((a, b) => new Date(a.published_on).getTime() - new Date(b.published_on).getTime())
    .map((p, idx) => ({ ...p, id: idx + 1 }));

export async function fetchBlogPosts(): Promise<BlogPost[]> {
    
  try {
    const { blogData } = await getSpecialPagesData('/blog');
    console.log(blogData)
    const flat: BlogPost[] = (blogData ?? []).flat(); // 👈 flattens BlogPost[][] -> BlogPost[]
    return sortAscending(flat);
  } catch (err) {
    console.error('DB fetch failed', err);
    return [];
  }
}
