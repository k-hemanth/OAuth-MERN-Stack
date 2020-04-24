class UserLogin {
    constructor(obj) {
        this.Fbid = obj.id;
        this.name = obj.name;
        this.previousLogin = obj.previousLogin;
    }
}

module.exports = UserLogin;
