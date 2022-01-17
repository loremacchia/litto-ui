import { classToPlain } from 'class-transformer';

export class UserCreate {
    id! : number;
    bio!: string;
    name!: string;
    surname!: string;
    interests!: string[];

    constructor(){}

    setInitial(id : number, bio: string, name: string, surname: string){
        this.id = id;
        this.bio = bio;
        this.name = name;
        this.surname = surname;
    }

    setInterests(interests : string[]){
        this.interests = Object.assign([], interests);
    }

}