var express = require('express');
var app = express();

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


app.get("/*",function(req,res){
    res.sendFile("index.html",options);    
});
app.listen(3000, function () {
    console.log("Listening ...");
});