import 'server-only';

import Image from 'next/image';

import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-y-2 p-2">
      <div className="flex gap-x-2">
        <div className="flex items-center">
          <Image src="/permethrin-18x18.png" alt="Permethrin" width={18} height={18} priority />
        </div>
        <div className="text-sm font-bold">Permethrin</div>
      </div>
      <Link href="/dashboard/projects" className="rounded px-2 py-1 text-sm hover:bg-gray-100">
        Projects
      </Link>
    </aside>
  );
}
