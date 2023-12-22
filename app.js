let express = require('express');
let bodyparser = require("body-parser");

let app = express();
let tasks = [];
app.use(bodyparser.urlencoded({extended : true}));
app.set('view engine', 'ejs');

app.use(express.static('views/public'))

app.get('/', function(req, res){

  res.render('index', {foo: tasks});

});

app.post('/',function(request,response){
    var nextTask = request.body.task;
    tasks.push(nextTask);
    response.redirect("/");
    console.log(nextTask);
})
app.listen(3000, function(){
     console.log('Server is listening on port 4000!')

});