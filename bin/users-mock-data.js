const { getMaxListeners } = require("./../models/User.model");
const User = require("./../models/User.model");

const users = [
    {
        email: "lola@gmail.com",
        name: "Lola",
        password: "Gubligubli2",
        createdTips: ["5fbd28cf96683e1f7626761f", "5fbd28cf96683e1f76267620"],
        createdAt:new Date(2020, 11, 24)
    },
    {
        email: "lolo@gmail.com",
        name: "Lolo",
        password: "gubligubli",
        createdTips: ["5fbd50e9fdc22b2e5d53bda0", "5fbd28cf96683e1f7626761e"],
        createdAt:new Date(2020, 2, 4)
    },
    {
        email: "lolita@gmail.com",
        name: "Lolita",
        password: "gubligubli",
        createdTips: ["5fbd5cca0c5422364b9236db", "5fbd28cf96683e1f7626761e"],
        createdAt: new Date(2020, 9, 7)
    }
];


module.exports = users;