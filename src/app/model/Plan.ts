import { Step } from './Step';

export class Plan {
  id! : string;
  title!: string;
  subtitle!: string;
  duration!: number;
  imageUrl!: string;
  level! : number;
  steps! : Step[];

  constructor(id : string, title: string, subtitle: string, duration: number, imageUrl: string,level : number,steps : Step[]) {
    this.id = id;
    this.title = title;
    this.duration = duration;
    this.imageUrl = imageUrl;
    this.subtitle = subtitle;
    this.level = level;
    this.steps = steps;
  }
}
