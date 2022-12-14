import 'server-only';

import { Project, Ticket, User } from '@prisma/client';
import StatusBadge from 'app/projects/status-badge';
import MemberList from 'app/projects/[slug]/member-list';
import { prisma } from 'lib/db';
import { cache } from 'react';

const getCreator = cache(async (id: string) => {
  const creator = await prisma.user.findUnique({ where: { id } });
  return creator;
});

export default async function ProjectDetails({ project, tickets, members }: { project: Project; tickets: Ticket[]; members: User[] }) {
  const creator = await getCreator(project.creatorId);
  const ticketCount = tickets.length;
  return (
    <div className="border-l">
      <div className="grid h-fit grid-cols-2 grid-rows-3 gap-y-4 p-4">
        <div className="flex items-center text-sm font-bold text-gray-500">Status</div>
        <StatusBadge status={project.status} />
        <div className="flex items-center text-sm font-bold text-gray-500">Creator</div>
        <div className="flex items-center text-sm">{creator?.name}</div>
        <div className="flex items-center text-sm font-bold text-gray-500">Number of tickets</div>
        <div className="flex items-center text-sm">{ticketCount}</div>
        {/* @ts-expect-error Server Component */}
        <MemberList members={members} />
      </div>
    </div>
  );
}
