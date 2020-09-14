//jshint esverson:6

const express = require ("express");
const bodyParser = require ("body-parser");
const date= require(__dirname+"/date.js");

const app=express();
app.use(bodyParser.urlencoded({extened:true}));
app.use(express.static("public"));

app.set("view engine","ejs");

var items=["buy food","cook food","eat food"];
var works=[];

app.get("/",function(req,res){
  let day =date.setDate();

  res.render("list", {listItem: day , newListItems:items});
});

app.get("/work",function(req,res){
  res.render("list",{listItem:"work list", newListItems:works })
});

// app.post("/",function(req,res){
//   var wo =req.body.newItem;
//   console.log(req);
// })

app.post("/",function(req,res){

  if(req.body.list==="work"){
    var wo =req.body.newItem;
    works.push(wo);
    res.redirect("/work");
  }
  else{
    var item= req.body.newItem;
    items.push(item);
    res.redirect("/");
  }

  //console.log(req.body);
  //console.log(item);
});

app.get("/about", function(req,res){
  res.render("about");
});


app.listen(3000,function(){
  console.log("server up and running on port 3000");
});
