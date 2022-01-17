import { Step } from './Step';

export class Plan {
  id! : number;
  title!: string;
  subtitle!: string;
  duration!: number;
  imageUrl!: string;
  level! : number;
  steps! : Step[];

  constructor(id : number, title: string, subtitle: string, duration: number, imageUrl: string,level : number,steps : Step[]) {
    this.id = id;
    this.title = title;
    this.duration = duration;
    this.imageUrl = imageUrl;
    this.subtitle = subtitle;
    this.level = level;
    this.steps = steps;
  }
}
