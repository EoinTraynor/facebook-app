var FacebookStrategy = require('passport-facebook').Strategy;
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');
var auth = require('./auth');

module.exports = function(passport) {

	// =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

			// passport.use('local-signup', new LocalStrategy({
		    // usernameField: 'email',
		    // passwordField: 'password',
		    // passReqToCallback: true,
			//   },
			//   function(req, email, password, done) {
			//     process.nextTick(function() {
			//       User.findOne({ 'local.email':  email }, function(err, user) {
			//         if (err)
			//             return done(err);
			//         if (user) {
			//           return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
			//         } else {
			//           var newUser = new User();
			//           newUser.local.email = email;
			//           newUser.local.password = newUser.generateHash(password);
			//           newUser.save(function(err) {
			//             if (err)
			//               throw err;
			//             return done(null, newUser);
			//           });
			//         }
			//       });
			//     });
			//   }));
			//
			//   passport.use('local-login', new LocalStrategy({
			//     usernameField: 'email',
			//     passwordField: 'password',
			//     passReqToCallback: true,
			//   },
			//   function(req, email, password, done) {
			//     User.findOne({ 'local.email':  email }, function(err, user) {
			//       if (err)
			//           return done(err);
			//       if (!user)
			//           return done(null, false, req.flash('loginMessage', 'No user found.'));
			//       if (!user.validPassword(password))
			//           return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
			//       return done(null, user);
			//     });
			//   }));

	// =========================================================================
    // FACEBOOK ================================================================
    // =========================================================================
    passport.use(new FacebookStrategy({

        clientID        : auth.facebookAuth.clientID,
        clientSecret    : auth.facebookAuth.clientSecret,
        callbackURL     : auth.facebookAuth.callbackURL,
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)

    },
	function(req, token, refreshToken, profile, done) {

		// asynchronous
		process.nextTick(function() {

			User.findOne({ 'facebook.id' : profile.id }, function(err, user) {
				if (err) return done(err);
				if (user) { return done(null, user); }
				else {
					var newUser = new User();
					newUser.facebook.id = profile.id;
					newUser.facebook.token = profile.token;
					newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
					newUser.facebook.email = profile.emails;

					newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
				}
			});
		});
	}));
}
