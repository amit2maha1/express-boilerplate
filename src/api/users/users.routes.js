const express = require('express');
const User = require('./users.model');

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User
    .query()
    .select('id', 'email', 'name', 'created_at', 'updated_at');
  res.json(users);
});

router.post('/', async (req, res) => {
  try {
    const user = await User
      .query()
        .insert(req.body);
  } catch (error) {
    
  }
})
module.exports = router;
