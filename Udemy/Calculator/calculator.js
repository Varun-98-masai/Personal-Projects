const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
  console.log(__dirname);
});

app.post("/",function(req,res){

    var num1 = req.body.num1;
    var num2 = req.body.num2;
    // console.log(req.body);
    res.send(`Result of Calculation is ${num1 * num2}`);
});

app.get("/bmicalculator",function(req,res){
   
    res.sendFile(__dirname + "/bmiCalculator.html");
    // console.log(__dirname);
});

app.post("/bmicalculator", function (req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    res.send(`BMI  Calculation is ${weight / (height * height)}`);
})

app.listen(4500,() =>{
    console.log("Server is running on port: 4500");
});