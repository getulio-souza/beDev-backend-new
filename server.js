const dotenv = require("dotenv");
dotenv.config({
  path: "/config.env"
});
require('./models/db')
const express = require('express');

const User = require('./models/user')

const app = express()

app.post('/create-user', async(req, res) => {
  const user = await User({
    fullname: 'Getulio Souza',
    email: 'getuliosouza8@gmail.com',
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

