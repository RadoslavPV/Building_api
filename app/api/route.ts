import prisma from "../../lib/prisma";
// use `prisma` in your application to read and write data in your DB

export async function GET(req: Request) {
  const names = await prisma.user.findMany();
  return Response.json(names);
}

export async function POST(req: Request) {
  const body = await req.json();

  const result = await prisma.user.create({
    data: {
      ...body,
    },
  });
  if (!result)
    return Response.json({
      message: "Error",
      status: 500,
    });
  return Response.json({ result });
}
