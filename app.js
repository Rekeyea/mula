"use strict";
var express = require('express');
var passport = require("passport");
var fs = require("fs");
var localStrategy = require("passport-local").Strategy;
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use( passport.initialize());
app.use( passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new localStrategy((username, password, done)=>{
    var userObj = require("./backend/user.json");
    if(userObj.user===username && userObj.password===password){
        done(null,{user:userObj.user});
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
app.get("/api/projects/:id", function(req,res){
    let projects = require("./backend/projects.json");
    var founds = projects.List.filter((v,i)=>v.id==req.params.id);
    if(founds.length>=0){
        let projects = require("./backend/projects.json");
        res.setHeader("Content-Type","application/json");
        res.send(founds[0]);
    }else{
        res.sendStatus(500);
    }
});
// app.post("/api/login",passport.authenticate("local", {session:false}), (req,res)=>{
//     res.json(req.user);
// });
// app.post("/api/project", passport.authenticate("local", {session:false}), (req,res)=>{

//     res.json({});
// });
app.get("/*",function(req,res){
    res.sendFile("index.html",options);    
});
app.listen(app.get("port"), function () {
    console.log("Listening ...");
});