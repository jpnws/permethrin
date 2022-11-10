import { PrismaClient } from '@prisma/client';

export default async function ProjectPage({ params }: { params: { id: string; slug: string } }) {
  const { id, slug } = params;
  const prisma = new PrismaClient();
  const project = await prisma.project.findFirst({
    where: {
      id,
      slug,
    },
  });
  return (
    <div>
      <h1>{project?.name}</h1>
    </div>
  );
}
