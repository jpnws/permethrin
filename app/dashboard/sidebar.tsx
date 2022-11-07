import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar() {
  return (
    <aside className="w-52 flex-none p-2">
      <Image src="/permethrin.png" alt="Permethrin" width={50} height={50} priority />
      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/dashboard/projects">Projects</Link>
        </li>
      </ul>
    </aside>
  );
}
