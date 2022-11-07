import { PrismaClient } from '@prisma/client';
import ProjectsTable from 'app/dashboard/projects/projects-table';
import superjson from 'superjson';

export default async function Projects() {
  const prisma = new PrismaClient();
  const projects = superjson.stringify(await prisma.project.findMany());
  return (
    <main>
      <ProjectsTable projects={projects} />
    </main>
  );
}
