import 'server-only';

import { Project, ProjectAttachment, Ticket } from '@prisma/client';

export default async function ProjectInformation({ project, attachments, tickets }: { project: Project; attachments: ProjectAttachment[]; tickets: Ticket[] }) {
  return (
    <div>
      <div className="border-b">
        <div className="p-4">
          <div className="text-lg font-medium">{project.name}</div>
          <div className="text-sm text-gray-500">{project.description}</div>
          <div className="text-sm">Number of attachments: {attachments.length}</div>
        </div>
      </div>
    </div>
  );
}
