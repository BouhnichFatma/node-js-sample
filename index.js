var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello Testing DevOps Node! JS Project Hello')
}) 
const host = '0.0.0.0';
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost: ${host}" + app.get('port'))
})
