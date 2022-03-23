import { classToPlain } from 'class-transformer';

export class UserCreate {
    bio!: string;
    name!: string;
    surname!: string;
    interests!: string[];
    imageUrl!:string;

    constructor(){}

    setInitial(bio: string, name: string, surname: string,imageUrl:string){
        this.bio = bio;
        this.name = name;
        this.surname = surname;
        this.imageUrl = imageUrl;
    }

    setInterests(interests : string[]){
        this.interests = Object.assign([], interests);
    }

}