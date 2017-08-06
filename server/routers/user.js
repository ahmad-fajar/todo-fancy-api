'use strict'
const router = require('express').Router();
const userCtrl = require('../controller/userControl');

// router.get('/', (req, res) => {
//   console.log('user');
//   res.send('user');
// })

// create
router.post('/', userCtrl.createUser);

// read
router.get('/', userCtrl.getAll);
router.get('/:id', userCtrl.findById);

// update
router.put('/:id', userCtrl.updateUser);

// delete
router.delete('/:id', userCtrl.deleteUser);

module.exports = router;