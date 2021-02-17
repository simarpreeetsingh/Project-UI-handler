const app = require(`${__dirname}/router`)

port = process.env.PORT || "7777"

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})