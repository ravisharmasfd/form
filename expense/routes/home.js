const express = require('express');
const router = express.Router();
const path = require('path');
router.use('/',(req,res)=>{
    res.sendFile(path.join(require.main.path,'view','index.html'))
})
module.exports = router;