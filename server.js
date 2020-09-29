var express = require("express");

const {PORT = 8080} = process.env;
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/brgrController.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port: ", PORT);
});
