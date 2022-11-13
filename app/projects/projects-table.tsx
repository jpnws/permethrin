import { Project } from '@prisma/client';
import { PaginatedResult } from 'lib/paginate';
import Link from 'next/link';

export default async function ProjectsTable({ paginatedProjects }: { paginatedProjects: PaginatedResult<Project> }) {
  return (
    <div className="rounded border p-2">
      {paginatedProjects.data.map((project) => (
        <div key={project.id} className="grid grid-cols-3">
          <div className="truncate">
            <Link href={`/dashboard/projects/${encodeURIComponent(project.slug as string)}`}>{project.name}</Link>
          </div>
          <div className="truncate">{project.description}</div>
          <div className="">{project.status}</div>
        </div>
      ))}
    </div>
  );
}
