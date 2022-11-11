import 'app/globals.css';

import localFont from '@next/font/local';

const monaSans = localFont({ src: '../public/fonts/Mona-Sans.woff2' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${monaSans.className}`}>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
