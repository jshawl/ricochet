var express = require("express")
var app = express()
var routes = require("./routes")(app)
var port = process.env.port || 3000
app.listen(port,function(){
  console.log("App listening on http://localhost:"+port)
})