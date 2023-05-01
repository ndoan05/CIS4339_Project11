const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const org = process.env.org

const { users } = require('../models/models')

// Login API endpoint
router.post('/', async (req, res, next) => {
  const { username, password } = req.body

  if (!(username && password)) {
    return res.status(400).json({ error: 'username and password are required' })
  }
  try {
    let user = await users.findOne({ username })
    if (!user) {
      return res.status(400).json({ error: 'invalid login' })
    }
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: 'invalid login' })
    }

    res.json(user)
  } catch (err) {
    console.log(err)
    return next(err)
  }
})

//create user API endpoint
router.post('/register', async (req, res) => {
  const userData = {
    username: req.body.username,
    role: req.body.role,
    orgs: org
  }

  const password = req.body.password
  if (password !== null && password !== '') {
    userData.password = await bcrypt.hash(password, 10)
  }

  try {
    const user = await users.create(userData)
    res.status(200).json({ message: 'user created successfully', user })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'could not create user.' })
  }
})

module.exports = router
