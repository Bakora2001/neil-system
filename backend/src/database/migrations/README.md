Prisma-generated SQL migrations land here automatically after running:

  npx prisma migrate dev --name <migration-name>

Do not hand-edit files in this folder once they've been applied to any
shared environment — create a new migration instead.

Planned early migrations:
1. init — the schema in prisma/schema.prisma
2. knowledge_resource_fulltext_search — adds a generated `tsvector` column
   and GIN index on KnowledgeResource(title, summary, tags) once the
   knowledge hub has enough content for search relevance to matter.
