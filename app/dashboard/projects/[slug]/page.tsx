import 'server-only';

import { cache } from 'react';
import { prisma } from 'lib/db';

import ProjectInformation from './project-information';

const getProject = cache(async (slug: string) => {
  const project = await prisma.project.findUnique({
    where: { slug },
    include: {
      creator: true,
      members: true,
      tickets: true,
      attachments: true,
      comments: true,
    },
  });
  return project;
});

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = await getProject(slug);
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <ProjectInformation project={project} tickets={project?.tickets} />
    </>
  );
}
