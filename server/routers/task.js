'use strict'
const router = require('express').Router();
const taskCtrl = require('../controller/taskControl')

// router.get('/', (req, res) => {
//   console.log('task');
//   res.send('task');
// })

// create
router.post('/', taskCtrl.createTask)

// read
router.get('/', taskCtrl.getAll)
router.get('/:id', taskCtrl.findById)

// update
router.put('/:id', taskCtrl.updateTask)

// delete
router.delete('/:id', taskCtrl.deleteTask)

module.exports = router;