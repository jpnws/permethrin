import 'server-only';

import { User } from '@prisma/client';
import Image from 'next/image';

export default async function MemberList({ members }: { members: User[] }) {
  return (
    <div className="col-span-2 flex flex-col gap-y-4">
      <div className="text-sm font-bold text-gray-500">Project members</div>
      <div className="flex flex-col gap-y-2">
        {members.map((member) => (
          <div key={member.id} className="flex items-center gap-x-2">
            <Image src={member.avatar} alt={member.username} width={34} height={34} className="rounded-full" />
            <div className="flex flex-col">
              <div className="text-sm font-bold text-gray-800">{member.name}</div>
              <div className="text-sm text-gray-600">@{member.username}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
