import { d as defineEventHandler, r as readBody } from './nitro/node-server.mjs';
import { L as Lunch } from './LunchSchema.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';
import 'node:fs';
import 'node:url';

const create_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    await Lunch.create(body);
    console.log("[DATABASE]: MongoDB query sent to create Meal in DB");
    return { message: "Meal created" };
  } catch (e) {
    console.error(e);
  }
  return { body };
});

export { create_post as default };
//# sourceMappingURL=create.post3.mjs.map
