const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");
const app = express();
const port = process.env.PORT || 3000;
const db = require("./models");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);
app.use("/submitBurger", routes);
app.use("/clear", routes);

db.sequelize.sync().then(function(){
    app.listen(port, function(){
      console.log("Listening on port %s", port);
    });
 });
