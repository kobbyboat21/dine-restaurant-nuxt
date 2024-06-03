import { d as defineEventHandler } from './nitro/node-server.mjs';
import { U as User } from './User.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';
import 'node:fs';
import 'node:url';

const login_post = defineEventHandler(async (event) => {
  await setUserSession(event, {
    User,
    loggedInAt: /* @__PURE__ */ new Date()
    // Any extra fields
  });
  return User;
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
