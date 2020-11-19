const User = require("./../models/User.model");

const users = [
    new User({
        name: "Lola",
        password: "gubligubli",
        createdAt:new Date(2020, 11, 24)
    }),
    new User({
        name: "Lolo",
        password: "gubligubli",
        createdAt:new Date(2020, 2, 4)
    }),
    new User({
        name: "Lolita",
        password: "gubligubli",
        createdAt: new Date(2020, 9, 7)
    })
    ];







/*const users = [
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
    ];*/