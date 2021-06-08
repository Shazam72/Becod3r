const express = require("express"),
  app = express(),
  path = require("path");
(cookieParser = require("cookie-parser")),
  (cors = require("cors")),
  (session = require("express-session")),
  authRouter=require('./routes/auth');

require("dotenv").config();
//Middlewares definition
app.use(express.json()).use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//Routes definition
app.use('/auth',authRouter)


app.listen(process.env.PORT);
