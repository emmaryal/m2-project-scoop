const { getMaxListeners } = require("./../models/User.model");
const User = require("./../models/User.model");

const users = [
    {
        email: "lola@gmail.com",
        name: "Lola",
        password: "gubligubli",
        createdAt:new Date(2020, 11, 24)
    },
    {
        email: "lolo@gmail.com",
        name: "Lolo",
        password: "gubligubli",
        createdAt:new Date(2020, 2, 4)
    },
    {
        email: "lolita@gmail.com",
        name: "Lolita",
        password: "gubligubli",
        createdAt: new Date(2020, 9, 7)
    }
];


module.exports = users;