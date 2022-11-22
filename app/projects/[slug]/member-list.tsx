import 'server-only';

import { User } from '@prisma/client';

export default async function MemberList({ members }: { members: User[] }) {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="text-sm font-bold text-gray-500">Project Members</div>
      <div className="flex flex-col gap-y-2 text-sm">
        {members.map((member) => (
          <span key={member.id}>{member.name}</span>
        ))}
      </div>
    </div>
  );
}
