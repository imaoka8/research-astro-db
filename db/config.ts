import { defineDb, defineTable, column } from 'astro:db';

const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  }
});

const CommentRef = defineTable({
  columns: {
    authorId: column.number({ references: () => Author.columns.id }),
    body: column.text(),
  }
});

const Comment = defineTable({
  columns: {
    author: column.text(),
    body: column.text(),
  }
});
export default defineDb({
  tables: { Author, CommentRef, Comment },
})