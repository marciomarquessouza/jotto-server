const express = require('express');
const router = express.Router();
const randomWord = require("../services/randomWord/randomWord");

router.get('/', function(req, res) {
  const word = randomWord();
  res.send(word);
});

module.exports = router;
