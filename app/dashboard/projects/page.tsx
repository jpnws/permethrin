import { PrismaClient } from '@prisma/client';

import { Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell } from '@tremor/react';

export default async function Projects() {
  const prisma = new PrismaClient();
  const projects = await prisma.project.findMany();
  return (
    <main>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>{project.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
