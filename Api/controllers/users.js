
const User = require('../Models/userModel');

async function getUsers() {
    try {
        const users = await User.find();
        return users;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getUsers
}