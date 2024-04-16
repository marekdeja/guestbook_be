const mongoose = require("mongoose");

const guestBookDataSchema = new mongoose.Schema({
  userName: {
    required: true,
    type: String,
  },
  userText: {
    required: true,
    type: String,
  },
  entryDate: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("GuestBookData", guestBookDataSchema);
