import { PrismaClient } from "@prisma/client"

// 開発環境でのホットリロード時に接続数が増えすぎるのを防ぐための「おまじない」です
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    // 実行されたSQLをターミナルに表示する設定（デバッグに便利です）
    log: ["query"],
  })

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

export default prisma
