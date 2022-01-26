import { classToPlain } from 'class-transformer';

export class Interest {
    inter: string;
    url: string;
    isActive?: boolean = false;
    level!: number

    constructor(inter: string, url: string, level: number = 10) {
        this.inter = inter;
        this.url = url;
        this.level = level;
    }
}