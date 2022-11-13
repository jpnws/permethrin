import { Prisma, Project } from '@prisma/client';
import ProjectsTable from 'app/projects/projects-table';
import { prisma } from 'lib/db';
import { cache } from 'react';

const getProjects = cache(async () => {
  return await prisma.project.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
});

export default async function Projects() {
  const projects = await getProjects();
  return (
    <main className="flex flex-col">
      <div className="border-b">
        <h1 className="p-2">Projects</h1>
      </div>
      <div>
        {/* @ts-expect-error Server Component */}
        <ProjectsTable projects={projects} />
      </div>
    </main>
  );
}
