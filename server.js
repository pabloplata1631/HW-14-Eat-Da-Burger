var express = require('express');
var bodyparser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();
app.use(express.static(_dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: flase
}))

app.use(methodOverride('_method'));
app.engine('handlerbars',exphbs({
    defaultLayout:'main'
}));
app.set('view engine','handlerbars');

var port = 300;
app.listen(port);
