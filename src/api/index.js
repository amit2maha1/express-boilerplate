const express = require('express');

const project = require('../constants/project');
const { route } = require('./auth/auth.routes');
const auth = require('./auth/auth.routes')
const users = require('./users/users.routes')

const router = express.Router();

router.get('/', (req, res) => {
  res.json({message: project.message})
})

router.use('/auth', auth);
router.use('/users', users)

module.exports = router;