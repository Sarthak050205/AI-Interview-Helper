require("dotenv").config()
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);
const app = require("./src/app.js")
const connectToDB = require("./src/config/database.js")
const PORT = process.env.PORT || 3000
connectToDB()
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        })
    })
    .catch((err) => {
        console.error("DB connection failed, server not started:", err)
        process.exit(1)
    })