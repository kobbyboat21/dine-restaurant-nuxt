import { d as defineEventHandler } from './nitro/node-server.mjs';
import { B as Book } from './BookingSchema.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';
import 'node:fs';
import 'node:url';

const index_get = defineEventHandler(async (event) => {
  const bookings = await Book.find();
  console.log("[DATABASE]: MongoDB query sent to get all Booking documents that at stored in the meals collection");
  return bookings;
});

export { index_get as default };
//# sourceMappingURL=index.get4.mjs.map
