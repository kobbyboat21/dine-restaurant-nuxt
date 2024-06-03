import { d as defineEventHandler } from './nitro/node-server.mjs';
import { U as User } from './User.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';
import 'node:fs';
import 'node:url';

const index_get = defineEventHandler(async (event) => {
  const users = await User.find();
  console.log("[DATABASE]: MongoDB query sent to get all User documents that at stored in the users collection");
  return users;
});

export { index_get as default };
//# sourceMappingURL=index.get5.mjs.map
