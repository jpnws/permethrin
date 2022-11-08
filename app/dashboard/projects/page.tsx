import { PrismaClient } from '@prisma/client';
import ProjectsTable from 'app/dashboard/projects/projects-table';
import superjson from 'superjson';

export default async function Projects() {
  const prisma = new PrismaClient();
  const projects = await prisma.project.findMany({
    take: 10,
    orderBy: {
      createdAt: 'desc',
    },
  });
  const projectJson = superjson.stringify(projects);
  return (
    <main>
      <ProjectsTable projects={projectJson} />
    </main>
  );
}
