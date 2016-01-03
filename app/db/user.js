var db = require("./connection");

var UserManager = {
  createTable: function(){
    db.serialize(function() {
      //db.run("DROP TABLE IF EXISTS users");
      db.run("CREATE TABLE IF NOT EXISTS users (name TEXT, email TEXT)");
    });
  },
  createUser: function(user){
    var stmt = db.prepare("INSERT INTO users(name, email) VALUES ('"+user.name+"','"+user.email+"')");
    stmt.run();
    stmt.finalize();
  }
}

module.exports = UserManager;
