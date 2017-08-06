'use strict'
const Task = require('../models/task');
const User = require('../models/user')

// create
// exports.create = (req, res) => {
//   let task = {
//     task : req.body.task,
//     tags : req.body.tags,
//     isComplete : false
//   }
//   Task.create(task)
//   .then(created => {
//     console.log(created._id);
//     res.send(created)
//   })
//   .catch(err => {
//     res.status(500).send(err)
//   })
// }

exports.createTask = (req, res) => {
  let task = {
    task : req.body.task,
    tags : req.body.tags,
    isComplete : false
  }
  Task.create(task)
  .then(created => {
    // res.send(created)
    User.updateOne({
      _id : req.body.userId
    }, {
      $push : {
        task_list : created._id
      }
    })
    .then(added => {
      res.send(added);
    })
    .catch(err => {
      res.status(500).send(err)
    })
  })
  .catch(err => {
    res.status(500).send(err)
  })
}


// read
exports.getAll = (req, res) => {
  Task.find({})
  .then(tasks => {
    res.send(tasks)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

exports.findById = (req, res) => {
  Task.findOne({_id : req.params.id})
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}


// update
exports.updateTask = (req, res) => {
  Task.findOne({_id : req.params.id})
  .then(update => {
    let task = {
      task : req.body.task || update.task,
      tags : req.body.tags || update.tags,
      isComplete : req.body.isComplete || false
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


// delete
exports.deleteTask = (req, res) => {
  Task.remove({_id: req.params.id})
  .then(deleted => {
    res.send(deleted)
  })
  .catch(err => {
    res.status(500).send(err.message)
  })
}