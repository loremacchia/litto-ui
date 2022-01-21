import { StepCreateComponent } from './components/step-create/step-create.component';
import { CreatePlanFirstComponent } from './components/create-plan-first/create-plan-first.component';
import { ActiveStepsComponent } from './components/active-steps/active-steps.component';
import { StepCompleteComponent } from './components/step-complete/step-complete.component';
import { StartPlanDateComponent } from './components/start-plan-date/start-plan-date.component';
import { PlanOverviewComponent } from './components/plan-overview/plan-overview.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component'
import { RegisterPageComponent } from './components/register-page/register-page.component'
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component'
import { RegisterSecondComponent } from './components/register-second/register-second.component'
import { DisplayInterestsComponent } from './components/display-interests/display-interests.component'
import { UserPageComponent } from './components/user-page/user-page.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'register-second', component: RegisterSecondComponent },
  { path: 'display-interests', component: DisplayInterestsComponent },
  { path: 'user-page', component: UserPageComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'search-page', component: SearchResultsComponent },
  { path: 'view-plan', component: PlanOverviewComponent },
  { path: 'start-plan', component: StartPlanDateComponent },
  { path: 'step-complete', component: StepCompleteComponent },
  { path: 'active-steps', component: ActiveStepsComponent },
  { path: 'create-plan-first', component: CreatePlanFirstComponent},
  { path: 'step-create', component: StepCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
