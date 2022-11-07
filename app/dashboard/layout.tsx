import Sidebar from 'app/dashboard/sidebar';
import '@tremor/react/dist/esm/tremor.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto flex">
      <Sidebar />
      {children}
    </div>
  );
}
