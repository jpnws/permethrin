import { Project } from '@prisma/client';
import { PaginatedResult } from 'app/dashboard/paginate';
import PageNavigator from 'app/dashboard/projects/page-navigator';

export default async function ProjectsTable({ props }: { props: string }) {
  const res = JSON.parse(props) as PaginatedResult<Project>;
  return (
    <div>
      {res.data.map((item) => (
        <div key={item.id} className="grid grid-cols-4">
          <div className="">{item.name}</div>
          <div className="truncate">{item.description}</div>
          <div className="">{item.status}</div>
        </div>
      ))}
      {/* @ts-expect-error Server Component */}
      <PageNavigator props={props} />
    </div>
  );
}
