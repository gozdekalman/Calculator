const express = require("express");
const bodyParse = require("body-parser");
const app = express();

app.use(bodyParse.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  console.log("Request: ", req);
  var num1 = parseFloat(req.body.num1);
  var num2 = parseFloat(req.body.num2);

  var result = num1 + num2;

  res.send("The result of the calculation is " + result);
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator", function (req, res) {
  var num1 = parseFloat(req.body.weight);
  var num2 = parseFloat(req.body.height);

  var result = num1 / (num2 * num2);

  res.send("Your BMI is " + result);
});

app.listen(3000);
