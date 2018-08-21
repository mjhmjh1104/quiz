var app = require('express')();
var path = require('path');

app.set('view engine', 'ejs');
app.use(require('express').static(path.join(__dirname, 'public')));

app.listen(process.env.PORT | 3000, function() {
  console.log('Server on');
});
