import 'server-only';

import { prisma } from 'lib/db';
import { cache } from 'react';

import ProjectDetails from 'app/projects/[slug]/project-details';
import ProjectInformation from 'app/projects/[slug]/project-information';

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
    <div className="grid h-full grid-cols-[auto_24rem]">
      {/* @ts-expect-error Server Component */}
      <ProjectInformation project={project} attachments={project.attachments} />
      {/* @ts-expect-error Server Component */}
      <ProjectDetails project={project} tickets={project?.tickets} />
    </div>
  );
}

// export async function generateStaticParams() {
//   const projects = await prisma.project.findMany({
//     select: { slug: true },
//   });
//   return projects.map((project) => ({
//     slug: project.slug,
//   }));
// }
