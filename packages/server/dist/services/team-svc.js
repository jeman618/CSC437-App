"use strict";
var import_mongoose = require("mongoose");
const userSchema = new import_mongoose.Schema(
  {
    userid: { type: String, required: true },
    name: { type: String, required: true },
    city: { type: String, required: true },
    favoriteTeam: { type: String, required: true }
  },
  { collection: "users" }
);
