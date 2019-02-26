import express from "express";
const app = express();

import expressLayouts from "express-ejs-layouts";
import ejs from "ejs";

const PORT = process.env.PORT || 3000;


app.use(expressLayouts);
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: true})););



app.listen(PORT, () => console.log(`you are connected at port ${PORT}`));
