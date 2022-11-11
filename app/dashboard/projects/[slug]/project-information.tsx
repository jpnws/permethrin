import { Project } from '@prisma/client';
import StatusBadge from 'app/dashboard/projects/[slug]/status-badge';

export default async function ProjectInformation({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-lg border border-gray-100 shadow">
      <div className="border-b">
        <div className="p-4">
          <div className="text-lg font-medium">{project.name}</div>
          <div className="text-sm text-gray-500">{project.description}</div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex gap-x-2">
          <div className="text-sm font-bold text-gray-500">Status</div>
          <StatusBadge status={project.status} />
        </div>
      </div>
    </div>
  );
}
