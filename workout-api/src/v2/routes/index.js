const express = require('express');

const router = express.Router();

router.route("/").get((req, res) => {
    res.send(`Hello from ${req.baseUrl}. This is version 2.`);
});

module.exports = router;