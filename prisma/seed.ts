// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const userData = [
  {
    name: "Alice",
    email: "alice@prisma.io",
    posts: {
      create: [
        {
          title: "Join the Prisma Discord",
          content: "https://pris.ly/discord",
          published: true,
        },
      ],
    },
  },
  {
    name: "Bob",
    email: "bob@prisma.io",
    posts: {
      create: [
        {
          title: "Follow Prisma on Twitter",
          content: "https://twitter.com/prisma",
          published: true,
        },
      ],
    },
  },
];

async function main() {
  console.log("シードを開始します...");
  
  // 既存データを消去（クリーンな状態から始めたい場合）
  // await prisma.post.deleteMany()
  // await prisma.user.deleteMany()

  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`ユーザーを作成しました: ${user.email}`);
  }
  
  console.log("シードが完了しました。");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
