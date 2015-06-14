var Routes = function(app){
  app.get("/", this.get)
  app.post("/", this.post)
  app.patch("/", this.patch)
  app.delete("/", this.delete)
  app.put("/", this.put)
}

Routes.prototype = {
  get: function(req,res){
    res.send("got!")       
  },
  post: function(req,res){
    res.send("posted!")       
  },
  patch: function(req,res){
    res.send("patched!")       
  },
  put: function(req,res){
    res.send("put!")       
  },
  delete: function(req,res){
    res.send("deleted!")       
  }
}

module.exports = function(app){
  return new Routes(app)
}
