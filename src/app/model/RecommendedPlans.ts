import { Plan } from './Plan';


export class RecommendedPlan {
    name!: string;
    plans!: Plan[];
  
    constructor(name: string, plans: Plan[]) {
      this.name = name,
      this.plans = plans;
    }
  }
  