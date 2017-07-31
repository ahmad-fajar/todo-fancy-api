'use strict'
const Task = require('../models/task')

exports.getAll = (req, res) => {
  Task.find({})
  .then(tasks => {
    res.send(tasks)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

exports.create = (req, res) => {
  let task = {
    task : req.body.task,
    tags : req.body.tags,
    isComplete : false
  }
  Task.create(task)
  .then(created => {
    res.send(created)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

exports.updateTask = (req, res) => {
  Task.findOne({_id : req.params.id})
  .then(update => {
    let task = {
      task : req.body.task || update.task,
      tags : req.body.tags || update.tags,
      isComplete : false
    }
    Task.findOneAndUpdate({_id : req.params.id}, task)
    .then(updated => {
      res.send(updated)
    })
  })
  .catch(err => {
    res.status(500).send(err.message)
  })
}

exports.deleteTask = (req, res) => {
  Task.remove({_id: req.params.id})
  .then(deleted => {
    res.send(deeted)
  })
  .catch(err => {
    res.status(500).send(err.message)
  })
}