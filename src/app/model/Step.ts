import { DomSanitizer } from '@angular/platform-browser';
import { TuiDay } from '@taiga-ui/cdk';
export class Step {
  endDate!: string;
  endDateCorr!: TuiDay;
  title!: string;
  subtitle!: string;
  imageUrl!: string;
  planName!: string;
  planId!: number;
  planWeek!: number;
  material!:[{[key:string]:string}];
  materialLength!:number;

  constructor(
    endDate: string,
    title: string,
    subtitle: string,
    imageUrl: string,
    planName: string,
    planWeek: number,
    planId: number
  ) {
    this.endDate = endDate;
    this.title = title;
    this.subtitle = subtitle;
    this.planName = planName;
    this.imageUrl = imageUrl;
    this.planWeek = planWeek;
    this.planId = planId;
  }

  getFormatted(date : TuiDay): string {
    console.log(this.endDate)
    const dd = date.formattedDayPart;
    const mm = date.formattedMonthPart;
    return `${dd}${' / '}${mm}`;
  }

  normalize() {
    let day = parseInt(this.endDate.slice(0, 2), 10);
    let month =  parseInt(this.endDate.slice(3, 5), 10) - 1;
    let year= parseInt(this.endDate.slice(6, 10), 10);
    this.endDateCorr = TuiDay.normalizeOf(year, month, day);
  }
}
