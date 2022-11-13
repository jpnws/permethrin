import 'server-only';

import 'app/globals.css';

import Sidebar from 'app/sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body className="h-screen text-gray-800">
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
