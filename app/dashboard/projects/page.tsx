import { PrismaClient } from '@prisma/client';
import ProjectsTable from 'app/dashboard/projects/projects-table';
import superjson from 'superjson';

export default async function Projects({ searchParams }: { searchParams: { page: string } }) {
  const prisma = new PrismaClient();
  const projects = searchParams.page
    ? await prisma.project.findMany({
        skip: parseInt(searchParams.page) * 20,
        take: 20,
        orderBy: {
          createdAt: 'desc',
        },
      })
    : await prisma.project.findMany({
        take: 20,
        orderBy: {
          createdAt: 'desc',
        },
      });
  const page = searchParams.page ? parseInt(searchParams.page) + 1 : 2;
  const projectJson = superjson.stringify(projects);
  return (
    <main>
      <h1>Projects</h1>
      {/* @ts-expect-error Server Component */}
      <ProjectsTable projects={projectJson} page={page} />
    </main>
  );
}
