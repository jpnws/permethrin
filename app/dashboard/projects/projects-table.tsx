import { Project } from '@prisma/client';
import { PaginatedResult } from 'app/dashboard/paginate';

export default async function ProjectsTable({ props }: { props: string }) {
  const res = JSON.parse(props) as PaginatedResult<Project>;
  return (
    <div className="rounded border p-2">
      {res.data.map((item) => (
        <div key={item.id} className="grid grid-cols-3">
          <div className="truncate">{item.name}</div>
          <div className="truncate">{item.description}</div>
          <div className="">{item.status}</div>
        </div>
      ))}
    </div>
  );
}
