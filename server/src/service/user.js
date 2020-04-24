var userDBModel  = require("../model/user")
var userService = {}

userService.login = (userData) => {
    // console.log(userData)
    return userDBModel.login(userData).then((data)=>{
        return {name:data.name,previousLogin:data.previousLogin}
    })
    
}


module.exports = userService