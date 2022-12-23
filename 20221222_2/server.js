const express = require("express");
const nunjucks = require("nunjucks");
const route = require("./routes");
const app = express();

app.set("view engine", "html");
nunjucks.configure("views", { express: app });

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(route);

app.listen(3000, () => {
    console.log("server start");
});

