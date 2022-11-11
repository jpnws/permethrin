import ProjectInformation from 'app/dashboard/projects/[slug]/project-information';
import { prisma } from 'lib/db';

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = await prisma.project.findFirst({
    where: {
      slug,
    },
  });

  const pages = [
    { name: 'Projects', href: '/dashboard/projects', current: false },
    { name: project?.name, href: `/dashboard/projects/${encodeURIComponent(project?.slug as string)}`, current: true },
  ];

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <ProjectInformation project={project} />
    </>
  );
}
