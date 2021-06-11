const express = require("express"),
  cookieParser = require("cookie-parser"),
  cors = require("cors"),
  session = require("express-session"),
  path = require("path"),
  app = express(),
  routerAuth=require('./routes/auth')

require("dotenv").config();

//Middlewares definition
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "PATCH", "UPDATE"],
    credentials: true,
  })
);
app
  .use(
    session({
      name: process.env.APP_NAME,
      secret: process.env.PUBLIC_TOKEN,
      saveUninitialized: true,
      resave: false,
      cookie: {
        httpOnly: true,
        maxAge: 5 * 60 * 60 * 1000,
      },
    })
  )
  .use((req, res, next) => {
    res.cookie("csrf", process.env.CSRF_TOKEN, {
      httpOnly: true,
    });

    next();
  });

//Routes definition
app.get("/", (req, res, next) => {
  res.json("Welcome on Becod3r");
});
app.use("/auth",routerAuth);

app.listen(process.env.PORT);
