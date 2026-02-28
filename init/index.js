const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main().catch((error) => {
  console.log(error);
});

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wandarlust");
}

async function initDB() {
  await Listing.deleteMany({});
  const newData = initData.data.map((obj) => ({ ...obj, owner: "699823b25c8a17fa3f7f0b94" }));
  await Listing.insertMany(newData);
  console.log("Data initialization succuessful");
}

initDB();
