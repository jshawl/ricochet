var request = require("request")
var Routes = function(app){
  app.all("/", this.ricochet.bind(this))
}

Routes.prototype = {
  ricochet: function( req, res ){
    if(req.method == "GET" && !req.query.method){
      res.render("index")
    } else if(this.validate(req,res)){
      var form = req.query
      var options = {
        uri: req.query.uri, 
	method: req.query.method
      }
      delete form.method
      delete form.uri
      options.form = form

      request( options ,function(err,body,response){
	res.send(response)
      })
    } 
  },
  validate: function(req, res, next){
    if(!req.query.method){
      res.send({error:"Missing method"})
      return false
    }
    if(!req.query.uri){
      res.send({error:"Missing uri"})
      return false
    }
    return true
  }
}

module.exports = function(app){
  return new Routes(app)
}
