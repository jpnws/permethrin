import { Prisma, PrismaClient, Project } from '@prisma/client';
import ProjectsTable from 'app/dashboard/projects/projects-table';
import superjson from 'superjson';
import { createPaginator } from 'app/dashboard/paginate';

const paginate = createPaginator({ perPage: 20 });

export default async function Projects({ searchParams }: { searchParams: { page: string } }) {
  const prisma = new PrismaClient();
  const result = superjson.stringify(
    await paginate<Project, Prisma.ProjectFindManyArgs>(
      prisma.project,
      {
        orderBy: {
          createdAt: 'desc',
        },
      },
      {
        page: searchParams.page,
      },
    ),
  );
  return (
    <main>
      <h1>Projects</h1>
      {/* @ts-expect-error Server Component */}
      <ProjectsTable props={result} />
    </main>
  );
}
