import 'server-only';

import { cache } from 'react';

import { Project } from '@prisma/client';

import StatusBadge from 'app/dashboard/projects/[slug]/status-badge';

import { prisma } from 'lib/db';

const getCreator = cache(async (id: string) => {
  const creator = await prisma.user.findUnique({ where: { id } });
  return creator;
});

export default async function ProjectInformation({ project }: { project: Project }) {
  const creator = await getCreator(project.creatorId);
  return (
    <div className="flex flex-col rounded-lg border border-gray-100 shadow">
      <div className="border-b">
        <div className="p-4">
          <div className="text-lg font-medium">{project.name}</div>
          <div className="text-sm text-gray-500">{project.description}</div>
        </div>
      </div>
      <div className="flex justify-between p-4">
        <div className="flex gap-x-2">
          <div className="text-sm font-bold text-gray-500">Creator</div>
          <div className="text-sm">{creator?.name}</div>
        </div>
        <div className="flex gap-x-2">
          <div className="text-sm font-bold text-gray-500">Status</div>
          <StatusBadge status={project.status} />
        </div>
      </div>
    </div>
  );
}
