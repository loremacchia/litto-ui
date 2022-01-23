"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _components_step_create_step_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/step-create/step-create.component */ 97984);
/* harmony import */ var _components_create_plan_first_create_plan_first_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/create-plan-first/create-plan-first.component */ 52946);
/* harmony import */ var _components_active_steps_active_steps_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/active-steps/active-steps.component */ 31411);
/* harmony import */ var _components_step_complete_step_complete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/step-complete/step-complete.component */ 83735);
/* harmony import */ var _components_start_plan_date_start_plan_date_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/start-plan-date/start-plan-date.component */ 3651);
/* harmony import */ var _components_plan_overview_plan_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/plan-overview/plan-overview.component */ 24182);
/* harmony import */ var _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search-results/search-results.component */ 31246);
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home-page/home-page.component */ 56538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login-page/login-page.component */ 48091);
/* harmony import */ var _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register-page/register-page.component */ 47364);
/* harmony import */ var _components_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/welcome-page/welcome-page.component */ 18254);
/* harmony import */ var _components_register_second_register_second_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/register-second/register-second.component */ 26057);
/* harmony import */ var _components_display_interests_display_interests_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/display-interests/display-interests.component */ 85519);
/* harmony import */ var _components_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user-page/user-page.component */ 19773);

















const routes = [
    { path: '', component: _components_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_10__.WelcomePageComponent },
    { path: 'login', component: _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__.LoginPageComponent },
    { path: 'register', component: _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_9__.RegisterPageComponent },
    { path: 'register-second', component: _components_register_second_register_second_component__WEBPACK_IMPORTED_MODULE_11__.RegisterSecondComponent },
    { path: 'display-interests', component: _components_display_interests_display_interests_component__WEBPACK_IMPORTED_MODULE_12__.DisplayInterestsComponent },
    { path: 'user-page', component: _components_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_13__.UserPageComponent },
    { path: 'home-page', component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__.HomePageComponent },
    { path: 'search-page', component: _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_6__.SearchResultsComponent },
    { path: 'view-plan', component: _components_plan_overview_plan_overview_component__WEBPACK_IMPORTED_MODULE_5__.PlanOverviewComponent },
    { path: 'start-plan', component: _components_start_plan_date_start_plan_date_component__WEBPACK_IMPORTED_MODULE_4__.StartPlanDateComponent },
    { path: 'step-complete', component: _components_step_complete_step_complete_component__WEBPACK_IMPORTED_MODULE_3__.StepCompleteComponent },
    { path: 'active-steps', component: _components_active_steps_active_steps_component__WEBPACK_IMPORTED_MODULE_2__.ActiveStepsComponent },
    { path: 'create-plan-first', component: _components_create_plan_first_create_plan_first_component__WEBPACK_IMPORTED_MODULE_1__.CreatePlanFirstComponent },
    { path: 'step-create', component: _components_step_create_step_create_component__WEBPACK_IMPORTED_MODULE_0__.StepCreateComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _components_step_create_step_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/step-create/step-create.component */ 97984);
/* harmony import */ var _tinkoff_ng_dompurify__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @tinkoff/ng-dompurify */ 34455);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/platform-browser/animations */ 52650);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @taiga-ui/core */ 19011);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @taiga-ui/core */ 12812);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @taiga-ui/core */ 29788);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @taiga-ui/core */ 85570);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @taiga-ui/core */ 84247);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @taiga-ui/core */ 2754);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @taiga-ui/core */ 18178);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @taiga-ui/core */ 21804);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @taiga-ui/core */ 32863);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @taiga-ui/core */ 64318);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @taiga-ui/core */ 16528);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @taiga-ui/core */ 78588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @taiga-ui/addon-editor */ 25813);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app.component */ 74518);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @taiga-ui/kit */ 78710);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @taiga-ui/kit */ 64362);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @taiga-ui/kit */ 56456);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @taiga-ui/kit */ 40705);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @taiga-ui/kit */ 7445);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @taiga-ui/kit */ 2731);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @taiga-ui/kit */ 12913);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @taiga-ui/kit */ 56052);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @taiga-ui/kit */ 35704);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @taiga-ui/kit */ 29981);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @taiga-ui/kit */ 86456);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @taiga-ui/kit */ 26629);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @taiga-ui/kit */ 93342);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @taiga-ui/kit */ 54008);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @taiga-ui/kit */ 65042);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @taiga-ui/kit */ 69716);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @taiga-ui/kit */ 4250);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @taiga-ui/kit */ 47727);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @taiga-ui/kit */ 41163);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @taiga-ui/kit */ 67007);
/* harmony import */ var _taiga_ui_addon_table_components_reorder__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @taiga-ui/addon-table/components/reorder */ 52945);
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/youtube-player */ 83904);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @taiga-ui/core */ 62850);
/* harmony import */ var _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login-page/login-page.component */ 48091);
/* harmony import */ var _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register-page/register-page.component */ 47364);
/* harmony import */ var _components_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/welcome-page/welcome-page.component */ 18254);
/* harmony import */ var _components_register_second_register_second_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register-second/register-second.component */ 26057);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _components_display_interests_display_interests_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/display-interests/display-interests.component */ 85519);
/* harmony import */ var _components_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user-page/user-page.component */ 19773);
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home-page/home-page.component */ 56538);
/* harmony import */ var _components_injectables_plan_slider_plan_slider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/injectables/plan-slider/plan-slider.component */ 10780);
/* harmony import */ var _components_injectables_footer_tabs_footer_tabs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/injectables/footer-tabs/footer-tabs.component */ 36678);
/* harmony import */ var _components_injectables_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/injectables/search-item/search-item.component */ 86332);
/* harmony import */ var _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/search-results/search-results.component */ 31246);
/* harmony import */ var _components_injectables_back_back_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/injectables/back/back.component */ 38600);
/* harmony import */ var _components_plan_overview_plan_overview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/plan-overview/plan-overview.component */ 24182);
/* harmony import */ var _components_injectables_slider_steps_slider_steps_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/injectables/slider-steps/slider-steps.component */ 46898);
/* harmony import */ var _components_start_plan_date_start_plan_date_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/start-plan-date/start-plan-date.component */ 3651);
/* harmony import */ var _components_step_complete_step_complete_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/step-complete/step-complete.component */ 83735);
/* harmony import */ var _components_active_steps_active_steps_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/active-steps/active-steps.component */ 31411);
/* harmony import */ var _components_create_plan_first_create_plan_first_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/create-plan-first/create-plan-first.component */ 52946);


































let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.NgModule)({
        declarations: [
            _components_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
            _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__.LoginPageComponent,
            _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__.RegisterPageComponent,
            _components_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_5__.WelcomePageComponent,
            _components_register_second_register_second_component__WEBPACK_IMPORTED_MODULE_6__.RegisterSecondComponent,
            _components_display_interests_display_interests_component__WEBPACK_IMPORTED_MODULE_7__.DisplayInterestsComponent,
            _components_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_8__.UserPageComponent,
            _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__.HomePageComponent,
            _components_injectables_plan_slider_plan_slider_component__WEBPACK_IMPORTED_MODULE_10__.PlanSliderComponent,
            _components_injectables_footer_tabs_footer_tabs_component__WEBPACK_IMPORTED_MODULE_11__.FooterTabsComponent,
            _components_injectables_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_12__.SearchItemComponent,
            _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_13__.SearchResultsComponent,
            _components_injectables_back_back_component__WEBPACK_IMPORTED_MODULE_14__.BackComponent,
            _components_plan_overview_plan_overview_component__WEBPACK_IMPORTED_MODULE_15__.PlanOverviewComponent,
            _components_injectables_slider_steps_slider_steps_component__WEBPACK_IMPORTED_MODULE_16__.SliderStepsComponent,
            _components_start_plan_date_start_plan_date_component__WEBPACK_IMPORTED_MODULE_17__.StartPlanDateComponent,
            _components_step_complete_step_complete_component__WEBPACK_IMPORTED_MODULE_18__.StepCompleteComponent,
            _components_active_steps_active_steps_component__WEBPACK_IMPORTED_MODULE_19__.ActiveStepsComponent,
            _components_create_plan_first_create_plan_first_component__WEBPACK_IMPORTED_MODULE_20__.CreatePlanFirstComponent,
            _components_step_create_step_create_component__WEBPACK_IMPORTED_MODULE_0__.StepCreateComponent
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_24__.TuiInputTimeModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_25__.TuiTabsModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_26__.TuiPdfViewerModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_27__.TuiSvgModule,
            _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_28__.TuiEditorModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_29__.TuiToggleModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_30__.TuiTextfieldControllerModule,
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_31__.YouTubePlayerModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_32__.TuiLinkModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_33__.TuiProgressModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_34__.TuiHostedDropdownModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_35__.TuiCalendarRangeModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_36__.TuiSliderModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_37__.TuiInputFileModule,
            _taiga_ui_addon_table_components_reorder__WEBPACK_IMPORTED_MODULE_38__.TuiReorderModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_39__.TuiInputTagModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_40__.TuiTagModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_41__.TuiRootModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_42__.TuiPrimitiveTextfieldModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_43__.BrowserAnimationsModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_44__.TuiInputNumberModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_45__.TuiCalendarModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_46__.TuiDialogModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_47__.TuiNotificationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_48__.FormsModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_49__.TuiPaginationModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_48__.ReactiveFormsModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_50__.TuiInputModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_51__.TuiInputPasswordModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_52__.TuiCheckboxBlockModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_53__.TuiButtonModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_54__.TuiIslandModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_55__.TuiFieldErrorModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_56__.TuiBadgedContentModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_57__.TuiAvatarModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_58__.TuiTextAreaModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_56__.TuiBadgedContentModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_59__.HttpClientModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_60__.TuiDropdownControllerModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_61__.TuiDataListModule,
        ],
        providers: [{ provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_62__.TUI_SANITIZER, useClass: _tinkoff_ng_dompurify__WEBPACK_IMPORTED_MODULE_63__.NgDompurifySanitizer }],
        bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 31411:
/*!*******************************************************************!*\
  !*** ./src/app/components/active-steps/active-steps.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveStepsComponent": () => (/* binding */ ActiveStepsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_active_steps_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./active-steps.component.html */ 48624);
/* harmony import */ var _active_steps_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./active-steps.component.css */ 72876);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/local-storage.service */ 27109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/home.service */ 62626);







let ActiveStepsComponent = class ActiveStepsComponent {
    constructor(homeService, router, localService) {
        this.homeService = homeService;
        this.router = router;
        this.localService = localService;
        this.searchContent = '';
        this.activeItemIndex = 1;
    }
    ngOnInit() {
        this.userId = this.localService.getLogId();
        this.homeService.getCurrentGoals(this.userId).subscribe((steps) => {
            for (let s of steps) {
                s.normalize();
            }
            this.steps = steps;
        });
    }
    goToStep(step) {
        this.router.navigateByUrl("/step-complete", { state: { planId: step.planId } });
    }
};
ActiveStepsComponent.ctorParameters = () => [
    { type: _services_home_service__WEBPACK_IMPORTED_MODULE_3__.HomeService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService }
];
ActiveStepsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-active-steps',
        template: _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_active_steps_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_active_steps_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ActiveStepsComponent);



/***/ }),

/***/ 74518:
/*!*********************************************!*\
  !*** ./src/app/components/app.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 67036);
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ 12104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 18346);





let AppComponent = class AppComponent {
    constructor() {
        this.title = 'litto-ui';
        this.Ids = {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
        };
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            agreeToToC: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.requiredTrue),
        });
    }
    exportIDs() {
        console.log("gigiigigigigi");
        if (this.form.controls['agreeToToC'].value) {
            this.Ids.email = this.form.controls['email'].value;
            this.Ids.firstName = this.form.controls['firstName'].value;
            this.Ids.lastName = this.form.controls['lastName'].value;
            this.Ids.password = this.form.controls['password'].value;
        }
        else {
            this.Ids.email = "";
            this.Ids.firstName = "";
            this.Ids.lastName = "";
            this.Ids.password = "";
        }
    }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 59122:
/*!************************************************!*\
  !*** ./src/app/components/constants/editor.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorConstant": () => (/* binding */ EditorConstant)
/* harmony export */ });
/* harmony import */ var _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/addon-editor */ 66724);

class EditorConstant {
}
EditorConstant.tools = [
    _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_0__.TuiEditorTool.Undo,
    _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_0__.TuiEditorTool.Size,
    _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_0__.TuiEditorTool.Bold,
    _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_0__.TuiEditorTool.Italic,
    _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_0__.TuiEditorTool.Underline,
    _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_0__.TuiEditorTool.Strikethrough,
    _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_0__.TuiEditorTool.Align,
    _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_0__.TuiEditorTool.List,
    _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_0__.TuiEditorTool.Link,
    _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_0__.TuiEditorTool.Color,
];


/***/ }),

/***/ 52946:
/*!*****************************************************************************!*\
  !*** ./src/app/components/create-plan-first/create-plan-first.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePlanFirstComponent": () => (/* binding */ CreatePlanFirstComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_create_plan_first_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./create-plan-first.component.html */ 45115);
/* harmony import */ var _create_plan_first_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-plan-first.component.css */ 28757);
/* harmony import */ var _services_file_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/file-upload.service */ 90207);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/local-storage.service */ 27109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/home.service */ 62626);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);









let CreatePlanFirstComponent = class CreatePlanFirstComponent {
    constructor(fileUploadService, localService, homeService, router) {
        this.fileUploadService = fileUploadService;
        this.localService = localService;
        this.homeService = homeService;
        this.router = router;
        this.searchActive = '';
        this.activeItemIndex = 2;
        this.imageUrl = 'https://www.idmore.it/wp-content/uploads/2016/12/ef3-placeholder-image.jpg';
        this.loading = false; // Flag variable
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            level: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(1),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            subtitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            // weeks: new FormControl(1),
            discord: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(true),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl([]),
        });
    }
    ngOnInit() {
        this.userId = this.localService.getLogId();
        if (this.localService.getCreatingPlan(this.userId)) {
            this.parseJson(this.localService.getCreatingPlan(this.userId));
        }
    }
    searchTag() {
        this.homeService.searchForString(this.searchActive).subscribe((search) => {
            this.search = search;
        });
    }
    goCustSteps() {
        this.localService.setCreatingPlan(this.createJson());
        this.router.navigateByUrl('/step-create', { state: { number: 1 } });
    }
    uploadImage(event) {
        this.file = event.target.files[0];
        this.loading = !this.loading;
        console.log(this.file);
        this.fileUploadService.upload(this.file).subscribe(event => {
            event = JSON.stringify(event);
            let e = JSON.parse(event);
            if (e["url"] != "False") {
                console.log(e["url"]);
                this.imageUrl = e["url"];
            }
        });
    }
    createJson() {
        const dict = {
            userId: this.userId,
            imageUrl: this.imageUrl,
            level: this.form.controls['level'].value,
            title: this.form.controls['title'].value,
            subtitle: this.form.controls['subtitle'].value,
            // weeks: this.form.controls['weeks'].value,
            discord: this.form.controls['discord'].value,
            tags: this.form.controls['tags'].value,
        };
        return JSON.stringify(dict);
    }
    parseJson(dict) {
        var d = JSON.parse(dict);
        this.imageUrl = d['imageUrl'];
        this.form.controls['level'].setValue(d['level']);
        this.form.controls['title'].setValue(d['title']);
        this.form.controls['subtitle'].setValue(d['subtitle']);
        // this.form.controls['weeks'].setValue(d['weeks']);
        this.form.controls['discord'].setValue(d['discord']);
        this.form.controls['tags'].setValue(d['tags']);
    }
};
CreatePlanFirstComponent.ctorParameters = () => [
    { type: _services_file_upload_service__WEBPACK_IMPORTED_MODULE_2__.FileUploadService },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService },
    { type: _services_home_service__WEBPACK_IMPORTED_MODULE_4__.HomeService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
CreatePlanFirstComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-create-plan-first',
        template: _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_create_plan_first_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_create_plan_first_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreatePlanFirstComponent);



