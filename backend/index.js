const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookie = require("cookie-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const { DB_URL, DB_PORT, DB_NAME } = process.env;
const port = process.env.PORT;

mongoose.connect(`mongodb://${DB_URL}:${DB_PORT}/${DB_NAME}`);

const app = express();
app.use(express.json());
app.use(cookieParser());

const corsConfig = {
  origin: "http://localhost:3000",
  credentials: true,
};
 app.use(cors({ origin: process.env.FRONTEND_ORIGIN, credentials: true }));

app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

/* app.use('/males',require('./src/routes/malesPerfumes')) // error (src nicht geschriebin)
app.use('/females',require('./src/routes/femalesPerfumes'))   */
app.use("/perfumes", require("./src/routes/perfumes"));
app.use("/user", require("./src/routes/user"));
app.use("/stripe", require("./src/routes/stripe"));
app.use("/team", require("./src/routes/team"));
app.use("/teachers", require("./src/routes/teachers"));
 app.post('/drop-database', async (req, res) => {
  await mongoose.connection.db.dropDatabase()
  res.status(200).send('OK')
})


app.use((req, res, next) => {
  const error = new Error('Nichts gefunden')
  error.status = 404
  next(error)
})


// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: error.message
  })
}) 
const PORT = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server running on port", port);
});
