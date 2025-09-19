import { db, Comment } from 'astro:db';
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  addComment: defineAction({
    // Zodを使用して型安全性を提供します。
    // Astroページでtypeof {value} === 'string'をチェックする必要がありません。
    input: z.object({
      author: z.string(),
      body: z.string(),
    }),
    handler: async (input) => {
      const updatedComments = await db
        .insert(Comment)
        .values(input)
        .returning(); // 更新されたコメントを返します。
      return updatedComments;
    },
  }),
};