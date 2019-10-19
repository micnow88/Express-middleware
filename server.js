var express = require('express');
var app = express();
//app.use(express.static('assets'));

app.use('/store', function(req, res, next){
  console.log('Hej, jestem pośrednikiem przy żądaniu do /store');
  next();
});

app.get('/', function (req, res) {
  res.send('hello world');
});

app.get('/store', function (req, res) {
  res.send('To jest sklep');
})

app.listen(3000);
app.use(function (req, res, next) {
  res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});
