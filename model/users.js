var mongojs = require("mongojs");
var db = mongojs('blog',['users']);

function User(user){
	this.name = user.name;
	this.password = user.password;
	this.email = user.email;
}


User.prototype.save = function(){
	var newuser={
		name: this.name,
		password: this.password,
		email: this.email
	}
	db.users.insert(newuser,function(err,doc){
		return doc;
	});
}


User.get = function(name,callback){
	db.users.findOne({name: name},function(err,docs){
			callback(docs);
	});
};

module.exports = User;