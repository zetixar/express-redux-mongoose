const passport = require('passport')

module.exports = app => {
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	)

	app.get(
		'/auth/google/callback',
		passport.authenticate('google'),
		(req, res) => {
			res.redirect('/')
		}
	)

	app.get('/api/current_user', (req, res) => {
		res.send(req.user)
	})

	app.get('/api/logout', (req, res) => {
		req.logout()
		res.send({})
	})
}

// app.get(
// 	'/auth/facebook',
// 	passport.authenticate('facebook', {
// 		scope: ['user_about_me', 'public_profile']
// 	})
// )
//
// app.get('/auth/facebook/callback', passport.authenticate('facebook'))
