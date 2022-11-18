import 'server-only';

import { User } from '@prisma/client';

export default async function MemberList({ members }: { members: User[] }) {
  return (
    <div className="grid h-fit grid-cols-1 grid-rows-3 gap-y-4 p-4">
      <div className="flex items-center text-sm font-bold text-gray-500">Members</div>
      <div className="flex items-center text-sm">{members.map((member) => member.name)}</div>
    </div>
  );
}
