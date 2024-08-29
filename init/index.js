//code for initialising the data in the DB.

const mongoose = require("mongoose");
const initData = require("./data.js");
//just because 'models' directory is one level up relative to the 'init' directory
//hence we have used '..' double dots 
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    //written in order to delete any previous data which might be present in the DB 
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner : "66cdb502956663a0a0a907bc"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();