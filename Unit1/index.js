const express = require("express");
const bodyparser = require("body-parser");
const port = 7777;
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    const height = parseFloat(req.body.Height);
    const weight = parseFloat(req.body.Weight);
    const bmi = weight / (height * height);

    const reqName = req.body.Name;

    res.send(
        `<h3>Hey! ${reqName}, your BMI is: ${bmi.toFixed(2)}</h3>`
    );
});

app.listen(port, function () {
    console.log("Port active at", port);
});
