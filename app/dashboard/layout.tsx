import Sidebar from 'app/dashboard/sidebar';

import localFont from '@next/font/local';

const monaSans = localFont({ src: '../../public/fonts/Mona-Sans.woff2' });

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`grid grid-cols-[1fr,minmax(auto,12rem),minmax(25rem,81rem),1fr] gap-x-8 py-8 ${monaSans.className}`}>
      <div className="col-start-2">
        <Sidebar />
      </div>
      <div className="col-start-3">{children}</div>
    </div>
  );
}
