const { User } = require('../models')

const userData = [
    {
        username: "rilz",
        email: "xrileynewhart@gmail.com",
        password: "password123"
    },
    {
        username: "smashley",
        email: "ash123@gmail.com",
        password: "password12345"
    },
    {
        username: "twoody",
        email: "twoody@gmail.com",
        password: "tyler123"
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
