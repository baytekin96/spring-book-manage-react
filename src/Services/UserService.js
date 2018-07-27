class UserService{
    user_token;
    constructor() {
        this.user_token = localStorage.getItem("user_token");
    }
}