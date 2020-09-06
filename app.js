//jshint esverson:6

const express = require ("express");
const bodyParser = require ("body-parser");

const app=express();

app.set("view engine","ejs");

app.get("/",function(req,res){
  var today=new Date();

  var options={
    weekend:"long";
    day:"numeric";
    month:"long";
  };




  // if(currentDay===0){
  //   day="sunday";
  //   // res.sendFile(__dirname+"/weekend.html");
  //   //res.render("list", {kindOfDay: day});
  // }
  // else{
  //   day="week day";
  //   //res.sendFile(__dirname+"/index.html");
  //   //res.render("list", {kindOfDay: day});
  // }
  res.render("list", {kindOfDay: day});
});



app.listen(3000,function(){
  console.log("server up and running on port 3000");
})
