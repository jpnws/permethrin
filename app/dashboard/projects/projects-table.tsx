import { Project } from '@prisma/client';
import Link from 'next/link';
import superjson from 'superjson';

export default async function ProjectsTable({ projects, page }: { projects: string; page: string }) {
  const data = superjson.parse<Project[]>(projects);
  return (
    <div>
      {data.map((project) => (
        <div key={project.id} className="grid grid-cols-4">
          <div className="">{project.name}</div>
          <div className="truncate">{project.description}</div>
          <div className="">{project.status}</div>
        </div>
      ))}
      <Link href={`/dashboard/projects?page=${page}`}>Next</Link>
    </div>
  );
}
