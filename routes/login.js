import passport from 'passport'
import express from 'express'
// const app = expres()
const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();
import models from '../models'
const {
  Players,
  Clubs,
  Competetions
} = models
import bcrypt from 'bcryptjs'

//
// router.get('/', (req, res) => {
//     res.render('login')
//   })
//
// router.post('/', (req, res , next) => {
//   console.log(passport);
//  passport.authenticate('local', {
//    successRedirect: '/dashboard',
//    failureRedirect: '/',
//    failureFlash: true
//  })(req, res, next);
//
// })


passport.use(
  new LocalStrategy({
    usernameField: 'email'
  }, (email, password, done) => {
    // Match user
    Players.findOne({
      where: {
        email: email
      }
    }).then(user => {
      console.log('got it');
      console.log(user);
      if (!user) {
        console.log('tidak ada');
        return done(null, false, {
          message: 'That email is not registered'
        });
      }


      // Match password
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw new Erro('something erro')
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    });
  })
);


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // console.log(`id: ${id}`);
  Players.findById(id)
    .then(user => {

      done(null, user);
    })
    .catch(error => {
      console.log(`Error: ${error}`);
    });
});


router.get('/', (req, res) => {
  res.render('login')
})

// router.post('/',
//   passport.authenticate('local', { successRedirect: '/masuk',
//                                    failureRedirect: '/tidakada',
//                                    failureFlash: true })
// );


//   router.post('/', (req, res, next) => {
//   passport.authenticate('local', {
//     successRedirect: '/ada',
//     failureRedirect: '/tidakada',
//     failureFlash: true
//   })(req, res, next);
// });


router.post('/', (req, res, next) => {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send('/tidakada');
    }
    else{
      console.log(req.body, ';iniiiiiiiii');
      return res.send(user)
    }
  })(req, res, next);

})

export default router


// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });
//
// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });




// passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
//
// }
//
// }


// function(err, user) {
//   if (err) { return done(err); }
//   if (!user) {
//     return done(null, false, { message: 'Incorrect username.' });
//   }
//   if (!user.validPassword(password)) {
//     return done(null, false, { message: 'Incorrect password.' });
//   }
//   return done(null, user);
// });

// ));







// module.exports= function(app, passport){
//   router.get('/login', (req, res) => {
//     res.render('login')
//   })
//   router.post('/login', passport.authenticate('local'),
//   function(req, res) {
//       res.send({
//           url:'/profile',
//           username:req.body.username
//       });
//     });
// }