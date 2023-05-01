const express = require('express')
const router = express.Router()

const org = process.env.ORG

// importing data model schemas
const { orgs } = require('../models/models')

// GET org
router.get('/', (req, res, next) => {
  orgs.findById(org, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = router
