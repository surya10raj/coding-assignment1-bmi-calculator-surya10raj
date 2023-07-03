
const express = require("express");
const bodyparser = require("body-parser");
const port = 7777;
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
	heigh = parseFloat(req.body.Height);
	weigh = parseFloat(req.body.Weight);
	bmi = weigh / (heigh * heigh);

	bmi = bmi.toFixed();

	req_name = req.body.Name;
	
	if (bmi < 19) {
		res.send("<h3>hey! " + req_name +
				" your BMI is around: " + bmi +
				"<centre><h1>You are Underweight!");
	} else if (19 <= bmi && bmi < 25) {
		res.send("<h3>hey! " + req_name +
				" your BMI is around: " + bmi +
				"<centre><h1>You are Normalweight!");
	} else if (25 <= bmi && bmi < 30) {
		res.send("<h3>hey! " + req_name +
				" your BMI is around: " + bmi +
				"<centre><h1>You are Overweight!");
	} else {
		res.send("<h3>hey! " + req_name +
				" your BMI is around: " + bmi +
				"<centre><h1>You are Obese!");
	}
});


app.listen(7777, function () {
	console.log("port active at 7777");
});