/***/ }),

/***/ 85519:
/*!*****************************************************************************!*\
  !*** ./src/app/components/display-interests/display-interests.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayInterestsComponent": () => (/* binding */ DisplayInterestsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_display_interests_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./display-interests.component.html */ 58230);
/* harmony import */ var _display_interests_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-interests.component.css */ 35437);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/local-storage.service */ 27109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-service.service */ 36194);
/* harmony import */ var src_app_model_UserCreate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/UserCreate */ 84664);








let DisplayInterestsComponent = class DisplayInterestsComponent {
    constructor(activatedRoute, userService, localService, router) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.localService = localService;
        this.router = router;
        this.actualInterests = [];
        this.user = new src_app_model_UserCreate__WEBPACK_IMPORTED_MODULE_4__.UserCreate();
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(() => {
            if (window.history.state['user'] !== undefined) {
                this.user.setInitial(window.history.state['user'].id, window.history.state['user'].bio, window.history.state['user'].name, window.history.state['user'].surname, window.history.state['user'].imageUrl);
                this.id = window.history.state['user'].id;
            }
            else {
                this.id = this.localService.getLogId();
                this.user.setInitial(this.id, '', '', '', "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png");
            }
        });
        this.getInterests().subscribe((val) => {
            this.interests = val;
            if (window.history.state['user'] !== undefined &&
                window.history.state['user'].interests !== undefined) {
                this.actualInterests = window.history.state['user'].interests;
                for (let i of this.interests) {
                    if (this.actualInterests.includes(i.inter)) {
                        i.isActive = true;
                    }
                }
            }
        });
    }
    getInterests() {
        return this.userService.getInitialInterests();
    }
    clicky(i) {
        i.isActive = !i.isActive;
    }
    computeActualInterests() {
        this.actualInterests = [];
        for (let i of this.interests) {
            if (i.isActive) {
                this.actualInterests.push(i.inter);
            }
        }
    }
    completeUserAccount() {
        this.computeActualInterests();
        this.user.setInterests(this.actualInterests);
        this.userService
            .completeUserAccount(this.id, this.user)
            .subscribe((val) => {
            this.router.navigateByUrl('/user-page');
        });
    }
    back() {
        this.computeActualInterests();
        this.user.setInterests(this.actualInterests);
        this.router.navigateByUrl('/register-second', {
            state: { id: this.id, user: this.user },
        });
    }
};
DisplayInterestsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__.UserServiceService },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
DisplayInterestsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-display-interests',
        template: _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_display_interests_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_display_interests_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], DisplayInterestsComponent);



/***/ }),

/***/ 56538:
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home-page.component.html */ 92712);
/* harmony import */ var _home_page_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page.component.css */ 20097);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/local-storage.service */ 27109);
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/home.service */ 62626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);







let HomePageComponent = class HomePageComponent {
    constructor(homeService, localService, router) {
        this.homeService = homeService;
        this.localService = localService;
        this.router = router;
        this.searchContent = '';
        this.activeItemIndex = 0;
    }
    ngOnInit() {
        this.id = this.localService.getLogId();
        this.homeService.getCurrentGoals(this.id).subscribe((steps) => {
            console.log(steps);
            for (let s of steps) {
                s.normalize();
            }
            console.log(steps);
            this.steps = steps;
            console.log(this.steps);
        });
    }
    goToStep(step) {
        this.router.navigateByUrl("/step-complete", { state: { planId: step.planId } });
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _services_home_service__WEBPACK_IMPORTED_MODULE_3__.HomeService },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
HomePageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home-page',
        template: _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePageComponent);



/***/ }),

/***/ 38600:
/*!***************************************************************!*\
  !*** ./src/app/components/injectables/back/back.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackComponent": () => (/* binding */ BackComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_back_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./back.component.html */ 63486);
/* harmony import */ var _back_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./back.component.css */ 38867);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);





let BackComponent = class BackComponent {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() { }
    back() {
        this.location.back();
    }
};
BackComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
BackComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-back',
        template: _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_back_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_back_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], BackComponent);



/***/ }),

/***/ 36678:
/*!*****************************************************************************!*\
  !*** ./src/app/components/injectables/footer-tabs/footer-tabs.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterTabsComponent": () => (/* binding */ FooterTabsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_tabs_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./footer-tabs.component.html */ 40318);
/* harmony import */ var _footer_tabs_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer-tabs.component.css */ 25957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let FooterTabsComponent = class FooterTabsComponent {
    constructor() { }
    ngOnInit() { }
};
FooterTabsComponent.ctorParameters = () => [];
FooterTabsComponent.propDecorators = {
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
FooterTabsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-footer-tabs',
        template: _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_tabs_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_footer_tabs_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], FooterTabsComponent);



/***/ }),

/***/ 10780:
/*!*****************************************************************************!*\
  !*** ./src/app/components/injectables/plan-slider/plan-slider.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanSliderComponent": () => (/* binding */ PlanSliderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_plan_slider_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./plan-slider.component.html */ 7767);
/* harmony import */ var _plan_slider_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plan-slider.component.css */ 17194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);





let PlanSliderComponent = class PlanSliderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    goOverview(plan) {
        this.router.navigateByUrl('/view-plan', {
            state: { planId: plan.id },
        });
    }
};
PlanSliderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
PlanSliderComponent.propDecorators = {
    plans: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
PlanSliderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-plan-slider',
        template: _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_plan_slider_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_plan_slider_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], PlanSliderComponent);



/***/ }),

/***/ 86332:
/*!*****************************************************************************!*\
  !*** ./src/app/components/injectables/search-item/search-item.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchItemComponent": () => (/* binding */ SearchItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./search-item.component.html */ 3967);
/* harmony import */ var _search_item_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-item.component.css */ 57406);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/home.service */ 62626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 18346);







let SearchItemComponent = class SearchItemComponent {
    constructor(homeService, router) {
        this.homeService = homeService;
        this.router = router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            searchedValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(),
        });
    }
    searchStringInit() {
        this.homeService
            .searchForString(this.form.controls['searchedValue'].value)
            .subscribe((search) => {
            this.search = search;
            console.log(this.search);
        });
    }
    searchString(val) {
        console.log(val);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigateByUrl('/search-page', {
            state: { searched: val },
        }));
    }
    ngOnInit() { }
};
SearchItemComponent.ctorParameters = () => [
    { type: _services_home_service__WEBPACK_IMPORTED_MODULE_2__.HomeService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
SearchItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-search-item',
        template: _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_item_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_search_item_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], SearchItemComponent);



/***/ }),

/***/ 46898:
/*!*******************************************************************************!*\
  !*** ./src/app/components/injectables/slider-steps/slider-steps.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderStepsComponent": () => (/* binding */ SliderStepsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_slider_steps_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./slider-steps.component.html */ 78083);
/* harmony import */ var _slider_steps_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider-steps.component.css */ 10085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let SliderStepsComponent = class SliderStepsComponent {
    constructor() { }
    ngOnInit() { }
};
SliderStepsComponent.ctorParameters = () => [];
SliderStepsComponent.propDecorators = {
    step: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
SliderStepsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-slider-steps',
        template: _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_slider_steps_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_slider_steps_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], SliderStepsComponent);



/***/ }),

/***/ 48091:
/*!***************************************************************!*\
  !*** ./src/app/components/login-page/login-page.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageComponent": () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login-page.component.html */ 55885);
/* harmony import */ var _login_page_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page.component.css */ 19305);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/local-storage.service */ 27109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-service.service */ 36194);








let LoginPageComponent = class LoginPageComponent {
    constructor(userService, localService, router) {
        this.userService = userService;
        this.localService = localService;
        this.router = router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
        });
    }
    ngOnInit() { }
    login() {
        this.userService
            .loginUser(this.form.controls['email'].value, this.form.controls['password'].value)
            .subscribe((retrievedId) => {
            this.localService.setCurrentUserId(retrievedId);
            this.router.navigateByUrl('/user-page');
        });
    }
};
LoginPageComponent.ctorParameters = () => [
    { type: src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__.UserServiceService },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
LoginPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login-page',
        template: _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPageComponent);



/***/ }),

/***/ 24182:
/*!*********************************************************************!*\
  !*** ./src/app/components/plan-overview/plan-overview.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanOverviewComponent": () => (/* binding */ PlanOverviewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_plan_overview_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./plan-overview.component.html */ 27653);
/* harmony import */ var _plan_overview_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plan-overview.component.css */ 56265);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/local-storage.service */ 27109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/plan.service */ 25929);







let PlanOverviewComponent = class PlanOverviewComponent {
    constructor(activatedRoute, planService, localService, router) {
        this.activatedRoute = activatedRoute;
        this.planService = planService;
        this.localService = localService;
        this.router = router;
        this.activeItemIndex = 0;
        this.weekIndex = 0;
    }
    ngOnInit() {
        this.userId = this.localService.getLogId();
        this.activatedRoute.paramMap.subscribe(() => {
            if (window.history.state['planId'] !== undefined) {
                this.planId = window.history.state['planId'];
            }
            else {
                this.planId = 0;
            }
            console.log(this.planId);
            this.planService.getPlan(this.planId).subscribe((plan) => {
                this.plan = plan;
                this.length = this.plan.steps.length;
                this.currentStep = this.searchStep(this.weekIndex);
                console.log(this.plan);
            });
        });
    }
    searchStep(idWeek) {
        for (var s of this.plan.steps) {
            if (s.planWeek == idWeek + 1) {
                return s;
            }
        }
        return this.plan.steps[0];
    }
    changeIndex(index) {
        this.weekIndex = index;
        this.currentStep = this.searchStep(this.weekIndex);
    }
    startPlan() {
        this.router.navigateByUrl('/start-plan', {
            state: { plan: this.plan },
        });
    }
};
PlanOverviewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_3__.PlanService },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
PlanOverviewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-plan-overview',
        template: _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_plan_overview_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_plan_overview_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], PlanOverviewComponent);



/***/ }),

/***/ 47364:
/*!*********************************************************************!*\
  !*** ./src/app/components/register-page/register-page.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageComponent": () => (/* binding */ RegisterPageComponent)
/* harmony export */ });
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 62783);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./register-page.component.html */ 53867);
/* harmony import */ var _register_page_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-page.component.css */ 65584);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/local-storage.service */ 27109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _model_userInit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../model/userInit */ 83383);
/* harmony import */ var src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user-service.service */ 36194);










let RegisterPageComponent = class RegisterPageComponent {
  constructor(userService, localService, router) {
    this.userService = userService;
    this.localService = localService;
    this.router = router;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required)
    });
  }

  ngOnInit() {}

  createUser() {
    var _this = this;

    return (0,_home_lorem_Documents_Universit_HCI_litto_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.userService.createUser(new _model_userInit__WEBPACK_IMPORTED_MODULE_4__.UserInit(_this.form.controls['username'].value, _this.form.controls['email'].value, _this.form.controls['password'].value)).subscribe(retrievedId => {
        _this.id = +retrievedId;

        _this.localService.setCurrentUserId(retrievedId);

        _this.router.navigateByUrl('/register-second');
      });
    })();
  }

};

RegisterPageComponent.ctorParameters = () => [{
  type: src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_5__.UserServiceService
}, {
  type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}];

RegisterPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-register-page',
  template: _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
  styles: [_register_page_component_css__WEBPACK_IMPORTED_MODULE_2__]
})], RegisterPageComponent);


/***/ }),

/***/ 26057:
/*!*************************************************************************!*\
  !*** ./src/app/components/register-second/register-second.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterSecondComponent": () => (/* binding */ RegisterSecondComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_second_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./register-second.component.html */ 8625);
/* harmony import */ var _register_second_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-second.component.css */ 33313);
/* harmony import */ var _services_file_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/file-upload.service */ 90207);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/local-storage.service */ 27109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_model_UserCreate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/UserCreate */ 84664);









let RegisterSecondComponent = class RegisterSecondComponent {
    constructor(activatedRoute, localService, router, fileUploadService) {
        this.activatedRoute = activatedRoute;
        this.localService = localService;
        this.router = router;
        this.fileUploadService = fileUploadService;
        this.loading = false; // Flag variable
        this.imageUrl = 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png';
        this.user = new src_app_model_UserCreate__WEBPACK_IMPORTED_MODULE_4__.UserCreate();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
        });
    }
    ngOnInit() {
        // Usare storeUserSubInfo invece che tutta sta roba
        this.activatedRoute.paramMap.subscribe(() => {
            if (window.history.state['user'] !== undefined) {
                this.form.controls['name'].setValue(window.history.state['user'].name);
                this.form.controls['surname'].setValue(window.history.state['user'].surname);
                this.form.controls['bio'].setValue(window.history.state['user'].bio);
                this.id = window.history.state['user'].id;
                this.imageUrl = window.history.state['user'].imageUrl;
                this.user.setInitial(this.id, window.history.state['user'].bio, window.history.state['user'].name, window.history.state['user'].surname, this.imageUrl);
                this.user.setInterests(window.history.state['user'].interests);
            }
            else {
                this.id = this.localService.getLogId();
            }
        });
    }
    sendData() {
        this.user.setInitial(this.id, this.form.controls['bio'].value, this.form.controls['name'].value, this.form.controls['surname'].value, this.imageUrl);
        this.router.navigateByUrl('/display-interests', {
            state: { id: this.id, user: this.user },
        });
    }
    uploadImage(event) {
        this.file = event.target.files[0];
        this.loading = !this.loading;
        console.log(this.file);
        this.fileUploadService.upload(this.file).subscribe((event) => {
            event = JSON.stringify(event);
            let e = JSON.parse(event);
            if (e['url'] != 'False') {
                console.log(e['url']);
                this.imageUrl = e['url'];
            }
        });
    }
};
RegisterSecondComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_file_upload_service__WEBPACK_IMPORTED_MODULE_2__.FileUploadService }
];
RegisterSecondComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-register-second',
        template: _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_second_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_register_second_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterSecondComponent);



