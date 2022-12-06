const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const Post = require('../models/Post.js');

module.exports = Router().post('/', authenticate, async (req, res, next) => {
  try {
    const post = await Post.insert({
      description: req.body.description,
      user_id: req.user.id,
    });
    res.json(post);
  } catch (e) {
    next(e);
  }
});
