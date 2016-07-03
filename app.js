"use strict";
var express = require('express');
var passport = require("passport");
var fs = require("fs");
var localStrategy = require("passport-local").Strategy;
var app = express();

passport.use(new localStrategy((username, password, done)=>{
    var userObj = require("./backend/user.json");
    if(userObj.user===username && userObj.password===password){
        done(null,{user:user.user});
    }else{
        done(null,false,{message:"Usuario y Contraseña no Coinciden"});
    }
}));

app.set('port', (process.env.PORT || 5000));
var options = {
    root: __dirname + '/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
};

app.use('/bower_components',express.static('bower_components'));
app.use('/node_modules',express.static('node_modules'));
app.use('/app',express.static('app'));



app.get("/api/projects/",function(req,res){
    let projects = require("./backend/projects.json");
    res.setHeader("Content-Type","application/json");
    res.send(projects.List);
});
app.post("/api/project", /*passport.authenticate("local", {session:false}),*/ (req,res)=>{
    res.send({});
});
app.get("/*",function(req,res){
    res.sendFile("index.html",options);    
});
app.listen(app.get("port"), function () {
    console.log("Listening ...");
});