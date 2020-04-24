const { Schema } = require("mongoose");
var Mongoose = require("mongoose")
Mongoose.Promise = global.Promise;
var url = 'mongodb://localhost:27017/OAuthApp_DB';

//userSchema
var userSchema = Schema({
    Fbid: { type: String, unique: true },
    name: { type: String },
    previousLogin: { type: Boolean, default: false }
})


//IncomeSchema


var collection = {}

collection.getUserCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then((database) => {
        return database.model("Users", userSchema)
    }).catch(() => {
        let err = new Error("Could not connect to Database user collection");
        err.status = 500;
        throw err;
    })
}

module.exports = collection