/***/ }),

/***/ 31246:
/*!***********************************************************************!*\
  !*** ./src/app/components/search-results/search-results.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultsComponent": () => (/* binding */ SearchResultsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_results_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./search-results.component.html */ 95913);
/* harmony import */ var _search_results_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-results.component.css */ 67917);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/local-storage.service */ 27109);
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/home.service */ 62626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);







let SearchResultsComponent = class SearchResultsComponent {
    constructor(activatedRoute, homeService, localService, router) {
        this.activatedRoute = activatedRoute;
        this.homeService = homeService;
        this.localService = localService;
        this.router = router;
        this.activeItemIndex = 0;
        this.plans = [];
        this.tags = [];
    }
    ngOnInit() {
        this.id = this.localService.getLogId();
        this.activatedRoute.paramMap.subscribe(() => {
            if (window.history.state['searched'] !== undefined) {
                this.searched = window.history.state['searched'];
                this.homeService.searchForString(this.searched).subscribe((val) => {
                    this.plans = val.plans;
                    this.tags = val.tags;
                });
            }
            else {
                this.router.navigateByUrl('/home-page');
            }
        });
    }
    searchString(val) {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigateByUrl('/search-page', {
            state: { searched: val },
        }));
    }
};
SearchResultsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _services_home_service__WEBPACK_IMPORTED_MODULE_3__.HomeService },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
SearchResultsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-search-results',
        template: _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_results_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_search_results_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], SearchResultsComponent);



/***/ }),

/***/ 3651:
/*!*************************************************************************!*\
  !*** ./src/app/components/start-plan-date/start-plan-date.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPlanDateComponent": () => (/* binding */ StartPlanDateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_start_plan_date_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./start-plan-date.component.html */ 7123);
/* harmony import */ var _start_plan_date_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-plan-date.component.css */ 94752);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/local-storage.service */ 27109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/plan.service */ 25929);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ 97031);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);









let StartPlanDateComponent = class StartPlanDateComponent {
    constructor(activatedRoute, planService, localService, router) {
        this.activatedRoute = activatedRoute;
        this.planService = planService;
        this.localService = localService;
        this.router = router;
        this.activeItemIndex = 1;
        this.firstMonth = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__.TuiMonth.currentLocal();
        this.hoveredItem = null;
        this.notificationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            notifications: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(true),
            notifyTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__.TuiTime(12, 30)),
        });
    }
    onDayClick(day) {
        let year = day.year;
        let month = day.month;
        let da = day.day;
        let counter = 0;
        while (counter < this.plan.duration * 7) {
            counter += 1;
            da += 1;
            if (da > day.daysCount) {
                month += 1;
                da = 1;
            }
            if (month > 11) {
                year += 1;
                month = 0;
            }
        }
        let day1 = new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__.TuiDay(year, month, da);
        this.value = new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__.TuiDayRange(day, day1);
    }
    ngOnInit() {
        this.userId = this.localService.getLogId();
        this.activatedRoute.paramMap.subscribe(() => {
            if (window.history.state['plan'] !== undefined) {
                this.plan = window.history.state['plan'];
            }
            else {
                this.router.navigateByUrl('/view-plan', {
                    state: {
                        planId: 0,
                    },
                });
            }
            this.onDayClick(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__.TuiDay.currentLocal());
        });
    }
    startPlan() {
        this.planService
            .startPlan(this.userId, this.plan, this.value.from.toString(), this.value.to.toString()) //per riportarle ok usare parseRawDateString
            .subscribe((activePlanId) => this.router.navigateByUrl('/step-complete', {
            state: { planId: activePlanId },
        }));
    }
};
StartPlanDateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_3__.PlanService },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
StartPlanDateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-start-plan-date',
        template: _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_start_plan_date_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_start_plan_date_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], StartPlanDateComponent);



/***/ }),

/***/ 83735:
/*!*********************************************************************!*\
  !*** ./src/app/components/step-complete/step-complete.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepCompleteComponent": () => (/* binding */ StepCompleteComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_step_complete_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./step-complete.component.html */ 95473);
/* harmony import */ var _step_complete_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step-complete.component.css */ 32170);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/local-storage.service */ 27109);
/* harmony import */ var src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/plan.service */ 25929);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ 56456);









let StepCompleteComponent = class StepCompleteComponent {
    // @ViewChild('player') player: any;
    constructor(activatedRoute, sanitizer, pdfService, localService, planService, router) {
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.pdfService = pdfService;
        this.localService = localService;
        this.planService = planService;
        this.router = router;
        this.activeItemIndex = 1;
        this.planInfo = {
            planId: 0,
        };
        this.totalMaterials = 1;
        this.materialIndex = this.localService.getMaterialIndex();
        this.playerWidth = window.innerWidth * 0.775;
        this.playerHeight = this.playerWidth * 0.65;
    }
    ngOnInit() {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
        this.userId = this.localService.getLogId();
        this.activatedRoute.paramMap.subscribe(() => {
            if (window.history.state['planId'] !== undefined) {
                this.planInfo.planId = window.history.state['planId'];
            }
            this.planService.getActiveStep(this.userId, this.planInfo.planId).subscribe((step) => {
                // step.normalize();
                this.step = step;
                console.log(this.step.planWeek);
                this.totalMaterials = this.step.material.length;
            });
        });
    }
    sanitize(s) {
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(s);
        return this.urlSafe;
    }
    prevMaterial() {
        this.materialIndex--;
        this.localService.setMaterialIndex(this.materialIndex);
    }
    nextMaterial() {
        this.materialIndex++;
        this.localService.setMaterialIndex(this.materialIndex);
    }
    show(actions, url) {
        this.pdfService
            .open(this.sanitizer.bypassSecurityTrustResourceUrl(url), {
            label: 'Taiga UI',
            actions,
        })
            .subscribe();
    }
    completeStep() {
        this.planService.completeStep(this.userId, this.planInfo.planId).subscribe(val => {
            if (val) {
                console.log("finish plan");
            }
            else {
                console.log("finish step");
            }
            this.localService.removeMaterialIndex();
            this.router.navigateByUrl('/home-page');
        });
    }
};
StepCompleteComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer },
    { type: _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__.TuiPdfViewerService },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService },
    { type: src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_3__.PlanService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
StepCompleteComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-step-complete',
        template: _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_step_complete_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_step_complete_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], StepCompleteComponent);



/***/ }),

/***/ 97984:
/*!*****************************************************************!*\
  !*** ./src/app/components/step-create/step-create.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepCreateComponent": () => (/* binding */ StepCreateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_step_create_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./step-create.component.html */ 1655);
/* harmony import */ var _step_create_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step-create.component.css */ 83822);
/* harmony import */ var _services_file_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/file-upload.service */ 90207);
/* harmony import */ var _constants_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../constants/editor */ 59122);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/local-storage.service */ 27109);
/* harmony import */ var src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/plan.service */ 25929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ 50061);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @taiga-ui/cdk */ 20308);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 74172);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 43028);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 18252);














let StepCreateComponent = class StepCreateComponent {
    constructor(activatedRoute, localService, router, planService, fileUploadService) {
        this.activatedRoute = activatedRoute;
        this.localService = localService;
        this.router = router;
        this.planService = planService;
        this.fileUploadService = fileUploadService;
        this.activeItemIndex = 2;
        this.clicked = false;
        this.steps = [];
        this.printableSteps = [];
        this.enabled = this.steps;
        this.arrow = _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__.TUI_ARROW;
        this.tools = _constants_editor__WEBPACK_IMPORTED_MODULE_3__.EditorConstant.tools;
        this.items = [
            {
                label: 'YouTube',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polygon points="160 128 112 96 112 160 160 128" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polygon><path d="M24,128c0,29.8,3.1,47.2,5.4,56.2A16.1,16.1,0,0,0,39,195.1c33.5,12.8,89,12.5,89,12.5s55.5.3,89-12.5a16.1,16.1,0,0,0,9.6-10.9c2.3-9,5.4-26.4,5.4-56.2s-3.1-47.2-5.4-56.2A16.1,16.1,0,0,0,217,60.9c-33.5-12.8-89-12.5-89-12.5s-55.5-.3-89,12.5a16.1,16.1,0,0,0-9.6,10.9C27.1,80.8,24,98.2,24,128Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
            },
            {
                label: 'PDF',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><polyline points="152 32 152 88 208 88" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><line x1="96" y1="136" x2="160" y2="136" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="96" y1="168" x2="160" y2="168" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>',
            },
            {
                label: 'Link',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="94.1" y1="161.9" x2="161.9" y2="94" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
            },
            {
                label: 'Spreaker',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="120" r="24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M130.9,224h-5.8a16,16,0,0,1-15.7-12.9l-9.6-48A16,16,0,0,1,115.5,144h25a16,16,0,0,1,15.7,19.1l-9.6,48A16,16,0,0,1,130.9,224Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M68.3,151.2a64,64,0,1,1,119.4,0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M76.4,208.9a96,96,0,1,1,103.2,0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
            },
            {
                label: 'Text',
                icon: 'tuiIconEditLarge',
            },
        ];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            subtitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
        });
        this.formSpreaker = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            link: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
        });
        this.formYouTube = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            link: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
        });
        this.formText = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
        });
        this.formLink = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            link: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
        });
        this.formPDF = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            fileLink: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
        });
    }
    ngOnInit() {
        this.userId = this.localService.getLogId();
        this.activatedRoute.paramMap.subscribe(() => {
            if (window.history.state['number'] !== undefined) {
                this.planWeek = window.history.state['number'];
                if (this.localService.getCreatingStep(this.planWeek)) {
                    this.populateForm(this.localService.getCreatingStep(this.planWeek));
                }
            }
            else {
                this.router.navigateByUrl('/create-plan-first');
            }
        });
    }
    populateForm(prevStep) {
        this.form.controls['title'].setValue(prevStep['title']);
        this.form.controls['subtitle'].setValue(prevStep['subtitle']);
        this.steps = prevStep['material'];
        for (let s of this.steps) {
            this.printableSteps.push(s['title']);
        }
    }
    addMaterialComp(item) {
        this.selectedMaterial = item;
    }
    goCustStepsNext() {
        this.goCustSteps();
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigateByUrl('/step-create', {
            state: { number: this.planWeek + 1 },
        }));
    }
    goCustStepsPrev() {
        this.goCustSteps();
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigateByUrl('/step-create', {
            state: { number: this.planWeek - 1 },
        }));
    }
    goCustSteps() {
        this.localService.setCreatingStep(this.createJson());
    }
    createJson() {
        const dict = {
            planWeek: this.planWeek,
            title: this.form.controls['title'].value,
            subtitle: this.form.controls['subtitle'].value,
            material: this.orderMaterial(),
        };
        return dict;
    }
    orderMaterial() {
        let lst = [];
        for (let s of this.printableSteps) {
            for (let st of this.steps) {
                if (s == st['title']) {
                    lst.push(st);
                }
            }
        }
        return lst;
    }
    stepAdd(type) {
        switch (type) {
            case 'Spreaker':
                this.steps.push({
                    type: type,
                    title: this.formSpreaker.controls['title'].value,
                    link: this.formSpreaker.controls['link'].value,
                    description: this.formSpreaker.controls['description'].value,
                });
                this.printableSteps.push(this.formSpreaker.controls['title'].value);
                this.formSpreaker.controls['title'].setValue('');
                this.formSpreaker.controls['link'].setValue('');
                this.formSpreaker.controls['description'].setValue('');
                break;
            case 'PDF':
                this.steps.push({
                    type: type,
                    title: this.formPDF.controls['title'].value,
                    file: this.formPDF.controls['fileLink'].value,
                });
                this.printableSteps.push(this.formPDF.controls['title'].value);
                this.formPDF.controls['title'].setValue('');
                this.formPDF.controls['fileLink'].setValue('');
                this.formPDF.controls['file'].setValue(undefined);
                break;
            case 'YouTube':
                this.steps.push({
                    type: type,
                    title: this.formYouTube.controls['title'].value,
                    link: this.formYouTube.controls['link'].value,
                    description: this.formYouTube.controls['description'].value,
                });
                this.printableSteps.push(this.formYouTube.controls['title'].value);
                this.formYouTube.controls['title'].setValue('');
                this.formYouTube.controls['link'].setValue('');
                this.formYouTube.controls['description'].setValue('');
                break;
            case 'Text':
                this.steps.push({
                    type: type,
                    title: this.formText.controls['title'].value,
                    text: this.formText.controls['text'].value,
                });
                this.printableSteps.push(this.formText.controls['title'].value);
                this.formText.controls['title'].setValue('');
                this.formText.controls['text'].setValue('');
                break;
            case 'Link':
                this.steps.push({
                    type: type,
                    link: this.formLink.controls['link'].value,
                    title: this.formLink.controls['title'].value,
                    description: this.formLink.controls['description'].value,
                });
                this.printableSteps.push(this.formLink.controls['title'].value);
                this.formLink.controls['link'].setValue('');
                this.formLink.controls['title'].setValue('');
                this.formLink.controls['description'].setValue('');
                break;
            default:
                break;
        }
        console.log(this.steps);
        console.log(this.printableSteps);
    }
    finishStepEditing() {
        if (this.form.controls['title'].value != '' ||
            this.form.controls['subtitle'].value != '') {
            this.goCustSteps();
        }
        let plan = JSON.parse(this.localService.getCreatingPlan(this.userId));
        plan['duration'] = this.localService.getCreatingStepsNumber();
        let steps = this.localService.getCreatingSteps();
        plan['steps'] = steps;
        this.planService.createPlan(plan).subscribe((planIdd) => {
            this.localService.freeCreatingPlanAndSteps(),
                this.router.navigateByUrl('/view-plan', {
                    state: { planId: planIdd },
                });
        });
    }
    get loading$() {
        return this.requests$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((file) => (file instanceof File ? [file] : [])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)([]));
    }
    get requests$() {
        return this.formPDF.controls['file'].valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((file) => file
            ? this.fileUploadService.uploadPdf(file).subscribe((event) => {
                event = JSON.stringify(event);
                let e = JSON.parse(event);
                if (e['url'] != 'False') {
                    console.log(e['url']);
                    this.formPDF.controls['fileLink'].setValue(e['url']);
                }
            })
            : (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(null)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.share)());
    }
};
StepCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_5__.PlanService },
    { type: _services_file_upload_service__WEBPACK_IMPORTED_MODULE_2__.FileUploadService }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_14__.tuiPure
], StepCreateComponent.prototype, "loading$", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_14__.tuiPure
], StepCreateComponent.prototype, "requests$", null);
StepCreateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-step-create',
        template: _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_step_create_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_step_create_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], StepCreateComponent);



