const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.render('index', {
        pageID: "Home"
    });
})


module.exports = router;