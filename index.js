require('dotenv').config()
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT;
const app = express();
const {connection} = require("./config/Connection");
const { authRouter } = require('./routes/Auth.route');

/// Middleware
app.use(express.json());
app.use(cors());

// Auth Routes
app.use("", authRouter)













app.listen(PORT, () => {
    // Connection To the DB
    connection();
    console.log(`Server Running on http://localhost:${PORT}`);
});

