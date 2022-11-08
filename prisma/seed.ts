import { PrismaClient, Project, Ticket, User } from '@prisma/client';
import { faker } from '@faker-js/faker';
import cuid from 'cuid';

export const USERS: User[] = [];
export const PROJECTS: Project[] = [];
export const TICKETS: Ticket[] = [];

Array.from({ length: 100 }).forEach(() => {
  USERS.push(createRandomUser());
  PROJECTS.push(createRandomProject());
  TICKETS.push(createRandomTicket());
});

export function createRandomUser(): User {
  return {
    id: cuid(),
    username: `${faker.name.firstName().toLowerCase()}${faker.name.lastName().toLowerCase()}`,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    salt: cuid(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    role: faker.helpers.arrayElement(['ADMIN', 'PROJECT_MANAGER', 'DEVELOPER', 'SUBMITTER']),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
}

export function createRandomProject(): Project {
  return {
    id: cuid(),
    name: faker.company.name(),
    description: faker.lorem.paragraph(),
    creatorId: faker.helpers.arrayElement(USERS).id,
    status: faker.helpers.arrayElement(['ACTIVE', 'INACTIVE', 'ARCHIVED']),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
}

export function createRandomTicket(): Ticket {
  return {
    id: cuid(),
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    status: faker.helpers.arrayElement(['OPEN', 'IN_PROGRESS', 'CLOSED']),
    priority: faker.helpers.arrayElement(['LOW', 'MEDIUM', 'HIGH']),
    type: faker.helpers.arrayElement(['BUG', 'FEATURE', 'OTHER']),
    creatorId: faker.helpers.arrayElement(USERS).id,
    projectId: faker.helpers.arrayElement(PROJECTS).id,
    assignedId: faker.helpers.arrayElement(USERS).id,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
}

const prisma = new PrismaClient();

async function main() {
  for (const user of USERS) {
    await prisma.user.upsert({
      where: { id: user.id },
      update: {},
      create: user,
    });
  }
  for (const project of PROJECTS) {
    await prisma.project.upsert({
      where: { id: project.id },
      update: {},
      create: {
        ...project,
        members: {
          connect: faker.helpers
            .shuffle(USERS)
            .slice(0, faker.datatype.number({ min: 1, max: 10 }))
            .map((user) => ({ id: user.id })),
        },
      },
    });
  }
  for (const ticket of TICKETS) {
    await prisma.ticket.upsert({
      where: { id: ticket.id },
      update: {},
      create: {
        ...ticket,
        participants: {
          connect: faker.helpers
            .shuffle(USERS)
            .slice(0, faker.datatype.number({ min: 1, max: 10 }))
            .map((user) => ({ id: user.id })),
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
