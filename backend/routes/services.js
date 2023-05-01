const express = require('express')
const router = express.Router()

const org = process.env.ORG

// importing data model schemas
const { services } = require('../models/models')

// GET services for org
router.get('/', (req, res, next) => {
  services.find({ org: org }, (error, data) => {
    if (error) {
      return next(error)
    } else {
      return res.json(data)
    }
  })
})

// GET services for org with id
router.get('/:id', (req, res, next) => {
  services.findById(req.params.id, req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      return res.json(data)
    }
  })
})

// POST new service
router.post('/', (req, res, next) => {
  const newService = req.body
  newService.org = org
  services.create(newService, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// PUT update service
router.put('/:id', (req, res, next) => {
  services.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = router
