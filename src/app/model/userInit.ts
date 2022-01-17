import { classToPlain } from 'class-transformer';

export class UserInit {
    username: string;
    email: string;
    password: string;

    constructor(username: string, email: string, password: string) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    jsonify():string{
        return JSON.stringify({
            "username":this.username,
            "email":this.email,
            "password":this.password
        })
    }
}