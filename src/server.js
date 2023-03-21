const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get(["/", "/:name"], (req, res) => {
  greeting = "<h1>Hello From Node on Fly!</h1>";
  const name = req.params["name"];
  if (name) {
    res.send(greeting + "</br>and hello to " + name);
  } else {
    res.send(greeting);
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`HelloNode app listening on port ${port}!`);
  require("./index");
});
