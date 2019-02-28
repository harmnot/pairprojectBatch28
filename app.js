import express from "express";
const app = express();

import expressLayouts from "express-ejs-layouts";
import ejs from "ejs";

import flash from "connect-flash";
import session from "express-session";

import addPlayers from './routes/players'
import home from './routes/home'
import passport from 'passport'
import login from './routes/login'


// require('./key/passport')(passport);
// require('./routes/login')(app, passport);

app.use(passport.initialize());

app.use(passport.session());
// file script and css
app.use(express.static('public'))

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// express-session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

//middleware


// connect flash
// app.use(flash());


// global variables for flash
// app.use((req, res, next) => {
//   res.locals.success_msg = req.flash("success_msg";
//   res.locals.error_msg = req.flash("error_msg");
//   res.locals.error = req.flash("error");
//   next();
// });

app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});





app.use('/register', addPlayers )
app.get('/', home)

app.use('/login', login )

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`you are connected at port http://localhost:${PORT}`)
);
