'use strict'
const User = require('../models/user')
// const jwt = require('jsonwebtoken')


var getAll = (req, res) => {
  User.find({})
  .populate('task_list')
  .exec()
  .then(users => {
    res.send(users)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var getOne = (req, res) => {
  User.findById(req.params.id)
  .populate('task_list')
  .exec()
  .then(todo => {
    res.send(todo)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var update = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
  .then(updated => {
    res.send(updated)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var remove = (req, res) => {
  User.findByIdAndRemove(req.params.id)
  .then(removed => {
    res.send(removed)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}