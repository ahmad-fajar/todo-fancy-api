'use strict'
const router = require('express').Router();

router.get('/', (req, res) => {
  console.log('Index page');
  res.send('Index page');
});

module.exports = router;