/***/ }),

/***/ 19773:
/*!*************************************************************!*\
  !*** ./src/app/components/user-page/user-page.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageComponent": () => (/* binding */ UserPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-page.component.html */ 96349);
/* harmony import */ var _user_page_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-page.component.css */ 65253);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/local-storage.service */ 27109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-service.service */ 36194);







let UserPageComponent = class UserPageComponent {
    constructor(activatedRoute, localService, userService) {
        this.activatedRoute = activatedRoute;
        this.localService = localService;
        this.userService = userService;
        this.activeItemIndex = 3;
    }
    ngOnInit() {
        this.id = this.localService.getLogId();
        this.userService.getUser(this.id).subscribe((user) => {
            console.log(user);
            this.user = user;
            this.user.id = this.id;
            console.log(this.user);
        });
    }
};
UserPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService },
    { type: src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__.UserServiceService }
];
UserPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-user-page',
        template: _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_page_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserPageComponent);



/***/ }),

/***/ 18254:
/*!*******************************************************************!*\
  !*** ./src/app/components/welcome-page/welcome-page.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageComponent": () => (/* binding */ WelcomePageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_welcome_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./welcome-page.component.html */ 36463);
/* harmony import */ var _welcome_page_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-page.component.css */ 31846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let WelcomePageComponent = class WelcomePageComponent {
    constructor() { }
    ngOnInit() {
    }
};
WelcomePageComponent.ctorParameters = () => [];
WelcomePageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-welcome-page',
        template: _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_welcome_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_welcome_page_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], WelcomePageComponent);



/***/ }),

/***/ 42882:
/*!*******************************!*\
  !*** ./src/app/model/Plan.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Plan": () => (/* binding */ Plan)
/* harmony export */ });
class Plan {
    constructor(id, title, subtitle, duration, imageUrl, level, steps) {
        this.id = id;
        this.title = title;
        this.duration = duration;
        this.imageUrl = imageUrl;
        this.subtitle = subtitle;
        this.level = level;
        this.steps = steps;
    }
}


/***/ }),

/***/ 93372:
/*!***************************************!*\
  !*** ./src/app/model/SearchReturn.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchReturn": () => (/* binding */ SearchReturn)
/* harmony export */ });
class SearchReturn {
    constructor(tags, plans) {
        this.tags = tags,
            this.plans = plans;
    }
}


/***/ }),

/***/ 94015:
/*!*******************************!*\
  !*** ./src/app/model/Step.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Step": () => (/* binding */ Step)
/* harmony export */ });
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/cdk */ 97031);

class Step {
    constructor(endDate, title, subtitle, imageUrl, planName, planWeek, planId) {
        this.endDate = endDate;
        this.title = title;
        this.subtitle = subtitle;
        this.planName = planName;
        this.imageUrl = imageUrl;
        this.planWeek = planWeek;
        this.planId = planId;
    }
    getFormatted(date) {
        console.log(this.endDate);
        const dd = date.formattedDayPart;
        const mm = date.formattedMonthPart;
        return `${dd}${' / '}${mm}`;
    }
    normalize() {
        let day = parseInt(this.endDate.slice(0, 2), 10);
        let month = parseInt(this.endDate.slice(3, 5), 10) - 1;
        let year = parseInt(this.endDate.slice(6, 10), 10);
        this.endDateCorr = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__.TuiDay.normalizeOf(year, month, day);
    }
}


/***/ }),

/***/ 3329:
/*!*******************************!*\
  !*** ./src/app/model/User.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
    constructor() { }
    setItems(id, username, email, password, bio, name, surname, interests, plans, imageUrl, level) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.bio = bio;
        this.name = name;
        this.surname = surname;
        this.interests = interests;
        this.plans = plans;
        this.imageUrl = imageUrl;
        this.level = level;
    }
}


/***/ }),

/***/ 84664:
/*!*************************************!*\
  !*** ./src/app/model/UserCreate.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserCreate": () => (/* binding */ UserCreate)
/* harmony export */ });
class UserCreate {
    constructor() { }
    setInitial(id, bio, name, surname, imageUrl) {
        this.id = id;
        this.bio = bio;
        this.name = name;
        this.surname = surname;
        this.imageUrl = imageUrl;
    }
    setInterests(interests) {
        this.interests = Object.assign([], interests);
    }
}


/***/ }),

/***/ 4235:
/*!***********************************!*\
  !*** ./src/app/model/interest.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Interest": () => (/* binding */ Interest)
/* harmony export */ });
class Interest {
    constructor(inter, url, level = 10) {
        this.isActive = false;
        this.inter = inter;
        this.url = url;
        this.level = level;
    }
}


/***/ }),

/***/ 83383:
/*!***********************************!*\
  !*** ./src/app/model/userInit.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInit": () => (/* binding */ UserInit)
/* harmony export */ });
class UserInit {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    jsonify() {
        return JSON.stringify({
            "username": this.username,
            "email": this.email,
            "password": this.password
        });
    }
}


/***/ }),

/***/ 90207:
/*!*************************************************!*\
  !*** ./src/app/services/file-upload.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadService": () => (/* binding */ FileUploadService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 88377);




let FileUploadService = class FileUploadService {
    constructor(http) {
        this.http = http;
        // API url
        this.baseUrl = 'http://192.168.1.135:8000/';
    }
    // Returns an observable
    upload(file) {
        const formData = new FormData();
        formData.append("image", file, file.name);
        console.log(formData);
        return this.http.post(this.baseUrl + "upload-img", formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => res));
    }
    uploadPdf(file) {
        const formData = new FormData();
        formData.append("pdf", file, file.name);
        console.log(formData);
        return this.http.post(this.baseUrl + "upload-pdf", formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => res));
    }
};
FileUploadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
FileUploadService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], FileUploadService);



/***/ }),

/***/ 62626:
/*!******************************************!*\
  !*** ./src/app/services/home.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeService": () => (/* binding */ HomeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _model_SearchReturn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../model/SearchReturn */ 93372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _model_Step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Step */ 94015);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! class-transformer */ 38979);







let HomeService = class HomeService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://192.168.1.135:8000/';
    }
    getCurrentGoals(userId) {
        return this.http.post(this.baseUrl + "/get-current-goals", JSON.stringify(userId))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => (0,class_transformer__WEBPACK_IMPORTED_MODULE_3__.plainToClass)(_model_Step__WEBPACK_IMPORTED_MODULE_1__.Step, res)));
    }
    searchForString(searched) {
        return this.http.post(this.baseUrl + "/search", JSON.stringify(searched))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => (0,class_transformer__WEBPACK_IMPORTED_MODULE_3__.plainToClass)(_model_SearchReturn__WEBPACK_IMPORTED_MODULE_0__.SearchReturn, res)));
    }
};
HomeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
HomeService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], HomeService);



/***/ }),

/***/ 27109:
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageService": () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);



let LocalStorageService = class LocalStorageService {
    constructor(router) {
        this.router = router;
    }
    getCurrentUserId() {
        return JSON.parse(localStorage.getItem('userId'));
    }
    setCurrentUserId(id) {
        localStorage.setItem('userId', JSON.stringify(id));
    }
    checkUser() {
        if (localStorage.getItem('userId')) {
            return true;
        }
        return false;
    }
    getLogId() {
        if (this.checkUser()) {
            return this.getCurrentUserId();
        }
        else {
            this.router.navigateByUrl('/');
        }
    }
    storeUserSubInfo() {
        return true;
    }
    getCreatingPlan(userId) {
        console.log("heyy");
        if (localStorage.getItem('creatingPlans')) {
            var plan = localStorage.getItem('creatingPlans');
            return plan;
        }
        return false;
    }
    setCreatingPlan(json) {
        localStorage.setItem('creatingPlans', json);
    }
    getCreatingStepsNumber() {
        if (localStorage.getItem('creatingSteps')) {
            let d = JSON.parse(localStorage.getItem('creatingSteps'));
            return d.length;
        }
        return 0;
    }
    getCreatingSteps() {
        if (localStorage.getItem('creatingSteps')) {
            let d = JSON.parse(localStorage.getItem('creatingSteps'));
            return d;
        }
        return undefined;
    }
    setCreatingStep(newStep) {
        if (localStorage.getItem('creatingSteps')) {
            console.log(newStep);
            let d = JSON.parse(localStorage.getItem('creatingSteps'));
            let found = false;
            for (let dic of d) {
                if (newStep["planWeek"] == dic["planWeek"]) {
                    found = true;
                    dic["title"] = newStep["title"],
                        dic["subtitle"] = newStep["subtitle"],
                        dic["material"] = newStep["material"];
                }
            }
            if (!found) {
                d.push(newStep);
            }
            localStorage.setItem('creatingSteps', JSON.stringify(d));
        }
        else {
            localStorage.setItem('creatingSteps', JSON.stringify([newStep]));
        }
    }
    getCreatingStep(num) {
        if (localStorage.getItem('creatingSteps')) {
            let d = JSON.parse(localStorage.getItem('creatingSteps'));
            for (let dic of d) {
                if (num == dic["planWeek"]) {
                    return dic;
                }
            }
        }
        return false;
    }
    freeCreatingPlanAndSteps() {
        localStorage.removeItem('creatingSteps');
        localStorage.removeItem('creatingPlans');
    }
    getMaterialIndex() {
        if (localStorage.getItem('materialIndex')) {
            return JSON.parse(localStorage.getItem('materialIndex'));
        }
        else {
            return -1;
        }
    }
    setMaterialIndex(val) {
        localStorage.setItem('materialIndex', JSON.stringify(val));
    }
    removeMaterialIndex() {
        localStorage.removeItem('materialIndex');
    }
};
LocalStorageService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router }
];
LocalStorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], LocalStorageService);



/***/ }),

/***/ 25929:
/*!******************************************!*\
  !*** ./src/app/services/plan.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanService": () => (/* binding */ PlanService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _model_Plan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../model/Plan */ 42882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _model_Step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Step */ 94015);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! class-transformer */ 38979);







let PlanService = class PlanService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://192.168.1.135:8000';
    }
    getPlan(planId) {
        return this.http.post(this.baseUrl + "/get-plan", JSON.stringify(planId))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => (0,class_transformer__WEBPACK_IMPORTED_MODULE_3__.plainToClass)(_model_Plan__WEBPACK_IMPORTED_MODULE_0__.Plan, res)));
    }
    startPlan(userId, plan, from, to) {
        console.log("g9g9");
        return this.http.post(this.baseUrl + "/start-plan", JSON.stringify({ "userId": userId, "planId": plan.id, "dateFrom": from, "dateTo": to }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => (0,class_transformer__WEBPACK_IMPORTED_MODULE_3__.plainToClass)(Number, res)));
    }
    createPlan(newPlan) {
        return this.http.post(this.baseUrl + "/create-plan", JSON.stringify(newPlan))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => (0,class_transformer__WEBPACK_IMPORTED_MODULE_3__.plainToClass)(Number, res)));
    }
    getActiveStep(userId, planId) {
        console.log("gigi");
        return this.http.post(this.baseUrl + "/get-active-step", JSON.stringify({ "userId": userId, "planId": planId }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => (0,class_transformer__WEBPACK_IMPORTED_MODULE_3__.plainToClass)(_model_Step__WEBPACK_IMPORTED_MODULE_1__.Step, res)));
    }
    completeStep(userId, planId) {
        return this.http.post(this.baseUrl + "/next-active-step", JSON.stringify({ "userId": userId, "planId": planId }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => res));
    }
};
PlanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
PlanService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], PlanService);



/***/ }),

/***/ 36194:
/*!**************************************************!*\
  !*** ./src/app/services/user-service.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserServiceService": () => (/* binding */ UserServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var src_app_model_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/model/User */ 3329);
/* harmony import */ var _model_interest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/interest */ 4235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-transformer */ 38979);







let UserServiceService = class UserServiceService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://192.168.1.135:8000/';
    }
    createUser(user) {
        return this.http.post(this.baseUrl + "/create-user", JSON.stringify((0,class_transformer__WEBPACK_IMPORTED_MODULE_2__.classToPlain)(user)));
    }
    loginUser(email, password) {
        console.log("loginUser");
        console.log(email + " " + password);
        let returny = JSON.stringify({ "email": email, "password": password });
        console.log(returny);
        return this.http.post(this.baseUrl + "/login-user", returny);
    }
    getInitialInterests() {
        return this.http.get(this.baseUrl + "/get-interests")
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => (0,class_transformer__WEBPACK_IMPORTED_MODULE_2__.plainToClass)(_model_interest__WEBPACK_IMPORTED_MODULE_1__.Interest, res)));
    }
    completeUserAccount(id, user) {
        return this.http.post(this.baseUrl + "/complete-user", JSON.stringify((0,class_transformer__WEBPACK_IMPORTED_MODULE_2__.classToPlain)(user)));
    }
    getUser(id) {
        return this.http.post(this.baseUrl + "/user-page", JSON.stringify(id))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => (0,class_transformer__WEBPACK_IMPORTED_MODULE_2__.plainToClass)(src_app_model_User__WEBPACK_IMPORTED_MODULE_0__.User, res)));
    }
};
UserServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
UserServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], UserServiceService);



/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 48624:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/active-steps/active-steps.component.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-search-item></app-search-item>\n\n<div>\n  <app-back></app-back>\n</div>\n<div class=\"button-big-space\">\n  <div class=\"tui-text_body-xl big-top-space tui-space_bottom-3\">\n    Active Plans\n  </div>\n  <div *ngIf=\"this.steps\">\n    <!--  TODO modifica ling-->\n    <div *ngFor=\"let s of this.steps\" class=\"tui-space_bottom-5\">\n      <a\n        size=\"m\"\n        (click)=\"goToStep(s)\"\n        tuiIsland\n        [hoverable]=\"true\"\n      >\n        <div class=\"tui-island__content active-plans-island\">\n          <div class=\"spacy-children-row\">\n            <div>\n              <div class=\"tui-island__category\">\n                {{ s.planName }}\n              </div>\n              <h3 class=\"tui-island__title ter-color\">{{ s.title }}</h3>\n            </div>\n\n            <div class=\"prim-color even-little-padding\">\n              <p>{{ s.getFormatted(s.endDateCorr) }}</p>\n            </div>\n          </div>\n\n          <figure class=\"tui-island__figure\">\n            <tui-avatar\n              size=\"m\"\n              [rounded]=\"true\"\n              [avatarUrl]=\"s.imageUrl\"\n              class=\"shadow-light\"\n            ></tui-avatar>\n          </figure>\n\n          <div></div>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n\n<app-footer-tabs [index]=\"this.activeItemIndex\"></app-footer-tabs>\n");

/***/ }),

