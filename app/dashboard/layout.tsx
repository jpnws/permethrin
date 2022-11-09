import Sidebar from 'app/dashboard/sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[1fr,minmax(auto,15rem),min(57rem,100%),1fr] gap-x-8 py-8">
      <div className="col-start-2">
        <Sidebar />
      </div>
      <div className="col-start-3">{children}</div>
    </div>
  );
}
