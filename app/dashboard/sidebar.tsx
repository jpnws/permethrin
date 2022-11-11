import 'server-only';

import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-y-2 rounded p-2">
      <div className="flex flex-col gap-y-2">
        <Link href="/dashboard" className="rounded px-2 py-1 hover:bg-gray-100">
          Dashboard
        </Link>
        <Link href="/dashboard/projects" className="rounded px-2 py-1 hover:bg-gray-100">
          Projects
        </Link>
      </div>
    </aside>
  );
}
