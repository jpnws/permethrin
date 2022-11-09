import { Project } from '@prisma/client';
import { PaginatedResult } from 'app/dashboard/paginate';
import Link from 'next/link';

export default async function PageNavigator({ props }: { props: string }) {
  const res = JSON.parse(props) as PaginatedResult<Project>;
  const { currentPage, total, perPage, lastPage, prev, next } = res.meta;
  const prevChevronStyle = currentPage === 1 ? 'border-r-0' : 'border-r';
  return (
    <div className="flex w-fit rounded shadow">
      <Link href={`/dashboard/projects?page=1`} className="rounded-bl rounded-tl border-r border-t border-b first:border-l hover:bg-gray-100">
        <svg
          data-testid="geist-icon"
          fill="none"
          height={24}
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          width={24}
          style={{
            color: 'var(--geist-foreground)',
          }}>
          <path d="m11 17-5-5 5-5M18 17l-5-5 5-5" />
        </svg>
      </Link>
      <Link href={`/dashboard/projects?page=${prev}`} className={`border-t border-b hover:bg-gray-100 ${prevChevronStyle}`}>
        <svg
          data-testid="geist-icon"
          fill="none"
          height={24}
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          width={24}
          style={{
            color: 'var(--geist-foreground)',
          }}>
          <path d="m15 18-6-6 6-6" />
        </svg>
      </Link>
      {[...Array(total / perPage).keys()].map((pageNum) => {
        const prevPageStyle = prev === pageNum + 1 ? 'border-r-0' : '';
        const currPageStyle = currentPage === pageNum + 1 ? 'border-l bg-gray-100 border-gray-300' : '';
        return (
          <Link href={`/dashboard/projects?page=${pageNum + 1}`} className={`border-r border-t border-b px-2 hover:bg-gray-100 ${currPageStyle} ${prevPageStyle}`}>
            {pageNum + 1}
          </Link>
        );
      })}
      <Link href={`/dashboard/projects?page=${next}`} className="border-r border-t border-b hover:bg-gray-100">
        <svg
          data-testid="geist-icon"
          fill="none"
          height={24}
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          width={24}
          style={{
            color: 'var(--geist-foreground)',
          }}>
          <path d="m9 18 6-6-6-6" />
        </svg>
      </Link>
      <Link href={`/dashboard/projects?page=${lastPage}`} className="rounded-tr rounded-br border-r border-t border-b hover:bg-gray-100">
        <svg
          data-testid="geist-icon"
          fill="none"
          height={24}
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          width={24}
          style={{
            color: 'var(--geist-foreground)',
          }}>
          <path d="m13 17 5-5-5-5M6 17l5-5-5-5" />
        </svg>
      </Link>
    </div>
  );
}
