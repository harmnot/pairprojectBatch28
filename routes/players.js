import express from 'express'
const router = express.Router();
import models from '../models'
const { Players, Clubs, Competetions } = models
import bcrypt from 'bcryptjs'
import flash from 'connect-flash'



router.get('/', (req, res)=> {
  res.render('register')
})



router.post('/',(req, res, next) => {
  const { first_name, last_name, gender, email, password, role, clubId } = req.body

  let obj = {
    first_name,
    last_name,
    gender,
    email,
    password,
    role,
    clubId
  }
  Players.findOne({where: { email : obj.email }})
  .then(data => {
    if(data){
      res.send('dup')
    } else {
      bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(obj.password, salt, (err, hash) => {
            if(err) throw err
            obj.password = hash
            Players.create(obj)
            .then(data => {
              res.send('sucess')
            })
            .catch((err) => {
              res.send(err)
            })
          })
        })
    }
  }).catch((err) => res.send(err.message))
})



export default router