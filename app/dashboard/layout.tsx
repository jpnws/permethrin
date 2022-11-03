import Sidebar from 'app/dashboard/sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto flex">
      <Sidebar />
      {children}
    </div>
  );
}
