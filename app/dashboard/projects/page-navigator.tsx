import { Project } from '@prisma/client';
import { PaginatedResult } from 'app/dashboard/paginate';
import Link from 'next/link';

export default async function PageNavigator({ props }: { props: string }) {
  const res = JSON.parse(props) as PaginatedResult<Project>;
  const { currentPage, total, perPage, lastPage, prev, next } = res.meta;
  console.log(total / perPage, lastPage, next);
  return (
    <div>
      <Link href={`/dashboard/projects?page=${prev}`}>{'<'}</Link>
      <Link href={`/dashboard/projects?page=${next}`}>{'>'}</Link>
    </div>
  );
}
