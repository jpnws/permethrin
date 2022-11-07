import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-48 flex-none">
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
