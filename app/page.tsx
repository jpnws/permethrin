import 'server-only';

import Link from 'next/link';

export default async function Landing() {
  return (
    <main>
      <Link href="/dashboard/">Dashboard</Link>
    </main>
  );
}
