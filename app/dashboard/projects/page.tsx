import { PrismaClient } from '@prisma/client';

export default async function Projects() {
  const prisma = new PrismaClient();
  const projects = await prisma.project.findMany();
  return (
    <main>
      {projects.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </main>
  );
}
