const User = require("./../models/User.model");

const users = [
    {
        name: "Lola",
        password: "gubligubli",
        createdAt:new Date(2020, 11, 24)
    },
    {
        name: "Lolo",
        password: "gubligubli",
        createdAt:new Date(2020, 2, 4)
    },
    {
        name: "Lolita",
        password: "gubligubli",
        createdAt: new Date(2020, 9, 7)
    }
];


module.exports = users;