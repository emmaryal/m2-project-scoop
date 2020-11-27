const { getMaxListeners } = require("./../models/User.model");
const User = require("./../models/User.model");

const users = [
    {
        email: "lola@mail.com",
        name: "Marta",
        password: "Gubligubli2",
        image: "https://images.totalbeauty.com/content/photos/best-beauty-treatments-facetime-skin-care-products.jpg",
        createdTips: ["5fbd28cf96683e1f7626761f", "5fbd28cf96683e1f76267620"],
        createdAt:new Date(2020, 11, 24)
    },
    {
        email: "lolo@mail.com",
        name: "Marcos",
        password: "gubligubli",
        image: "https://i.pinimg.com/564x/e9/a4/51/e9a45158a67d77ac563aaaf0c191712d.jpg",
        createdTips: ["5fbd50e9fdc22b2e5d53bda0", "5fbd28cf96683e1f7626761e"],
        createdAt:new Date(2020, 2, 4)
    },
    {
        email: "lolita@mail.com",
        name: "Ana",
        password: "gubligubli",
        image: "https://www.okchicas.com/wp-content/uploads/2019/05/Ni%C3%B1a-pelirroja.jpg",
        createdTips: ["5fbd5cca0c5422364b9236db", "5fbd28cf96683e1f7626761e"],
        createdAt: new Date(2020, 9, 7)
    }
];


module.exports = users;