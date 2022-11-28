const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const errorHandler = require("./middleware/errorMiddleware");
const connectDb = require("./config/db");

connectDb();

const app = express();

//we need body-parser to get body data otherwise, we'll get 'undefined'
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

//this will override default error handler
app.use(errorHandler);

app.listen(port, () => console.log(`server is running on port ${port}`));
