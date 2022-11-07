'use client';

import { Project } from '@prisma/client';
import { Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell } from '@tremor/react';
import superjson from 'superjson';

function asyncComponent<T, R>(fn: (arg: T) => Promise<R>): (arg: T) => R {
  return fn as (arg: T) => R;
}

const ProjectsTable = asyncComponent(async ({ projects }: { projects: string }) => {
  const data = superjson.parse<Project[]>(projects);
  return (
    <main>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((project) => (
            <TableRow key={project.id}>
              <TableCell>{project.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
});

export default ProjectsTable;
