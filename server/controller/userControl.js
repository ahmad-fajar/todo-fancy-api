'use strict'
const User = require('../models/user')
// const jwt = require('jsonwebtoken')


// create
// create new user
exports.createUser = (req, res) => {
  let data = {
    username : req.body.username,
    password : req.body.password,
    email    : req.body.email,
    role     : 'user'
  }
  User.create(data)
  .then(user => {
    res.send(user)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}


// read
exports.getAll = (req, res) => {
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

exports.findById = (req, res) => {
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


// update
exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
  .then(updated => {
    res.send(updated)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}


// delete
exports.deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id)
  .then(removed => {
    res.send(removed)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}