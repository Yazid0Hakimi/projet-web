const createError = require("http-errors");
const express = require("express");
// const path = require('path');
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");

// crud routes
const usersRouter = require("./routes/crud/users");
const ArticleRouter = require("./routes/crud/articles");
const commentaireRouter = require("./routes/crud/commentaire");
const categorieRouter = require("./routes/crud/categorie");

// login-registration routes
const auth = require("./routes/auth/auth");

const app = express();

// view engine setup

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

app.use("/users", usersRouter);
app.use("/article", ArticleRouter);
app.use("/commentaire", commentaireRouter);
app.use("/categorie", categorieRouter);

app.use("/auth", auth);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.send('error here');
// });

module.exports = app;
