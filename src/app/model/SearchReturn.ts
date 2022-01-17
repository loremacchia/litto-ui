import { Plan } from './Plan';


export class SearchReturn {
    tags!: string[];
    plans!: Plan[];
  
    constructor(tags: string[], plans: Plan[]) {
      this.tags = tags,
      this.plans = plans;
    }
  }
  