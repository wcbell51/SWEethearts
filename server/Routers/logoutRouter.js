const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  req.session.destroy((err) => {
    res.sendStatus(200);
  });
});

module.exports = router;
