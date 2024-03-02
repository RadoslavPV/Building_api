import prisma from "../../lib/prisma";
// use `prisma` in your application to read and write data in your DB

export async function GET(req: Request) {
  const names = await prisma.user.findMany();
  return Response.json(names);
}
