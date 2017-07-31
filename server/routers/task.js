'use strict'
const router = require('express').Router();
const taskCtrl = require('../controller/taskControl')

// router.get('/', (req, res) => {
//   console.log('task');
//   res.send('task');
// })

router.get('/', taskCtrl.getAll)

router.post('/', taskCtrl.create)

router.put('/edit/:id', taskCtrl.updateTask)

router.delete('/edit/:d', taskCtrl.deleteTask)

module.exports = router;