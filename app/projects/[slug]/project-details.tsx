import 'server-only';

import { Project, Ticket } from '@prisma/client';
import StatusBadge from 'app/projects/status-badge';
import { prisma } from 'lib/db';
import { cache } from 'react';

const getCreator = cache(async (id: string) => {
  const creator = await prisma.user.findUnique({ where: { id } });
  return creator;
});

export default async function ProjectDetails({ project, tickets }: { project: Project; tickets: Ticket[] }) {
  const creator = await getCreator(project.creatorId);
  const ticketCount = tickets.length;
  return (
    <div className="grid grid-cols-2 grid-rows-3 p-4">
      <div className="flex items-center text-sm font-bold text-gray-500">
        <span className="block">Status</span>
      </div>
      <StatusBadge status={project.status} />
      <div className="flex items-center text-sm font-bold text-gray-500">
        <span className="block">Creator</span>
      </div>
      <div className="flex items-center text-sm font-bold text-gray-500">
        <span className="block">Number of tickets</span>
      </div>
      <div className="flex items-center text-sm">
        <span className="block">{creator?.name}</span>
      </div>
      <div className="flex items-center text-sm">
        <span className="block">{ticketCount}</span>
      </div>
    </div>
  );
}
