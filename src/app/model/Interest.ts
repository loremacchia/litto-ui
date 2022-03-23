import { classToPlain } from 'class-transformer';

export class Interest {
    name: string;
    imageUrl: string;
    isActive?: boolean = false;
    level!: number

    constructor(name: string, imageUrl: string, level: number = 1) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.level = level;
    }
}