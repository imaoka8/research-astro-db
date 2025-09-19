import { db, Comment, CommentRef, Author } from 'astro:db';

export default async function() {
  await db.insert(Author).values([
    { id: 1, name: "Kasim" },
    { id: 2, name: "Mina" },
  ]);

  await db.insert(CommentRef).values([
    { authorId: 1, body: 'Hope you like Astro DB!' },
    { authorId: 2, body: 'Enjoy!'},
  ])

  await db.insert(Comment).values([
    { author: "Kasim", body: 'Hope you like Astro DB!' },
    { author: "Mina", body: 'Enjoy!'},
  ])
}