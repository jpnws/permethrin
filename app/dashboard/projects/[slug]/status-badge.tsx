import 'server-only';

function badgeStyle(status: string) {
  switch (status) {
    case 'ACTIVE':
      return 'bg-green-100 text-green-800';
    case 'INACTIVE':
      return 'bg-gray-100 text-gray-800';
    case 'ARCHIVED':
      return 'bg-blue-100 text-blue-800';
    default:
      return '';
  }
}

export default function StatusBadge({ status }: { status: string }) {
  const bgStyle = badgeStyle(status);
  return (
    <div className="flex items-center">
      <div className={`rounded-md px-1.5 text-sm ${bgStyle}`}>{status.toLowerCase()}</div>
    </div>
  );
}
