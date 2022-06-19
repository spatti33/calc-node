const express = require ("express");
const bodyParser = require ("body-parser");

const app = express();
app.use(bodyParser.urlencoded( {extended: true }));

app.get ("/", function (req, res) {
    res.sendFile (__dirname + "/index.html");
});

app.get ("/bmiCalculator", function (req, res) {
    res.sendFile (__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
    var firstNumber = Number(req.body.num1);
    var secondNumber = Number(req.body.num2);
    var sum = (firstNumber + secondNumber);

    res.send("The result is: " + sum);
});

app.post("/bmiCalculator", function (req, res) {
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);

    var BMI = Math.round(weight/(height * height));
    if (BMI >= 25) {
        res.send("Your BMI is: " + BMI + ". You are overweight.");
    } else if (BMI >= 18 && BMI < 25) {
        res.send ("Your BMI is: " + BMI + ". You are normal.");
    } else {
        res.send ("Your BMI is: " + BMI + ". You are underweight.");
    }
})

app.listen (3000, function () {
    console.log ("Server is running on port 3000");
});