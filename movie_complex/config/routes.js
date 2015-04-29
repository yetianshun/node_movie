var _ = require('underscore')

//路由控制器
var Index = require('../app/controllers/index')
var User  = require('../app/controllers/user')
// var Movie = require('../app/controllers/movie')

module.exports = function(app) {

	//访问预处理，写入session的信息到本地locals.user中
	app.use(function(req, res, next) {
		var _user = req.session.user;
		if (_user) {
			app.locals.user = _user;
		}
		next()
	})

	//首页
	app.get('/',Index.index)

	//用户管理
	//登陆 登出
  app.post('/user/signin',User.signin)
  app.post('/user/signup', User.signup)
  // app.get('/logout', User.logout)

  //电影处理
  // app.get('/movie/:id', Movie.detail)
  // app.get('/admin/movie/new',  Movie.new)
  // app.get('/admin/movie/update/:id',  Movie.update)
  // app.post('/admin/movie', Movie.save)
  // app.get('/admin/movie/list', Movie.list)
  // app.delete('/admin/movie/list', Movie.delete)

}

