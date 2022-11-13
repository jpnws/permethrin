import { Project } from '@prisma/client';
import Link from 'next/link';
import { formatRelative, formatDistance, subDays } from 'date-fns';

export default async function ProjectsTable({ projects }: { projects: Project[] }) {
  return (
    <div className="text-sm">
      {projects.map((project) => (
        <div key={project.id} className="grid grid-cols-[10rem_auto_auto] border-b p-2">
          <div className="">{project.status}</div>
          <div className="flex justify-start">
            <Link href={`/projects/${encodeURIComponent(project.slug as string)}`}>{project.name}</Link>
          </div>
          <div className="flex justify-end">{formatDistance(project.createdAt, Date.now(), { addSuffix: true })}</div>
        </div>
      ))}
    </div>
  );
}
