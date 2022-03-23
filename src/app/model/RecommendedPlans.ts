import { Plan } from './Plan';


export class RecommendedPlan {
    plans!: Plan[];
  
    constructor(plans: Plan[]) {
      this.plans = plans;
    }
  }
  