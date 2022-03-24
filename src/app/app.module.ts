import { TokenInterceptorService } from './services/token-interceptor.service';
import { StepCreateComponent } from './components/plan/create/step-create/step-create.component';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiNotificationsModule,
  TUI_SANITIZER,
  TuiSvgModule,
  TuiPrimitiveTextfieldModule,
  TuiDropdownControllerModule,
  TuiDataListModule,
  TuiCalendarModule,
  TuiTextfieldControllerModule,
  TuiHostedDropdownModule,
  TuiLinkModule,
  TuiHintModule,
  TuiTooltipModule,
  TuiNotificationModule
} from '@taiga-ui/core';
import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TuiEditorModule } from '@taiga-ui/addon-editor'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {
  TuiInputModule,
  TuiInputPasswordModule,
  TuiCheckboxBlockModule,
  TuiTextAreaModule,
  TuiTagModule,
  TuiIslandModule,
  TuiMarkerIconModule,
  TuiFieldErrorModule,
  TuiBadgedContentModule,
  TuiAvatarModule,
  TuiTabsModule,
  TuiPaginationModule,
  TuiProgressModule,
  TuiCalendarRangeModule,
  TuiToggleModule,
  TuiInputTimeModule,
  TuiSliderModule,
  TuiInputTagModule,
  TuiPdfViewerModule,
  TuiInputNumberModule,
  TuiInputFileModule
} from '@taiga-ui/kit';
import {TuiReorderModule} from '@taiga-ui/addon-table/components/reorder';
import {YouTubePlayerModule} from '@angular/youtube-player';
	 
import { TuiButtonModule, TUI_ICONS } from '@taiga-ui/core';
import { LoginPageComponent } from './components/user/login/login-page/login-page.component';
import { RegisterPageComponent } from './components/user/login/register-page/register-page.component';
import { WelcomePageComponent } from './components/user/login/welcome-page/welcome-page.component';
import { RegisterSecondComponent } from './components/user/login/register-second/register-second.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DisplayInterestsComponent } from './components/user/login/display-interests/display-interests.component';
import { UserPageComponent } from './components/user/user-page/user-page.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { PlanSliderComponent } from './components/injectables/plan-slider/plan-slider.component';
import { FooterTabsComponent } from './components/injectables/footer-tabs/footer-tabs.component';
import { SearchItemComponent } from './components/injectables/search-item/search-item.component';
import { SearchResultsComponent } from './components/home/search-results/search-results.component';
import { BackComponent } from './components/injectables/back/back.component';
import { PlanOverviewComponent } from './components/plan/overview/plan-overview/plan-overview.component';
import { SliderStepsComponent } from './components/injectables/slider-steps/slider-steps.component';
import { StartPlanDateComponent } from './components/plan/overview/start-plan-date/start-plan-date.component';
import { StepCompleteComponent } from './components/plan/complete/step-complete/step-complete.component';
import { ActiveStepsComponent } from './components/active-steps/active-steps.component';
import { CreatePlanFirstComponent } from './components/plan/create/create-plan-first/create-plan-first.component';

@NgModule({
  declarations: [
    AppComponent,
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
    ActiveStepsComponent,
    CreatePlanFirstComponent,
    StepCreateComponent
  ],
  imports: [
    BrowserModule,
    TuiInputTimeModule,
    TuiTabsModule,
    TuiPdfViewerModule,
    TuiHintModule,
    TuiSvgModule,
    TuiEditorModule,
    TuiToggleModule,
    AppRoutingModule,
    TuiTooltipModule,
    TuiMarkerIconModule,
    TuiTextfieldControllerModule,
    YouTubePlayerModule,
    TuiLinkModule,
    PdfViewerModule,
    TuiProgressModule,
    TuiHostedDropdownModule,
    TuiCalendarRangeModule,
    TuiSliderModule,
    TuiNotificationModule,
    TuiInputFileModule,
    TuiReorderModule,
    TuiInputTagModule,
    TuiTagModule,
    TuiRootModule,
    TuiPrimitiveTextfieldModule,
    BrowserAnimationsModule,
    TuiInputNumberModule,
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
    TuiDataListModule,
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
              { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },],
  bootstrap: [AppComponent],
})
export class AppModule {}
