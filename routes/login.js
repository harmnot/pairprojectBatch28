import LocalSyrategy from 'passport-local'
import bcrypt from 'bcryptjs'
import models from '../models'
const { Players, Clubs, Competetions } = models

// const login = (passport) => {
//   passport.use(
//     new LocalSyrategy({ username})
//   )
// }

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      Players.findOne({
        email: email
      }).then(user => {
        if (!user) {
          return done(null, false, { message: 'That email is not registered' });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    Players.findById(id, function(err, user) {
      done(err, user);
    });
  });
};