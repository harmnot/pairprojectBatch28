import express from "express";
const app = express();

import expressLayouts from "express-ejs-layouts";
import ejs from "ejs";

import flash from "connect-flash";
import session from "express-session";

import addPlayers from './routes/players'

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

// connect flash
app.use(flash());

// global variables for flash
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

app.use('/register', addPlayers )
app.get('/', (req, res) => {
  res.render('partials/header')
})

app.get('/login', (req, res) => {
  res.render('login')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`you are connected at port http://localhost:${PORT}`)
);
