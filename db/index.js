const mongoose = require("mongoose");

const MONGODB_URI = process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/peevedDatabase";

mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("Successfully connected to mongoDB"))
    .catch((err) => console.log("MongoDB Connection Error:", err.message));

    mongoose.set("debug", true);

    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "MongoDB connection error:"));

    module.exports = db;