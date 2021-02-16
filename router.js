const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("C:/Users/Simba/Downloads/Studies 5/FSD/Web Development/project-ui/task-app/templates"));
app.use(bodyParser.json());

app.set("view engine", "pug");
app.set("views", "C:/Users/Simba/Downloads/Studies 5/FSD/Web Development/project-ui/task-app/templates");

app.get("/", (req, res) => {
  res.render("home");
})

module.exports = app;