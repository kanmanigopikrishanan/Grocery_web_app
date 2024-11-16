const express = require("express");
const { get } = require("mongoose");
const router = express.Router();


router.route('/products').get(getProducts);



module.exports = router;