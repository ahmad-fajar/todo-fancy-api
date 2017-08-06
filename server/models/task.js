'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  task:{
    type: String,
    required: true
  },
  tags:{
    type: String
  },
  isComplete: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

const Task = mongoose.model('tasks', taskSchema);
module.exports = Task;