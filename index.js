var express = require("express")
var app = express()
app.set("view engine","hbs")
app.use(express.static("public"))
var routes = require("./routes")(app)
var port = process.env.port || 3000
app.listen(port,function(){
  console.log("App listening on http://localhost:"+port)
})