import { Project } from '@prisma/client';
import Link from 'next/link';
import { formatRelative, formatDistance, subDays } from 'date-fns';

export default async function ProjectsTable({ projects }: { projects: Project[] }) {
  return (
    <div className="text-sm">
      {projects.map((project) => (
        <Link key={project.id} href={`/projects/${encodeURIComponent(project.slug as string)}`} className="grid grid-cols-[10rem_auto_auto] border-b p-2 hover:bg-gray-100">
          <div className="">{project.status}</div>
          <div className="flex justify-start">{project.name}</div>
          <div className="flex justify-end">{formatDistance(project.createdAt, Date.now(), { addSuffix: true })}</div>
        </Link>
      ))}
    </div>
  );
}
