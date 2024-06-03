import { d as defineEventHandler, r as readBody } from './nitro/node-server.mjs';
import { B as Book } from './BookingSchema.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';
import 'node:fs';
import 'node:url';

const _id__put = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const id = event.context.params.id;
  console.log("The id to be updated:");
  console.log(id);
  console.log("The body to be updated:");
  console.log(body);
  try {
    await Book.findByIdAndUpdate(id, body);
    console.log("[DATABASE]: MongoDB query sent to edit Booking in DB");
    return { message: "Booking edited" };
  } catch (e) {
    console.error(e);
  }
});

export { _id__put as default };
//# sourceMappingURL=_id_.put4.mjs.map
