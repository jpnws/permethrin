import { Prisma, Project } from '@prisma/client';
import { PaginatedResult } from 'app/dashboard/paginate';
import Link from 'next/link';
import superjson from 'superjson';

export default async function ProjectsTable({ props }: { props: string }) {
  const res = superjson.parse<PaginatedResult<Project>>(props);

  return (
    <div>
      {res.data.map((item) => (
        <div key={item.id} className="grid grid-cols-4">
          <div className="">{item.name}</div>
          <div className="truncate">{item.description}</div>
          <div className="">{item.status}</div>
        </div>
      ))}
      <Link href={`/dashboard/projects?page=${res.meta.next}`}>Next</Link>
    </div>
  );
}
