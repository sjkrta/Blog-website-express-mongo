const path = require("path");
const express = require("express");
const app = express();
const port = 8080;

// third-party
const bodyParser = require("body-parser");

// template-engine
app.set("view-engine", "ejs");
app.set("views", "views");

// routes-import
const homeRoutes = require("./routes/home");
const adminRoutes = require("./routes/admin");

// set-public-static-folder
app.use(express.static(path.join(__dirname, "public")));

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// routes-configuration
app.use(homeRoutes);
app.use(adminRoutes);

app.listen(port);
