const mongoose = require(`mongoose`);
const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 5000;

require("./db/conn");
const User = require("./model/userSchema");
// Middelware

app.use(express.json());
app.use(cookieParser());
app.use(require("./router/auth"));

const middleware = (req, res) => {
  console.log(`Hello my Middleware`);
  // next();
};

app.get("/", (req, res) => {
  res.send(`This is a home page `);
});
// app.get( '/about', middleware, ( req, res ) =>
// app.get('/about', (req, res) => {
//     res.send(`This is a about page `);
//     console.log("This is a about page");
// })
// app.get("/contact", (req, res) => {
//   res.send(`This is a contact page `);
//   console.log("This is a contact page");
// });
app.get("/signin", (req, res) => {
  res.send(`This is a signin page `);
  console.log("This is a signin page");
});


app.get("/signup", (req, res) => {
  res.send(`This is a signup page `);
});

// ****************
if (process.env.NODE_ENV = "production") {
  app.use(express.static("client/build"))
}

// ****************

app.listen(PORT, () => {
  console.log(`This is waleed ${PORT}`);
});
