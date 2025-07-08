const { exit } = require("process")

const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD
if (username === "" || password === "" || !username || !password) {
    console.log("Username or Password is empty or not defined")
    exit(1)
}

module.exports = uri = `mongodb+srv://${username}:${password}@cluster0.yn4ypas.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`