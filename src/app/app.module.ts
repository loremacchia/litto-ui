import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiRootModule, TuiDialogModule, TuiNotificationsModule, TUI_SANITIZER, 
  TuiSvgModule, TuiPrimitiveTextfieldModule,TuiDropdownControllerModule, TuiDataListModule, TuiCalendarModule } from "@taiga-ui/core";
import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule, TuiInputPasswordModule, TuiCheckboxBlockModule, TuiTextAreaModule, TuiTagModule,
        TuiIslandModule, TuiFieldErrorModule, TuiBadgedContentModule, TuiAvatarModule, TuiTabsModule, 
        TuiPaginationModule, TuiCalendarRangeModule,TuiToggleModule, TuiInputTimeModule} from '@taiga-ui/kit';
import {TuiButtonModule, TUI_ICONS} from '@taiga-ui/core';
import { LoginFieldsComponent } from './components/login-fields/login-fields.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { RegisterSecondComponent } from './components/register-second/register-second.component';
import { HttpClientModule } from "@angular/common/http";
import { DisplayInterestsComponent } from './components/display-interests/display-interests.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PlanSliderComponent } from './components/injectables/plan-slider/plan-slider.component';
import { FooterTabsComponent } from './components/injectables/footer-tabs/footer-tabs.component';
import { SearchItemComponent } from './components/injectables/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { BackComponent } from './components/injectables/back/back.component';
import { PlanOverviewComponent } from './components/plan-overview/plan-overview.component';
import { SliderStepsComponent } from './components/injectables/slider-steps/slider-steps.component';
import { StartPlanDateComponent } from './components/start-plan-date/start-plan-date.component';
import { StepCompleteComponent } from './components/step-complete/step-complete.component';
import { ActiveStepsComponent } from './components/active-steps/active-steps.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFieldsComponent,
    LoginPageComponent,
    RegisterPageComponent,
    WelcomePageComponent,
    RegisterSecondComponent,
    DisplayInterestsComponent,
    UserPageComponent,
    HomePageComponent,
    PlanSliderComponent,
    FooterTabsComponent,
    SearchItemComponent,
    SearchResultsComponent,
    BackComponent,
    PlanOverviewComponent,
    SliderStepsComponent,
    StartPlanDateComponent,
    StepCompleteComponent,
    ActiveStepsComponent
  ],
  imports: [
    BrowserModule,
    TuiInputTimeModule,
    TuiTabsModule,
    TuiSvgModule,
    TuiToggleModule,
    AppRoutingModule,
    TuiCalendarRangeModule,
    TuiTagModule,
    TuiRootModule,
    TuiPrimitiveTextfieldModule,
    BrowserAnimationsModule,
    TuiCalendarModule,
    TuiDialogModule,
    TuiNotificationsModule,
    FormsModule,
    TuiPaginationModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiCheckboxBlockModule,
    TuiButtonModule,
    TuiIslandModule,
    TuiFieldErrorModule,
    TuiBadgedContentModule,
    TuiAvatarModule,
    TuiTextAreaModule,
    TuiBadgedContentModule,
    HttpClientModule,
    TuiDropdownControllerModule,
    TuiDataListModule
],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
