import { d as defineEventHandler } from './nitro/node-server.mjs';
import { B as Book } from './BookingSchema.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';
import 'node:fs';
import 'node:url';

const _id__delete = defineEventHandler(async (event) => {
  const id = event.context.params.id;
  console.log("The id to be updated:");
  console.log(id);
  try {
    await Book.findByIdAndDelete(id);
    console.log("[DATABASE]: MongoDB query sent to delete Booking in DB");
    return { message: "Booking deleted" };
  } catch (e) {
    console.error(e);
  }
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete4.mjs.map
