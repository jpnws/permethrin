'use client';

import { Project } from '@prisma/client';
import superjson from 'superjson';

export default function ProjectsTable({ projects }: { projects: string }) {
  const data = superjson.parse<Project[]>(projects);
  return (
    <div>
      <h1>Projects</h1>
      <div>
        {data.map((project) => (
          <div key={project.id} className="flex flex-nowrap">
            <div className="">{project.name}</div>
            <div className="truncate">{project.description}</div>
            <div className="">{project.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
