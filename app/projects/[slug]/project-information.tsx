import 'server-only';

import { Project, ProjectAttachment, Ticket } from '@prisma/client';

export default async function ProjectInformation({ project, attachments }: { project: Project; attachments: ProjectAttachment[] }) {
  return (
    <div className="h-full px-8 py-4">
      <div className="text-lg font-medium">{project.name}</div>
      <div className="text-sm text-gray-500">{project.description}</div>
      <div className="text-sm">Number of attachments: {attachments.length}</div>
    </div>
  );
}
