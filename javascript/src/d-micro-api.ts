/**
 * Use jest to test each case (even exceptions)
 * You should use Fastify http injection:
 * https://fastify.dev/docs/v1.14.x/Documentation/Testing/
 *
 * You will need to mock function isAdminUser
 * https://jestjs.io/docs/jest-object#jestspyonobject-methodname
 * https://jestjs.io/docs/mock-function-api#mockfnmockresolvedvaluevalue
 */

import Fastify from 'fastify';
import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

import { isAdminUser } from '../lib/is-admin-user';

function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export interface Message {
  message: string;
}

export function buildApp(): FastifyInstance {
  const fastify = Fastify();

  fastify.get(
    '/hello/:name',
    async function (
      request: FastifyRequest<{ Params: { name: string } }>,
      reply: FastifyReply
    ) {
      const { name } = request.params;
      if (capitalize(name) === name) {
        await reply.send({ message: `Hello ${name}!` });
      } else {
        await reply
          .code(400)
          .send({ detail: 'A name must starts with a capital letter' });
      }
    }
  );

  fastify.get('/admin/hello', async function (_, reply: FastifyReply) {
    const isAdmin = await isAdminUser();
    if (isAdmin) {
      await reply.send({ message: 'Hello Admin!' });
    } else {
      await reply.code(403).send({ detail: 'User must be admin' });
    }
  });

  return fastify;
}
