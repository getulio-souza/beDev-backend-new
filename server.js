const dotenv = require("dotenv");
dotenv.config({
  path: "/config.env"
});
require('./models/db')
const express = require('express');

const User = require('./models/user')

const app = express()

const email = 'getuliosouza18@gmail.com'

app.post('/create-user', async (req, res) => {
  const isNewUser = await User.isThisEmailInUse(email);
  if (!isNewUser) return res.json({
    success: false,
    message: 'Este e-mail ja esta em uso. Tente fazer login.'
  })
  const user = await User({
    fullname: 'Getulio Souza',
    email: email,
    password: '123456'
  })
  await user.save()
  res.json(user)
})


app.get('/', (req, res) => {
  res.send('hello word')
})

app.listen(8000, () => {
  console.log('port is listening')
})

