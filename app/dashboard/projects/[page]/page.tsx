import { Prisma, PrismaClient, Project } from '@prisma/client';
import { createPaginator } from 'app/dashboard/paginate';
import PageNavigator from 'app/dashboard/projects/[page]/page-navigator';
import ProjectsTable from 'app/dashboard/projects/[page]/projects-table';
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

export default async function Projects({ params }: { params: { page: string } }) {
  const result = JSON.stringify(await getProjects(Number(params.page)));
  return (
    <main className="flex flex-col gap-y-2">
      <div className="rounded border p-2">
        <h1 className="font-bold">Projects</h1>
      </div>
      <div>
        {/* @ts-expect-error Server Component */}
        <ProjectsTable props={result} />
      </div>
      <div>
        {/* @ts-expect-error Server Component */}
        <PageNavigator props={result} />
      </div>
    </main>
  );
}
