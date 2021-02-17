const express = require("express");
const bodyParser = require("body-parser");
const taskApp = require("./task-app/views/task-app");

const app = express();

// app.use(express.static("C:/Users/Simba/Downloads/Studies 5/FSD/Web Development/project-ui/task-app/public"));
app.use(express.static("/Users/simarpreet/Documents/Project-UI-handler/task-app/public"));
app.use(bodyParser.json());
app.use(express.urlencoded())

app.set("view engine", "pug");
// app.set("views", "C:/Users/Simba/Downloads/Studies 5/FSD/Web Development/project-ui/task-app/templates");
app.set("views", "/Users/simarpreet/Documents/Project-UI-handler/task-app/templates");

app.get("/", (req, res) => {
  res.render("home");
})

app.get("/login", (req, res) => {
  console.log("#!@!@#")
  res.render("login");
})

app.get("/signup", (req, res) => {
  res.render("signup");
})

app.post("/signup", taskApp.signup)

module.exports = app;