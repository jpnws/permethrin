import Image from 'next/image';

import Sidebar from 'app/dashboard/sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className={`grid grid-cols-[1fr,minmax(auto,92rem),1fr] gap-x-8 py-2 shadow`}>
        <div className="col-start-2 flex gap-x-2">
          <Image src="/permethrin.png" alt="Permethrin" width={50} height={50} priority />
          <div className="pt-2 text-lg font-bold">Permethrin</div>
        </div>
      </div>
      <div className={`grid grid-cols-[1fr,minmax(auto,12rem),minmax(25rem,80rem),1fr] gap-x-8 py-4`}>
        <div className="col-start-2">
          <Sidebar />
        </div>
        <div className="col-start-3">{children}</div>
      </div>
    </div>
  );
}
