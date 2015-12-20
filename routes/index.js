

User = require('../model/users.js');

/* GET home page. */
module.exports = function(app){

	
	console.log(app.toString());
	app.get('/',function(req,res){
		res.render('index',{title:'主页'});
	});
	app.get('/reg',function(req,res){
		res.render('reg',{title:'注册'});
	});
	app.post('/reg',function(req,res){
		var name = req.body.name,
			password = req.body.password,
			password_re = req.body['password-repeat'];

			if(password != password){
				//req.flash('error','输入两次的密码不一致');
				console.log('输入两次的密码不一致');
				return res.redirect('/reg');
			}

			newUser = new User({
				name: name,
				password: password,
				email: req.body.email
			});

			User.get(name,function(err,user){
				if(user){
					//req.flash('error','用户已存在');
					console.log('用户已存在');
					return res.redirect('/reg');
				}

				newUser.save(function(err,user){
					if(err){
						req.flash('error',err);
						return res.redirect('/reg');
					}
					//req.session.user = user;
					console.log('user存入session');
					//req.flash('success','注册成功');
					console.log('注册成功');
					res.redurect('/');
				});
			});
	});
	app.get('/login',function(req,res){
		res.render('login',{title:'登陆'});
	});
	app.post('/login',function(req,res){
		
	});
	app.get('/post',function(req,res){
		res.render('post',{title:'发表'});
	});
	app.post('/',function(req,res){
		console.log('主页');
	});
	app.get('/logout',function(req,res){
		
	});
};


