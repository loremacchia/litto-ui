import { Interest } from 'src/app/model/Interest';
import { Plan } from './Plan';


export class SearchReturn {
    tags!: Interest[];
    plans!: Plan[];
  
    constructor(tags: Interest[], plans: Plan[]) {
      this.tags = tags,
      this.plans = plans;
    }
  }
  