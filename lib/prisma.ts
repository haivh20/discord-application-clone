import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = new PrismaClient();

export const db = globalThis.prisma || prisma;
// use `prisma` in your application to read and write data in your DB

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
