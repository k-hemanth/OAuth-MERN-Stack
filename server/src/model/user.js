var dataModel = require("../utilities/connection")
var userBeen = require("./beenclass/userclass")

var usersDB = {}


usersDB.checkUser = (userData) => {
    return dataModel.getUserCollection().then((collection) => {
        return collection.findOne({ Fbid: userData.id }).then(valid => {
            if (valid) return true;
            else return false
        })
    })
}


usersDB.login = (userData) => {
    return dataModel.getUserCollection().then(collection => {
        return usersDB.checkUser(userData).then(userValid => {
            if (userValid) {
                var userDataBeen = new userBeen(userData)
                // console.log("object")
                return collection.updateOne(
                    { Fbid: userDataBeen.Fbid },
                    { $set: { previousLogin: true } }
                ).then(updatedData => {
                    return collection.findOne({ Fbid: userDataBeen.Fbid }).then(userLoginData => {
                        return userLoginData
                    })
                })
            } else {
                var userDataBeen = new userBeen(userData)
                // console.log(userDataBeen)
                return collection.create(userDataBeen).then(insertData => {
                    return insertData
                })
            }
        })
    })
}


module.exports = usersDB;