/***/ 67036:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/app.component.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<tui-root>\n  <div class=\"outer-container\">\n    <router-outlet style=\"position:relative;\"></router-outlet>\n  </div>\n</tui-root>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n <!--    \n  <form [formGroup]=\"form\">\n    <p>\n      <tui-input formControlName=\"email\">\n        Type an email\n      </tui-input>\n      \n      <tui-field-error formControlName=\"email\"></tui-field-error>\n    </p>\n    <p>\n      <tui-input formControlName=\"firstName\" class=\"b-form\">\n        Type an firstName\n      </tui-input>\n    </p>\n    <p>\n      <tui-input formControlName=\"lastName\" class=\"b-form\">\n        Type an lastName\n      </tui-input>\n    </p>\n    <p>\n      <tui-input-password formControlName=\"password\">\n        Type a password\n      </tui-input-password>\n    </p>\n    <p>\n      <tui-checkbox-block formControlName=\"agreeToToC\">\n        agreeToToC\n      </tui-checkbox-block>\n    </p>\n    <p> <button tuiButton type=\"button\" background-color=-tui-base-02 (click)=\"exportIDs()\">\n        Button\n      </button></p>\n  </form>\n\n  <app-login-fields [Ids]=\"Ids\"></app-login-fields>\n  -->\n");

/***/ }),

/***/ 45115:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/create-plan-first/create-plan-first.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-search-item></app-search-item>\n\n<div>\n  <app-back></app-back>\n</div>\n\n<div class=\"button-big-space\">\n  <div class=\"tui-text_body-xl big-top-space tui-space_bottom-3\">\n    Create your Plan!\n  </div>\n\n  <div class=\"center-children\">\n    <div>\n      <tui-avatar\n        size=\"xl\"\n        [rounded]=\"true\"\n        class=\"avatar\"\n        [avatarUrl]=\"imageUrl\"\n      ></tui-avatar>\n      <button\n        tuiIconButton\n        type=\"button\"\n        size=\"m\"\n        appearance=\"secondary-custom\"\n        shape=\"rounded\"\n        icon=\"tuiIconPlus\"\n        class=\"floating-button\"\n        (click)=\"fileInput.click()\"\n      ></button>\n      <input\n        type=\"file\"\n        #fileInput\n        style=\"display: none\"\n        accept=\"image/*\"\n        (change)=\"uploadImage($event)\"\n      />\n    </div>\n  </div>\n  <form [formGroup]=\"form\" class=\"b-form tui-space_top-10\">\n    <div class=\"tui-space_bottom-5\">\n      <div class=\"tui-space_bottom-5\">\n        Difficulty Level\n        <tui-slider\n          formControlName=\"level\"\n          [max]=\"5\"\n          [min]=\"1\"\n          [quantum]=\"1\"\n          [segments]=\"4\"\n          class=\"tui-space_top-2\"\n        ></tui-slider>\n      </div>\n      <div class=\"tui-space_bottom-5\">\n        <tui-input formControlName=\"title\"> Title </tui-input>\n      </div>\n      <tui-text-area formControlName=\"subtitle\" [expandable]=\"true\" [rows]=\"10\">\n        Description\n      </tui-text-area>\n    </div>\n\n    <tui-input-tag\n      formControlName=\"tags\"\n      tuiTextfieldSize=\"m\"\n      class=\"tui-space_top-2\"\n      [tuiTextfieldLabelOutside]=\"true\"\n      [tuiTextfieldCleaner]=\"true\"\n      (input)=\"searchTag()\"\n      [(search)]=\"searchActive\"\n      >Add plan tags\n      <ng-container *ngIf=\"search\">\n        <tui-data-list *tuiDataList>\n          <button *ngFor=\"let item of search.tags\" tuiOption [value]=\"item\">\n            <span class=\"name\">{{ item }}</span>\n          </button>\n        </tui-data-list>\n      </ng-container>\n    </tui-input-tag>\n\n    <tui-island\n      size=\"m\"\n      textAlign=\"left\"\n      class=\"tui-space_top-5\"\n      style=\"box-shadow: 0 0.125rem 0.1875rem rgba(0, 0, 0, 0.1)\"\n    >\n      <div class=\"tui-island__content\">\n        <figure class=\"tui-island__figure\">\n          <tui-toggle size=\"l\" formControlName=\"discord\"></tui-toggle>\n        </figure>\n        <div>\n          <div class=\"tui-text_body-m\" style=\"color: var(--tui-text-02)\">\n            Generate a Discord Community?\n          </div>\n        </div>\n      </div>\n    </tui-island>\n  </form>\n  <!-- <tui-input-number formControlName=\"weeks\" [min]=\"1\" [decimal]=\"'never'\">\n    How many Weeks/Steps?\n</tui-input-number> -->\n  <div class=\"tui-space_top-10 right-children\">\n    <a>\n      <!-- <a routerLink=\"/login\"> -->\n      <button\n        tuiButton\n        type=\"button\"\n        appearance=\"secondary-custom\"\n        iconRight=\"tuiIconChevronRightLarge\"\n        (click)=\"goCustSteps()\"\n      >\n        Customize Steps\n      </button>\n    </a>\n  </div>\n</div>\n\n<app-footer-tabs [index]=\"this.activeItemIndex\"></app-footer-tabs>\n");

/***/ }),

/***/ 58230:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/display-interests/display-interests.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<button\n  tuiIconButton\n  type=\"button\"\n  appearance=\"icon\"\n  size=\"m\"\n  icon=\"tuiIconChevronLeftLarge\"\n  class=\"back-button\"\n  (click)=\"back()\"\n></button>\n\n<div class=\"\">\n  <div class=\"tui-space_bottom-10\">\n    <div class=\"tui-text_body-l class\">Last step!</div>\n    <div class=\"tui-text_h4 class ter-color\">Select your interests</div>\n  </div>\n  <div class=\"interest-container\" class=\"wrapper1 tui-space_bottom-10\">\n    <div\n      *ngFor=\"let i of interests\"\n      class=\"center-children\"\n      (click)=\"clicky(i)\"\n    >\n      <tui-avatar\n        [ngClass]=\"{ shadow: i.isActive === true }\"\n        class=\"tui-space_top-1 pre-trans\"\n        size=\"l\"\n        [avatarUrl]=\"i.url\"\n        style=\"cursor: pointer\"\n      ></tui-avatar>\n      <p\n        [ngStyle]=\"{\n          color: i.isActive === true ? 'var(--prim-custom)' : 'black'\n        }\"\n      >\n        {{ i.inter }}\n      </p>\n    </div>\n  </div>\n  <div class=\"center-children tui-space_bottom-10 tui-space_top-5\">\n    <button\n      tuiButton\n      type=\"button\"\n      appearance=\"primary-custom\"\n      (click)=\"completeUserAccount()\"\n    >\n      Confirm\n    </button>\n  </div>\n</div>\n");

/***/ }),

/***/ 92712:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/home-page/home-page.component.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-search-item></app-search-item>\n\n<div class=\"button-big-space\">\n  <div class=\"tui-text_body-xl big-top-space tui-space_bottom-3\">\n    Steps to Complete\n  </div>\n  <div *ngIf=\"this.steps && this.steps.length > 0\">\n    <!--  TODO modifica ling-->\n    <div *ngFor=\"let s of this.steps\" class=\"tui-space_bottom-5\">\n      <a\n        size=\"l\"\n        tuiIsland\n        [hoverable]=\"true\"\n        (click)=\"goToStep(s)\"\n      >\n        <div class=\"tui-island__category\">\n          {{ s.planName }}\n        </div>\n        <div class=\"tui-island__content\">\n          <figure class=\"tui-island__figure center-children-top\">\n            <tui-avatar\n              size=\"m\"\n              [avatarUrl]=\"s.imageUrl\"\n              class=\"shadow-light\"\n            ></tui-avatar>\n            <div class=\"prim-color\">\n              <p >{{ s.getFormatted(s.endDateCorr) }}</p>\n            </div>\n          </figure>\n\n          <div>\n            <h3 class=\"tui-island__title ter-color\">{{ s.title }}</h3>\n            <p class=\"tui-island__paragraph\">{{ s.subtitle }}</p>\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n  <div *ngIf=\"this.steps && this.steps.length == 0\">\n    <div class=\"prim-color\">No step to complete</div>\n  </div>\n</div>\n\n<app-footer-tabs\n  [index]=\"this.activeItemIndex\"\n></app-footer-tabs>\n");

/***/ }),

/***/ 63486:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/injectables/back/back.component.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<button\n  tuiIconButton\n  type=\"button\"\n  appearance=\"icon\"\n  size=\"xs\"\n  icon=\"tuiIconChevronLeftLarge\"\n  class=\"back-button\"\n  (click)=\"back()\"\n></button>\n");

/***/ }),

/***/ 40318:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/injectables/footer-tabs/footer-tabs.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<tui-tabs [(activeItemIndex)]=\"index\" class=\"tabs\">\n  <button tuiTab [routerLink]=\"['/home-page']\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"28\"\n      height=\"28\"\n      class=\"footer-icon\"\n      viewBox=\"0 0 256 256\"\n    >\n      <rect width=\"256\" height=\"256\" fill=\"none\"></rect>\n      <path\n        d=\"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z\"\n        fill=\"none\"\n        stroke=\"#000000\"\n        stroke-linecap=\"round\"\n        stroke-linejoin=\"round\"\n        stroke-width=\"16\"\n      ></path>\n    </svg>\n  </button>\n  <button tuiTab [routerLink]=\"['/active-steps']\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"28\"\n      height=\"28\"\n      class=\"footer-icon\"\n      viewBox=\"0 0 256 256\"\n    >\n      <rect width=\"256\" height=\"256\" fill=\"none\"></rect>\n      <line\n        x1=\"40\"\n        y1=\"216\"\n        x2=\"40\"\n        y2=\"48\"\n        fill=\"none\"\n        stroke=\"#000000\"\n        stroke-linecap=\"round\"\n        stroke-linejoin=\"round\"\n        stroke-width=\"16\"\n      ></line>\n      <path\n        d=\"M40,168c64-48,112,48,176,0V48C152,96,104,0,40,48\"\n        fill=\"none\"\n        stroke=\"#000000\"\n        stroke-linecap=\"round\"\n        stroke-linejoin=\"round\"\n        stroke-width=\"16\"\n      ></path>\n    </svg>\n  </button>\n  <button tuiTab [routerLink]=\"['/create-plan-first']\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"28\"\n      height=\"28\"\n      class=\"footer-icon\"\n      viewBox=\"0 0 256 256\"\n    >\n      <rect width=\"256\" height=\"256\" fill=\"none\"></rect>\n      <line\n        x1=\"40\"\n        y1=\"128\"\n        x2=\"216\"\n        y2=\"128\"\n        fill=\"none\"\n        stroke=\"#000000\"\n        stroke-linecap=\"round\"\n        stroke-linejoin=\"round\"\n        stroke-width=\"16\"\n      ></line>\n      <line\n        x1=\"128\"\n        y1=\"40\"\n        x2=\"128\"\n        y2=\"216\"\n        fill=\"none\"\n        stroke=\"#000000\"\n        stroke-linecap=\"round\"\n        stroke-linejoin=\"round\"\n        stroke-width=\"16\"\n      ></line>\n    </svg>\n  </button>\n  <button tuiTab [routerLink]=\"['/user-page']\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"28\"\n      height=\"28\"\n      class=\"footer-icon\"\n      viewBox=\"0 0 256 256\"\n    >\n      <rect width=\"256\" height=\"256\" fill=\"none\"></rect>\n      <circle\n        cx=\"128\"\n        cy=\"96\"\n        r=\"64\"\n        fill=\"none\"\n        stroke=\"#000000\"\n        stroke-miterlimit=\"10\"\n        stroke-width=\"16\"\n      ></circle>\n      <path\n        d=\"M31,216a112,112,0,0,1,194,0\"\n        fill=\"none\"\n        stroke=\"#000000\"\n        stroke-linecap=\"round\"\n        stroke-linejoin=\"round\"\n        stroke-width=\"16\"\n      ></path>\n    </svg>\n  </button>\n</tui-tabs>\n");

/***/ }),

/***/ 7767:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/injectables/plan-slider/plan-slider.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"in-row\">\n  <div\n    *ngFor=\"let p of this.plans\"\n    class=\"elems plan-slider\"\n    (click)=\"goOverview(p)\"\n  >\n    <tui-avatar\n      size=\"l\"\n      [avatarUrl]=\"p.imageUrl\"\n      class=\"shadow-light\"\n    ></tui-avatar>\n    <div class=\"tui-text_body-m tui-space_top-2 logo-color plans-show\">\n      {{ p.title }}\n    </div>\n    <div class=\"tui-text_body-s\">{{ p.duration }} Weeks</div>\n  </div>\n</div>\n");

/***/ }),

/***/ 3967:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/injectables/search-item/search-item.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<form [formGroup]=\"form\">\n  <tui-input\n    class=\"search\"\n    formControlName=\"searchedValue\"\n    icon=\"tuiIconSearch\"\n    iconAlign=\"right\"\n    (input)=\"searchStringInit()\"\n    (keyup.enter)=\"searchString(form.controls['searchedValue'].value)\"\n  >\n    Search\n    <ng-container *ngIf=\"search\">\n      <tui-data-list *tuiDataList>\n        <button\n          *ngFor=\"let item of search.plans\"\n          tuiOption\n          [value]=\"item.title\"\n          (click)=\"searchString(item.title)\"\n        >\n          <tui-avatar\n            size=\"s\"\n            class=\"avatar\"\n            [avatarUrl]=\"item.imageUrl || null\"\n            [text]=\"item.title.toString()\"\n          ></tui-avatar>\n          <span class=\"name\">{{ item.title }}</span>\n        </button>\n        <div *ngIf=\"search.plans.length && search.tags.length\">\n          <hr style=\"width: 90%; text-align: left; margin-left: 5%\" />\n        </div>\n\n        <button\n          *ngFor=\"let item of search.tags\"\n          tuiOption\n          [value]=\"item\"\n          (click)=\"searchString(item)\"\n        >\n          <span class=\"name\">{{ item }}</span>\n        </button>\n      </tui-data-list>\n    </ng-container>\n  </tui-input>\n</form>\n");

/***/ }),

/***/ 78083:
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/injectables/slider-steps/slider-steps.component.html ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<a size=\"m\" tuiIsland class=\"shadow-light\">\n  <div class=\"tui-island__content center-children\">\n    <h3 class=\"tui-island__title ter-color\">{{ this.step.title }}</h3>\n    <p class=\"tui-island__paragraph text-center\">{{ this.step.subtitle }}</p>\n  </div>\n</a>\n");

/***/ }),

