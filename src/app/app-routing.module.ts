import { StepCreateComponent } from './components/plan/create/step-create/step-create.component';
import { CreatePlanFirstComponent } from './components/plan/create/create-plan-first/create-plan-first.component';
import { ActiveStepsComponent } from './components/active-steps/active-steps.component';
import { StepCompleteComponent } from './components/plan/complete/step-complete/step-complete.component';
import { StartPlanDateComponent } from './components/plan/overview/start-plan-date/start-plan-date.component';
import { PlanOverviewComponent } from './components/plan/overview/plan-overview/plan-overview.component';
import { SearchResultsComponent } from './components/home/search-results/search-results.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/user/login/login-page/login-page.component'
import { RegisterPageComponent } from './components/user/login/register-page/register-page.component'
import { WelcomePageComponent } from './components/user/login/welcome-page/welcome-page.component'
import { RegisterSecondComponent } from './components/user/login/register-second/register-second.component'
import { DisplayInterestsComponent } from './components/user/login/display-interests/display-interests.component'
import { UserPageComponent } from './components/user/user-page/user-page.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'user/login', component: LoginPageComponent },
  { path: 'user/register', component: RegisterPageComponent },
  { path: 'user/register-second', component: RegisterSecondComponent },
  { path: 'user/display-interests', component: DisplayInterestsComponent },
  { path: 'user/user-page', component: UserPageComponent },
  { path: 'home/home-page', component: HomePageComponent },
  { path: 'home/search-page', component: SearchResultsComponent },
  { path: 'plan/overview/view-plan', component: PlanOverviewComponent },
  { path: 'plan/overview/start-plan', component: StartPlanDateComponent },
  { path: 'plan/complete/step-complete', component: StepCompleteComponent },
  { path: 'active-steps', component: ActiveStepsComponent },
  { path: 'plan/create/create-plan-first', component: CreatePlanFirstComponent},
  { path: 'plan/create/step-create', component: StepCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
