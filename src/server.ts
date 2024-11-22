import fastify from "fastify";
import { PrismaClient } from '@prisma/client';

const app = fastify();
const prisma = new PrismaClient();

app.get('/customers', async () => {
  return 'Olá';
})

app.post('/customers', async (req: any, reply) => {
  const dataJson = JSON.parse(req.body);

  await prisma.customer.create({
    data: dataJson
  })
})

app.listen({ port: 8090 }).then(() => {
  console.log('HTTP server running!')
})