export class Step {
    endDate! : Date;
    title!: string;
    subtitle!: string;
    imageUrl! : string;
    planName!: string; // change in planId
    planWeek! : number;

    constructor(endDate : Date,title: string,subtitle: string,imageUrl : string,planName: string, planWeek : number) {
      this.endDate = endDate;
      this.title = title;
      this.subtitle = subtitle;
      this.planName = planName;
      this.imageUrl = imageUrl;
      this.planWeek = planWeek;
    }
  }
  