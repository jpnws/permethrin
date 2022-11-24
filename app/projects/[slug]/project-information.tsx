import 'server-only';

import { Project, ProjectAttachment, Ticket } from '@prisma/client';

export default async function ProjectInformation({ project, attachments }: { project: Project; attachments: ProjectAttachment[] }) {
  return (
    <div className="flex h-full flex-col gap-y-4 px-8 py-4">
      <div className="text-lg font-medium">{project.name}</div>
      <div className="text-sm text-gray-800">{project.description}</div>
    </div>
  );
}
