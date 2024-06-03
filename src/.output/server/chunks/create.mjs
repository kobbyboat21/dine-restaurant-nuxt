import { d as defineEventHandler, r as readBody } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';
import 'node:fs';
import 'node:url';

const create = defineEventHandler(async (event) => {
  const body = await readBody(event);
  return { body };
});

export { create as default };
//# sourceMappingURL=create.mjs.map
