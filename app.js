let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index', {foo: 'FOO'});
});

app.listen(4000, function(){
     console.log('Server is listening on port 4000!')

});