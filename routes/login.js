import LocalSyrategy from 'passport-local'
import bcrypt from 'bcryptjs'
import models from '../models'
const { Players, Clubs, Competetions } = models

// const login = (passport) => {
//   passport.use(
//     new LocalSyrategy({ username})
//   )
// }
