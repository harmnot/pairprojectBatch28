import express from 'express'
const router = express.Router();
import models from '../models'
const { Players, Clubs, Competetions } = models
import bcrypt from 'bcryptjs'


router.get('/', (req, res)=> {
  res.render('register')
})



router.post('/', (req, res) => {
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
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(obj.password, salt, (err, hash) => {
      if(err) throw err
      obj.password = hash
      console.log(obj)
    })
  })

  // Players.findOne({ where : { email: email }})
  // .then( data => {
  //   if(data){
  //     res.send('sudah ada')
  //   } else {
  //     console.log(req.body);
  //   }
  // })
  // .catch(err => res.send(err))

})



export default router