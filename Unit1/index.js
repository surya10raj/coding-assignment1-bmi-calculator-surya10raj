const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 1024;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const { name, height, weight } = req.body;
  const heightInMeters = parseFloat(height) / 100;
  const weightInKg = parseFloat(weight);

  const bmi = weightInKg / (heightInMeters * heightInMeters);

  res.send(`<h3>Hey ${name}, your BMI is: ${bmi.toFixed(2)}</h3>`);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
