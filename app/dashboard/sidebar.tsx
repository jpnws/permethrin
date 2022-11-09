import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-y-2 rounded p-2">
      <div className="flex gap-x-2">
        <Image src="/permethrin.png" alt="Permethrin" width={50} height={50} priority />
        <div className="pt-2 font-bold">Permethrin</div>
      </div>
      <div className="flex flex-col gap-y-2">
        <Link href="/dashboard" className="rounded px-2 hover:bg-gray-100">
          Dashboard
        </Link>
        <Link href="/dashboard/projects" className="rounded px-2 hover:bg-gray-100">
          Projects
        </Link>
      </div>
    </aside>
  );
}
