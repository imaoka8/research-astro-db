import { db, Comment } from 'astro:db';

export default async function() {
  await db.insert(Comment).values([
    { author: "Kasim", body: 'Hope you like Astro DB!' },
    { author: "Mina", body: 'Enjoy!'},
  ])
}