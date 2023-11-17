/**
 * Use jest to test each case (even exceptions)
 * You should use Fastify http injection:
 * https://fastify.dev/docs/v1.14.x/Documentation/Testing/
 *
 * You will need to mock function isAdminUser
 * https://jestjs.io/docs/jest-object#jestspyonobject-methodname
 * https://jestjs.io/docs/mock-function-api#mockfnmockresolvedvaluevalue
 */

import Fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest
} from 'fastify';

import { isAdminUser } from '../lib/is-admin-user';

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export interface Message {
  message: string;
}

export function buildApp(): FastifyInstance {
  const fastify = Fastify();

  fastify.get(
    '/hello/:name',
    function (
      request: FastifyRequest<{ Params: { name: string } }>,
      reply: FastifyReply
    ) {
      const { name } = request.params;
      if (capitalize(name) != name) {
        reply
          .code(400)
          .send({ detail: 'A name must starts with a capital letter' });
      }

      reply.send({ message: `Hello ${name}!` });
    }
  );

  fastify.get('/admin/hello', async function (_, reply: FastifyReply) {
    const isAdmin = await isAdminUser();
    if (!isAdmin) {
      reply.code(403).send({ detail: 'User must be admin' });
    }

    reply.send({ message: 'Hello Admin!' });
  });

  return fastify;
}
