const express = require('express');
const router = express.Router();
const path = require('path');
router.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'view','index.html'))
})
module.exports = router;