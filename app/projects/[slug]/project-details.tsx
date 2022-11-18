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
    <div className="flex flex-col">
      <div className="flex gap-x-2">
        <div className="text-sm font-bold text-gray-500">Creator</div>
        <div className="text-sm">{creator?.name}</div>
      </div>
      <div className="flex gap-x-2">
        <div className="text-sm font-bold text-gray-500">Number of tickets</div>
        <div className="text-sm">{ticketCount}</div>
      </div>
      <div className="flex gap-x-2">
        <div className="text-sm font-bold text-gray-500">Status</div>
        <StatusBadge status={project.status} />
      </div>
    </div>
  );
}