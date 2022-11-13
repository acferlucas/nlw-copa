import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      nome: "John Doe",
      email: "john@example",
      avatarUrl: "https://github.com/acferlucas.png",
    }
  });

  const pool = await prisma.pool.create({
    data: {
      title: "Example Pool",
      code: "BOL123",
      ownerId: user.id,
    }
  });
}

main()