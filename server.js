const express = require("express")
const errorHandler = require("./middleware/errorHandler")
const connectDB = require("./config/dbConnections")
const dotenv = require("dotenv").config()
const cors = require('cors');

connectDB()
const app = express()
app.use(cors());

const port = process.env.PORT || 5000

app.use(express.json())
app.use("/api/contacts", require("./routes/contactsRoutes"))
app.use("/api/users", require("./routes/userRoutes"))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})