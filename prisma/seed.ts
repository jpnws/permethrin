import { faker } from '@faker-js/faker';
import { PrismaClient, Project, ProjectAttachment, ProjectComment, Ticket, TicketAttachment, TicketComment, User } from '@prisma/client';
import cuid from 'cuid';

const prisma = new PrismaClient();

export const USERS: User[] = [];
export const PROJECTS: Project[] = [];
export const TICKETS: Ticket[] = [];
export const PROJECT_COMMENTS: ProjectComment[] = [];
export const PROJECT_ATTACHMENTS: ProjectAttachment[] = [];
export const TICKET_ATTACHMENTS: TicketAttachment[] = [];
export const TICKET_COMMENTS: TicketComment[] = [];

Array.from({ length: 20 }).forEach(() => {
  USERS.push(createRandomUser());
  PROJECTS.push(createRandomProject());
});

Array.from({ length: 100 }).forEach(() => {
  TICKETS.push(createRandomTicket());
  PROJECT_COMMENTS.push(createRandomProjectComment());
  PROJECT_ATTACHMENTS.push(createRandomProjectAttachment());
  TICKET_ATTACHMENTS.push(createRandomTicketAttachment());
  TICKET_COMMENTS.push(createRandomTicketComment());
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
    avatar: faker.image.avatar(),
  };
}

export function createRandomProject(): Project {
  const companyName = faker.company.name();
  return {
    id: cuid(),
    name: companyName,
    description: faker.lorem.paragraph(),
    creatorId: faker.helpers.arrayElement(USERS).id,
    status: faker.helpers.arrayElement(['ACTIVE', 'INACTIVE', 'ARCHIVED']),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    slug: faker.helpers.slugify(companyName),
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

export function createRandomProjectComment(): ProjectComment {
  return {
    id: cuid(),
    content: faker.lorem.paragraph(),
    creatorId: faker.helpers.arrayElement(USERS).id,
    projectId: faker.helpers.arrayElement(PROJECTS).id,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
}

export function createRandomProjectAttachment(): ProjectAttachment {
  return {
    id: cuid(),
    name: faker.system.fileName(),
    url: faker.image.imageUrl(),
    projectId: faker.helpers.arrayElement(PROJECTS).id,
    creatorId: faker.helpers.arrayElement(USERS).id,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
}

export function createRandomTicketAttachment(): TicketAttachment {
  return {
    id: cuid(),
    name: faker.system.fileName(),
    url: faker.image.imageUrl(),
    ticketId: faker.helpers.arrayElement(TICKETS).id,
    creatorId: faker.helpers.arrayElement(USERS).id,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
}

export function createRandomTicketComment(): TicketComment {
  return {
    id: cuid(),
    content: faker.lorem.paragraph(),
    creatorId: faker.helpers.arrayElement(USERS).id,
    ticketId: faker.helpers.arrayElement(TICKETS).id,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
}

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
  for (const projectComment of PROJECT_COMMENTS) {
    await prisma.projectComment.upsert({
      where: { id: projectComment.id },
      update: {},
      create: projectComment,
    });
  }
  for (const projectAttachment of PROJECT_ATTACHMENTS) {
    await prisma.projectAttachment.upsert({
      where: { id: projectAttachment.id },
      update: {},
      create: projectAttachment,
    });
  }
  for (const ticketAttachment of TICKET_ATTACHMENTS) {
    await prisma.ticketAttachment.upsert({
      where: { id: ticketAttachment.id },
      update: {},
      create: ticketAttachment,
    });
  }
  for (const ticketComment of TICKET_COMMENTS) {
    await prisma.ticketComment.upsert({
      where: { id: ticketComment.id },
      update: {},
      create: ticketComment,
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
