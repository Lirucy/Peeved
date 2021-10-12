const db = require("../db");
const User = require("../models/user");
const { hashPassword } = require("../utils");

const main = async () => {
    const users = [
        {
            username: "johntran",
            email: "johntran@gmail.com",
            password_digest: hashPassword("peeved")
        },
        {
            username: "abdinator",
            email: "abdi@gmail.com",
            password_digest: hashPassword("peeved")
        }
    ]

    await User.deleteMany();
    await User.insertMany(users);
}

const run = async () => {
    await main();
    db.close();
};

run();