/***/ 55885:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/login-page/login-page.component.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"sub-page-compress\">\n  <div class=\"two-button tui-space_bottom-10\">\n    <img\n      src=\"https://via.placeholder.com/600x400\"\n      alt=\"gigi\"\n      class=\"medium-img\"\n    />\n    <div\n      class=\"tui-text_h2 class logo-color center-children tui-space_left-3 tui-space_top-3\"\n    >\n      Litto\n    </div>\n  </div>\n  <div class=\"tui-space_bottom-10\">\n    <p class=\"tui-space_bottom-3 prim-color tui-text_body-m\">\n      Log in into your Litto account\n    </p>\n    <form [formGroup]=\"form\">\n      <div class=\"tui-space_bottom-5\">\n        <tui-input formControlName=\"email\"> Email </tui-input>\n      </div>\n      <div>\n        <tui-input-password formControlName=\"password\">\n          Password\n        </tui-input-password>\n      </div>\n    </form>\n  </div>\n  <div class=\"center-children tui-space_bottom-10 tui-space_top-10\">\n    <a routerLink=\"/login\">\n      <button\n        tuiButton\n        type=\"button\"\n        appearance=\"primary-custom\"\n        (click)=\"login()\"\n      >\n        Log in\n      </button>\n    </a>\n    <a routerLink=\"/register\" class=\"tui-space_top-10\">Register?</a>\n  </div>\n</div>\n");

/***/ }),

/***/ 27653:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/plan-overview/plan-overview.component.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-back></app-back>\n\n<div *ngIf=\"plan\" class=\"center-children\">\n  <tui-avatar\n    size=\"xxl\"\n    [rounded]=\"true\"\n    class=\"avatar shadow\"\n    avatarUrl=\"{{ plan.imageUrl }}\"\n  ></tui-avatar>\n  <div class=\"center-children-row tui-space_top-3\">\n    <tui-tag\n      status=\"custom\"\n      class=\"level-{{ plan.level }}\"\n      size=\"l\"\n      [hoverable]=\"true\"\n      [value]=\"'Level ' + plan.level\"\n      class=\"tui-space_right-5\"\n    ></tui-tag>\n    <tui-tag\n      status=\"custom\"\n      size=\"l\"\n      [hoverable]=\"true\"\n      [value]=\"plan.duration + ' Weeks'\"\n      class=\"sec-wrapper\"\n    ></tui-tag>\n  </div>\n\n  <div class=\"tui-text_h5 tui-space_top-5 text-center\">\n    {{ plan.title }}\n  </div>\n  <div class=\"tui-space_top-2 text-center\">{{ plan.subtitle }}</div>\n</div>\n\n<div *ngIf=\"plan\" class=\"tui-space_top-10 center-children\">\n  <div class=\"tui-text_h6 tui-space_bottom-3\">Week</div>\n  <tui-pagination\n    [length]=\"length\"\n    [index]=\"weekIndex\"\n    (indexChange)=\"changeIndex($event)\"\n    class=\"tui-space_bottom-3\"\n  ></tui-pagination>\n\n  <app-slider-steps [step]=\"currentStep\"></app-slider-steps>\n</div>\n\n<div *ngIf=\"plan\" class=\"center-children tui-space_top-10\">\n  <button\n    tuiButton\n    type=\"button\"\n    appearance=\"primary-custom\"\n    (click)=\"startPlan()\"\n  >\n    Start Plan\n  </button>\n</div>\n\n<div class=\"big-footer-space\"></div>\n\n<app-footer-tabs [index]=\"this.activeItemIndex\"></app-footer-tabs>\n");

/***/ }),

/***/ 53867:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/register-page/register-page.component.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"sub-page-compress\">\n  <div class=\"two-button tui-space_bottom-10\">\n    <img\n      src=\"https://via.placeholder.com/600x400\"\n      alt=\"gigi\"\n      class=\"medium-img\"\n    />\n    <div\n      class=\"tui-text_h2 class logo-color center-children tui-space_left-3 tui-space_top-3\"\n    >\n      Litto\n    </div>\n  </div>\n  <div class=\"tui-space_bottom-10\">\n    <p class=\"tui-space_bottom-3 prim-color tui-text_body-m\">\n      Create a new Litto account\n    </p>\n    <form [formGroup]=\"form\">\n      <div class=\"tui-space_bottom-5\">\n        <tui-input formControlName=\"username\"> Username </tui-input>\n      </div>\n      <div class=\"tui-space_bottom-5\">\n        <tui-input formControlName=\"email\"> Email </tui-input>\n      </div>\n      <div>\n        <tui-input-password formControlName=\"password\">\n          Password\n        </tui-input-password>\n      </div>\n    </form>\n  </div>\n  <div class=\"center-children tui-space_bottom-10 tui-space_top-10\">\n    <button\n      tuiButton\n      type=\"button\"\n      appearance=\"primary-custom\"\n      (click)=\"createUser()\"\n    >\n      Register\n    </button>\n    <a routerLink=\"/login\" class=\"tui-space_top-10\">Log In?</a>\n  </div>\n</div>\n");

/***/ }),

/***/ 8625:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/register-second/register-second.component.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"sub-page-compress\">\n  <div class=\"tui-space_bottom-10 right-children\">\n    <div\n      class=\"tui-text_h3 class logo-color center-children tui-space_left-3 tui-space_top-3 tui-space_right-5\"\n    >\n      Litto\n    </div>\n    <img\n      src=\"https://via.placeholder.com/600x400\"\n      alt=\"gigi\"\n      class=\"small-img\"\n    />\n  </div>\n  <div class=\"tui-space_bottom-10\">\n    <p class=\"tui-space_bottom-10 prim-color tui-text_body-m\">\n      Complete your Litto account!\n    </p>\n    <div class=\"center-children button-big-space\">\n      <div>\n        <tui-avatar\n          size=\"xl\"\n          [rounded]=\"true\"\n          class=\"avatar\"\n          [avatarUrl]=\"imageUrl\"\n        ></tui-avatar>\n        <button\n          tuiIconButton\n          type=\"button\"\n          size=\"m\"\n          appearance=\"secondary-custom\"\n          shape=\"rounded\"\n          icon=\"tuiIconPlus\"\n          class=\"floating-button\"\n          (click)=\"fileInput.click()\"\n          ></button>\n          <input\n            type=\"file\"\n            #fileInput\n            style=\"display: none\"\n            accept=\"image/*\"\n            (change)=\"uploadImage($event)\"\n          />\n      </div>\n    </div>\n    <form [formGroup]=\"form\" class=\"tui-space_top-10\">\n      <div class=\"tui-space_bottom-5\">\n        <tui-text-area formControlName=\"bio\" [expandable]=\"true\" [rows]=\"10\">\n          Biography\n        </tui-text-area>\n      </div>\n      <div class=\"tui-space_bottom-5\">\n        <tui-input formControlName=\"name\"> Name </tui-input>\n      </div>\n      <div>\n        <tui-input formControlName=\"surname\"> Surname </tui-input>\n      </div>\n    </form>\n  </div>\n  <div class=\"right-children tui-space_bottom-10 tui-space_top-5\">\n    <button\n      tuiIconButton\n      type=\"button\"\n      size=\"l\"\n      appearance=\"primary-custom\"\n      shape=\"rounded\"\n      icon=\"tuiIconChevronRight\"\n      (click)=\"sendData()\"\n    ></button>\n  </div>\n</div>\n");

/***/ }),

/***/ 95913:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/search-results/search-results.component.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-search-item></app-search-item>\n<div>\n  <app-back></app-back>\n</div>\n\n<div class=\"big-top-space\">\n  <!-- <div class=\"tui-text_body-l\">Results for: <span class=\"tui-text_body-xl prim-color\"> <strong>{{searched}}</strong></span></div> -->\n  <div class=\"tui-text_body-l\">\n    Results for: <span class=\"tui-text_h6 prim-color\">{{ searched }}</span>\n  </div>\n</div>\n\n<div class=\"tui-space_top-10\">\n  <div class=\"tui-text_body-xl\">Related Plans</div>\n  <div *ngIf=\"this.plans.length\">\n    <app-plan-slider [plans]=\"this.plans\"></app-plan-slider>\n  </div>\n  <div *ngIf=\"this.plans.length == 0\">\n    <div class=\"tui-text_body-m elems\" style=\"color: var(--tui-text-03)\">\n      No Plan Found\n    </div>\n  </div>\n</div>\n\n<div class=\"tui-space_top-10\">\n  <div class=\"tui-text_body-xl\">Related Tags</div>\n  <div *ngIf=\"this.tags.length\" class=\"in-row\">\n    <div\n      *ngFor=\"let item of [].constructor(this.tags.length); let idx = index\"\n      class=\"elems-tag\"\n    >\n      <tui-tag\n        size=\"l\"\n        [ngStyle]=\"{ opacity: 0.4 + (0.6 * idx) / this.tags.length }\"\n        status=\"custom\"\n        class=\"taggy shadow-light\"\n        [hoverable]=\"true\"\n        [value]=\"this.tags[idx]\"\n        (click)=\"searchString(this.tags[idx])\"\n      ></tui-tag>\n    </div>\n  </div>\n  <div *ngIf=\"this.tags.length == 0\">\n    <div class=\"tui-text_body-m elems\" style=\"color: var(--tui-text-03)\">\n      No Tag Found\n    </div>\n  </div>\n</div>\n\n<app-footer-tabs\n  [index]=\"this.activeItemIndex\"\n></app-footer-tabs>\n");

/***/ }),

/***/ 7123:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/start-plan-date/start-plan-date.component.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-back></app-back>\n\n<div class=\"center-children-row go-up\">\n  <tui-avatar\n    size=\"m\"\n    [rounded]=\"true\"\n    class=\"avatar shadow-light top-align\"\n    avatarUrl=\"{{ this.plan.imageUrl }}\"\n  ></tui-avatar>\n  <div class=\"tui-text_h6 tui-space_left-3\">{{ this.plan.title }}</div>\n</div>\n\n<div class=\"tui-space_top-5 center-children\">\n  <button tuiButton type=\"button\" appearance=\"secondary-custom\" size=\"m\">\n    Plan is {{ plan.duration }} Weeks\n  </button>\n</div>\n\n<div class=\"tui-space_top-10\">\n  <div tuiIsland class=\"center-children\">\n    <div class=\"tui-island__category\">Choose when to start the plan</div>\n    <tui-calendar\n      [value]=\"value\"\n      [showAdjacent]=\"false\"\n      [month]=\"firstMonth\"\n      [(hoveredItem)]=\"hoveredItem\"\n      (dayClick)=\"onDayClick($event)\"\n    ></tui-calendar>\n  </div>\n</div>\n\n<tui-island\n  size=\"m\"\n  textAlign=\"left\"\n  class=\"tui-space_top-3\"\n  [formGroup]=\"notificationForm\"\n>\n  <div class=\"tui-island__content\">\n    <figure class=\"tui-island__figure\">\n      <tui-toggle size=\"l\" formControlName=\"notifications\"></tui-toggle>\n    </figure>\n    <div>\n      <div class=\"tui-text_h6 tui-island__title\">Enable Notifications?</div>\n      <!-- \n      <div *ngIf=\"this.notificationForm.controls['notifications'].value\" class=\"tui-island__category\">Notifications <b class=\"prim-color\">enabled</b></div>\n      <div *ngIf=\"!this.notificationForm.controls['notifications'].value\" class=\"tui-island__category\">Notifications <b style=\"color: var(--tui-error-fill);\">disabled</b></div>\n       -->\n    </div>\n  </div>\n  <div\n    *ngIf=\"this.notificationForm.controls['notifications'].value\"\n    class=\"tui-space_top-2\"\n  >\n    <!-- <p class=\"tui-island__paragraph tui-space_right-2\">Notification time</p> -->\n    <tui-input-time formControlName=\"notifyTime\" tuiTextfieldSize=\"l\">\n      Notify Time\n    </tui-input-time>\n  </div>\n</tui-island>\n\n<div class=\"tui-space_top-5 tui-space_bottom-10 center-children\">\n  <button\n    tuiButton\n    type=\"button\"\n    appearance=\"primary-custom\"\n    size=\"l\"\n    (click)=\"startPlan()\"\n  >\n    Start Plan\n  </button>\n</div>\n\n<div class=\"big-footer-space\"></div>\n<app-footer-tabs [index]=\"this.activeItemIndex\"></app-footer-tabs>\n");

/***/ }),

