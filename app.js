var express = require('express');
var app = express();

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


app.get("/*",function(req,res){
    res.sendFile("index.html",options);    
});
app.listen(app.get("port"), function () {
    console.log("Listening ...");
});