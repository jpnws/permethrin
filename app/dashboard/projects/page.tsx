import { Prisma, PrismaClient, Project } from '@prisma/client';
import ProjectsTable from 'app/dashboard/projects/projects-table';
import { createPaginator } from 'app/dashboard/paginate';
import { cache } from 'react';

const prisma = new PrismaClient();

const paginate = createPaginator({ perPage: 20 });

const getProjects = cache(async (page: number) => {
  return await paginate<Project, Prisma.ProjectFindManyArgs>(
    prisma.project,
    {
      orderBy: {
        createdAt: 'desc',
      },
    },
    {
      page: page,
    },
  );
});

export default async function Projects({ searchParams }: { searchParams: { page: string } }) {
  const result = JSON.stringify(await getProjects(Number(searchParams.page)));
  return (
    <main>
      <h1>Projects</h1>
      {/* @ts-expect-error Server Component */}
      <ProjectsTable props={result} />
    </main>
  );
}
