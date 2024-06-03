import { d as defineEventHandler } from './nitro/node-server.mjs';
import { D as Dinner } from './DinnerSchema.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';
import 'node:fs';
import 'node:url';

const index_get = defineEventHandler(async (event) => {
  const meals = await Dinner.find();
  console.log("[DATABASE]: MongoDB query sent to get all Meal documents that at stored in the meals collection");
  return meals;
});

export { index_get as default };
//# sourceMappingURL=index.get2.mjs.map
