import { prisma } from "../libs/prisma.js";

export default async function (signal: any) {
  console.log(`\nReceived ${signal}, shutting down...`);
  try {
    await prisma.$disconnect(
    )
    console.log(`Prisma Disconnected.`)
  } catch (err) {
    console.log(`Error while disconnect`)
  } finally {
    process.exit(0)
  }
}
