import 'server-only';

import Image from 'next/image';

import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="flex flex-col">
      <div className="flex gap-x-2 px-4 py-4">
        <div className="flex items-center">
          <Image src="/permethrin-18x18.png" alt="Permethrin" width={18} height={18} priority />
        </div>
        <div className="text-sm font-bold">Permethrin</div>
      </div>
      <div className="px-4">
        <Link href="/projects" className="items-bottom flex gap-x-2 rounded px-2 pt-2 pb-1 hover:bg-gray-100">
          <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.5 1h13l.5.5v13l-.5.5h-13l-.5-.5v-13l.5-.5zM2 14h12V2H2v12zM3 3h2v10H3V3zm6 0H7v6h2V3zm2 0h2v8h-2V3z" />
          </svg>
          <span className="text-sm">Projects</span>
        </Link>
      </div>
    </aside>
  );
}
