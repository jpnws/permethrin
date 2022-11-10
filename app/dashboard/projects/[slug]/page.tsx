import { prisma } from 'lib/db';

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = await prisma.project.findFirst({
    where: {
      slug,
    },
  });
  return (
    <div>
      <h1>{project?.name}</h1>
      <p>{project?.description}</p>
    </div>
  );
}
