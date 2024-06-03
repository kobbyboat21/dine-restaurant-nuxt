import { d as defineEventHandler } from './nitro/node-server.mjs';
import { B as Breakfast } from './BreakfastSchema.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';
import 'node:fs';
import 'node:url';

const index_get = defineEventHandler(async (event) => {
  const meals = await Breakfast.find();
  console.log("[DATABASE]: MongoDB query sent to get all Meal documents that at stored in the meals collection");
  return meals;
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