/***/ 95473:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/step-complete/step-complete.component.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n  <app-back></app-back>\n</div>\n<div *ngIf=\"this.step\">\n\n<div class=\"spacy-children-row tui-space_bottom-5\">\n  <div class=\"left-children\">\n    <div class=\"tui-text_h4 ter-color\">Step {{ this.step.planWeek }}</div>\n  </div>\n  <div class=\"right-children\">\n    <tui-avatar\n      size=\"s\"\n      [rounded]=\"true\"\n      class=\"avatar official-shadow top-align\"\n      avatarUrl=\"{{ this.step.imageUrl }}\"\n    ></tui-avatar>\n    <div class=\"tui-text_xxl tui-space_left-3\">\n      <b>{{ this.step.planName }}</b>\n    </div>\n  </div>\n</div>\n\n<tui-progress-segmented\n  class=\"tui-space_bottom-5\"\n  [max]=\"totalMaterials\"\n  [value]=\"materialIndex + 1\"\n></tui-progress-segmented>\n\n<div>\n  <div *ngIf=\"materialIndex == -1\">\n    <div class=\"tui-text_h4 tui-space_top-5 text-center\">\n      {{ this.step.title }}\n    </div>\n    <div class=\"tui-space_top-2 tui-text_xxl\">{{ this.step.subtitle }}</div>\n  </div>\n  <div *ngIf=\"materialIndex != -1\">\n    <div *ngIf=\"this.step.material[materialIndex]['type'] == 'YouTube'\">\n      <div class=\"tui-space_bottom-10\">\n        <div class=\"tui-text_h5 tui-space_top-5 text-center\">\n          {{ this.step.material[materialIndex]['title'] }}\n        </div>\n        <div class=\"tui-space_top-2 tui-text_xxl\">\n          {{ this.step.material[materialIndex]['description'] }}\n        </div>\n      </div>\n      <youtube-player\n        #player\n        [videoId]=\"this.step.material[materialIndex]['id']\"\n        [width]=\"playerWidth\"\n        [height]=\"playerHeight\"\n      ></youtube-player>\n    </div>\n    <div *ngIf=\"this.step.material[materialIndex]['type'] == 'Link'\">\n      <div class=\"tui-space_bottom-10\">\n        <div class=\"tui-text_h5 tui-space_top-5 text-center\">\n          {{ this.step.material[materialIndex]['title'] }}\n        </div>\n        <div class=\"tui-space_top-2 tui-text_xxl\">\n          {{ this.step.material[materialIndex]['description'] }}\n        </div>\n      </div>\n      <a href=\"{{ this.step.material[materialIndex]['link'] }}\" class=\"center-children-row\"><button size=\"m\" appearance=\"quaternary-custom\" tuiButton >Go to Link</button></a>\n      \n      <!-- <iframe width=\"100%\" height=\"100%\" frameBorder=\"0\" [src]=\"sanitize()\"></iframe> -->\n    </div>\n    <div *ngIf=\"this.step.material[materialIndex]['type'] == 'Spreaker'\">\n      <div class=\"tui-space_bottom-10\">\n        <div class=\"tui-text_h5 tui-space_top-5 text-center\">\n          {{ this.step.material[materialIndex]['title'] }}\n        </div>\n        <div class=\"tui-space_top-2 tui-text_xxl\">\n          {{ this.step.material[materialIndex]['description'] }}\n        </div>\n      </div>\n      <!-- <iframe [src]=\"this.sanitize(this.step.material[materialIndex]['link'])\" frameborder=\"0\"></iframe> -->\n      <iframe src=\"https://widget.spreaker.com/player?episode_id=17577829&theme=light&playlist=false&cover_image_url=https%3A%2F%2Fd3wo5wojvuv7l.cloudfront.net%2Fimages.spreaker.com%2Foriginal%2F846b65af72c5d3d160eef12a77418d48.jpg\" width=\"100%\" height=\"400px\" frameborder=\"0\"></iframe>\n    </div>\n    <div *ngIf=\"this.step.material[materialIndex]['type'] == 'Text'\">\n      <div class=\"tui-space_bottom-10\">\n        <div class=\"tui-text_h5 tui-space_top-5 text-center\">\n          {{ this.step.material[materialIndex]['title'] }}\n        </div>\n      </div>\n      <div [innerHTML]=\"this.step.material[materialIndex]['text'] \"></div>\n      \n    </div>\n    <div *ngIf=\"this.step.material[materialIndex]['type'] == 'PDF'\">\n      <div class=\"tui-space_bottom-10\">\n        <div class=\"tui-text_h5 tui-space_top-5 text-center\">\n          {{ this.step.material[materialIndex]['title'] }}\n        </div>\n      </div>\t\n      <div class=\"center-children-row\"><button appearance=\"quaternary-custom\" tuiButton (click)=\"show(actions,this.step.material[materialIndex]['file'])\">Read the File!</button></div>\n      <ng-template #actions let-content=\"content\">\n\t    <a tuiButton shape=\"rounded\" size=\"s\" download [href]=\"content\">Download</a>\n\t</ng-template>\n    </div>\n  </div>\n\n  <div class=\"two-button big-top-space\">\n    <button\n      *ngIf=\"this.materialIndex > -1\"\n      tuiIconButton\n      type=\"button\"\n      size=\"l\"\n      appearance=\"secondary-custom\"\n      shape=\"rounded\"\n      icon=\"tuiIconChevronLeft\"\n      (click)=\"prevMaterial()\"\n    ></button>\n    <div></div>\n    <button\n      *ngIf=\"this.materialIndex < this.totalMaterials - 1\"\n      tuiIconButton\n      type=\"button\"\n      size=\"l\"\n      appearance=\"primary-custom\"\n      shape=\"rounded\"\n      iconRight=\"tuiIconChevronRight\"\n      (click)=\"nextMaterial()\"\n    ></button>\n    <button\n      *ngIf=\"this.materialIndex == this.totalMaterials - 1\"\n      tuiButton\n      type=\"button\"\n      size=\"l\"\n      appearance=\"flat\"\n      shape=\"rounded\"\n      iconRight=\"tuiIconChevronRight\"\n      class=\"shadow\"\n      (click)=\"completeStep()\"\n    >\n      Complete\n    </button>\n  </div>\n  <div class=\"big-footer-space\"></div>\n</div>\n\n\n</div>\n<app-footer-tabs\n  [index]=\"this.activeItemIndex\"\n></app-footer-tabs>\n");

/***/ }),

/***/ 1655:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/step-create/step-create.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div style=\"margin-top: -5vh\">\n  <div>\n    <app-back></app-back>\n  </div>\n\n  <div class=\"\">\n    <div\n      class=\"tui-text_body-xl big-top-space tui-space_bottom-3 spacy-children-row\"\n    >\n      <div class=\"tui-text_h4 ter-color\">Step {{ this.planWeek }}</div>\n      <!-- <tui-tag\n        status=\"custom\"\n        size=\"l\"\n        [hoverable]=\"true\"\n        [value]=\"'Plan is ' + planDuration + ' Weeks long'\"\n        class=\"sec-wrapper\"\n      ></tui-tag> -->\n    </div>\n\n    <form [formGroup]=\"form\" class=\"b-form tui-space_top-10\">\n      <div class=\"tui-space_bottom-5\">\n        <div class=\"tui-space_bottom-5\">\n          <tui-input formControlName=\"title\"> Title </tui-input>\n        </div>\n        <tui-text-area\n          formControlName=\"subtitle\"\n          [expandable]=\"true\"\n          [rows]=\"10\"\n        >\n          Description\n        </tui-text-area>\n      </div>\n    </form>\n    <div class=\"spacy-children-row\" style=\"width: 100%\">\n      <tui-hosted-dropdown [content]=\"content\">\n        <button\n          tuiButton\n          type=\"button\"\n          size=\"m\"\n          appearance=\"secondary-custom\"\n          [iconRight]=\"arrow\"\n          class=\"official-shadow dropdown-button\"\n        >\n          Add Materials\n        </button>\n      </tui-hosted-dropdown>\n      <div *ngIf=\"this.selectedMaterial\" class=\"spacy-children-row\">\n        <tui-svg\n          src=\"{{ this.selectedMaterial['icon'] }}\"\n          class=\"tui-space_right-1\"\n        ></tui-svg>\n        <div class=\"tui-text_body-l\">{{ this.selectedMaterial[\"label\"] }}</div>\n      </div>\n    </div>\n\n    <ng-template #content class=\"\">\n      <tui-data-list role=\"menu\">\n        <button\n          *ngFor=\"let item of items\"\n          tuiOption\n          (click)=\"addMaterialComp(item)\"\n        >\n          <tui-svg src=\"{{ item.icon }}\" class=\"tui-space_right-1\"></tui-svg>\n          {{ item.label }}\n        </button>\n      </tui-data-list>\n    </ng-template>\n  </div>\n\n  <div *ngIf=\"this.selectedMaterial\">\n    <div *ngIf=\"this.selectedMaterial['label'] == 'YouTube'\">\n      <form [formGroup]=\"formYouTube\">\n        <tui-input\n          formControlName=\"title\"\n          icon=\"tuiIconCodeLarge\"\n          class=\"tui-space_top-5\"\n        >\n          Title\n        </tui-input>\n        <tui-input\n          formControlName=\"link\"\n          icon=\"tuiIconLinkLarge\"\n          class=\"tui-space_top-5\"\n        >\n          YouTube Link\n        </tui-input>\n        <tui-text-area\n          formControlName=\"description\"\n          [expandable]=\"true\"\n          [rows]=\"10\"\n          class=\"tui-space_top-5\"\n        >\n          Description\n        </tui-text-area>\n      </form>\n    </div>\n    <div *ngIf=\"this.selectedMaterial['label'] == 'Link'\">\n      <form [formGroup]=\"formLink\">\n        <tui-input\n          formControlName=\"title\"\n          icon=\"tuiIconCodeLarge\"\n          class=\"tui-space_top-5\"\n        >\n          Webpage Name\n        </tui-input>\n        <tui-input\n          formControlName=\"link\"\n          icon=\"tuiIconLinkLarge\"\n          class=\"tui-space_top-5\"\n        >\n          Webpage Link\n        </tui-input>\n        <tui-text-area\n          formControlName=\"description\"\n          [expandable]=\"true\"\n          [rows]=\"10\"\n          class=\"tui-space_top-5\"\n        >\n          Description\n        </tui-text-area>\n      </form>\n    </div>\n    <div *ngIf=\"this.selectedMaterial['label'] == 'Spreaker'\">\n      <form [formGroup]=\"formSpreaker\">\n        <tui-input\n          formControlName=\"title\"\n          icon=\"tuiIconCodeLarge\"\n          class=\"tui-space_top-5\"\n        >\n          Title\n        </tui-input>\n        <tui-input\n          formControlName=\"link\"\n          icon=\"tuiIconLinkLarge\"\n          class=\"tui-space_top-5\"\n        >\n          Spreaker Link\n        </tui-input>\n        <tui-text-area\n          formControlName=\"description\"\n          [expandable]=\"true\"\n          [rows]=\"10\"\n          class=\"tui-space_top-5\"\n        >\n          Description\n        </tui-text-area>\n      </form>\n    </div>\n    <div *ngIf=\"this.selectedMaterial['label'] == 'Text'\">\n      <form [formGroup]=\"formText\">\n        <tui-input\n          formControlName=\"title\"\n          icon=\"tuiIconCodeLarge\"\n          class=\"tui-space_top-5\"\n        >\n          Title\n        </tui-input>\n        <tui-editor\n          [tools]=\"tools\"\n          class=\"editor tui-space_top-5\"\n          formControlName=\"text\"\n        >\n          Write your formatted text!\n        </tui-editor>\n      </form>\n    </div>\n    <div *ngIf=\"this.selectedMaterial['label'] == 'PDF'\">\n      <form [formGroup]=\"formPDF\">\n        <tui-input\n          formControlName=\"title\"\n          icon=\"tuiIconCodeLarge\"\n          class=\"tui-space_top-5\"\n        >\n          Title\n        </tui-input>\n\n        <tui-input-file\n          class=\"tui-space_top-5\"\n          formControlName=\"file\"\n          [loadingFiles]=\"loading$ | async\"\n          [accept]=\"'application/pdf'\"\n          [link]=\"'Choose a PDF'\"\n          [showSize]=\"true\"\n        ></tui-input-file>\n      </form>\n    </div>\n\n    <div class=\"right-children\">\n      <button\n        tuiButton\n        type=\"button\"\n        size=\"s\"\n        appearance=\"secondary-custom\"\n        icon=\"tuiIconPlus\"\n        class=\"official-shadow dropdown-button tui-space_top-5\"\n        (click)=\"stepAdd(this.selectedMaterial['label'])\"\n      >\n        Add\n      </button>\n    </div>\n  </div>\n\n  <tui-reorder\n    *ngIf=\"this.printableSteps.length != 0\"\n    class=\"official-shadow tui-space_top-10 list\"\n    tuiTextfieldSize=\"l\"\n    [(items)]=\"this.printableSteps\"\n    [enabled]=\"this.printableSteps\"\n  ></tui-reorder>\n\n  <div class=\"two-button big-top-space\">\n    <button\n      *ngIf=\"this.planWeek > 1\"\n      tuiIconButton\n      type=\"button\"\n      size=\"l\"\n      appearance=\"secondary-custom\"\n      shape=\"rounded\"\n      icon=\"tuiIconChevronLeft\"\n      (click)=\"goCustStepsPrev()\"\n    ></button>\n    <div></div>\n    <button\n      tuiButton\n      type=\"button\"\n      size=\"l\"\n      appearance=\"primary-custom\"\n      shape=\"rounded\"\n      iconRight=\"tuiIconChevronRight\"\n      (click)=\"goCustStepsNext()\"\n    >\n      Step {{ this.planWeek + 1 }}\n    </button>\n  </div>\n  <div class=\"right-children tui-space_top-5\">\n    <button\n      tuiButton\n      type=\"button\"\n      size=\"l\"\n      appearance=\"flat\"\n      shape=\"rounded\"\n      iconRight=\"tuiIconCheckLarge\"\n      class=\"shadow-light\"\n      (click)=\"finishStepEditing()\"\n    >\n      Finish Editing\n    </button>\n  </div>\n  <div class=\"big-footer-space\"></div>\n  <app-footer-tabs [index]=\"this.activeItemIndex\"></app-footer-tabs>\n</div>\n");

/***/ }),

/***/ 96349:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/user-page/user-page.component.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<button\n  tuiIconButton\n  type=\"button\"\n  size=\"s\"\n  appearance=\"secondary-custom\"\n  shape=\"rounded\"\n  icon=\"tuiIconDraft\"\n  class=\"absolute\"\n></button>\n<div *ngIf=\"user\" class=\"center-children moving\">\n  <tui-avatar\n    size=\"xxl\"\n    [rounded]=\"true\"\n    class=\"avatar shadow\"\n    avatarUrl=\"{{ user.imageUrl }}\"\n  ></tui-avatar>\n  <tui-tag\n    status=\"custom\"\n    class=\"level-{{ user.level }} tui-space_top-3\"\n    size=\"l\"\n    [hoverable]=\"true\"\n    [value]=\"'Level ' + user.level\"\n  ></tui-tag>\n  <div class=\"tui-text_h4 tui-space_top-5 text-center\">\n    {{ user.name }} {{ user.surname }}\n  </div>\n  <div class=\"tui-space_top-2 text-center\">{{ user.bio }}</div>\n</div>\n<div *ngIf=\"user\" class=\"tui-space_top-10\">\n  <div class=\"tui-text_body-xl\">Interests</div>\n  <div class=\"in-row\">\n    <div *ngFor=\"let i of user.interests\" class=\"elems\">\n      <div>\n        <tui-badged-content\n          size=\"m\"\n          colorTop=\"var(--level-{{ i.level }})\"\n          [contentTop]=\"i.level\"\n          status=\"success\"\n        >\n          <tui-avatar\n            size=\"m\"\n            [avatarUrl]=\"i.url\"\n            class=\"shadow-light\"\n          ></tui-avatar>\n        </tui-badged-content>\n      </div>\n      <div class=\"tui-text_body-m tui-space_top-2 logo-color\">\n        {{ i.inter }}\n      </div>\n    </div>\n  </div>\n  <div class=\"tui-space_top-10\">\n    <div class=\"tui-text_body-xl\">Plans Completed</div>\n    <app-plan-slider [plans]=\"this.user.plans\"></app-plan-slider>\n  </div>\n  <div class=\"button-big-space\"></div>\n</div>\n\n<app-footer-tabs\n  [index]=\"this.activeItemIndex\"\n></app-footer-tabs>\n");

/***/ }),

/***/ 36463:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/welcome-page/welcome-page.component.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"sub-page\">\n    <div class=\"center-children tui-space_bottom-5\">\n        <img src=\"https://via.placeholder.com/600x400\" alt=\"gigi\" class=\"expanded-img\">\n        <div class=\"center-children\">\n            <div class=\"tui-text_h4 tui-space_top-5\">Welcome to</div>\n            <div class=\"tui-text_h1 class logo-color tui-space_top-1\">Litto!</div>\n            <div class=\"tui-text_body-m tui-space_top-3 text-center\">Where you can accomplish<br>goals and dreams</div>\n        </div>\n    </div>\n\n    <div class=\"two-button button-big-space\">\n        <a routerLink=\"/login\">\n            <button tuiButton type=\"button\" appearance=\"secondary-custom\">\n                Log In\n            </button>\n        </a>\n        <a routerLink=\"/register\">\n            <button tuiButton type=\"button\" appearance=\"primary-custom\">\n                Register\n            </button>\n        </a>\n    </div>\n</div>");

/***/ }),

