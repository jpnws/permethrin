import { Prisma, Project } from '@prisma/client';
import PageNavigator from 'app/projects/page-navigator';
import ProjectsTable from 'app/projects/projects-table';
import { prisma } from 'lib/db';
import { createPaginator } from 'lib/paginate';
import { cache } from 'react';

const paginate = createPaginator({ perPage: 5 });

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
  const paginatedProjects = await getProjects(Number(searchParams.page));
  return (
    <main className="flex flex-col gap-y-2">
      <div className="rounded border p-2">
        <h1 className="font-bold">Projects</h1>
      </div>
      <div>
        {/* @ts-expect-error Server Component */}
        <ProjectsTable paginatedProjects={paginatedProjects} />
      </div>
      <div>
        {/* @ts-expect-error Server Component */}
        <PageNavigator paginatedProjects={paginatedProjects} />
      </div>
    </main>
  );
}
