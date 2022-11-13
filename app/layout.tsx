import 'server-only';

import Image from 'next/image';

import localFont from '@next/font/local';

import 'app/globals.css';

import Sidebar from 'app/sidebar';

const monaSans = localFont({ src: '../public/fonts/Mona-Sans.woff2' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${monaSans.className}`}>
      <head></head>
      <body className="h-screen">
        <div className="grid h-full grid-cols-[219px,auto]">
          <div className="col-start-1 h-full border-r">
            <Sidebar />
          </div>
          <div className="col-start-2">{children}</div>
        </div>
      </body>
    </html>
  );
}