/***/ 72876:
/*!********************************************************************!*\
  !*** ./src/app/components/active-steps/active-steps.component.css ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3RpdmUtc3RlcHMuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 12104:
/*!**********************************************!*\
  !*** ./src/app/components/app.component.css ***!
  \**********************************************/
/***/ ((module) => {

module.exports = ".outer-container {\n  padding-left: 12.5vw;\n  padding-right: 12.5vw;\n  padding-top: 5vh;\n  align-self: center;\n  height: 100vh;\n  position: relative;\n}\n\n.expanded-img {\n  max-width: 100%;\n  height: auto;\n}\n\n.medium-img {\n  max-width: 50%;\n  height: auto;\n}\n\n.small-img {\n  max-width: 30%;\n  height: auto;\n}\n\n.center-children {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.center-children-row {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  align-items: center;\n}\n\n.spacy-children-row {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n}\n\n.right-children {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: end;\n}\n\n.left-children {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n}\n\n.two-button {\n  display: flex;\n  justify-content: space-between;\n}\n\n.button-big-space {\n  padding-bottom: 15vh;\n}\n\n.sub-page {\n  top: 0;\n  left: 0;\n  padding-left: 12.5vw;\n  padding-right: 12.5vw;\n  padding-top: 5vh;\n  padding-bottom: 5vh;\n  position: absolute;\n  display: grid;\n  align-content: space-between;\n  height: 90vh;\n}\n\n.sub-page-compress {\n  top: 0;\n  left: 0;\n  padding-left: 12.5vw;\n  padding-right: 12.5vw;\n  padding-top: 5vh;\n  padding-bottom: 5vh;\n  position: absolute;\n  display: grid;\n  align-content: flex-start;\n  height: 90vh;\n}\n\n.back-button {\n  position: absolute !important;\n  /* margin-left: -12.5vw; */\n}\n\n.absolute {\n  float: left;\n}\n\n.moving {\n  transform: translate(-16px, 0);\n}\n\n.in-row  {\n    white-space: nowrap; /* [1] */\n    overflow-x: auto; /* [2] */\n    overscroll-behavior-x: initial;\n    /* -webkit-overflow-scrolling: touch; [3] */\n}\n\n.elems {\n    display: inline-block;\n    text-align: center;\n    padding: 18px;\n    vertical-align:top;\n}\n\n.elems-tag {\n  display: inline-block;\n  text-align: center;\n  padding: 18px 0 18px 18px;\n  vertical-align:top;\n}\n\n.plans-show {\n    inline-size: 64px; \n    white-space: normal;\n}\n\n.tabs {\n  position: fixed !important;\n  background-color: white;\n  z-index: 999;\n  width: 75vw;\n  left: 0;\n  bottom: 0;\n  padding-left: 12.5vw;\n  padding-right: 12.5vw;\n  box-shadow: 0px 0px 21px 9px rgba(0,0,0,0.05) !important;\n  display: flex;\n  justify-content: space-between;\n  border-top: 1px solid gainsboro;\n}\n\n.tabs tui-underline {\n  top: 0;\n  height: 2px !important;\n  color: var(--prim-custom-dark);\n  width: 60px !important;\n  left: -16px;\n  border-radius: 0 0 1px 1px;\n}\n\n.tabs ._active {\n  color: var(--prim-custom-dark) !important;\n}\n\n._active .footer-icon > *{\n\n  stroke-width: 24;\n}\n\n.footer-icon{\n  width:32;\n  height: 32;\n}\n\n.footer-icon > path, line, circle{\n  stroke: currentColor !important;\n}\n\n.big-top-space {\n  margin-top: 60px;\n}\n\n.big-footer-space {\n  margin-top: 120px;\n}\n\n.sec-wrapper {\n  background: var(--sec-custom); /*var(--sec-custom-light);*/\n  color: var(--ter-custom);\n}\n\n.top-align{\n  align-self: flex-start;\n}\n\n.active-plans-island *{\n  margin: 0 !important;\n}\n\n.active-plans-island .spacy-children-row {\n  width: 100%;\n\n}\n\n.even-little-padding {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsTUFBTTtFQUNOLE9BQU87RUFDUCxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsTUFBTTtFQUNOLE9BQU87RUFDUCxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtJQUNJLG1CQUFtQixFQUFFLFFBQVE7SUFDN0IsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQiw4QkFBOEI7SUFDOUIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxPQUFPO0VBQ1AsU0FBUztFQUNULG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsd0RBQXdEO0VBQ3hELGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsTUFBTTtFQUNOLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7QUFDWjs7QUFHQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZCQUE2QixFQUFFLDJCQUEyQjtFQUMxRCx3QkFBd0I7QUFDMUI7O0FBR0E7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXOztBQUViOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlci1jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDEyLjV2dztcbiAgcGFkZGluZy1yaWdodDogMTIuNXZ3O1xuICBwYWRkaW5nLXRvcDogNXZoO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmV4cGFuZGVkLWltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubWVkaXVtLWltZyB7XG4gIG1heC13aWR0aDogNTAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5zbWFsbC1pbWcge1xuICBtYXgtd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uY2VudGVyLWNoaWxkcmVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jZW50ZXItY2hpbGRyZW4tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zcGFjeS1jaGlsZHJlbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yaWdodC1jaGlsZHJlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG4ubGVmdC1jaGlsZHJlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG59XG5cbi50d28tYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYnV0dG9uLWJpZy1zcGFjZSB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXZoO1xufVxuXG4uc3ViLXBhZ2Uge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMTIuNXZ3O1xuICBwYWRkaW5nLXJpZ2h0OiAxMi41dnc7XG4gIHBhZGRpbmctdG9wOiA1dmg7XG4gIHBhZGRpbmctYm90dG9tOiA1dmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiA5MHZoO1xufVxuXG4uc3ViLXBhZ2UtY29tcHJlc3Mge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMTIuNXZ3O1xuICBwYWRkaW5nLXJpZ2h0OiAxMi41dnc7XG4gIHBhZGRpbmctdG9wOiA1dmg7XG4gIHBhZGRpbmctYm90dG9tOiA1dmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgaGVpZ2h0OiA5MHZoO1xufVxuXG4uYmFjay1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgLyogbWFyZ2luLWxlZnQ6IC0xMi41dnc7ICovXG59XG5cbi5hYnNvbHV0ZSB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubW92aW5nIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE2cHgsIDApO1xufVxuXG4uaW4tcm93ICB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLyogWzFdICovXG4gICAgb3ZlcmZsb3cteDogYXV0bzsgLyogWzJdICovXG4gICAgb3ZlcnNjcm9sbC1iZWhhdmlvci14OiBpbml0aWFsO1xuICAgIC8qIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsgWzNdICovXG59XG5cbi5lbGVtcyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxOHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbn1cblxuLmVsZW1zLXRhZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxOHB4IDAgMThweCAxOHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG59XG5cbi5wbGFucy1zaG93IHtcbiAgICBpbmxpbmUtc2l6ZTogNjRweDsgXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn0gIFxuXG4udGFicyB7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogNzV2dztcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDEyLjV2dztcbiAgcGFkZGluZy1yaWdodDogMTIuNXZ3O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIxcHggOXB4IHJnYmEoMCwwLDAsMC4wNSkgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgZ2FpbnNib3JvO1xufVxuXG4udGFicyB0dWktdW5kZXJsaW5lIHtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDJweCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tcHJpbS1jdXN0b20tZGFyayk7XG4gIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IC0xNnB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMXB4IDFweDtcbn1cblxuLnRhYnMgLl9hY3RpdmUge1xuICBjb2xvcjogdmFyKC0tcHJpbS1jdXN0b20tZGFyaykgIWltcG9ydGFudDtcbn1cblxuLl9hY3RpdmUgLmZvb3Rlci1pY29uID4gKntcblxuICBzdHJva2Utd2lkdGg6IDI0O1xufVxuXG4uZm9vdGVyLWljb257XG4gIHdpZHRoOjMyO1xuICBoZWlnaHQ6IDMyO1xufVxuXG5cbi5mb290ZXItaWNvbiA+IHBhdGgsIGxpbmUsIGNpcmNsZXtcbiAgc3Ryb2tlOiBjdXJyZW50Q29sb3IgIWltcG9ydGFudDtcbn1cblxuLmJpZy10b3Atc3BhY2Uge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4uYmlnLWZvb3Rlci1zcGFjZSB7XG4gIG1hcmdpbi10b3A6IDEyMHB4O1xufVxuXG4uc2VjLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWMtY3VzdG9tKTsgLyp2YXIoLS1zZWMtY3VzdG9tLWxpZ2h0KTsqL1xuICBjb2xvcjogdmFyKC0tdGVyLWN1c3RvbSk7XG59XG5cblxuLnRvcC1hbGlnbntcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cblxuLmFjdGl2ZS1wbGFucy1pc2xhbmQgKntcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5hY3RpdmUtcGxhbnMtaXNsYW5kIC5zcGFjeS1jaGlsZHJlbi1yb3cge1xuICB3aWR0aDogMTAwJTtcblxufVxuXG4uZXZlbi1saXR0bGUtcGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 28757:
/*!******************************************************************************!*\
  !*** ./src/app/components/create-plan-first/create-plan-first.component.css ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".floating-button {\n  position: absolute;\n  margin-left: calc(96px - 44px / 2);\n  margin-top: -96px;\n  top: inherit;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wbGFuLWZpcnN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2QiLCJmaWxlIjoiY3JlYXRlLXBsYW4tZmlyc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbG9hdGluZy1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDk2cHggLSA0NHB4IC8gMik7XG4gIG1hcmdpbi10b3A6IC05NnB4O1xuICB0b3A6IGluaGVyaXQ7XG59XG4iXX0= */";

/***/ }),

/***/ 35437:
/*!******************************************************************************!*\
  !*** ./src/app/components/display-interests/display-interests.component.css ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".wrapper1 {\n  display: grid;\n  grid-template-rows: auto;\n  grid-template-columns: repeat(3, 1fr);\n  grid-row-gap: 1em;\n  grid-column-gap: 1em;\n}\n\n.pre-trans {\n  transition: 0.2s linear all;\n  -webkit-transition: 0.2s linear all;\n}\n\n.back-button {\n  position: absolute !important;\n  margin-left: -12vw;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXktaW50ZXJlc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiZGlzcGxheS1pbnRlcmVzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyMSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ3JpZC1yb3ctZ2FwOiAxZW07XG4gIGdyaWQtY29sdW1uLWdhcDogMWVtO1xufVxuXG4ucHJlLXRyYW5zIHtcbiAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXIgYWxsO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgbGluZWFyIGFsbDtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAtMTJ2dztcbn1cbiJdfQ== */";

/***/ }),

/***/ 20097:
/*!**************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.css ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".center-children-top {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlci1jaGlsZHJlbi10b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXX0= */";

/***/ }),

/***/ 38867:
/*!****************************************************************!*\
  !*** ./src/app/components/injectables/back/back.component.css ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".back-button {\n  position: absolute !important;\n  margin-left: -7.75vw;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUE2QjtFQUM3QixvQkFBb0I7QUFDdEIiLCJmaWxlIjoiYmFjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAtNy43NXZ3O1xufVxuIl19 */";

/***/ }),

/***/ 25957:
/*!******************************************************************************!*\
  !*** ./src/app/components/injectables/footer-tabs/footer-tabs.component.css ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXItdGFicy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 17194:
/*!******************************************************************************!*\
  !*** ./src/app/components/injectables/plan-slider/plan-slider.component.css ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "/* .plan-slider.shadow-light:active {\n    box-shadow: none !important;\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYW4tc2xpZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUciLCJmaWxlIjoicGxhbi1zbGlkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5wbGFuLXNsaWRlci5zaGFkb3ctbGlnaHQ6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59ICovXG4iXX0= */";

/***/ }),

/***/ 57406:
/*!******************************************************************************!*\
  !*** ./src/app/components/injectables/search-item/search-item.component.css ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".search {\n  position: absolute !important;\n  height: 300px !important;\n  width: 90vw;\n  left: 0;\n  top: 10px;\n  padding-left: 5vw;\n  padding-right: 5vw;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxPQUFPO0VBQ1AsU0FBUztFQUNULGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic2VhcmNoLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogOTB2dztcbiAgbGVmdDogMDtcbiAgdG9wOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDV2dztcbiAgcGFkZGluZy1yaWdodDogNXZ3O1xufVxuIl19 */";

/***/ }),

/***/ 10085:
/*!********************************************************************************!*\
  !*** ./src/app/components/injectables/slider-steps/slider-steps.component.css ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbGlkZXItc3RlcHMuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 19305:
/*!****************************************************************!*\
  !*** ./src/app/components/login-page/login-page.component.css ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 56265:
/*!**********************************************************************!*\
  !*** ./src/app/components/plan-overview/plan-overview.component.css ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 65584:
/*!**********************************************************************!*\
  !*** ./src/app/components/register-page/register-page.component.css ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 33313:
/*!**************************************************************************!*\
  !*** ./src/app/components/register-second/register-second.component.css ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".floating-button {\n  position: absolute;\n  margin-left: 26px;\n}\n\n.avatar {\n  position: absolute;\n  margin-left: -48px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXNlY29uZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoicmVnaXN0ZXItc2Vjb25kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxvYXRpbmctYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMjZweDtcbn1cblxuLmF2YXRhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IC00OHB4O1xufVxuIl19 */";

/***/ }),

/***/ 67917:
/*!************************************************************************!*\
  !*** ./src/app/components/search-results/search-results.component.css ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".taggy {\n  background-color: rgba(55, 106, 169, 1);\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7RUFDdkMsV0FBVztBQUNiIiwiZmlsZSI6InNlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFnZ3kge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU1LCAxMDYsIDE2OSwgMSk7XG4gIGNvbG9yOiAjZmZmO1xufVxuIl19 */";

/***/ }),

/***/ 94752:
/*!**************************************************************************!*\
  !*** ./src/app/components/start-plan-date/start-plan-date.component.css ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".go-up {\n  margin-top: -12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LXBsYW4tZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InN0YXJ0LXBsYW4tZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdvLXVwIHtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG59XG4iXX0= */";

/***/ }),

/***/ 32170:
/*!**********************************************************************!*\
  !*** ./src/app/components/step-complete/step-complete.component.css ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGVwLWNvbXBsZXRlLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 83822:
/*!******************************************************************!*\
  !*** ./src/app/components/step-create/step-create.component.css ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".dropdown-button{\n  border-style: solid;\n  border-color: #0000ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXAtY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InN0ZXAtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tYnV0dG9ue1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICMwMDAwZmY7XG59Il19 */";

/***/ }),

/***/ 65253:
/*!**************************************************************!*\
  !*** ./src/app/components/user-page/user-page.component.css ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 31846:
/*!********************************************************************!*\
  !*** ./src/app/components/welcome-page/welcome-page.component.css ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map