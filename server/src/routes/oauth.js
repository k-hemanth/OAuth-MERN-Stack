var express = require('express');
var userService = require("../service/user")
var router = express.Router();


//userSet UP
router.get("/test", (req, res, next) => {
    res.json({ message: "Hi" })
})


router.post("/login", (req, res, next) => {
    userService.login(req.body).then((data)=>{
        res.json({ message: data })
    })
})

module.exports = router
