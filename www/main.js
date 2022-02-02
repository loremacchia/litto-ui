(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _components_step_create_step_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/step-create/step-create.component */ 97984);
/* harmony import */ var _tinkoff_ng_dompurify__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @tinkoff/ng-dompurify */ 34455);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/platform-browser/animations */ 52650);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @taiga-ui/core */ 83049);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @taiga-ui/core */ 19011);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @taiga-ui/core */ 61231);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @taiga-ui/core */ 12812);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @taiga-ui/core */ 29788);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @taiga-ui/core */ 85570);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @taiga-ui/core */ 66568);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @taiga-ui/core */ 84247);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @taiga-ui/core */ 2754);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @taiga-ui/core */ 18178);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @taiga-ui/core */ 21804);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @taiga-ui/core */ 32863);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @taiga-ui/core */ 64318);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @taiga-ui/core */ 16528);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @taiga-ui/core */ 78588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @taiga-ui/addon-editor */ 25813);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app.component */ 74518);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng2-pdf-viewer */ 78552);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @taiga-ui/kit */ 78710);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @taiga-ui/kit */ 64362);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @taiga-ui/kit */ 56456);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @taiga-ui/kit */ 40705);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @taiga-ui/kit */ 21481);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @taiga-ui/kit */ 7445);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @taiga-ui/kit */ 2731);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @taiga-ui/kit */ 12913);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @taiga-ui/kit */ 56052);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @taiga-ui/kit */ 35704);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @taiga-ui/kit */ 29981);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @taiga-ui/kit */ 86456);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @taiga-ui/kit */ 26629);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @taiga-ui/kit */ 93342);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @taiga-ui/kit */ 54008);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @taiga-ui/kit */ 65042);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @taiga-ui/kit */ 69716);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @taiga-ui/kit */ 4250);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @taiga-ui/kit */ 47727);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @taiga-ui/kit */ 41163);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @taiga-ui/kit */ 67007);
/* harmony import */ var _taiga_ui_addon_table_components_reorder__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @taiga-ui/addon-table/components/reorder */ 52945);
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/youtube-player */ 83904);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @taiga-ui/core */ 62850);
/* harmony import */ var _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login-page/login-page.component */ 48091);
/* harmony import */ var _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register-page/register-page.component */ 47364);
/* harmony import */ var _components_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/welcome-page/welcome-page.component */ 18254);
/* harmony import */ var _components_register_second_register_second_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register-second/register-second.component */ 26057);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/common/http */ 83981);
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
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_27__.TuiHintModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_28__.TuiSvgModule,
            _taiga_ui_addon_editor__WEBPACK_IMPORTED_MODULE_29__.TuiEditorModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_30__.TuiToggleModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_31__.TuiTooltipModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_32__.TuiMarkerIconModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_33__.TuiTextfieldControllerModule,
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_34__.YouTubePlayerModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_35__.TuiLinkModule,
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_36__.PdfViewerModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_37__.TuiProgressModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_38__.TuiHostedDropdownModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_39__.TuiCalendarRangeModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_40__.TuiSliderModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_41__.TuiNotificationModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_42__.TuiInputFileModule,
            _taiga_ui_addon_table_components_reorder__WEBPACK_IMPORTED_MODULE_43__.TuiReorderModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_44__.TuiInputTagModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_45__.TuiTagModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_46__.TuiRootModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_47__.TuiPrimitiveTextfieldModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_48__.BrowserAnimationsModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_49__.TuiInputNumberModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_50__.TuiCalendarModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_51__.TuiDialogModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_52__.TuiNotificationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_53__.FormsModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_54__.TuiPaginationModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_53__.ReactiveFormsModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_55__.TuiInputModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_56__.TuiInputPasswordModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_57__.TuiCheckboxBlockModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_58__.TuiButtonModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_59__.TuiIslandModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_60__.TuiFieldErrorModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_61__.TuiBadgedContentModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_62__.TuiAvatarModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_63__.TuiTextAreaModule,
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_61__.TuiBadgedContentModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_64__.HttpClientModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_65__.TuiDropdownControllerModule,
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_66__.TuiDataListModule,
        ],
        providers: [{ provide: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_67__.TUI_SANITIZER, useClass: _tinkoff_ng_dompurify__WEBPACK_IMPORTED_MODULE_68__.NgDompurifySanitizer }],
        bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 31411:
/*!*******************************************************************!*\
  !*** ./src/app/components/active-steps/active-steps.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
        this.router.navigateByUrl('/step-complete', {
            state: { planId: step.planId },
        });
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

"use strict";
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
            email: '',
            firstName: '',
            lastName: '',
            password: '',
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
        console.log('gigiigigigigi');
        if (this.form.controls['agreeToToC'].value) {
            this.Ids.email = this.form.controls['email'].value;
            this.Ids.firstName = this.form.controls['firstName'].value;
            this.Ids.lastName = this.form.controls['lastName'].value;
            this.Ids.password = this.form.controls['password'].value;
        }
        else {
            this.Ids.email = '';
            this.Ids.firstName = '';
            this.Ids.lastName = '';
            this.Ids.password = '';
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePlanFirstComponent": () => (/* binding */ CreatePlanFirstComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_create_plan_first_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./create-plan-first.component.html */ 45115);
/* harmony import */ var _create_plan_first_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-plan-first.component.css */ 28757);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ 32863);
/* harmony import */ var _services_file_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/file-upload.service */ 90207);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/local-storage.service */ 27109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/home.service */ 62626);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);










let CreatePlanFirstComponent = class CreatePlanFirstComponent {
    constructor(fileUploadService, localService, homeService, notificationsService, router) {
        this.fileUploadService = fileUploadService;
        this.localService = localService;
        this.homeService = homeService;
        this.notificationsService = notificationsService;
        this.router = router;
        this.searchActive = '';
        this.activeItemIndex = 2;
        this.imageUrl = 'https://www.idmore.it/wp-content/uploads/2016/12/ef3-placeholder-image.jpg';
        this.loading = false; // Flag variable
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            level: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(1, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            subtitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
            // weeks: new FormControl(1),
            discord: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(true, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
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
        if (this.form.valid) {
            this.localService.setCreatingPlan(this.createJson());
            this.router.navigateByUrl('/step-create', { state: { number: 1 } });
        }
        else {
            this.notificationsService
                .show('Fill both Title and Description', { status: "error" /* Error */ })
                .subscribe();
        }
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
    { type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__.TuiNotificationsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
CreatePlanFirstComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayInterestsComponent": () => (/* binding */ DisplayInterestsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_display_interests_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./display-interests.component.html */ 58230);
/* harmony import */ var _display_interests_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-interests.component.css */ 35437);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ 32863);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/local-storage.service */ 27109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-service.service */ 36194);
/* harmony import */ var src_app_model_UserCreate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/UserCreate */ 84664);









let DisplayInterestsComponent = class DisplayInterestsComponent {
    constructor(activatedRoute, userService, localService, router, notificationsService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.localService = localService;
        this.router = router;
        this.notificationsService = notificationsService;
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
                this.user.setInitial(this.id, '', '', '', 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png');
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
            this.notificationsService
                .show('Correctly Registered!', { status: "success" /* Success */ })
                .subscribe();
            this.router.navigateByUrl('/home-page');
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__.TuiNotificationsService }
];
DisplayInterestsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
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

"use strict";
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
        this.isRecommend = false;
        this.recommendedPlans = [];
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
        this.router.navigateByUrl('/step-complete', {
            state: { planId: step.planId },
        });
    }
    recommend() {
        this.isRecommend = !this.isRecommend;
        if (this.isRecommend) {
            this.homeService.getRecommendedPlans(this.localService.getLogId()).subscribe((val) => {
                this.recommendedPlans = val;
            });
        }
        else {
            this.recommendedPlans = [];
        }
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageComponent": () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login-page.component.html */ 55885);
/* harmony import */ var _login_page_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page.component.css */ 19305);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/local-storage.service */ 27109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-service.service */ 36194);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ 32863);









let LoginPageComponent = class LoginPageComponent {
    constructor(userService, localService, router, notificationsService) {
        this.userService = userService;
        this.localService = localService;
        this.router = router;
        this.notificationsService = notificationsService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
        });
        this.succeed = false;
    }
    ngOnInit() { }
    login() {
        this.form.controls['email'].setValue(this.form.controls['email'].value.trim());
        if (this.form.valid) {
            this.userService
                .loginUser(this.form.controls['email'].value, this.form.controls['password'].value)
                .subscribe((retrievedId) => {
                if (retrievedId == -1) {
                    this.notificationsService
                        .show('Your email or password are incorrect', {
                        status: "error" /* Error */,
                    })
                        .subscribe();
                }
                else {
                    this.notificationsService
                        .show('Correct Login!', { status: "success" /* Success */ })
                        .subscribe();
                    this.localService.setCurrentUserId(retrievedId);
                    this.router.navigateByUrl('/home-page');
                }
            });
        }
        else {
            this.notificationsService
                .show('Your email or password are incorrect', {
                status: "error" /* Error */,
            })
                .subscribe();
        }
    }
};
LoginPageComponent.ctorParameters = () => [
    { type: src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__.UserServiceService },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__.TuiNotificationsService }
];
LoginPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageComponent": () => (/* binding */ RegisterPageComponent)
/* harmony export */ });
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 62783);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./register-page.component.html */ 53867);
/* harmony import */ var _register_page_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-page.component.css */ 65584);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/core */ 32863);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/local-storage.service */ 27109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _model_userInit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../model/userInit */ 83383);
/* harmony import */ var src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user-service.service */ 36194);











let RegisterPageComponent = class RegisterPageComponent {
  constructor(userService, localService, router, notificationsService) {
    this.userService = userService;
    this.localService = localService;
    this.router = router;
    this.notificationsService = notificationsService;
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
      _this.form.controls['email'].setValue(_this.form.controls['email'].value.trim());

      if (_this.form.valid) {
        yield _this.userService.createUser(new _model_userInit__WEBPACK_IMPORTED_MODULE_4__.UserInit(_this.form.controls['username'].value, _this.form.controls['email'].value, _this.form.controls['password'].value)).subscribe(retrievedId => {
          _this.notificationsService.show('Check your Email to continue the registration', {
            status: "info"
            /* Info */

          }).subscribe();

          _this.id = +retrievedId;

          _this.localService.setCurrentUserId(retrievedId);

          _this.router.navigateByUrl('/register-second');
        });
      } else {
        _this.notificationsService.show('Your email, username or password are incorrect', {
          status: "error"
          /* Error */

        }).subscribe();
      }
    })();
  }

};

RegisterPageComponent.ctorParameters = () => [{
  type: src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_5__.UserServiceService
}, {
  type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__.TuiNotificationsService
}];

RegisterPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPlanDateComponent": () => (/* binding */ StartPlanDateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_start_plan_date_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./start-plan-date.component.html */ 7123);
/* harmony import */ var _start_plan_date_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-plan-date.component.css */ 94752);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core */ 32863);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/local-storage.service */ 27109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/plan.service */ 25929);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ 97031);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);










let StartPlanDateComponent = class StartPlanDateComponent {
    constructor(activatedRoute, planService, localService, notificationsService, router) {
        this.activatedRoute = activatedRoute;
        this.planService = planService;
        this.localService = localService;
        this.notificationsService = notificationsService;
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
                this.notificationsService
                    .show('Something has gone wrong', {
                    status: "error" /* Error */,
                })
                    .subscribe();
                this.router.navigateByUrl('/home-page');
            }
            this.onDayClick(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__.TuiDay.currentLocal());
        });
    }
    startPlan() {
        this.planService
            .startPlan(this.userId, this.plan, this.value.from.toString(), this.value.to.toString()) //per riportarle ok usare parseRawDateString
            .subscribe((activePlanId) => {
            if (activePlanId == -1) {
                this.notificationsService
                    .show('The plan was already started', {
                    status: "info" /* Info */,
                })
                    .subscribe();
                this.router.navigateByUrl('/home-page');
            }
            else {
                this.notificationsService
                    .show('The plan is started!', {
                    status: "success" /* Success */,
                })
                    .subscribe();
                this.router.navigateByUrl('/step-complete', {
                    state: { planId: activePlanId },
                });
            }
        });
    }
};
StartPlanDateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_3__.PlanService },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService },
    { type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__.TuiNotificationsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
StartPlanDateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepCompleteComponent": () => (/* binding */ StepCompleteComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_step_complete_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./step-complete.component.html */ 95473);
/* harmony import */ var _step_complete_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step-complete.component.css */ 32170);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core */ 32863);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/local-storage.service */ 27109);
/* harmony import */ var src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/plan.service */ 25929);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ 56456);










let StepCompleteComponent = class StepCompleteComponent {
    // @ViewChild('player') player: any;
    constructor(activatedRoute, sanitizer, pdfService, localService, planService, notificationsService, router) {
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.pdfService = pdfService;
        this.localService = localService;
        this.planService = planService;
        this.notificationsService = notificationsService;
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
            this.planService
                .getActiveStep(this.userId, this.planInfo.planId)
                .subscribe((step) => {
                // step.normalize();
                this.step = step;
                console.log(this.step.material);
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
        let realUrl = url;
        this.pdfService
            .open(this.sanitizer.bypassSecurityTrustResourceUrl(realUrl), {
            label: 'Taiga UI',
            actions,
        })
            .subscribe();
    }
    completeStep() {
        this.planService
            .completeStep(this.userId, this.planInfo.planId)
            .subscribe((val) => {
            if (val) {
                console.log('finish plan');
                this.notificationsService
                    .show('You have completed the plan!!', {
                    status: "success" /* Success */,
                })
                    .subscribe();
            }
            else {
                console.log('finish step');
                this.notificationsService
                    .show('You have completed the step!', {
                    status: "success" /* Success */,
                })
                    .subscribe();
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
    { type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__.TuiNotificationsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
StepCompleteComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepCreateComponent": () => (/* binding */ StepCreateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_step_create_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./step-create.component.html */ 1655);
/* harmony import */ var _step_create_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step-create.component.css */ 83822);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @taiga-ui/core */ 32863);
/* harmony import */ var _services_file_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/file-upload.service */ 90207);
/* harmony import */ var _constants_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../constants/editor */ 59122);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/local-storage.service */ 27109);
/* harmony import */ var src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/plan.service */ 25929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ 50061);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @taiga-ui/cdk */ 20308);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 74172);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 43028);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 18252);















let StepCreateComponent = class StepCreateComponent {
    constructor(activatedRoute, localService, router, planService, notificationsService, fileUploadService) {
        this.activatedRoute = activatedRoute;
        this.localService = localService;
        this.router = router;
        this.planService = planService;
        this.notificationsService = notificationsService;
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
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polygon points="160 128 112 96 112 160 160 128" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polygon><path d="M24,128c0,29.8,3.1,47.2,5.4,56.2A16.1,16.1,0,0,0,39,195.1c33.5,12.8,89,12.5,89,12.5s55.5.3,89-12.5a16.1,16.1,0,0,0,9.6-10.9c2.3-9,5.4-26.4,5.4-56.2s-3.1-47.2-5.4-56.2A16.1,16.1,0,0,0,217,60.9c-33.5-12.8-89-12.5-89-12.5s-55.5-.3-89,12.5a16.1,16.1,0,0,0-9.6,10.9C27.1,80.8,24,98.2,24,128Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
            },
            {
                label: 'PDF',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><polyline points="152 32 152 88 208 88" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><line x1="96" y1="136" x2="160" y2="136" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="96" y1="168" x2="160" y2="168" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>',
            },
            {
                label: 'Link',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="94.1" y1="161.9" x2="161.9" y2="94" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M145,178.9l-28.3,28.3a48,48,0,0,1-67.9-67.9L77.1,111" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M178.9,145l28.3-28.3a48,48,0,0,0-67.9-67.9L111,77.1" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
            },
            {
                label: 'Spreaker',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="120" r="24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M130.9,224h-5.8a16,16,0,0,1-15.7-12.9l-9.6-48A16,16,0,0,1,115.5,144h25a16,16,0,0,1,15.7,19.1l-9.6,48A16,16,0,0,1,130.9,224Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M68.3,151.2a64,64,0,1,1,119.4,0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M76.4,208.9a96,96,0,1,1,103.2,0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
            },
            {
                label: 'Text',
                icon: 'tuiIconEditLarge',
            },
        ];
        this.reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            subtitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
        });
        this.formSpreaker = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            link: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(this.reg),
            ]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
        });
        this.formYouTube = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            link: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(this.reg),
            ]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
        });
        this.formText = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
        });
        this.formLink = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            link: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(this.reg),
            ]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
        });
        this.formPDF = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
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
        if (this.form.valid) {
            this.goCustSteps();
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigateByUrl('/step-create', {
                state: { number: this.planWeek + 1 },
            }));
        }
        else {
            this.notificationsService
                .show('Fill at least the title and description of the week!', {
                status: "error" /* Error */,
            })
                .subscribe();
        }
    }
    goCustStepsPrev() {
        if (this.form.valid) {
            this.goCustSteps();
        }
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
        console.log(type);
        switch (type) {
            case 'Spreaker':
                if (this.formSpreaker.valid) {
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
                }
                else {
                    this.notificationsService
                        .show('Check the Spreaker link or title', {
                        status: "error" /* Error */,
                    })
                        .subscribe();
                }
                break;
            case 'PDF':
                console.log("innnn");
                console.log(this.formPDF.controls['fileLink'].value);
                if (this.formPDF.valid) {
                    console.log(this.formPDF.controls['fileLink'].value);
                    this.steps.push({
                        type: type,
                        title: this.formPDF.controls['title'].value,
                        file: this.formPDF.controls['fileLink'].value,
                    });
                    this.printableSteps.push(this.formPDF.controls['title'].value);
                    this.formPDF.controls['title'].setValue('');
                    this.formPDF.controls['fileLink'].setValue('');
                    this.formPDF.controls['file'].setValue(undefined);
                }
                else {
                    this.notificationsService
                        .show('Check the PDF title', {
                        status: "error" /* Error */,
                    })
                        .subscribe();
                }
                break;
            case 'YouTube':
                if (this.formYouTube.valid) {
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
                }
                else {
                    this.notificationsService
                        .show('Check the YouTube title', { status: "error" /* Error */ })
                        .subscribe();
                }
                break;
            case 'Text':
                if (this.formText.valid) {
                    this.steps.push({
                        type: type,
                        title: this.formText.controls['title'].value,
                        text: this.formText.controls['text'].value,
                    });
                    this.printableSteps.push(this.formText.controls['title'].value);
                    this.formText.controls['title'].setValue('');
                    this.formText.controls['text'].setValue('');
                }
                else {
                    this.notificationsService
                        .show('Check the Text or title', { status: "error" /* Error */ })
                        .subscribe();
                }
                break;
            case 'Link':
                if (this.formLink.valid) {
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
                }
                else {
                    this.notificationsService
                        .show('Check the link or title', { status: "error" /* Error */ })
                        .subscribe();
                }
                break;
            default:
                break;
        }
        console.log(this.steps);
        console.log(this.printableSteps);
    }
    finishStepEditing() {
        if (this.selectedMaterial != undefined) {
            this.stepAdd(this.selectedMaterial['label']);
        }
        if (this.form.controls['title'].value != '' ||
            this.form.controls['subtitle'].value != '') {
            this.goCustSteps();
        }
        let plan = JSON.parse(this.localService.getCreatingPlan(this.userId));
        plan['duration'] = this.localService.getCreatingStepsNumber();
        let steps = this.localService.getCreatingSteps();
        plan['steps'] = steps;
        if (steps != undefined) {
            this.planService.createPlan(plan).subscribe((planIdd) => {
                this.notificationsService
                    .show('The plan is correctly created!', {
                    status: "success" /* Success */,
                })
                    .subscribe();
                this.localService.freeCreatingPlanAndSteps(),
                    this.router.navigateByUrl('/view-plan', {
                        state: { planId: planIdd },
                    });
            });
        }
        else {
            this.notificationsService
                .show('Create some step before completing the plan!', {
                status: "error" /* Error */,
            })
                .subscribe();
        }
    }
    req() {
        return this.requests$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((file) => (file instanceof File ? [file] : [])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)([]));
    }
    get loading$() {
        let file1 = [];
        this.req().subscribe((file) => {
            file1 = file;
            return file1;
        });
        return file1;
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
    { type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_13__.TuiNotificationsService },
    { type: _services_file_upload_service__WEBPACK_IMPORTED_MODULE_2__.FileUploadService }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_15__.tuiPure
], StepCreateComponent.prototype, "loading$", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_15__.tuiPure
], StepCreateComponent.prototype, "requests$", null);
StepCreateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageComponent": () => (/* binding */ UserPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_lorem_Documents_Universit_HCI_litto_ui_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-page.component.html */ 96349);
/* harmony import */ var _user_page_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-page.component.css */ 65253);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ 32863);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/local-storage.service */ 27109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-service.service */ 36194);








let UserPageComponent = class UserPageComponent {
    constructor(activatedRoute, localService, router, notificationsService, userService) {
        this.activatedRoute = activatedRoute;
        this.localService = localService;
        this.router = router;
        this.notificationsService = notificationsService;
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
    logOut() {
        this.localService.removeUserId();
        this.notificationsService
            .show('Logged out', { status: "success" /* Success */ })
            .subscribe();
        this.router.navigateByUrl('/');
    }
};
UserPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__.TuiNotificationsService },
    { type: src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__.UserServiceService }
];
UserPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
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

"use strict";
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
    ngOnInit() { }
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

"use strict";
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

/***/ 91210:
/*!*******************************************!*\
  !*** ./src/app/model/RecommendedPlans.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecommendedPlan": () => (/* binding */ RecommendedPlan)
/* harmony export */ });
class RecommendedPlan {
    constructor(name, plans) {
        this.name = name,
            this.plans = plans;
    }
}


/***/ }),

/***/ 93372:
/*!***************************************!*\
  !*** ./src/app/model/SearchReturn.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
        // baseUrl = "http://192.168.1.135:8000/"
        this.baseUrl = "http://b7ed-151-41-61-172.ngrok.io";
    }
    // Returns an observable
    upload(file) {
        const formData = new FormData();
        formData.append("image", file, file.name);
        console.log(formData);
        return this.http.post(this.baseUrl + "/upload-img", formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => res));
    }
    uploadPdf(file) {
        const formData = new FormData();
        formData.append("pdf", file, file.name);
        console.log(file);
        return this.http.post(this.baseUrl + "/upload-pdf", formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => res));
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeService": () => (/* binding */ HomeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _model_RecommendedPlans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../model/RecommendedPlans */ 91210);
/* harmony import */ var _model_SearchReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../model/SearchReturn */ 93372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _model_Step__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/Step */ 94015);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! class-transformer */ 38979);








let HomeService = class HomeService {
    constructor(http) {
        this.http = http;
        // baseUrl = "http://192.168.1.135:8000/"
        this.baseUrl = "http://b7ed-151-41-61-172.ngrok.io";
    }
    getCurrentGoals(userId) {
        return this.http.post(this.baseUrl + "/get-current-goals", JSON.stringify(userId))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => (0,class_transformer__WEBPACK_IMPORTED_MODULE_4__.plainToClass)(_model_Step__WEBPACK_IMPORTED_MODULE_2__.Step, res)));
    }
    searchForString(searched) {
        return this.http.post(this.baseUrl + "/search", JSON.stringify(searched))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => (0,class_transformer__WEBPACK_IMPORTED_MODULE_4__.plainToClass)(_model_SearchReturn__WEBPACK_IMPORTED_MODULE_1__.SearchReturn, res)));
    }
    getRecommendedPlans(userId) {
        return this.http.post(this.baseUrl + "/get-recommended-plans", JSON.stringify(userId))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => (0,class_transformer__WEBPACK_IMPORTED_MODULE_4__.plainToClass)(_model_RecommendedPlans__WEBPACK_IMPORTED_MODULE_0__.RecommendedPlan, res)));
    }
};
HomeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient }
];
HomeService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], HomeService);



/***/ }),

/***/ 27109:
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageService": () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/core */ 32863);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let LocalStorageService = class LocalStorageService {
    constructor(router, notificationsService) {
        this.router = router;
        this.notificationsService = notificationsService;
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
            this.notificationsService
                .show('Something has gone wrong, please log-in or register', {
                status: "error" /* Error */,
            })
                .subscribe();
            this.router.navigateByUrl('/');
        }
    }
    removeUserId() {
        localStorage.removeItem('userId');
    }
    storeUserSubInfo() {
        return true;
    }
    getCreatingPlan(userId) {
        console.log('heyy');
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
                if (newStep['planWeek'] == dic['planWeek']) {
                    found = true;
                    (dic['title'] = newStep['title']),
                        (dic['subtitle'] = newStep['subtitle']),
                        (dic['material'] = newStep['material']);
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
                if (num == dic['planWeek']) {
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
    emptyUnusefulInfos() {
        this.removeMaterialIndex();
        localStorage.removeItem('creatingSteps');
    }
};
LocalStorageService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router },
    { type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__.TuiNotificationsService }
];
LocalStorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], LocalStorageService);



/***/ }),

/***/ 25929:
/*!******************************************!*\
  !*** ./src/app/services/plan.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
        // baseUrl = "http://192.168.1.135:8000/"
        this.baseUrl = "http://b7ed-151-41-61-172.ngrok.io";
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

"use strict";
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
        // baseUrl = "http://192.168.1.135:8000/"
        this.baseUrl = "http://b7ed-151-41-61-172.ngrok.io";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-search-item></app-search-item>\n\n<div>\n  <app-back></app-back>\n</div>\n<div class=\"button-big-space\">\n  <div class=\"tui-text_body-xl big-top-space tui-space_bottom-3\">\n    Active Plans\n  </div>\n  <div *ngIf=\"this.steps\">\n    <!--  TODO modifica ling-->\n    <div *ngFor=\"let s of this.steps\" class=\"tui-space_bottom-5\">\n      <a size=\"m\" (click)=\"goToStep(s)\" tuiIsland [hoverable]=\"true\">\n        <div class=\"tui-island__content active-plans-island\">\n          <div class=\"spacy-children-row\">\n            <div>\n              <div class=\"tui-island__category\">\n                {{ s.planName }}\n              </div>\n              <h3 class=\"tui-island__title ter-color\">{{ s.title }}</h3>\n            </div>\n\n            <div class=\"prim-color even-little-padding\">\n              <p>{{ s.getFormatted(s.endDateCorr) }}</p>\n            </div>\n          </div>\n\n          <figure class=\"tui-island__figure\">\n            <tui-avatar\n              size=\"m\"\n              [rounded]=\"true\"\n              [avatarUrl]=\"s.imageUrl\"\n              class=\"shadow-light\"\n            ></tui-avatar>\n          </figure>\n\n          <div></div>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n\n<app-footer-tabs [index]=\"this.activeItemIndex\"></app-footer-tabs>\n");

/***/ }),

/***/ 67036:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/app.component.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<tui-root>\n  <div class=\"outer-container\">\n    <router-outlet style=\"position: relative\"></router-outlet>\n  </div>\n</tui-root>\n\n<!--    \n  <form [formGroup]=\"form\">\n    <p>\n      <tui-input formControlName=\"email\">\n        Type an email\n      </tui-input>\n      \n      <tui-field-error formControlName=\"email\"></tui-field-error>\n    </p>\n    <p>\n      <tui-input formControlName=\"firstName\" class=\"b-form\">\n        Type an firstName\n      </tui-input>\n    </p>\n    <p>\n      <tui-input formControlName=\"lastName\" class=\"b-form\">\n        Type an lastName\n      </tui-input>\n    </p>\n    <p>\n      <tui-input-password formControlName=\"password\">\n        Type a password\n      </tui-input-password>\n    </p>\n    <p>\n      <tui-checkbox-block formControlName=\"agreeToToC\">\n        agreeToToC\n      </tui-checkbox-block>\n    </p>\n    <p> <button tuiButton type=\"button\" background-color=-tui-base-02 (click)=\"exportIDs()\">\n        Button\n      </button></p>\n  </form>\n\n  <app-login-fields [Ids]=\"Ids\"></app-login-fields>\n  -->\n");

/***/ }),

/***/ 45115:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/create-plan-first/create-plan-first.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n  <app-back></app-back>\n\n  <div class=\"tui-text_body-xl tui-space_bottom-3\">\n    Create your Plan!\n  </div>\n\n  <div class=\"center-children\">\n    <div>\n      <tui-avatar\n        size=\"xl\"\n        [rounded]=\"true\"\n        class=\"avatar\"\n        [avatarUrl]=\"imageUrl\"\n      ></tui-avatar>\n      <button\n        tuiIconButton\n        type=\"button\"\n        size=\"m\"\n        appearance=\"secondary-custom\"\n        shape=\"rounded\"\n        icon=\"tuiIconPlus\"\n        class=\"floating-button\"\n        (click)=\"fileInput.click()\"\n      ></button>\n      <input\n        type=\"file\"\n        #fileInput\n        style=\"display: none\"\n        accept=\"image/*\"\n        (change)=\"uploadImage($event)\"\n      />\n    </div>\n  </div>\n  <form [formGroup]=\"form\" class=\"b-form tui-space_top-10\">\n    <div class=\"tui-space_bottom-5\">\n      <div class=\"tui-space_bottom-5\">\n        Difficulty Level\n        <tui-slider\n          formControlName=\"level\"\n          [max]=\"5\"\n          [min]=\"1\"\n          [quantum]=\"1\"\n          [segments]=\"4\"\n          class=\"tui-space_top-2\"\n        ></tui-slider>\n      </div>\n      <div class=\"tui-space_bottom-5\">\n        <tui-input formControlName=\"title\"> Title of the plan </tui-input>\n      </div>\n      <tui-text-area formControlName=\"subtitle\" [expandable]=\"true\" [rows]=\"10\">\n        Description: what the plan is about\n      </tui-text-area>\n    </div>\n\n    <tui-input-tag\n      formControlName=\"tags\"\n      tuiTextfieldSize=\"m\"\n      class=\"tui-space_top-2\"\n      [tuiTextfieldLabelOutside]=\"true\"\n      [tuiTextfieldCleaner]=\"true\"\n      (input)=\"searchTag()\"\n      [(search)]=\"searchActive\"\n      >Add plan topics (what it is about)\n      <ng-container *ngIf=\"search\">\n        <tui-data-list *tuiDataList>\n          <button *ngFor=\"let item of search.tags\" tuiOption [value]=\"item\">\n            <span class=\"name\">{{ item }}</span>\n          </button>\n        </tui-data-list>\n      </ng-container>\n    </tui-input-tag>\n    <div class=\"prim-color tui-text_body-m tui-space_top-5\">\n      You will choose the <b>plan duration</b> by creating the number of Weeks that you want!\n    </div>\n    <!-- <tui-island\n      size=\"m\"\n      textAlign=\"left\"\n      class=\"tui-space_top-5\"\n      style=\"box-shadow: 0 0.125rem 0.1875rem rgba(0, 0, 0, 0.1)\"\n    >\n      <div class=\"tui-island__content\">\n        <figure class=\"tui-island__figure\">\n          <tui-toggle size=\"l\" formControlName=\"discord\"></tui-toggle>\n        </figure>\n        <div>\n          <div class=\"tui-text_body-m\" style=\"color: var(--tui-text-02)\">\n            Generate a Discord Community?\n          </div>\n        </div>\n      </div>\n    </tui-island> -->\n  </form>\n  <!-- <tui-input-number formControlName=\"weeks\" [min]=\"1\" [decimal]=\"'never'\">\n    How many Weeks/Steps?\n</tui-input-number> -->\n  <div class=\"tui-space_top-5 right-children\">\n    <a>\n      <!-- <a routerLink=\"/login\"> -->\n      <button\n        tuiButton\n        type=\"button\"\n        appearance=\"secondary-custom\"\n        iconRight=\"tuiIconChevronRightLarge\"\n        (click)=\"goCustSteps()\"\n      >\n        Customize Weeks\n      </button>\n    </a>\n  </div>\n\n<app-footer-tabs [index]=\"this.activeItemIndex\"></app-footer-tabs>\n");

/***/ }),

/***/ 58230:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/display-interests/display-interests.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-search-item></app-search-item>\n\n<div class=\"big-top-space spacy-children-row\">\n  <button\n    tuiButton\n    type=\"button\"\n    size=\"m\"\n    appearance=\"secondary-custom\"\n    (click)=\"recommend()\"\n  >\n    Recommend <br />\n    Plans\n  </button>\n  <button\n    tuiButton\n    size=\"m\"\n    type=\"button\"\n    appearance=\"secondary-custom\"\n    routerLink=\"/create-plan-first\"\n  >\n    Create <br />\n    New Plan\n  </button>\n</div>\n<div class=\"tui-space_top-7\">\n  <div class=\"tui-text_body-xl tui-space_bottom-3\">Steps of the Week</div>\n  <div *ngIf=\"this.steps && this.steps.length > 0\">\n    <!--  TODO modifica ling-->\n    <div *ngFor=\"let s of this.steps\" class=\"tui-space_bottom-5\">\n      <a size=\"l\" tuiIsland [hoverable]=\"true\" (click)=\"goToStep(s)\">\n        <div class=\"tui-island__category\">\n          {{ s.planName }}\n        </div>\n        <div class=\"tui-island__content\">\n          <figure class=\"tui-island__figure center-children-top\">\n            <tui-avatar\n              size=\"m\"\n              [avatarUrl]=\"s.imageUrl\"\n              class=\"shadow-light\"\n            ></tui-avatar>\n            <div class=\"prim-color\">\n              <p>{{ s.getFormatted(s.endDateCorr) }}</p>\n            </div>\n          </figure>\n\n          <div>\n            <h3 class=\"tui-island__title ter-color\">{{ s.title }}</h3>\n            <p class=\"tui-island__paragraph\">{{ s.subtitle }}</p>\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n  <div *ngIf=\"this.steps && this.steps.length == 0\">\n    <div class=\"prim-color\">No step to complete</div>\n  </div>\n</div>\n\n<div *ngIf=\"isRecommend\" class=\"tui-space_top-10 button-big-space\">\n  <div class=\"tui-text_body-xl\">Recommended Plans</div>\n  <div *ngFor=\"let r of recommendedPlans\" class=\"tui-space_top-5\">\n    <tui-tag\n      size=\"l\"\n      value=\"{{ r.name }}\"\n      status=\"custom\"\n      class=\"ter-button official-shadow tui-space_bottom-2\"\n    ></tui-tag>\n    <app-plan-slider [plans]=\"r.plans\"></app-plan-slider>\n  </div>\n</div>\n\n<div class=\"big-top-space\"></div>\n<app-footer-tabs [index]=\"this.activeItemIndex\"></app-footer-tabs>\n");

/***/ }),

/***/ 63486:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/injectables/back/back.component.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div style=\"height: 100px;\"></div>\n\n<tui-tabs [(activeItemIndex)]=\"index\" class=\"tabs\">\n  <button tuiTab [routerLink]=\"['/home-page']\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"28\"\n      height=\"28\"\n      class=\"footer-icon\"\n      viewBox=\"0 0 256 256\"\n    >\n      <rect width=\"256\" height=\"256\" fill=\"none\"></rect>\n      <path\n        d=\"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z\"\n        fill=\"none\"\n        stroke=\"#000000\"\n        stroke-linecap=\"round\"\n        stroke-linejoin=\"round\"\n        stroke-width=\"16\"\n      ></path>\n    </svg>\n  </button>\n  <button tuiTab [routerLink]=\"['/active-steps']\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"28\"\n      height=\"28\"\n      class=\"footer-icon\"\n      viewBox=\"0 0 256 256\"\n    >\n      <rect width=\"256\" height=\"256\" fill=\"none\"></rect>\n      <line\n        x1=\"40\"\n        y1=\"216\"\n        x2=\"40\"\n        y2=\"48\"\n        fill=\"none\"\n        stroke=\"#000000\"\n        stroke-linecap=\"round\"\n        stroke-linejoin=\"round\"\n        stroke-width=\"16\"\n      ></line>\n      <path\n        d=\"M40,168c64-48,112,48,176,0V48C152,96,104,0,40,48\"\n        fill=\"none\"\n        stroke=\"#000000\"\n        stroke-linecap=\"round\"\n        stroke-linejoin=\"round\"\n        stroke-width=\"16\"\n      ></path>\n    </svg>\n  </button>\n  <button tuiTab [routerLink]=\"['/create-plan-first']\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"28\"\n      height=\"28\"\n      class=\"footer-icon\"\n      viewBox=\"0 0 256 256\"\n    >\n      <rect width=\"256\" height=\"256\" fill=\"none\"></rect>\n      <line\n        x1=\"40\"\n        y1=\"128\"\n        x2=\"216\"\n        y2=\"128\"\n        fill=\"none\"\n        stroke=\"#000000\"\n        stroke-linecap=\"round\"\n        stroke-linejoin=\"round\"\n        stroke-width=\"16\"\n      ></line>\n      <line\n        x1=\"128\"\n        y1=\"40\"\n        x2=\"128\"\n        y2=\"216\"\n        fill=\"none\"\n        stroke=\"#000000\"\n        stroke-linecap=\"round\"\n        stroke-linejoin=\"round\"\n        stroke-width=\"16\"\n      ></line>\n    </svg>\n  </button>\n  <button tuiTab [routerLink]=\"['/user-page']\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"28\"\n      height=\"28\"\n      class=\"footer-icon\"\n      viewBox=\"0 0 256 256\"\n    >\n      <rect width=\"256\" height=\"256\" fill=\"none\"></rect>\n      <circle\n        cx=\"128\"\n        cy=\"96\"\n        r=\"64\"\n        fill=\"none\"\n        stroke=\"#000000\"\n        stroke-miterlimit=\"10\"\n        stroke-width=\"16\"\n      ></circle>\n      <path\n        d=\"M31,216a112,112,0,0,1,194,0\"\n        fill=\"none\"\n        stroke=\"#000000\"\n        stroke-linecap=\"round\"\n        stroke-linejoin=\"round\"\n        stroke-width=\"16\"\n      ></path>\n    </svg>\n  </button>\n</tui-tabs>\n");

/***/ }),

/***/ 7767:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/injectables/plan-slider/plan-slider.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"in-row\">\n  <div\n    *ngFor=\"let p of this.plans\"\n    class=\"elems plan-slider \"\n    (click)=\"goOverview(p)\"\n  >\n    <div class=\"center-children\">\n      <tui-avatar\n      size=\"l\"\n      [avatarUrl]=\"p.imageUrl\"\n      class=\"shadow-light\"\n    ></tui-avatar>\n    <div class=\"tui-text_body-m tui-space_top-2 logo-color plans-show\">\n      {{ p.title }}\n    </div>\n    <div class=\"tui-text_body-s\">{{ p.duration }} Weeks</div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 3967:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/injectables/search-item/search-item.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<form [formGroup]=\"form\">\n  <tui-input\n    class=\"search\"\n    formControlName=\"searchedValue\"\n    icon=\"tuiIconSearch\"\n    iconAlign=\"right\"\n    (input)=\"searchStringInit()\"\n    (keyup.enter)=\"searchString(form.controls['searchedValue'].value)\"\n  >\n    Search for Plans!\n    <ng-container *ngIf=\"search\">\n      <tui-data-list *tuiDataList>\n        <button\n          *ngFor=\"let item of search.plans\"\n          tuiOption\n          [value]=\"item.title\"\n          (click)=\"searchString(item.title)\"\n        >\n          <tui-avatar\n            size=\"s\"\n            class=\"avatar\"\n            [avatarUrl]=\"item.imageUrl || null\"\n            [text]=\"item.title.toString()\"\n          ></tui-avatar>\n          <span class=\"name\">{{ item.title }}</span>\n        </button>\n        <div *ngIf=\"search.plans.length && search.tags.length\">\n          <hr style=\"width: 90%; text-align: left; margin-left: 5%\" />\n        </div>\n\n        <button\n          *ngFor=\"let item of search.tags\"\n          tuiOption\n          [value]=\"item\"\n          (click)=\"searchString(item)\"\n        >\n          <span class=\"name\">{{ item }}</span>\n        </button>\n      </tui-data-list>\n    </ng-container>\n  </tui-input>\n</form>\n");

/***/ }),

/***/ 78083:
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/injectables/slider-steps/slider-steps.component.html ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"sub-page-compress\">\n  <div class=\"center-children big-top-space tui-space_bottom-5\">\n  <div class=\"right-children tui-space_bottom-10\">\n    <!-- <img\n      src=\"https://via.placeholder.com/600x400\"\n      alt=\"gigi\"\n      class=\"medium-img\"\n    /> -->\n    <svg\n        class=\"medium-img\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        version=\"1.0\"\n        viewBox=\"3.85 123.68 365.07 142.83\"\n      >\n        <defs>\n          <clipPath id=\"a\">\n            <path\n              d=\"M 3.882812 123.660156 L 136.386719 123.660156 L 136.386719 213.128906 L 3.882812 213.128906 Z M 3.882812 123.660156\"\n            ></path>\n          </clipPath>\n        </defs>\n        <g clip-path=\"url(#a)\">\n          <path\n            fill=\"#6C98DB\"\n            d=\"M 129.953125 209.242188 C 126.375 205.449219 122.890625 202.832031 119.453125 201.285156 C 146.648438 178.429688 159.308594 149.480469 156.988281 138.800781 C 153.183594 163.769531 129.230469 192.503906 119.441406 201.277344 C 116.460938 199.933594 113.519531 199.410156 110.597656 199.632812 C 118.808594 188.214844 126.628906 142.644531 121.894531 131.730469 C 125.6875 133.636719 129.652344 136.75 136.332031 135.675781 C 128.050781 133.230469 124.9375 130.714844 117.949219 126.246094 C 124.992188 150.628906 115.496094 186.832031 110.125 199.675781 C 108.027344 199.898438 105.933594 200.507812 103.84375 201.480469 C 104.046875 184.597656 84.894531 137.683594 72.925781 130.136719 C 79.996094 130.226562 85.199219 128.769531 91.59375 126.800781 C 95.980469 134.421875 98.964844 143.492188 101.308594 152.480469 C 100.460938 142.660156 96.707031 132.855469 93.128906 123.714844 C 83.667969 126.5 75.226562 127.269531 65.765625 127.3125 C 87.109375 146.011719 100.140625 185.507812 103.214844 201.785156 C 101.855469 202.46875 100.5 203.300781 99.144531 204.289062 C 92.621094 190.238281 51.332031 157.71875 36.78125 157.316406 C 42.917969 153.777344 45.640625 150.386719 50.152344 145.433594 C 57.785156 149.757812 69.292969 160.160156 75.855469 166.707031 C 70.152344 158.679688 57.617188 147.527344 49.914062 141.480469 C 43.167969 148.699219 36.289062 153.671875 28.160156 158.53125 C 56.699219 163.890625 88.769531 192.515625 98.859375 204.492188 C 98.058594 205.082031 97.257812 205.71875 96.453125 206.417969 C 69.558594 198.1875 42.113281 196.066406 9.765625 207.703125 C 13.257812 202.476562 14.535156 197.769531 14.617188 192.550781 C 29.789062 189.417969 47.4375 186.941406 68.066406 187.925781 C 52.757812 184.714844 31.382812 184.203125 12.320312 189.210938 C 10.726562 198.800781 7.527344 206.246094 3.882812 213.09375 C 39.398438 200.605469 69.710938 200.5 97.726562 211.292969 C 109.324219 202.222656 120.230469 202.132812 128.417969 211.554688 C 161.320312 209.441406 216.722656 208.074219 249.625 210.78125 C 220.976562 207.3125 165.417969 207.230469 129.953125 209.242188 Z M 129.953125 209.242188\"\n            fill-rule=\"evenodd\"\n          ></path>\n        </g>\n        <path\n          fill=\"#254D9D\"\n          d=\"M 109.804688 207.8125 C 116.515625 200.167969 125.1875 189.917969 135.804688 177.046875 C 146.433594 164.183594 154.265625 155.050781 159.300781 149.652344 C 164.332031 144.246094 168.675781 140.140625 172.328125 137.339844 C 180.800781 131.003906 189.421875 127.828125 198.183594 127.828125 C 200.148438 127.828125 202.367188 128.625 204.839844 130.214844 C 207.304688 131.804688 208.542969 134.269531 208.542969 137.621094 C 208.542969 140.878906 205.417969 145.914062 199.175781 152.722656 C 196.089844 156.070312 191.632812 159.503906 185.796875 163.007812 C 179.976562 166.5 173.480469 169.320312 166.308594 171.453125 C 163.601562 171.925781 161.621094 172.164062 160.363281 172.164062 C 159.101562 172.164062 158.476562 172.019531 158.476562 171.738281 C 158.476562 171.453125 158.796875 171.136719 159.445312 170.769531 C 167.277344 166.476562 176.058594 160 185.796875 151.328125 C 195.546875 142.664062 200.425781 136.976562 200.425781 134.269531 C 200.425781 133.894531 200.167969 133.703125 199.648438 133.703125 C 199.140625 133.703125 198.585938 133.800781 197.972656 133.988281 C 197.371094 134.175781 196.699219 134.367188 195.945312 134.554688 C 195.199219 134.730469 193.621094 135.492188 191.203125 136.84375 C 188.777344 138.199219 186.234375 139.878906 183.582031 141.890625 C 180.921875 143.890625 177.609375 146.964844 173.648438 151.117188 C 169.683594 155.269531 165.695312 160.046875 161.683594 165.4375 C 146.300781 186.992188 136.328125 200.234375 131.769531 205.171875 C 131.011719 206.007812 130.074219 207.027344 128.960938 208.238281 C 131.285156 208.519531 134.777344 208.851562 139.4375 209.226562 C 144.109375 209.59375 147.257812 209.890625 148.898438 210.125 C 150.53125 210.359375 152.933594 210.855469 156.09375 211.613281 C 159.265625 212.355469 161.785156 213.28125 163.644531 214.394531 C 168.488281 217.386719 173.152344 221.445312 177.636719 226.570312 C 178.65625 227.683594 179.167969 228.421875 179.167969 228.789062 C 179.167969 229.164062 179.027344 229.355469 178.742188 229.355469 C 178.285156 229.355469 177.683594 229.164062 176.925781 228.789062 C 175.523438 228.421875 173.496094 227.914062 170.839844 227.253906 C 168.179688 226.605469 162.46875 225.769531 153.710938 224.730469 C 144.945312 223.703125 136.910156 223.195312 129.597656 223.195312 C 122.285156 223.195312 116.941406 223.242188 113.578125 223.335938 C 108.636719 228.007812 101.691406 232.339844 92.746094 236.335938 C 83.789062 240.347656 77.066406 242.355469 72.546875 242.355469 C 68.019531 242.355469 63.746094 241.164062 59.738281 238.792969 C 55.726562 236.414062 53.71875 233.222656 53.71875 229.210938 C 53.71875 226.316406 55.914062 223.148438 60.304688 219.703125 C 70.371094 211.777344 86.871094 207.8125 109.804688 207.8125 Z M 61.410156 233.269531 C 61.410156 234.195312 62.539062 234.804688 64.785156 235.085938 C 67.664062 235.085938 70.136719 234.921875 72.195312 234.589844 C 74.242188 234.273438 77.242188 233.230469 81.207031 231.453125 C 85.171875 229.671875 89.347656 227.066406 93.734375 223.621094 C 87.753906 223.621094 80.875 224.6875 73.089844 226.828125 C 65.304688 228.980469 61.410156 231.128906 61.410156 233.269531 Z M 61.410156 233.269531\"\n        ></path>\n        <path\n          fill=\"#254D9D\"\n          d=\"M 215.648438 152.578125 C 216.59375 152.578125 217.195312 152.769531 217.464844 153.144531 C 218.769531 154.738281 219.425781 156.019531 219.425781 156.992188 C 219.425781 157.972656 219.140625 158.808594 218.574219 159.515625 C 218.019531 160.210938 217.355469 161.003906 216.570312 161.898438 C 215.777344 162.785156 214.191406 163.992188 211.804688 165.53125 C 209.425781 167.058594 207.121094 167.820312 204.890625 167.820312 C 203.203125 167.539062 202.367188 166.519531 202.367188 164.753906 C 202.367188 161.957031 204.042969 159.226562 207.390625 156.566406 C 210.753906 153.914062 213.507812 152.578125 215.648438 152.578125 Z M 182.097656 207.671875 C 181.34375 208.980469 180.964844 210.148438 180.964844 211.1875 C 180.964844 212.214844 181.53125 212.71875 182.664062 212.71875 C 183.308594 212.71875 184.421875 212.4375 186.015625 211.871094 C 203.441406 202.734375 220.496094 191.96875 237.191406 179.570312 C 238.023438 180.230469 238.441406 181.027344 238.441406 181.953125 C 238.441406 182.886719 237.976562 183.769531 237.050781 184.621094 C 236.117188 185.457031 234.789062 186.667969 233.0625 188.253906 C 231.34375 189.828125 228.058594 192.664062 223.199219 196.769531 C 218.351562 200.875 213.839844 204.605469 209.65625 207.953125 C 198.644531 216.8125 190.527344 222.027344 185.308594 223.621094 C 183.636719 224.09375 181.820312 224.328125 179.859375 224.328125 C 172.683594 224.328125 169.097656 220.507812 169.097656 212.863281 C 169.097656 209.878906 170.726562 205.613281 173.984375 200.074219 C 177.25 194.523438 180.613281 189.621094 184.058594 185.375 C 187.503906 181.128906 189.777344 178.78125 190.898438 178.320312 C 192.582031 177.300781 194.398438 176.785156 196.351562 176.785156 C 198.3125 176.785156 200.183594 177.160156 201.964844 177.894531 C 202.511719 178.179688 202.789062 178.554688 202.789062 179.027344 C 202.789062 179.488281 202.34375 180.183594 201.445312 181.128906 C 200.5625 182.058594 199.210938 183.5 197.386719 185.445312 C 195.578125 187.398438 192.882812 190.777344 189.296875 195.589844 C 185.707031 200.390625 183.308594 204.414062 182.097656 207.671875 Z M 182.097656 207.671875\"\n        ></path>\n        <path\n          fill=\"#254D9D\"\n          d=\"M 272.699219 157.203125 L 279.847656 157.0625 C 289.078125 157.0625 295.785156 158.371094 299.972656 160.980469 C 302.03125 161.628906 303.0625 162.460938 303.0625 163.480469 C 303.0625 164.234375 302.148438 164.753906 300.328125 165.039062 C 298.515625 165.308594 292.222656 166.027344 281.453125 167.207031 C 270.675781 168.375 263.289062 169.042969 259.296875 169.214844 C 257.515625 169.308594 253.433594 172.394531 247.050781 178.460938 C 240.664062 184.519531 234.578125 191.179688 228.789062 198.445312 C 223.015625 205.714844 220.132812 210.796875 220.132812 213.6875 C 220.132812 214.160156 220.355469 214.5625 220.816406 214.890625 C 221.289062 215.210938 221.867188 215.363281 222.5625 215.363281 C 223.269531 215.363281 224.367188 215.089844 225.863281 214.535156 C 243.570312 204.097656 260.773438 192.675781 277.464844 180.277344 C 278.296875 180.925781 278.714844 181.71875 278.714844 182.660156 C 278.714844 183.59375 278.25 184.496094 277.324219 185.375 C 276.390625 186.261719 275.015625 187.539062 273.195312 189.222656 C 271.382812 190.90625 268.003906 193.941406 263.046875 198.328125 C 258.105469 202.703125 253.453125 206.609375 249.082031 210.054688 C 237.332031 219.574219 229.125 225.070312 224.472656 226.570312 C 222.785156 227.023438 220.804688 227.253906 218.527344 227.253906 C 216.246094 227.253906 214.144531 226.085938 212.226562 223.761719 C 210.324219 221.4375 209.371094 218.265625 209.371094 214.253906 C 209.371094 210.242188 211.949219 204.460938 217.113281 196.914062 C 222.285156 189.363281 229.34375 181.625 238.300781 173.695312 C 239.148438 173.054688 239.574219 172.445312 239.574219 171.878906 C 239.574219 171.3125 238.589844 171.03125 236.625 171.03125 L 227.824219 171.3125 C 215.425781 171.3125 209.042969 169.921875 208.664062 167.136719 C 205.773438 166.570312 204.324219 165.734375 204.324219 164.613281 C 204.324219 164.234375 204.511719 164.023438 204.890625 163.976562 C 205.269531 163.929688 205.597656 163.882812 205.882812 163.835938 C 206.152344 163.785156 206.613281 163.714844 207.273438 163.621094 C 207.921875 163.527344 213.058594 162.789062 222.703125 161.402344 C 232.359375 160.007812 243.335938 158.832031 255.640625 157.886719 L 265.289062 145.03125 C 265.855469 143.914062 267.816406 143.355469 271.164062 143.355469 C 274.527344 143.355469 276.214844 144.054688 276.214844 145.453125 C 276.214844 145.914062 275.835938 146.753906 275.082031 147.980469 L 271.589844 152.863281 C 271.117188 154.359375 270.839844 155.476562 270.765625 156.214844 C 270.765625 156.875 271.40625 157.203125 272.699219 157.203125 Z M 272.699219 157.203125\"\n        ></path>\n        <path\n          fill=\"#254D9D\"\n          d=\"M 316.464844 157.203125 L 323.613281 157.0625 C 332.84375 157.0625 339.550781 158.371094 343.738281 160.980469 C 345.796875 161.628906 346.828125 162.460938 346.828125 163.480469 C 346.828125 164.234375 345.914062 164.753906 344.09375 165.039062 C 342.28125 165.308594 335.988281 166.027344 325.21875 167.207031 C 314.441406 168.375 307.054688 169.042969 303.0625 169.214844 C 301.28125 169.308594 297.199219 172.394531 290.816406 178.460938 C 284.429688 184.519531 278.34375 191.179688 272.554688 198.445312 C 266.78125 205.714844 263.898438 210.796875 263.898438 213.6875 C 263.898438 214.160156 264.121094 214.5625 264.582031 214.890625 C 265.054688 215.210938 265.632812 215.363281 266.328125 215.363281 C 267.035156 215.363281 268.132812 215.089844 269.632812 214.535156 C 287.339844 204.097656 304.539062 192.675781 321.230469 180.277344 C 322.0625 180.925781 322.480469 181.71875 322.480469 182.660156 C 322.480469 183.59375 322.015625 184.496094 321.089844 185.375 C 320.15625 186.261719 318.78125 187.539062 316.960938 189.222656 C 315.148438 190.90625 311.769531 193.941406 306.816406 198.328125 C 301.871094 202.703125 297.21875 206.609375 292.847656 210.054688 C 281.097656 219.574219 272.894531 225.070312 268.238281 226.570312 C 266.550781 227.023438 264.570312 227.253906 262.292969 227.253906 C 260.011719 227.253906 257.910156 226.085938 255.992188 223.761719 C 254.089844 221.4375 253.140625 218.265625 253.140625 214.253906 C 253.140625 210.242188 255.714844 204.460938 260.878906 196.914062 C 266.050781 189.363281 273.109375 181.625 282.066406 173.695312 C 282.914062 173.054688 283.339844 172.445312 283.339844 171.878906 C 283.339844 171.3125 282.355469 171.03125 280.390625 171.03125 L 271.589844 171.3125 C 259.191406 171.3125 252.808594 169.921875 252.429688 167.136719 C 249.539062 166.570312 248.089844 165.734375 248.089844 164.613281 C 248.089844 164.234375 248.277344 164.023438 248.65625 163.976562 C 249.035156 163.929688 249.363281 163.882812 249.648438 163.835938 C 249.917969 163.785156 250.378906 163.714844 251.039062 163.621094 C 251.6875 163.527344 256.824219 162.789062 266.46875 161.402344 C 276.125 160.007812 287.101562 158.832031 299.40625 157.886719 L 309.054688 145.03125 C 309.621094 143.914062 311.582031 143.355469 314.929688 143.355469 C 318.292969 143.355469 319.980469 144.054688 319.980469 145.453125 C 319.980469 145.914062 319.601562 146.753906 318.847656 147.980469 L 315.355469 152.863281 C 314.882812 154.359375 314.605469 155.476562 314.53125 156.214844 C 314.53125 156.875 315.171875 157.203125 316.464844 157.203125 Z M 316.464844 157.203125\"\n        ></path>\n        <path\n          fill=\"#254D9D\"\n          d=\"M 304.03125 215.644531 C 307.015625 215.644531 310.695312 213.6875 315.070312 209.769531 C 319.460938 205.855469 321.738281 203.160156 321.914062 201.679688 C 320.792969 200.734375 319.609375 199.03125 318.351562 196.558594 C 317.089844 194.09375 316.417969 192.855469 316.324219 192.855469 C 313.445312 195.5625 310.878906 198.683594 308.628906 202.222656 C 305.089844 208.203125 303.320312 212.308594 303.320312 214.535156 C 303.320312 215.28125 303.558594 215.644531 304.03125 215.644531 Z M 334.230469 181.386719 C 333.296875 181.386719 331.363281 182.839844 328.425781 185.730469 C 325.484375 188.625 324.015625 190.628906 324.015625 191.746094 C 324.015625 192.015625 324.296875 192.570312 324.863281 193.421875 C 325.429688 194.257812 325.84375 194.671875 326.113281 194.671875 C 327.699219 194.671875 329.492188 192.761719 331.492188 188.9375 C 333.503906 185.117188 334.511719 182.910156 334.511719 182.308594 C 334.511719 181.695312 334.417969 181.386719 334.230469 181.386719 Z M 334.511719 199.4375 C 337.121094 199.4375 341.195312 197.855469 346.734375 194.695312 C 352.285156 191.519531 357.164062 188.34375 361.363281 185.164062 L 367.664062 180.277344 C 368.492188 180.925781 368.914062 181.71875 368.914062 182.660156 C 368.914062 183.59375 368.492188 184.425781 367.664062 185.164062 C 352.277344 199.429688 340.625 206.5625 332.695312 206.5625 C 332.128906 206.5625 331.285156 206.46875 330.171875 206.277344 C 319.632812 218.5 310.589844 224.613281 303.039062 224.613281 C 298 223.855469 294.839844 222.074219 293.53125 219.28125 C 292.792969 217.882812 292.421875 216.113281 292.421875 213.972656 C 292.421875 207.824219 295.960938 200.488281 303.039062 191.957031 C 310.128906 183.417969 319.035156 177.140625 329.746094 173.128906 C 330.691406 173.128906 331.386719 173.34375 331.847656 173.765625 C 332.320312 174.191406 332.730469 174.425781 333.097656 174.476562 C 333.476562 174.523438 333.957031 174.332031 334.558594 173.910156 C 335.171875 173.484375 335.988281 173.246094 337.015625 173.199219 C 338.050781 173.152344 339.125 173.738281 340.246094 174.945312 C 341.738281 176.171875 342.488281 177.671875 342.488281 179.429688 C 342.488281 184.65625 339.828125 191.320312 334.511719 199.4375 Z M 334.511719 199.4375\"\n        ></path>\n        <path\n          fill=\"#6C98DB\"\n          d=\"M 94.523438 262.785156 L 104.003906 262.785156 C 103.960938 262.328125 104.0625 261.980469 104.199219 261.585938 L 104.609375 260.347656 L 104.164062 260.347656 L 103.824219 260.9375 C 103.453125 261.570312 102.90625 262.097656 101.667969 262.160156 L 98.605469 262.3125 C 97.78125 262.328125 97.484375 261.980469 97.484375 261.367188 L 97.484375 252.007812 C 97.484375 251.28125 97.898438 251.144531 98.683594 250.988281 L 98.683594 250.597656 L 94.523438 250.597656 L 94.523438 250.988281 C 95.308594 251.144531 95.699219 251.28125 95.699219 252.007812 L 95.699219 261.367188 C 95.699219 262.097656 95.308594 262.234375 94.523438 262.371094 Z M 94.523438 262.785156\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 119.246094 260.726562 C 118.578125 261.570312 117.71875 261.824219 116.875 261.824219 C 115.128906 261.824219 113.730469 260.761719 113.265625 259.03125 C 113.207031 258.566406 113.28125 258.308594 113.671875 258.308594 L 115.972656 258.269531 C 118.484375 258.210938 119.539062 257.875 119.539062 256.644531 C 119.539062 255.035156 118.148438 253.753906 116.066406 253.753906 C 113.695312 253.753906 111.476562 255.421875 111.476562 258.347656 C 111.476562 261.15625 113.558594 262.902344 116.007812 262.902344 C 117.996094 262.902344 119.210938 261.664062 119.582031 260.980469 Z M 115.753906 254.226562 C 117.167969 254.226562 117.9375 255.152344 117.9375 256.441406 C 117.9375 257.34375 117.320312 257.800781 115.441406 257.816406 L 113.710938 257.859375 C 113.300781 257.859375 113.085938 257.742188 113.121094 257.03125 C 113.28125 255.304688 114.183594 254.226562 115.753906 254.226562 Z M 115.753906 254.226562\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 129.253906 262.902344 C 130.511719 262.902344 131.769531 262.351562 132.476562 261.46875 C 132.609375 261.292969 132.769531 261.292969 132.769531 261.46875 C 132.789062 262.472656 133.320312 262.882812 134.101562 262.882812 C 134.5 262.882812 134.96875 262.765625 135.324219 262.53125 L 135.324219 262.160156 C 134.675781 262.3125 134.339844 262.058594 134.339844 261.367188 L 134.339844 256.972656 C 134.339844 254.796875 133.511719 253.753906 131.261719 253.753906 C 129.371094 253.753906 127.355469 254.519531 127.355469 255.875 C 127.355469 256.382812 127.625 256.738281 128.140625 256.738281 C 128.671875 256.738281 129 256.40625 129 255.71875 C 129 254.796875 129.492188 254.265625 130.550781 254.265625 C 132.105469 254.265625 132.769531 255.269531 132.769531 256.621094 L 132.769531 257.03125 C 132.769531 257.429688 132.59375 257.546875 132.316406 257.5625 C 127.902344 258.070312 126.707031 259.234375 126.707031 260.742188 C 126.707031 262.269531 127.941406 262.902344 129.253906 262.902344 Z M 130.238281 262 C 129 262 128.410156 261.15625 128.410156 260.269531 C 128.410156 259.351562 129.101562 258.425781 131.984375 258.070312 C 132.671875 257.996094 132.769531 258.289062 132.769531 258.742188 L 132.769531 259.917969 C 132.769531 260.996094 131.589844 262 130.238281 262 Z M 130.238281 262\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 142.113281 262.785156 L 146.253906 262.785156 L 146.253906 262.386719 C 145.269531 262.269531 144.941406 262.058594 144.941406 261.332031 L 144.941406 257.664062 C 144.941406 255.816406 145.902344 254.65625 147.015625 254.65625 C 147.664062 254.65625 148.019531 255.09375 148.019531 255.597656 C 148.019531 255.953125 148.332031 256.289062 148.84375 256.289062 C 149.351562 256.289062 149.746094 255.894531 149.746094 255.328125 C 149.746094 254.796875 149.46875 253.753906 147.941406 253.753906 C 146.527344 253.753906 145.625 254.757812 145.351562 255.035156 C 145.074219 255.304688 144.941406 255.128906 144.941406 254.382812 C 144.941406 253.894531 144.679688 253.695312 144.25 253.792969 L 142.089844 254.285156 L 142.089844 254.65625 C 143.195312 254.542969 143.367188 254.914062 143.367188 255.777344 L 143.367188 261.332031 C 143.367188 262.058594 143.035156 262.269531 142.113281 262.386719 Z M 142.113281 262.785156\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 165.152344 262.882812 C 165.644531 262.882812 166.039062 262.742188 166.410156 262.53125 L 166.410156 262.160156 C 165.761719 262.3125 165.425781 262.058594 165.425781 261.367188 L 165.425781 256.957031 C 165.425781 254.65625 164.035156 253.753906 162.566406 253.753906 C 160.855469 253.753906 159.96875 254.832031 159.714844 255.109375 C 159.445312 255.386719 159.265625 255.128906 159.265625 254.382812 C 159.265625 253.894531 159.007812 253.695312 158.578125 253.792969 L 156.417969 254.285156 L 156.417969 254.65625 C 157.519531 254.542969 157.691406 254.914062 157.691406 255.777344 L 157.691406 261.332031 C 157.691406 262.058594 157.363281 262.269531 156.441406 262.386719 L 156.441406 262.785156 L 160.542969 262.785156 L 160.542969 262.386719 C 159.597656 262.269531 159.265625 262.058594 159.265625 261.332031 L 159.265625 257.367188 C 159.265625 255.910156 160.230469 254.738281 161.636719 254.738281 C 163.113281 254.738281 163.855469 255.851562 163.855469 257.367188 L 163.855469 261.546875 C 163.855469 262.53125 164.371094 262.882812 165.152344 262.882812 Z M 165.152344 262.882812\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 182.699219 262.785156 L 186.859375 262.785156 L 186.859375 262.371094 C 186.074219 262.234375 185.660156 262.097656 185.660156 261.367188 L 185.660156 252.007812 C 185.660156 251.28125 186.074219 251.144531 186.859375 250.988281 L 186.859375 250.597656 L 182.699219 250.597656 L 182.699219 250.988281 C 183.484375 251.144531 183.875 251.28125 183.875 252.007812 L 183.875 261.367188 C 183.875 262.097656 183.484375 262.234375 182.699219 262.371094 Z M 182.699219 262.785156\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 197.148438 262.882812 C 198.027344 262.882812 198.558594 262.566406 198.835938 262.328125 L 198.617188 261.957031 C 198.457031 262.074219 198.144531 262.253906 197.613281 262.253906 C 196.734375 262.253906 196.457031 261.46875 196.457031 260.488281 L 196.457031 254.875 C 196.457031 254.578125 196.59375 254.460938 196.851562 254.460938 L 198.617188 254.460938 L 198.617188 253.929688 L 196.851562 253.929688 C 196.59375 253.929688 196.457031 253.8125 196.457031 253.421875 L 196.457031 251.890625 L 195.925781 251.890625 C 195.65625 253.246094 194.929688 253.855469 193.632812 254.089844 L 193.632812 254.460938 L 194.457031 254.460938 C 194.730469 254.460938 194.890625 254.5625 194.890625 254.875 L 194.890625 260.253906 C 194.890625 262.195312 195.808594 262.882812 197.148438 262.882812 Z M 197.148438 262.882812\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 217.875 262.785156 L 222.816406 262.785156 L 222.816406 262.371094 C 221.640625 262.234375 221.246094 262.097656 221.246094 261.367188 L 221.246094 252.167969 C 221.246094 251.5 221.367188 251.222656 222.835938 251.222656 C 224.207031 251.222656 224.679688 251.617188 225.210938 253.144531 L 225.664062 253.144531 L 225.347656 250.539062 L 224.230469 250.597656 L 216.457031 250.597656 L 215.335938 250.539062 L 215.023438 253.144531 L 215.480469 253.144531 C 216.027344 251.617188 216.476562 251.222656 217.851562 251.222656 C 219.324219 251.222656 219.460938 251.5 219.460938 252.167969 L 219.460938 261.367188 C 219.460938 262.097656 219.046875 262.234375 217.875 262.371094 Z M 217.875 262.785156\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 237.183594 262.902344 C 239.640625 262.902344 241.796875 261.113281 241.796875 258.289062 C 241.796875 255.464844 239.65625 253.753906 237.246094 253.753906 C 234.808594 253.753906 232.632812 255.523438 232.632812 258.347656 C 232.632812 261.171875 234.789062 262.902344 237.183594 262.902344 Z M 237.65625 262.371094 C 235.710938 262.371094 234.277344 260.230469 234.277344 257.699219 C 234.277344 255.363281 235.355469 254.285156 236.773438 254.285156 C 238.738281 254.285156 240.144531 256.425781 240.144531 258.957031 C 240.144531 261.273438 239.089844 262.371094 237.65625 262.371094 Z M 237.65625 262.371094\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 251.15625 259.664062 C 251.730469 259.664062 252.160156 259.824219 252.902344 259.824219 C 255.042969 259.824219 256.402344 258.625 256.402344 256.761719 C 256.402344 255.285156 256.476562 254.972656 256.96875 255.152344 C 257.421875 255.304688 257.929688 255.070312 257.929688 254.519531 C 257.929688 254.089844 257.59375 253.792969 257.042969 253.792969 C 256.28125 253.792969 255.964844 254.367188 255.929688 255.128906 C 255.296875 254.207031 254.101562 253.753906 252.765625 253.753906 C 250.492188 253.753906 249.15625 255.007812 249.15625 256.816406 C 249.15625 257.996094 249.707031 258.820312 250.566406 259.308594 C 249.527344 259.503906 248.980469 259.957031 248.980469 260.667969 C 248.980469 261.332031 249.453125 261.882812 250.15625 262.015625 C 250.828125 262.136719 248.566406 262.292969 248.566406 264.097656 C 248.566406 265.609375 250.179688 266.511719 252.296875 266.511719 C 254.765625 266.511719 257.398438 265.277344 257.398438 263.390625 C 257.398438 262.195312 256.28125 261.746094 254.4375 261.425781 L 251.292969 260.878906 C 250.769531 260.800781 250.390625 260.644531 250.390625 260.230469 C 250.390625 259.898438 250.648438 259.664062 251.15625 259.664062 Z M 252.453125 254.191406 C 253.847656 254.191406 254.730469 255.464844 254.730469 257.25 C 254.730469 258.269531 254.335938 259.386719 253.082031 259.386719 C 251.707031 259.386719 250.828125 258.113281 250.828125 256.324219 C 250.828125 255.304688 251.199219 254.191406 252.453125 254.191406 Z M 252.175781 262.414062 L 254.21875 262.742188 C 255.355469 262.941406 255.886719 263.238281 255.886719 263.863281 C 255.886719 265.253906 254.574219 265.980469 253.121094 265.980469 C 251.273438 265.980469 250.117188 265.078125 250.117188 263.863281 C 250.117188 262.917969 250.886719 262.195312 252.175781 262.414062 Z M 252.175781 262.414062\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 272.46875 260.726562 C 271.804688 261.570312 270.941406 261.824219 270.097656 261.824219 C 268.351562 261.824219 266.953125 260.761719 266.488281 259.03125 C 266.429688 258.566406 266.507812 258.308594 266.894531 258.308594 L 269.195312 258.269531 C 271.707031 258.210938 272.765625 257.875 272.765625 256.644531 C 272.765625 255.035156 271.371094 253.753906 269.289062 253.753906 C 266.917969 253.753906 264.699219 255.421875 264.699219 258.347656 C 264.699219 261.15625 266.785156 262.902344 269.230469 262.902344 C 271.21875 262.902344 272.433594 261.664062 272.804688 260.980469 Z M 268.976562 254.226562 C 270.394531 254.226562 271.160156 255.152344 271.160156 256.441406 C 271.160156 257.34375 270.546875 257.800781 268.664062 257.816406 L 266.9375 257.859375 C 266.523438 257.859375 266.3125 257.742188 266.347656 257.03125 C 266.507812 255.304688 267.410156 254.226562 268.976562 254.226562 Z M 268.976562 254.226562\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 283.152344 262.882812 C 284.03125 262.882812 284.5625 262.566406 284.839844 262.328125 L 284.621094 261.957031 C 284.460938 262.074219 284.148438 262.253906 283.617188 262.253906 C 282.738281 262.253906 282.460938 261.46875 282.460938 260.488281 L 282.460938 254.875 C 282.460938 254.578125 282.597656 254.460938 282.855469 254.460938 L 284.621094 254.460938 L 284.621094 253.929688 L 282.855469 253.929688 C 282.597656 253.929688 282.460938 253.8125 282.460938 253.421875 L 282.460938 251.890625 L 281.929688 251.890625 C 281.660156 253.246094 280.933594 253.855469 279.636719 254.089844 L 279.636719 254.460938 L 280.460938 254.460938 C 280.734375 254.460938 280.890625 254.5625 280.890625 254.875 L 280.890625 260.253906 C 280.890625 262.195312 281.8125 262.882812 283.152344 262.882812 Z M 283.152344 262.882812\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 300.417969 261.367188 L 300.417969 256.957031 C 300.417969 254.65625 299.027344 253.753906 297.550781 253.753906 C 295.847656 253.753906 295.003906 254.832031 294.707031 255.109375 C 294.429688 255.386719 294.253906 255.128906 294.253906 254.382812 L 294.253906 250.480469 C 294.253906 250.027344 294 249.832031 293.570312 249.929688 L 291.410156 250.398438 L 291.410156 250.773438 C 292.507812 250.675781 292.683594 251.027344 292.683594 251.890625 L 292.683594 261.332031 C 292.683594 262.058594 292.355469 262.269531 291.429688 262.386719 L 291.429688 262.785156 L 295.535156 262.785156 L 295.535156 262.386719 C 294.589844 262.269531 294.253906 262.058594 294.253906 261.332031 L 294.253906 257.367188 C 294.253906 255.910156 295.214844 254.773438 296.632812 254.773438 C 298.003906 254.773438 298.847656 255.910156 298.847656 257.367188 L 298.847656 261.546875 C 298.847656 262.53125 299.355469 262.882812 300.148438 262.882812 C 300.636719 262.882812 301.027344 262.742188 301.402344 262.53125 L 301.402344 262.160156 C 300.753906 262.3125 300.417969 262.058594 300.417969 261.367188 Z M 300.417969 261.367188\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 316.039062 260.726562 C 315.371094 261.570312 314.511719 261.824219 313.667969 261.824219 C 311.921875 261.824219 310.523438 260.761719 310.058594 259.03125 C 310 258.566406 310.074219 258.308594 310.464844 258.308594 L 312.765625 258.269531 C 315.277344 258.210938 316.332031 257.875 316.332031 256.644531 C 316.332031 255.035156 314.941406 253.753906 312.859375 253.753906 C 310.488281 253.753906 308.269531 255.421875 308.269531 258.347656 C 308.269531 261.15625 310.351562 262.902344 312.800781 262.902344 C 314.789062 262.902344 316.003906 261.664062 316.375 260.980469 Z M 312.546875 254.226562 C 313.960938 254.226562 314.730469 255.152344 314.730469 256.441406 C 314.730469 257.34375 314.117188 257.800781 312.234375 257.816406 L 310.507812 257.859375 C 310.09375 257.859375 309.882812 257.742188 309.917969 257.03125 C 310.074219 255.304688 310.976562 254.226562 312.546875 254.226562 Z M 312.546875 254.226562\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 323.425781 262.785156 L 327.566406 262.785156 L 327.566406 262.386719 C 326.578125 262.269531 326.25 262.058594 326.25 261.332031 L 326.25 257.664062 C 326.25 255.816406 327.210938 254.65625 328.324219 254.65625 C 328.972656 254.65625 329.328125 255.09375 329.328125 255.597656 C 329.328125 255.953125 329.640625 256.289062 330.152344 256.289062 C 330.660156 256.289062 331.054688 255.894531 331.054688 255.328125 C 331.054688 254.796875 330.777344 253.753906 329.25 253.753906 C 327.835938 253.753906 326.933594 254.757812 326.660156 255.035156 C 326.386719 255.304688 326.25 255.128906 326.25 254.382812 C 326.25 253.894531 325.988281 253.695312 325.558594 253.792969 L 323.398438 254.285156 L 323.398438 254.65625 C 324.503906 254.542969 324.675781 254.914062 324.675781 255.777344 L 324.675781 261.332031 C 324.675781 262.058594 324.34375 262.269531 323.425781 262.386719 Z M 323.425781 262.785156\"\n        ></path>\n      </svg>\n    <!-- <div\n      class=\"tui-text_h2 class logo-color center-children tui-space_left-3 tui-space_top-3\"\n    >\n      Litto\n    </div> -->\n  </div>\n</div>\n  <div class=\"tui-space_bottom-10\">\n    <p class=\"tui-space_bottom-3 prim-color tui-text_body-m\">\n      Log in into your Litto account\n    </p>\n    <form [formGroup]=\"form\">\n      <div class=\"tui-space_bottom-5\">\n        <tui-input formControlName=\"email\"> Email </tui-input>\n      </div>\n      <div>\n        <tui-input-password formControlName=\"password\">\n          Password\n        </tui-input-password>\n      </div>\n    </form>\n  </div>\n  <div class=\"center-children tui-space_bottom-10 tui-space_top-10\">\n    <a routerLink=\"/login\">\n      <button\n        tuiButton\n        type=\"button\"\n        appearance=\"primary-custom\"\n        (click)=\"login()\"\n      >\n        Log in\n      </button>\n    </a>\n    <a routerLink=\"/register\" class=\"tui-space_top-10\">Register?</a>\n  </div>\n</div>\n");

/***/ }),

/***/ 27653:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/plan-overview/plan-overview.component.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"sub-page-compress\">\n  <div class=\"center-children big-top-space tui-space_bottom-5\">\n  <div class=\"right-children tui-space_bottom-10\">\n    <svg\n        class=\"medium-img\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        version=\"1.0\"\n        viewBox=\"3.85 123.68 365.07 142.83\"\n      >\n        <defs>\n          <clipPath id=\"a\">\n            <path\n              d=\"M 3.882812 123.660156 L 136.386719 123.660156 L 136.386719 213.128906 L 3.882812 213.128906 Z M 3.882812 123.660156\"\n            ></path>\n          </clipPath>\n        </defs>\n        <g clip-path=\"url(#a)\">\n          <path\n            fill=\"#6C98DB\"\n            d=\"M 129.953125 209.242188 C 126.375 205.449219 122.890625 202.832031 119.453125 201.285156 C 146.648438 178.429688 159.308594 149.480469 156.988281 138.800781 C 153.183594 163.769531 129.230469 192.503906 119.441406 201.277344 C 116.460938 199.933594 113.519531 199.410156 110.597656 199.632812 C 118.808594 188.214844 126.628906 142.644531 121.894531 131.730469 C 125.6875 133.636719 129.652344 136.75 136.332031 135.675781 C 128.050781 133.230469 124.9375 130.714844 117.949219 126.246094 C 124.992188 150.628906 115.496094 186.832031 110.125 199.675781 C 108.027344 199.898438 105.933594 200.507812 103.84375 201.480469 C 104.046875 184.597656 84.894531 137.683594 72.925781 130.136719 C 79.996094 130.226562 85.199219 128.769531 91.59375 126.800781 C 95.980469 134.421875 98.964844 143.492188 101.308594 152.480469 C 100.460938 142.660156 96.707031 132.855469 93.128906 123.714844 C 83.667969 126.5 75.226562 127.269531 65.765625 127.3125 C 87.109375 146.011719 100.140625 185.507812 103.214844 201.785156 C 101.855469 202.46875 100.5 203.300781 99.144531 204.289062 C 92.621094 190.238281 51.332031 157.71875 36.78125 157.316406 C 42.917969 153.777344 45.640625 150.386719 50.152344 145.433594 C 57.785156 149.757812 69.292969 160.160156 75.855469 166.707031 C 70.152344 158.679688 57.617188 147.527344 49.914062 141.480469 C 43.167969 148.699219 36.289062 153.671875 28.160156 158.53125 C 56.699219 163.890625 88.769531 192.515625 98.859375 204.492188 C 98.058594 205.082031 97.257812 205.71875 96.453125 206.417969 C 69.558594 198.1875 42.113281 196.066406 9.765625 207.703125 C 13.257812 202.476562 14.535156 197.769531 14.617188 192.550781 C 29.789062 189.417969 47.4375 186.941406 68.066406 187.925781 C 52.757812 184.714844 31.382812 184.203125 12.320312 189.210938 C 10.726562 198.800781 7.527344 206.246094 3.882812 213.09375 C 39.398438 200.605469 69.710938 200.5 97.726562 211.292969 C 109.324219 202.222656 120.230469 202.132812 128.417969 211.554688 C 161.320312 209.441406 216.722656 208.074219 249.625 210.78125 C 220.976562 207.3125 165.417969 207.230469 129.953125 209.242188 Z M 129.953125 209.242188\"\n            fill-rule=\"evenodd\"\n          ></path>\n        </g>\n        <path\n          fill=\"#254D9D\"\n          d=\"M 109.804688 207.8125 C 116.515625 200.167969 125.1875 189.917969 135.804688 177.046875 C 146.433594 164.183594 154.265625 155.050781 159.300781 149.652344 C 164.332031 144.246094 168.675781 140.140625 172.328125 137.339844 C 180.800781 131.003906 189.421875 127.828125 198.183594 127.828125 C 200.148438 127.828125 202.367188 128.625 204.839844 130.214844 C 207.304688 131.804688 208.542969 134.269531 208.542969 137.621094 C 208.542969 140.878906 205.417969 145.914062 199.175781 152.722656 C 196.089844 156.070312 191.632812 159.503906 185.796875 163.007812 C 179.976562 166.5 173.480469 169.320312 166.308594 171.453125 C 163.601562 171.925781 161.621094 172.164062 160.363281 172.164062 C 159.101562 172.164062 158.476562 172.019531 158.476562 171.738281 C 158.476562 171.453125 158.796875 171.136719 159.445312 170.769531 C 167.277344 166.476562 176.058594 160 185.796875 151.328125 C 195.546875 142.664062 200.425781 136.976562 200.425781 134.269531 C 200.425781 133.894531 200.167969 133.703125 199.648438 133.703125 C 199.140625 133.703125 198.585938 133.800781 197.972656 133.988281 C 197.371094 134.175781 196.699219 134.367188 195.945312 134.554688 C 195.199219 134.730469 193.621094 135.492188 191.203125 136.84375 C 188.777344 138.199219 186.234375 139.878906 183.582031 141.890625 C 180.921875 143.890625 177.609375 146.964844 173.648438 151.117188 C 169.683594 155.269531 165.695312 160.046875 161.683594 165.4375 C 146.300781 186.992188 136.328125 200.234375 131.769531 205.171875 C 131.011719 206.007812 130.074219 207.027344 128.960938 208.238281 C 131.285156 208.519531 134.777344 208.851562 139.4375 209.226562 C 144.109375 209.59375 147.257812 209.890625 148.898438 210.125 C 150.53125 210.359375 152.933594 210.855469 156.09375 211.613281 C 159.265625 212.355469 161.785156 213.28125 163.644531 214.394531 C 168.488281 217.386719 173.152344 221.445312 177.636719 226.570312 C 178.65625 227.683594 179.167969 228.421875 179.167969 228.789062 C 179.167969 229.164062 179.027344 229.355469 178.742188 229.355469 C 178.285156 229.355469 177.683594 229.164062 176.925781 228.789062 C 175.523438 228.421875 173.496094 227.914062 170.839844 227.253906 C 168.179688 226.605469 162.46875 225.769531 153.710938 224.730469 C 144.945312 223.703125 136.910156 223.195312 129.597656 223.195312 C 122.285156 223.195312 116.941406 223.242188 113.578125 223.335938 C 108.636719 228.007812 101.691406 232.339844 92.746094 236.335938 C 83.789062 240.347656 77.066406 242.355469 72.546875 242.355469 C 68.019531 242.355469 63.746094 241.164062 59.738281 238.792969 C 55.726562 236.414062 53.71875 233.222656 53.71875 229.210938 C 53.71875 226.316406 55.914062 223.148438 60.304688 219.703125 C 70.371094 211.777344 86.871094 207.8125 109.804688 207.8125 Z M 61.410156 233.269531 C 61.410156 234.195312 62.539062 234.804688 64.785156 235.085938 C 67.664062 235.085938 70.136719 234.921875 72.195312 234.589844 C 74.242188 234.273438 77.242188 233.230469 81.207031 231.453125 C 85.171875 229.671875 89.347656 227.066406 93.734375 223.621094 C 87.753906 223.621094 80.875 224.6875 73.089844 226.828125 C 65.304688 228.980469 61.410156 231.128906 61.410156 233.269531 Z M 61.410156 233.269531\"\n        ></path>\n        <path\n          fill=\"#254D9D\"\n          d=\"M 215.648438 152.578125 C 216.59375 152.578125 217.195312 152.769531 217.464844 153.144531 C 218.769531 154.738281 219.425781 156.019531 219.425781 156.992188 C 219.425781 157.972656 219.140625 158.808594 218.574219 159.515625 C 218.019531 160.210938 217.355469 161.003906 216.570312 161.898438 C 215.777344 162.785156 214.191406 163.992188 211.804688 165.53125 C 209.425781 167.058594 207.121094 167.820312 204.890625 167.820312 C 203.203125 167.539062 202.367188 166.519531 202.367188 164.753906 C 202.367188 161.957031 204.042969 159.226562 207.390625 156.566406 C 210.753906 153.914062 213.507812 152.578125 215.648438 152.578125 Z M 182.097656 207.671875 C 181.34375 208.980469 180.964844 210.148438 180.964844 211.1875 C 180.964844 212.214844 181.53125 212.71875 182.664062 212.71875 C 183.308594 212.71875 184.421875 212.4375 186.015625 211.871094 C 203.441406 202.734375 220.496094 191.96875 237.191406 179.570312 C 238.023438 180.230469 238.441406 181.027344 238.441406 181.953125 C 238.441406 182.886719 237.976562 183.769531 237.050781 184.621094 C 236.117188 185.457031 234.789062 186.667969 233.0625 188.253906 C 231.34375 189.828125 228.058594 192.664062 223.199219 196.769531 C 218.351562 200.875 213.839844 204.605469 209.65625 207.953125 C 198.644531 216.8125 190.527344 222.027344 185.308594 223.621094 C 183.636719 224.09375 181.820312 224.328125 179.859375 224.328125 C 172.683594 224.328125 169.097656 220.507812 169.097656 212.863281 C 169.097656 209.878906 170.726562 205.613281 173.984375 200.074219 C 177.25 194.523438 180.613281 189.621094 184.058594 185.375 C 187.503906 181.128906 189.777344 178.78125 190.898438 178.320312 C 192.582031 177.300781 194.398438 176.785156 196.351562 176.785156 C 198.3125 176.785156 200.183594 177.160156 201.964844 177.894531 C 202.511719 178.179688 202.789062 178.554688 202.789062 179.027344 C 202.789062 179.488281 202.34375 180.183594 201.445312 181.128906 C 200.5625 182.058594 199.210938 183.5 197.386719 185.445312 C 195.578125 187.398438 192.882812 190.777344 189.296875 195.589844 C 185.707031 200.390625 183.308594 204.414062 182.097656 207.671875 Z M 182.097656 207.671875\"\n        ></path>\n        <path\n          fill=\"#254D9D\"\n          d=\"M 272.699219 157.203125 L 279.847656 157.0625 C 289.078125 157.0625 295.785156 158.371094 299.972656 160.980469 C 302.03125 161.628906 303.0625 162.460938 303.0625 163.480469 C 303.0625 164.234375 302.148438 164.753906 300.328125 165.039062 C 298.515625 165.308594 292.222656 166.027344 281.453125 167.207031 C 270.675781 168.375 263.289062 169.042969 259.296875 169.214844 C 257.515625 169.308594 253.433594 172.394531 247.050781 178.460938 C 240.664062 184.519531 234.578125 191.179688 228.789062 198.445312 C 223.015625 205.714844 220.132812 210.796875 220.132812 213.6875 C 220.132812 214.160156 220.355469 214.5625 220.816406 214.890625 C 221.289062 215.210938 221.867188 215.363281 222.5625 215.363281 C 223.269531 215.363281 224.367188 215.089844 225.863281 214.535156 C 243.570312 204.097656 260.773438 192.675781 277.464844 180.277344 C 278.296875 180.925781 278.714844 181.71875 278.714844 182.660156 C 278.714844 183.59375 278.25 184.496094 277.324219 185.375 C 276.390625 186.261719 275.015625 187.539062 273.195312 189.222656 C 271.382812 190.90625 268.003906 193.941406 263.046875 198.328125 C 258.105469 202.703125 253.453125 206.609375 249.082031 210.054688 C 237.332031 219.574219 229.125 225.070312 224.472656 226.570312 C 222.785156 227.023438 220.804688 227.253906 218.527344 227.253906 C 216.246094 227.253906 214.144531 226.085938 212.226562 223.761719 C 210.324219 221.4375 209.371094 218.265625 209.371094 214.253906 C 209.371094 210.242188 211.949219 204.460938 217.113281 196.914062 C 222.285156 189.363281 229.34375 181.625 238.300781 173.695312 C 239.148438 173.054688 239.574219 172.445312 239.574219 171.878906 C 239.574219 171.3125 238.589844 171.03125 236.625 171.03125 L 227.824219 171.3125 C 215.425781 171.3125 209.042969 169.921875 208.664062 167.136719 C 205.773438 166.570312 204.324219 165.734375 204.324219 164.613281 C 204.324219 164.234375 204.511719 164.023438 204.890625 163.976562 C 205.269531 163.929688 205.597656 163.882812 205.882812 163.835938 C 206.152344 163.785156 206.613281 163.714844 207.273438 163.621094 C 207.921875 163.527344 213.058594 162.789062 222.703125 161.402344 C 232.359375 160.007812 243.335938 158.832031 255.640625 157.886719 L 265.289062 145.03125 C 265.855469 143.914062 267.816406 143.355469 271.164062 143.355469 C 274.527344 143.355469 276.214844 144.054688 276.214844 145.453125 C 276.214844 145.914062 275.835938 146.753906 275.082031 147.980469 L 271.589844 152.863281 C 271.117188 154.359375 270.839844 155.476562 270.765625 156.214844 C 270.765625 156.875 271.40625 157.203125 272.699219 157.203125 Z M 272.699219 157.203125\"\n        ></path>\n        <path\n          fill=\"#254D9D\"\n          d=\"M 316.464844 157.203125 L 323.613281 157.0625 C 332.84375 157.0625 339.550781 158.371094 343.738281 160.980469 C 345.796875 161.628906 346.828125 162.460938 346.828125 163.480469 C 346.828125 164.234375 345.914062 164.753906 344.09375 165.039062 C 342.28125 165.308594 335.988281 166.027344 325.21875 167.207031 C 314.441406 168.375 307.054688 169.042969 303.0625 169.214844 C 301.28125 169.308594 297.199219 172.394531 290.816406 178.460938 C 284.429688 184.519531 278.34375 191.179688 272.554688 198.445312 C 266.78125 205.714844 263.898438 210.796875 263.898438 213.6875 C 263.898438 214.160156 264.121094 214.5625 264.582031 214.890625 C 265.054688 215.210938 265.632812 215.363281 266.328125 215.363281 C 267.035156 215.363281 268.132812 215.089844 269.632812 214.535156 C 287.339844 204.097656 304.539062 192.675781 321.230469 180.277344 C 322.0625 180.925781 322.480469 181.71875 322.480469 182.660156 C 322.480469 183.59375 322.015625 184.496094 321.089844 185.375 C 320.15625 186.261719 318.78125 187.539062 316.960938 189.222656 C 315.148438 190.90625 311.769531 193.941406 306.816406 198.328125 C 301.871094 202.703125 297.21875 206.609375 292.847656 210.054688 C 281.097656 219.574219 272.894531 225.070312 268.238281 226.570312 C 266.550781 227.023438 264.570312 227.253906 262.292969 227.253906 C 260.011719 227.253906 257.910156 226.085938 255.992188 223.761719 C 254.089844 221.4375 253.140625 218.265625 253.140625 214.253906 C 253.140625 210.242188 255.714844 204.460938 260.878906 196.914062 C 266.050781 189.363281 273.109375 181.625 282.066406 173.695312 C 282.914062 173.054688 283.339844 172.445312 283.339844 171.878906 C 283.339844 171.3125 282.355469 171.03125 280.390625 171.03125 L 271.589844 171.3125 C 259.191406 171.3125 252.808594 169.921875 252.429688 167.136719 C 249.539062 166.570312 248.089844 165.734375 248.089844 164.613281 C 248.089844 164.234375 248.277344 164.023438 248.65625 163.976562 C 249.035156 163.929688 249.363281 163.882812 249.648438 163.835938 C 249.917969 163.785156 250.378906 163.714844 251.039062 163.621094 C 251.6875 163.527344 256.824219 162.789062 266.46875 161.402344 C 276.125 160.007812 287.101562 158.832031 299.40625 157.886719 L 309.054688 145.03125 C 309.621094 143.914062 311.582031 143.355469 314.929688 143.355469 C 318.292969 143.355469 319.980469 144.054688 319.980469 145.453125 C 319.980469 145.914062 319.601562 146.753906 318.847656 147.980469 L 315.355469 152.863281 C 314.882812 154.359375 314.605469 155.476562 314.53125 156.214844 C 314.53125 156.875 315.171875 157.203125 316.464844 157.203125 Z M 316.464844 157.203125\"\n        ></path>\n        <path\n          fill=\"#254D9D\"\n          d=\"M 304.03125 215.644531 C 307.015625 215.644531 310.695312 213.6875 315.070312 209.769531 C 319.460938 205.855469 321.738281 203.160156 321.914062 201.679688 C 320.792969 200.734375 319.609375 199.03125 318.351562 196.558594 C 317.089844 194.09375 316.417969 192.855469 316.324219 192.855469 C 313.445312 195.5625 310.878906 198.683594 308.628906 202.222656 C 305.089844 208.203125 303.320312 212.308594 303.320312 214.535156 C 303.320312 215.28125 303.558594 215.644531 304.03125 215.644531 Z M 334.230469 181.386719 C 333.296875 181.386719 331.363281 182.839844 328.425781 185.730469 C 325.484375 188.625 324.015625 190.628906 324.015625 191.746094 C 324.015625 192.015625 324.296875 192.570312 324.863281 193.421875 C 325.429688 194.257812 325.84375 194.671875 326.113281 194.671875 C 327.699219 194.671875 329.492188 192.761719 331.492188 188.9375 C 333.503906 185.117188 334.511719 182.910156 334.511719 182.308594 C 334.511719 181.695312 334.417969 181.386719 334.230469 181.386719 Z M 334.511719 199.4375 C 337.121094 199.4375 341.195312 197.855469 346.734375 194.695312 C 352.285156 191.519531 357.164062 188.34375 361.363281 185.164062 L 367.664062 180.277344 C 368.492188 180.925781 368.914062 181.71875 368.914062 182.660156 C 368.914062 183.59375 368.492188 184.425781 367.664062 185.164062 C 352.277344 199.429688 340.625 206.5625 332.695312 206.5625 C 332.128906 206.5625 331.285156 206.46875 330.171875 206.277344 C 319.632812 218.5 310.589844 224.613281 303.039062 224.613281 C 298 223.855469 294.839844 222.074219 293.53125 219.28125 C 292.792969 217.882812 292.421875 216.113281 292.421875 213.972656 C 292.421875 207.824219 295.960938 200.488281 303.039062 191.957031 C 310.128906 183.417969 319.035156 177.140625 329.746094 173.128906 C 330.691406 173.128906 331.386719 173.34375 331.847656 173.765625 C 332.320312 174.191406 332.730469 174.425781 333.097656 174.476562 C 333.476562 174.523438 333.957031 174.332031 334.558594 173.910156 C 335.171875 173.484375 335.988281 173.246094 337.015625 173.199219 C 338.050781 173.152344 339.125 173.738281 340.246094 174.945312 C 341.738281 176.171875 342.488281 177.671875 342.488281 179.429688 C 342.488281 184.65625 339.828125 191.320312 334.511719 199.4375 Z M 334.511719 199.4375\"\n        ></path>\n        <path\n          fill=\"#6C98DB\"\n          d=\"M 94.523438 262.785156 L 104.003906 262.785156 C 103.960938 262.328125 104.0625 261.980469 104.199219 261.585938 L 104.609375 260.347656 L 104.164062 260.347656 L 103.824219 260.9375 C 103.453125 261.570312 102.90625 262.097656 101.667969 262.160156 L 98.605469 262.3125 C 97.78125 262.328125 97.484375 261.980469 97.484375 261.367188 L 97.484375 252.007812 C 97.484375 251.28125 97.898438 251.144531 98.683594 250.988281 L 98.683594 250.597656 L 94.523438 250.597656 L 94.523438 250.988281 C 95.308594 251.144531 95.699219 251.28125 95.699219 252.007812 L 95.699219 261.367188 C 95.699219 262.097656 95.308594 262.234375 94.523438 262.371094 Z M 94.523438 262.785156\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 119.246094 260.726562 C 118.578125 261.570312 117.71875 261.824219 116.875 261.824219 C 115.128906 261.824219 113.730469 260.761719 113.265625 259.03125 C 113.207031 258.566406 113.28125 258.308594 113.671875 258.308594 L 115.972656 258.269531 C 118.484375 258.210938 119.539062 257.875 119.539062 256.644531 C 119.539062 255.035156 118.148438 253.753906 116.066406 253.753906 C 113.695312 253.753906 111.476562 255.421875 111.476562 258.347656 C 111.476562 261.15625 113.558594 262.902344 116.007812 262.902344 C 117.996094 262.902344 119.210938 261.664062 119.582031 260.980469 Z M 115.753906 254.226562 C 117.167969 254.226562 117.9375 255.152344 117.9375 256.441406 C 117.9375 257.34375 117.320312 257.800781 115.441406 257.816406 L 113.710938 257.859375 C 113.300781 257.859375 113.085938 257.742188 113.121094 257.03125 C 113.28125 255.304688 114.183594 254.226562 115.753906 254.226562 Z M 115.753906 254.226562\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 129.253906 262.902344 C 130.511719 262.902344 131.769531 262.351562 132.476562 261.46875 C 132.609375 261.292969 132.769531 261.292969 132.769531 261.46875 C 132.789062 262.472656 133.320312 262.882812 134.101562 262.882812 C 134.5 262.882812 134.96875 262.765625 135.324219 262.53125 L 135.324219 262.160156 C 134.675781 262.3125 134.339844 262.058594 134.339844 261.367188 L 134.339844 256.972656 C 134.339844 254.796875 133.511719 253.753906 131.261719 253.753906 C 129.371094 253.753906 127.355469 254.519531 127.355469 255.875 C 127.355469 256.382812 127.625 256.738281 128.140625 256.738281 C 128.671875 256.738281 129 256.40625 129 255.71875 C 129 254.796875 129.492188 254.265625 130.550781 254.265625 C 132.105469 254.265625 132.769531 255.269531 132.769531 256.621094 L 132.769531 257.03125 C 132.769531 257.429688 132.59375 257.546875 132.316406 257.5625 C 127.902344 258.070312 126.707031 259.234375 126.707031 260.742188 C 126.707031 262.269531 127.941406 262.902344 129.253906 262.902344 Z M 130.238281 262 C 129 262 128.410156 261.15625 128.410156 260.269531 C 128.410156 259.351562 129.101562 258.425781 131.984375 258.070312 C 132.671875 257.996094 132.769531 258.289062 132.769531 258.742188 L 132.769531 259.917969 C 132.769531 260.996094 131.589844 262 130.238281 262 Z M 130.238281 262\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 142.113281 262.785156 L 146.253906 262.785156 L 146.253906 262.386719 C 145.269531 262.269531 144.941406 262.058594 144.941406 261.332031 L 144.941406 257.664062 C 144.941406 255.816406 145.902344 254.65625 147.015625 254.65625 C 147.664062 254.65625 148.019531 255.09375 148.019531 255.597656 C 148.019531 255.953125 148.332031 256.289062 148.84375 256.289062 C 149.351562 256.289062 149.746094 255.894531 149.746094 255.328125 C 149.746094 254.796875 149.46875 253.753906 147.941406 253.753906 C 146.527344 253.753906 145.625 254.757812 145.351562 255.035156 C 145.074219 255.304688 144.941406 255.128906 144.941406 254.382812 C 144.941406 253.894531 144.679688 253.695312 144.25 253.792969 L 142.089844 254.285156 L 142.089844 254.65625 C 143.195312 254.542969 143.367188 254.914062 143.367188 255.777344 L 143.367188 261.332031 C 143.367188 262.058594 143.035156 262.269531 142.113281 262.386719 Z M 142.113281 262.785156\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 165.152344 262.882812 C 165.644531 262.882812 166.039062 262.742188 166.410156 262.53125 L 166.410156 262.160156 C 165.761719 262.3125 165.425781 262.058594 165.425781 261.367188 L 165.425781 256.957031 C 165.425781 254.65625 164.035156 253.753906 162.566406 253.753906 C 160.855469 253.753906 159.96875 254.832031 159.714844 255.109375 C 159.445312 255.386719 159.265625 255.128906 159.265625 254.382812 C 159.265625 253.894531 159.007812 253.695312 158.578125 253.792969 L 156.417969 254.285156 L 156.417969 254.65625 C 157.519531 254.542969 157.691406 254.914062 157.691406 255.777344 L 157.691406 261.332031 C 157.691406 262.058594 157.363281 262.269531 156.441406 262.386719 L 156.441406 262.785156 L 160.542969 262.785156 L 160.542969 262.386719 C 159.597656 262.269531 159.265625 262.058594 159.265625 261.332031 L 159.265625 257.367188 C 159.265625 255.910156 160.230469 254.738281 161.636719 254.738281 C 163.113281 254.738281 163.855469 255.851562 163.855469 257.367188 L 163.855469 261.546875 C 163.855469 262.53125 164.371094 262.882812 165.152344 262.882812 Z M 165.152344 262.882812\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 182.699219 262.785156 L 186.859375 262.785156 L 186.859375 262.371094 C 186.074219 262.234375 185.660156 262.097656 185.660156 261.367188 L 185.660156 252.007812 C 185.660156 251.28125 186.074219 251.144531 186.859375 250.988281 L 186.859375 250.597656 L 182.699219 250.597656 L 182.699219 250.988281 C 183.484375 251.144531 183.875 251.28125 183.875 252.007812 L 183.875 261.367188 C 183.875 262.097656 183.484375 262.234375 182.699219 262.371094 Z M 182.699219 262.785156\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 197.148438 262.882812 C 198.027344 262.882812 198.558594 262.566406 198.835938 262.328125 L 198.617188 261.957031 C 198.457031 262.074219 198.144531 262.253906 197.613281 262.253906 C 196.734375 262.253906 196.457031 261.46875 196.457031 260.488281 L 196.457031 254.875 C 196.457031 254.578125 196.59375 254.460938 196.851562 254.460938 L 198.617188 254.460938 L 198.617188 253.929688 L 196.851562 253.929688 C 196.59375 253.929688 196.457031 253.8125 196.457031 253.421875 L 196.457031 251.890625 L 195.925781 251.890625 C 195.65625 253.246094 194.929688 253.855469 193.632812 254.089844 L 193.632812 254.460938 L 194.457031 254.460938 C 194.730469 254.460938 194.890625 254.5625 194.890625 254.875 L 194.890625 260.253906 C 194.890625 262.195312 195.808594 262.882812 197.148438 262.882812 Z M 197.148438 262.882812\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 217.875 262.785156 L 222.816406 262.785156 L 222.816406 262.371094 C 221.640625 262.234375 221.246094 262.097656 221.246094 261.367188 L 221.246094 252.167969 C 221.246094 251.5 221.367188 251.222656 222.835938 251.222656 C 224.207031 251.222656 224.679688 251.617188 225.210938 253.144531 L 225.664062 253.144531 L 225.347656 250.539062 L 224.230469 250.597656 L 216.457031 250.597656 L 215.335938 250.539062 L 215.023438 253.144531 L 215.480469 253.144531 C 216.027344 251.617188 216.476562 251.222656 217.851562 251.222656 C 219.324219 251.222656 219.460938 251.5 219.460938 252.167969 L 219.460938 261.367188 C 219.460938 262.097656 219.046875 262.234375 217.875 262.371094 Z M 217.875 262.785156\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 237.183594 262.902344 C 239.640625 262.902344 241.796875 261.113281 241.796875 258.289062 C 241.796875 255.464844 239.65625 253.753906 237.246094 253.753906 C 234.808594 253.753906 232.632812 255.523438 232.632812 258.347656 C 232.632812 261.171875 234.789062 262.902344 237.183594 262.902344 Z M 237.65625 262.371094 C 235.710938 262.371094 234.277344 260.230469 234.277344 257.699219 C 234.277344 255.363281 235.355469 254.285156 236.773438 254.285156 C 238.738281 254.285156 240.144531 256.425781 240.144531 258.957031 C 240.144531 261.273438 239.089844 262.371094 237.65625 262.371094 Z M 237.65625 262.371094\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 251.15625 259.664062 C 251.730469 259.664062 252.160156 259.824219 252.902344 259.824219 C 255.042969 259.824219 256.402344 258.625 256.402344 256.761719 C 256.402344 255.285156 256.476562 254.972656 256.96875 255.152344 C 257.421875 255.304688 257.929688 255.070312 257.929688 254.519531 C 257.929688 254.089844 257.59375 253.792969 257.042969 253.792969 C 256.28125 253.792969 255.964844 254.367188 255.929688 255.128906 C 255.296875 254.207031 254.101562 253.753906 252.765625 253.753906 C 250.492188 253.753906 249.15625 255.007812 249.15625 256.816406 C 249.15625 257.996094 249.707031 258.820312 250.566406 259.308594 C 249.527344 259.503906 248.980469 259.957031 248.980469 260.667969 C 248.980469 261.332031 249.453125 261.882812 250.15625 262.015625 C 250.828125 262.136719 248.566406 262.292969 248.566406 264.097656 C 248.566406 265.609375 250.179688 266.511719 252.296875 266.511719 C 254.765625 266.511719 257.398438 265.277344 257.398438 263.390625 C 257.398438 262.195312 256.28125 261.746094 254.4375 261.425781 L 251.292969 260.878906 C 250.769531 260.800781 250.390625 260.644531 250.390625 260.230469 C 250.390625 259.898438 250.648438 259.664062 251.15625 259.664062 Z M 252.453125 254.191406 C 253.847656 254.191406 254.730469 255.464844 254.730469 257.25 C 254.730469 258.269531 254.335938 259.386719 253.082031 259.386719 C 251.707031 259.386719 250.828125 258.113281 250.828125 256.324219 C 250.828125 255.304688 251.199219 254.191406 252.453125 254.191406 Z M 252.175781 262.414062 L 254.21875 262.742188 C 255.355469 262.941406 255.886719 263.238281 255.886719 263.863281 C 255.886719 265.253906 254.574219 265.980469 253.121094 265.980469 C 251.273438 265.980469 250.117188 265.078125 250.117188 263.863281 C 250.117188 262.917969 250.886719 262.195312 252.175781 262.414062 Z M 252.175781 262.414062\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 272.46875 260.726562 C 271.804688 261.570312 270.941406 261.824219 270.097656 261.824219 C 268.351562 261.824219 266.953125 260.761719 266.488281 259.03125 C 266.429688 258.566406 266.507812 258.308594 266.894531 258.308594 L 269.195312 258.269531 C 271.707031 258.210938 272.765625 257.875 272.765625 256.644531 C 272.765625 255.035156 271.371094 253.753906 269.289062 253.753906 C 266.917969 253.753906 264.699219 255.421875 264.699219 258.347656 C 264.699219 261.15625 266.785156 262.902344 269.230469 262.902344 C 271.21875 262.902344 272.433594 261.664062 272.804688 260.980469 Z M 268.976562 254.226562 C 270.394531 254.226562 271.160156 255.152344 271.160156 256.441406 C 271.160156 257.34375 270.546875 257.800781 268.664062 257.816406 L 266.9375 257.859375 C 266.523438 257.859375 266.3125 257.742188 266.347656 257.03125 C 266.507812 255.304688 267.410156 254.226562 268.976562 254.226562 Z M 268.976562 254.226562\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 283.152344 262.882812 C 284.03125 262.882812 284.5625 262.566406 284.839844 262.328125 L 284.621094 261.957031 C 284.460938 262.074219 284.148438 262.253906 283.617188 262.253906 C 282.738281 262.253906 282.460938 261.46875 282.460938 260.488281 L 282.460938 254.875 C 282.460938 254.578125 282.597656 254.460938 282.855469 254.460938 L 284.621094 254.460938 L 284.621094 253.929688 L 282.855469 253.929688 C 282.597656 253.929688 282.460938 253.8125 282.460938 253.421875 L 282.460938 251.890625 L 281.929688 251.890625 C 281.660156 253.246094 280.933594 253.855469 279.636719 254.089844 L 279.636719 254.460938 L 280.460938 254.460938 C 280.734375 254.460938 280.890625 254.5625 280.890625 254.875 L 280.890625 260.253906 C 280.890625 262.195312 281.8125 262.882812 283.152344 262.882812 Z M 283.152344 262.882812\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 300.417969 261.367188 L 300.417969 256.957031 C 300.417969 254.65625 299.027344 253.753906 297.550781 253.753906 C 295.847656 253.753906 295.003906 254.832031 294.707031 255.109375 C 294.429688 255.386719 294.253906 255.128906 294.253906 254.382812 L 294.253906 250.480469 C 294.253906 250.027344 294 249.832031 293.570312 249.929688 L 291.410156 250.398438 L 291.410156 250.773438 C 292.507812 250.675781 292.683594 251.027344 292.683594 251.890625 L 292.683594 261.332031 C 292.683594 262.058594 292.355469 262.269531 291.429688 262.386719 L 291.429688 262.785156 L 295.535156 262.785156 L 295.535156 262.386719 C 294.589844 262.269531 294.253906 262.058594 294.253906 261.332031 L 294.253906 257.367188 C 294.253906 255.910156 295.214844 254.773438 296.632812 254.773438 C 298.003906 254.773438 298.847656 255.910156 298.847656 257.367188 L 298.847656 261.546875 C 298.847656 262.53125 299.355469 262.882812 300.148438 262.882812 C 300.636719 262.882812 301.027344 262.742188 301.402344 262.53125 L 301.402344 262.160156 C 300.753906 262.3125 300.417969 262.058594 300.417969 261.367188 Z M 300.417969 261.367188\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 316.039062 260.726562 C 315.371094 261.570312 314.511719 261.824219 313.667969 261.824219 C 311.921875 261.824219 310.523438 260.761719 310.058594 259.03125 C 310 258.566406 310.074219 258.308594 310.464844 258.308594 L 312.765625 258.269531 C 315.277344 258.210938 316.332031 257.875 316.332031 256.644531 C 316.332031 255.035156 314.941406 253.753906 312.859375 253.753906 C 310.488281 253.753906 308.269531 255.421875 308.269531 258.347656 C 308.269531 261.15625 310.351562 262.902344 312.800781 262.902344 C 314.789062 262.902344 316.003906 261.664062 316.375 260.980469 Z M 312.546875 254.226562 C 313.960938 254.226562 314.730469 255.152344 314.730469 256.441406 C 314.730469 257.34375 314.117188 257.800781 312.234375 257.816406 L 310.507812 257.859375 C 310.09375 257.859375 309.882812 257.742188 309.917969 257.03125 C 310.074219 255.304688 310.976562 254.226562 312.546875 254.226562 Z M 312.546875 254.226562\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 323.425781 262.785156 L 327.566406 262.785156 L 327.566406 262.386719 C 326.578125 262.269531 326.25 262.058594 326.25 261.332031 L 326.25 257.664062 C 326.25 255.816406 327.210938 254.65625 328.324219 254.65625 C 328.972656 254.65625 329.328125 255.09375 329.328125 255.597656 C 329.328125 255.953125 329.640625 256.289062 330.152344 256.289062 C 330.660156 256.289062 331.054688 255.894531 331.054688 255.328125 C 331.054688 254.796875 330.777344 253.753906 329.25 253.753906 C 327.835938 253.753906 326.933594 254.757812 326.660156 255.035156 C 326.386719 255.304688 326.25 255.128906 326.25 254.382812 C 326.25 253.894531 325.988281 253.695312 325.558594 253.792969 L 323.398438 254.285156 L 323.398438 254.65625 C 324.503906 254.542969 324.675781 254.914062 324.675781 255.777344 L 324.675781 261.332031 C 324.675781 262.058594 324.34375 262.269531 323.425781 262.386719 Z M 323.425781 262.785156\"\n        ></path>\n      </svg>\n    <!-- <img\n      src=\"https://via.placeholder.com/600x400\"\n      alt=\"gigi\"\n      class=\"medium-img\"\n    />\n    <div\n      class=\"tui-text_h2 class logo-color center-children tui-space_left-3 tui-space_top-3\"\n    >\n      Litto\n    </div> -->\n  </div>\n</div>\n  <div class=\"tui-space_bottom-10\">\n    <p class=\"tui-space_bottom-3 prim-color tui-text_body-m\">\n      Create a new Litto account\n    </p>\n    <form [formGroup]=\"form\">\n      <div class=\"tui-space_bottom-5\">\n        <tui-input formControlName=\"username\"> Username </tui-input>\n      </div>\n      <div class=\"tui-space_bottom-5\">\n        <tui-input formControlName=\"email\"> Email </tui-input>\n      </div>\n      <div>\n        <tui-input-password formControlName=\"password\">\n          Password\n        </tui-input-password>\n      </div>\n    </form>\n  </div>\n  <div class=\"center-children tui-space_bottom-10 tui-space_top-10\">\n    <button\n      tuiButton\n      type=\"button\"\n      appearance=\"primary-custom\"\n      (click)=\"createUser()\"\n    >\n      Register\n    </button>\n    <a routerLink=\"/login\" class=\"tui-space_top-10\">Log In?</a>\n  </div>\n</div>\n");

/***/ }),

/***/ 8625:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/register-second/register-second.component.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"sub-page-compress\">\n  <div class=\"center-children big-top-space tui-space_bottom-5\">\n  <div class=\"tui-space_bottom-10 right-children\">\n    <!-- <div\n      class=\"tui-text_h3 class logo-color center-children tui-space_left-3 tui-space_top-3 tui-space_right-5\"\n    >\n      Litto\n    </div>\n    <img\n      src=\"https://via.placeholder.com/600x400\"\n      alt=\"gigi\"\n      class=\"small-img\"\n    /> -->\n    <svg\n        class=\"medium-img\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        version=\"1.0\"\n        viewBox=\"3.85 123.68 365.07 142.83\"\n      >\n        <defs>\n          <clipPath id=\"a\">\n            <path\n              d=\"M 3.882812 123.660156 L 136.386719 123.660156 L 136.386719 213.128906 L 3.882812 213.128906 Z M 3.882812 123.660156\"\n            ></path>\n          </clipPath>\n        </defs>\n        <g clip-path=\"url(#a)\">\n          <path\n            fill=\"#6C98DB\"\n            d=\"M 129.953125 209.242188 C 126.375 205.449219 122.890625 202.832031 119.453125 201.285156 C 146.648438 178.429688 159.308594 149.480469 156.988281 138.800781 C 153.183594 163.769531 129.230469 192.503906 119.441406 201.277344 C 116.460938 199.933594 113.519531 199.410156 110.597656 199.632812 C 118.808594 188.214844 126.628906 142.644531 121.894531 131.730469 C 125.6875 133.636719 129.652344 136.75 136.332031 135.675781 C 128.050781 133.230469 124.9375 130.714844 117.949219 126.246094 C 124.992188 150.628906 115.496094 186.832031 110.125 199.675781 C 108.027344 199.898438 105.933594 200.507812 103.84375 201.480469 C 104.046875 184.597656 84.894531 137.683594 72.925781 130.136719 C 79.996094 130.226562 85.199219 128.769531 91.59375 126.800781 C 95.980469 134.421875 98.964844 143.492188 101.308594 152.480469 C 100.460938 142.660156 96.707031 132.855469 93.128906 123.714844 C 83.667969 126.5 75.226562 127.269531 65.765625 127.3125 C 87.109375 146.011719 100.140625 185.507812 103.214844 201.785156 C 101.855469 202.46875 100.5 203.300781 99.144531 204.289062 C 92.621094 190.238281 51.332031 157.71875 36.78125 157.316406 C 42.917969 153.777344 45.640625 150.386719 50.152344 145.433594 C 57.785156 149.757812 69.292969 160.160156 75.855469 166.707031 C 70.152344 158.679688 57.617188 147.527344 49.914062 141.480469 C 43.167969 148.699219 36.289062 153.671875 28.160156 158.53125 C 56.699219 163.890625 88.769531 192.515625 98.859375 204.492188 C 98.058594 205.082031 97.257812 205.71875 96.453125 206.417969 C 69.558594 198.1875 42.113281 196.066406 9.765625 207.703125 C 13.257812 202.476562 14.535156 197.769531 14.617188 192.550781 C 29.789062 189.417969 47.4375 186.941406 68.066406 187.925781 C 52.757812 184.714844 31.382812 184.203125 12.320312 189.210938 C 10.726562 198.800781 7.527344 206.246094 3.882812 213.09375 C 39.398438 200.605469 69.710938 200.5 97.726562 211.292969 C 109.324219 202.222656 120.230469 202.132812 128.417969 211.554688 C 161.320312 209.441406 216.722656 208.074219 249.625 210.78125 C 220.976562 207.3125 165.417969 207.230469 129.953125 209.242188 Z M 129.953125 209.242188\"\n            fill-rule=\"evenodd\"\n          ></path>\n        </g>\n        <path\n          fill=\"#254D9D\"\n          d=\"M 109.804688 207.8125 C 116.515625 200.167969 125.1875 189.917969 135.804688 177.046875 C 146.433594 164.183594 154.265625 155.050781 159.300781 149.652344 C 164.332031 144.246094 168.675781 140.140625 172.328125 137.339844 C 180.800781 131.003906 189.421875 127.828125 198.183594 127.828125 C 200.148438 127.828125 202.367188 128.625 204.839844 130.214844 C 207.304688 131.804688 208.542969 134.269531 208.542969 137.621094 C 208.542969 140.878906 205.417969 145.914062 199.175781 152.722656 C 196.089844 156.070312 191.632812 159.503906 185.796875 163.007812 C 179.976562 166.5 173.480469 169.320312 166.308594 171.453125 C 163.601562 171.925781 161.621094 172.164062 160.363281 172.164062 C 159.101562 172.164062 158.476562 172.019531 158.476562 171.738281 C 158.476562 171.453125 158.796875 171.136719 159.445312 170.769531 C 167.277344 166.476562 176.058594 160 185.796875 151.328125 C 195.546875 142.664062 200.425781 136.976562 200.425781 134.269531 C 200.425781 133.894531 200.167969 133.703125 199.648438 133.703125 C 199.140625 133.703125 198.585938 133.800781 197.972656 133.988281 C 197.371094 134.175781 196.699219 134.367188 195.945312 134.554688 C 195.199219 134.730469 193.621094 135.492188 191.203125 136.84375 C 188.777344 138.199219 186.234375 139.878906 183.582031 141.890625 C 180.921875 143.890625 177.609375 146.964844 173.648438 151.117188 C 169.683594 155.269531 165.695312 160.046875 161.683594 165.4375 C 146.300781 186.992188 136.328125 200.234375 131.769531 205.171875 C 131.011719 206.007812 130.074219 207.027344 128.960938 208.238281 C 131.285156 208.519531 134.777344 208.851562 139.4375 209.226562 C 144.109375 209.59375 147.257812 209.890625 148.898438 210.125 C 150.53125 210.359375 152.933594 210.855469 156.09375 211.613281 C 159.265625 212.355469 161.785156 213.28125 163.644531 214.394531 C 168.488281 217.386719 173.152344 221.445312 177.636719 226.570312 C 178.65625 227.683594 179.167969 228.421875 179.167969 228.789062 C 179.167969 229.164062 179.027344 229.355469 178.742188 229.355469 C 178.285156 229.355469 177.683594 229.164062 176.925781 228.789062 C 175.523438 228.421875 173.496094 227.914062 170.839844 227.253906 C 168.179688 226.605469 162.46875 225.769531 153.710938 224.730469 C 144.945312 223.703125 136.910156 223.195312 129.597656 223.195312 C 122.285156 223.195312 116.941406 223.242188 113.578125 223.335938 C 108.636719 228.007812 101.691406 232.339844 92.746094 236.335938 C 83.789062 240.347656 77.066406 242.355469 72.546875 242.355469 C 68.019531 242.355469 63.746094 241.164062 59.738281 238.792969 C 55.726562 236.414062 53.71875 233.222656 53.71875 229.210938 C 53.71875 226.316406 55.914062 223.148438 60.304688 219.703125 C 70.371094 211.777344 86.871094 207.8125 109.804688 207.8125 Z M 61.410156 233.269531 C 61.410156 234.195312 62.539062 234.804688 64.785156 235.085938 C 67.664062 235.085938 70.136719 234.921875 72.195312 234.589844 C 74.242188 234.273438 77.242188 233.230469 81.207031 231.453125 C 85.171875 229.671875 89.347656 227.066406 93.734375 223.621094 C 87.753906 223.621094 80.875 224.6875 73.089844 226.828125 C 65.304688 228.980469 61.410156 231.128906 61.410156 233.269531 Z M 61.410156 233.269531\"\n        ></path>\n        <path\n          fill=\"#254D9D\"\n          d=\"M 215.648438 152.578125 C 216.59375 152.578125 217.195312 152.769531 217.464844 153.144531 C 218.769531 154.738281 219.425781 156.019531 219.425781 156.992188 C 219.425781 157.972656 219.140625 158.808594 218.574219 159.515625 C 218.019531 160.210938 217.355469 161.003906 216.570312 161.898438 C 215.777344 162.785156 214.191406 163.992188 211.804688 165.53125 C 209.425781 167.058594 207.121094 167.820312 204.890625 167.820312 C 203.203125 167.539062 202.367188 166.519531 202.367188 164.753906 C 202.367188 161.957031 204.042969 159.226562 207.390625 156.566406 C 210.753906 153.914062 213.507812 152.578125 215.648438 152.578125 Z M 182.097656 207.671875 C 181.34375 208.980469 180.964844 210.148438 180.964844 211.1875 C 180.964844 212.214844 181.53125 212.71875 182.664062 212.71875 C 183.308594 212.71875 184.421875 212.4375 186.015625 211.871094 C 203.441406 202.734375 220.496094 191.96875 237.191406 179.570312 C 238.023438 180.230469 238.441406 181.027344 238.441406 181.953125 C 238.441406 182.886719 237.976562 183.769531 237.050781 184.621094 C 236.117188 185.457031 234.789062 186.667969 233.0625 188.253906 C 231.34375 189.828125 228.058594 192.664062 223.199219 196.769531 C 218.351562 200.875 213.839844 204.605469 209.65625 207.953125 C 198.644531 216.8125 190.527344 222.027344 185.308594 223.621094 C 183.636719 224.09375 181.820312 224.328125 179.859375 224.328125 C 172.683594 224.328125 169.097656 220.507812 169.097656 212.863281 C 169.097656 209.878906 170.726562 205.613281 173.984375 200.074219 C 177.25 194.523438 180.613281 189.621094 184.058594 185.375 C 187.503906 181.128906 189.777344 178.78125 190.898438 178.320312 C 192.582031 177.300781 194.398438 176.785156 196.351562 176.785156 C 198.3125 176.785156 200.183594 177.160156 201.964844 177.894531 C 202.511719 178.179688 202.789062 178.554688 202.789062 179.027344 C 202.789062 179.488281 202.34375 180.183594 201.445312 181.128906 C 200.5625 182.058594 199.210938 183.5 197.386719 185.445312 C 195.578125 187.398438 192.882812 190.777344 189.296875 195.589844 C 185.707031 200.390625 183.308594 204.414062 182.097656 207.671875 Z M 182.097656 207.671875\"\n        ></path>\n        <path\n          fill=\"#254D9D\"\n          d=\"M 272.699219 157.203125 L 279.847656 157.0625 C 289.078125 157.0625 295.785156 158.371094 299.972656 160.980469 C 302.03125 161.628906 303.0625 162.460938 303.0625 163.480469 C 303.0625 164.234375 302.148438 164.753906 300.328125 165.039062 C 298.515625 165.308594 292.222656 166.027344 281.453125 167.207031 C 270.675781 168.375 263.289062 169.042969 259.296875 169.214844 C 257.515625 169.308594 253.433594 172.394531 247.050781 178.460938 C 240.664062 184.519531 234.578125 191.179688 228.789062 198.445312 C 223.015625 205.714844 220.132812 210.796875 220.132812 213.6875 C 220.132812 214.160156 220.355469 214.5625 220.816406 214.890625 C 221.289062 215.210938 221.867188 215.363281 222.5625 215.363281 C 223.269531 215.363281 224.367188 215.089844 225.863281 214.535156 C 243.570312 204.097656 260.773438 192.675781 277.464844 180.277344 C 278.296875 180.925781 278.714844 181.71875 278.714844 182.660156 C 278.714844 183.59375 278.25 184.496094 277.324219 185.375 C 276.390625 186.261719 275.015625 187.539062 273.195312 189.222656 C 271.382812 190.90625 268.003906 193.941406 263.046875 198.328125 C 258.105469 202.703125 253.453125 206.609375 249.082031 210.054688 C 237.332031 219.574219 229.125 225.070312 224.472656 226.570312 C 222.785156 227.023438 220.804688 227.253906 218.527344 227.253906 C 216.246094 227.253906 214.144531 226.085938 212.226562 223.761719 C 210.324219 221.4375 209.371094 218.265625 209.371094 214.253906 C 209.371094 210.242188 211.949219 204.460938 217.113281 196.914062 C 222.285156 189.363281 229.34375 181.625 238.300781 173.695312 C 239.148438 173.054688 239.574219 172.445312 239.574219 171.878906 C 239.574219 171.3125 238.589844 171.03125 236.625 171.03125 L 227.824219 171.3125 C 215.425781 171.3125 209.042969 169.921875 208.664062 167.136719 C 205.773438 166.570312 204.324219 165.734375 204.324219 164.613281 C 204.324219 164.234375 204.511719 164.023438 204.890625 163.976562 C 205.269531 163.929688 205.597656 163.882812 205.882812 163.835938 C 206.152344 163.785156 206.613281 163.714844 207.273438 163.621094 C 207.921875 163.527344 213.058594 162.789062 222.703125 161.402344 C 232.359375 160.007812 243.335938 158.832031 255.640625 157.886719 L 265.289062 145.03125 C 265.855469 143.914062 267.816406 143.355469 271.164062 143.355469 C 274.527344 143.355469 276.214844 144.054688 276.214844 145.453125 C 276.214844 145.914062 275.835938 146.753906 275.082031 147.980469 L 271.589844 152.863281 C 271.117188 154.359375 270.839844 155.476562 270.765625 156.214844 C 270.765625 156.875 271.40625 157.203125 272.699219 157.203125 Z M 272.699219 157.203125\"\n        ></path>\n        <path\n          fill=\"#254D9D\"\n          d=\"M 316.464844 157.203125 L 323.613281 157.0625 C 332.84375 157.0625 339.550781 158.371094 343.738281 160.980469 C 345.796875 161.628906 346.828125 162.460938 346.828125 163.480469 C 346.828125 164.234375 345.914062 164.753906 344.09375 165.039062 C 342.28125 165.308594 335.988281 166.027344 325.21875 167.207031 C 314.441406 168.375 307.054688 169.042969 303.0625 169.214844 C 301.28125 169.308594 297.199219 172.394531 290.816406 178.460938 C 284.429688 184.519531 278.34375 191.179688 272.554688 198.445312 C 266.78125 205.714844 263.898438 210.796875 263.898438 213.6875 C 263.898438 214.160156 264.121094 214.5625 264.582031 214.890625 C 265.054688 215.210938 265.632812 215.363281 266.328125 215.363281 C 267.035156 215.363281 268.132812 215.089844 269.632812 214.535156 C 287.339844 204.097656 304.539062 192.675781 321.230469 180.277344 C 322.0625 180.925781 322.480469 181.71875 322.480469 182.660156 C 322.480469 183.59375 322.015625 184.496094 321.089844 185.375 C 320.15625 186.261719 318.78125 187.539062 316.960938 189.222656 C 315.148438 190.90625 311.769531 193.941406 306.816406 198.328125 C 301.871094 202.703125 297.21875 206.609375 292.847656 210.054688 C 281.097656 219.574219 272.894531 225.070312 268.238281 226.570312 C 266.550781 227.023438 264.570312 227.253906 262.292969 227.253906 C 260.011719 227.253906 257.910156 226.085938 255.992188 223.761719 C 254.089844 221.4375 253.140625 218.265625 253.140625 214.253906 C 253.140625 210.242188 255.714844 204.460938 260.878906 196.914062 C 266.050781 189.363281 273.109375 181.625 282.066406 173.695312 C 282.914062 173.054688 283.339844 172.445312 283.339844 171.878906 C 283.339844 171.3125 282.355469 171.03125 280.390625 171.03125 L 271.589844 171.3125 C 259.191406 171.3125 252.808594 169.921875 252.429688 167.136719 C 249.539062 166.570312 248.089844 165.734375 248.089844 164.613281 C 248.089844 164.234375 248.277344 164.023438 248.65625 163.976562 C 249.035156 163.929688 249.363281 163.882812 249.648438 163.835938 C 249.917969 163.785156 250.378906 163.714844 251.039062 163.621094 C 251.6875 163.527344 256.824219 162.789062 266.46875 161.402344 C 276.125 160.007812 287.101562 158.832031 299.40625 157.886719 L 309.054688 145.03125 C 309.621094 143.914062 311.582031 143.355469 314.929688 143.355469 C 318.292969 143.355469 319.980469 144.054688 319.980469 145.453125 C 319.980469 145.914062 319.601562 146.753906 318.847656 147.980469 L 315.355469 152.863281 C 314.882812 154.359375 314.605469 155.476562 314.53125 156.214844 C 314.53125 156.875 315.171875 157.203125 316.464844 157.203125 Z M 316.464844 157.203125\"\n        ></path>\n        <path\n          fill=\"#254D9D\"\n          d=\"M 304.03125 215.644531 C 307.015625 215.644531 310.695312 213.6875 315.070312 209.769531 C 319.460938 205.855469 321.738281 203.160156 321.914062 201.679688 C 320.792969 200.734375 319.609375 199.03125 318.351562 196.558594 C 317.089844 194.09375 316.417969 192.855469 316.324219 192.855469 C 313.445312 195.5625 310.878906 198.683594 308.628906 202.222656 C 305.089844 208.203125 303.320312 212.308594 303.320312 214.535156 C 303.320312 215.28125 303.558594 215.644531 304.03125 215.644531 Z M 334.230469 181.386719 C 333.296875 181.386719 331.363281 182.839844 328.425781 185.730469 C 325.484375 188.625 324.015625 190.628906 324.015625 191.746094 C 324.015625 192.015625 324.296875 192.570312 324.863281 193.421875 C 325.429688 194.257812 325.84375 194.671875 326.113281 194.671875 C 327.699219 194.671875 329.492188 192.761719 331.492188 188.9375 C 333.503906 185.117188 334.511719 182.910156 334.511719 182.308594 C 334.511719 181.695312 334.417969 181.386719 334.230469 181.386719 Z M 334.511719 199.4375 C 337.121094 199.4375 341.195312 197.855469 346.734375 194.695312 C 352.285156 191.519531 357.164062 188.34375 361.363281 185.164062 L 367.664062 180.277344 C 368.492188 180.925781 368.914062 181.71875 368.914062 182.660156 C 368.914062 183.59375 368.492188 184.425781 367.664062 185.164062 C 352.277344 199.429688 340.625 206.5625 332.695312 206.5625 C 332.128906 206.5625 331.285156 206.46875 330.171875 206.277344 C 319.632812 218.5 310.589844 224.613281 303.039062 224.613281 C 298 223.855469 294.839844 222.074219 293.53125 219.28125 C 292.792969 217.882812 292.421875 216.113281 292.421875 213.972656 C 292.421875 207.824219 295.960938 200.488281 303.039062 191.957031 C 310.128906 183.417969 319.035156 177.140625 329.746094 173.128906 C 330.691406 173.128906 331.386719 173.34375 331.847656 173.765625 C 332.320312 174.191406 332.730469 174.425781 333.097656 174.476562 C 333.476562 174.523438 333.957031 174.332031 334.558594 173.910156 C 335.171875 173.484375 335.988281 173.246094 337.015625 173.199219 C 338.050781 173.152344 339.125 173.738281 340.246094 174.945312 C 341.738281 176.171875 342.488281 177.671875 342.488281 179.429688 C 342.488281 184.65625 339.828125 191.320312 334.511719 199.4375 Z M 334.511719 199.4375\"\n        ></path>\n        <path\n          fill=\"#6C98DB\"\n          d=\"M 94.523438 262.785156 L 104.003906 262.785156 C 103.960938 262.328125 104.0625 261.980469 104.199219 261.585938 L 104.609375 260.347656 L 104.164062 260.347656 L 103.824219 260.9375 C 103.453125 261.570312 102.90625 262.097656 101.667969 262.160156 L 98.605469 262.3125 C 97.78125 262.328125 97.484375 261.980469 97.484375 261.367188 L 97.484375 252.007812 C 97.484375 251.28125 97.898438 251.144531 98.683594 250.988281 L 98.683594 250.597656 L 94.523438 250.597656 L 94.523438 250.988281 C 95.308594 251.144531 95.699219 251.28125 95.699219 252.007812 L 95.699219 261.367188 C 95.699219 262.097656 95.308594 262.234375 94.523438 262.371094 Z M 94.523438 262.785156\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 119.246094 260.726562 C 118.578125 261.570312 117.71875 261.824219 116.875 261.824219 C 115.128906 261.824219 113.730469 260.761719 113.265625 259.03125 C 113.207031 258.566406 113.28125 258.308594 113.671875 258.308594 L 115.972656 258.269531 C 118.484375 258.210938 119.539062 257.875 119.539062 256.644531 C 119.539062 255.035156 118.148438 253.753906 116.066406 253.753906 C 113.695312 253.753906 111.476562 255.421875 111.476562 258.347656 C 111.476562 261.15625 113.558594 262.902344 116.007812 262.902344 C 117.996094 262.902344 119.210938 261.664062 119.582031 260.980469 Z M 115.753906 254.226562 C 117.167969 254.226562 117.9375 255.152344 117.9375 256.441406 C 117.9375 257.34375 117.320312 257.800781 115.441406 257.816406 L 113.710938 257.859375 C 113.300781 257.859375 113.085938 257.742188 113.121094 257.03125 C 113.28125 255.304688 114.183594 254.226562 115.753906 254.226562 Z M 115.753906 254.226562\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 129.253906 262.902344 C 130.511719 262.902344 131.769531 262.351562 132.476562 261.46875 C 132.609375 261.292969 132.769531 261.292969 132.769531 261.46875 C 132.789062 262.472656 133.320312 262.882812 134.101562 262.882812 C 134.5 262.882812 134.96875 262.765625 135.324219 262.53125 L 135.324219 262.160156 C 134.675781 262.3125 134.339844 262.058594 134.339844 261.367188 L 134.339844 256.972656 C 134.339844 254.796875 133.511719 253.753906 131.261719 253.753906 C 129.371094 253.753906 127.355469 254.519531 127.355469 255.875 C 127.355469 256.382812 127.625 256.738281 128.140625 256.738281 C 128.671875 256.738281 129 256.40625 129 255.71875 C 129 254.796875 129.492188 254.265625 130.550781 254.265625 C 132.105469 254.265625 132.769531 255.269531 132.769531 256.621094 L 132.769531 257.03125 C 132.769531 257.429688 132.59375 257.546875 132.316406 257.5625 C 127.902344 258.070312 126.707031 259.234375 126.707031 260.742188 C 126.707031 262.269531 127.941406 262.902344 129.253906 262.902344 Z M 130.238281 262 C 129 262 128.410156 261.15625 128.410156 260.269531 C 128.410156 259.351562 129.101562 258.425781 131.984375 258.070312 C 132.671875 257.996094 132.769531 258.289062 132.769531 258.742188 L 132.769531 259.917969 C 132.769531 260.996094 131.589844 262 130.238281 262 Z M 130.238281 262\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 142.113281 262.785156 L 146.253906 262.785156 L 146.253906 262.386719 C 145.269531 262.269531 144.941406 262.058594 144.941406 261.332031 L 144.941406 257.664062 C 144.941406 255.816406 145.902344 254.65625 147.015625 254.65625 C 147.664062 254.65625 148.019531 255.09375 148.019531 255.597656 C 148.019531 255.953125 148.332031 256.289062 148.84375 256.289062 C 149.351562 256.289062 149.746094 255.894531 149.746094 255.328125 C 149.746094 254.796875 149.46875 253.753906 147.941406 253.753906 C 146.527344 253.753906 145.625 254.757812 145.351562 255.035156 C 145.074219 255.304688 144.941406 255.128906 144.941406 254.382812 C 144.941406 253.894531 144.679688 253.695312 144.25 253.792969 L 142.089844 254.285156 L 142.089844 254.65625 C 143.195312 254.542969 143.367188 254.914062 143.367188 255.777344 L 143.367188 261.332031 C 143.367188 262.058594 143.035156 262.269531 142.113281 262.386719 Z M 142.113281 262.785156\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 165.152344 262.882812 C 165.644531 262.882812 166.039062 262.742188 166.410156 262.53125 L 166.410156 262.160156 C 165.761719 262.3125 165.425781 262.058594 165.425781 261.367188 L 165.425781 256.957031 C 165.425781 254.65625 164.035156 253.753906 162.566406 253.753906 C 160.855469 253.753906 159.96875 254.832031 159.714844 255.109375 C 159.445312 255.386719 159.265625 255.128906 159.265625 254.382812 C 159.265625 253.894531 159.007812 253.695312 158.578125 253.792969 L 156.417969 254.285156 L 156.417969 254.65625 C 157.519531 254.542969 157.691406 254.914062 157.691406 255.777344 L 157.691406 261.332031 C 157.691406 262.058594 157.363281 262.269531 156.441406 262.386719 L 156.441406 262.785156 L 160.542969 262.785156 L 160.542969 262.386719 C 159.597656 262.269531 159.265625 262.058594 159.265625 261.332031 L 159.265625 257.367188 C 159.265625 255.910156 160.230469 254.738281 161.636719 254.738281 C 163.113281 254.738281 163.855469 255.851562 163.855469 257.367188 L 163.855469 261.546875 C 163.855469 262.53125 164.371094 262.882812 165.152344 262.882812 Z M 165.152344 262.882812\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 182.699219 262.785156 L 186.859375 262.785156 L 186.859375 262.371094 C 186.074219 262.234375 185.660156 262.097656 185.660156 261.367188 L 185.660156 252.007812 C 185.660156 251.28125 186.074219 251.144531 186.859375 250.988281 L 186.859375 250.597656 L 182.699219 250.597656 L 182.699219 250.988281 C 183.484375 251.144531 183.875 251.28125 183.875 252.007812 L 183.875 261.367188 C 183.875 262.097656 183.484375 262.234375 182.699219 262.371094 Z M 182.699219 262.785156\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 197.148438 262.882812 C 198.027344 262.882812 198.558594 262.566406 198.835938 262.328125 L 198.617188 261.957031 C 198.457031 262.074219 198.144531 262.253906 197.613281 262.253906 C 196.734375 262.253906 196.457031 261.46875 196.457031 260.488281 L 196.457031 254.875 C 196.457031 254.578125 196.59375 254.460938 196.851562 254.460938 L 198.617188 254.460938 L 198.617188 253.929688 L 196.851562 253.929688 C 196.59375 253.929688 196.457031 253.8125 196.457031 253.421875 L 196.457031 251.890625 L 195.925781 251.890625 C 195.65625 253.246094 194.929688 253.855469 193.632812 254.089844 L 193.632812 254.460938 L 194.457031 254.460938 C 194.730469 254.460938 194.890625 254.5625 194.890625 254.875 L 194.890625 260.253906 C 194.890625 262.195312 195.808594 262.882812 197.148438 262.882812 Z M 197.148438 262.882812\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 217.875 262.785156 L 222.816406 262.785156 L 222.816406 262.371094 C 221.640625 262.234375 221.246094 262.097656 221.246094 261.367188 L 221.246094 252.167969 C 221.246094 251.5 221.367188 251.222656 222.835938 251.222656 C 224.207031 251.222656 224.679688 251.617188 225.210938 253.144531 L 225.664062 253.144531 L 225.347656 250.539062 L 224.230469 250.597656 L 216.457031 250.597656 L 215.335938 250.539062 L 215.023438 253.144531 L 215.480469 253.144531 C 216.027344 251.617188 216.476562 251.222656 217.851562 251.222656 C 219.324219 251.222656 219.460938 251.5 219.460938 252.167969 L 219.460938 261.367188 C 219.460938 262.097656 219.046875 262.234375 217.875 262.371094 Z M 217.875 262.785156\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 237.183594 262.902344 C 239.640625 262.902344 241.796875 261.113281 241.796875 258.289062 C 241.796875 255.464844 239.65625 253.753906 237.246094 253.753906 C 234.808594 253.753906 232.632812 255.523438 232.632812 258.347656 C 232.632812 261.171875 234.789062 262.902344 237.183594 262.902344 Z M 237.65625 262.371094 C 235.710938 262.371094 234.277344 260.230469 234.277344 257.699219 C 234.277344 255.363281 235.355469 254.285156 236.773438 254.285156 C 238.738281 254.285156 240.144531 256.425781 240.144531 258.957031 C 240.144531 261.273438 239.089844 262.371094 237.65625 262.371094 Z M 237.65625 262.371094\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 251.15625 259.664062 C 251.730469 259.664062 252.160156 259.824219 252.902344 259.824219 C 255.042969 259.824219 256.402344 258.625 256.402344 256.761719 C 256.402344 255.285156 256.476562 254.972656 256.96875 255.152344 C 257.421875 255.304688 257.929688 255.070312 257.929688 254.519531 C 257.929688 254.089844 257.59375 253.792969 257.042969 253.792969 C 256.28125 253.792969 255.964844 254.367188 255.929688 255.128906 C 255.296875 254.207031 254.101562 253.753906 252.765625 253.753906 C 250.492188 253.753906 249.15625 255.007812 249.15625 256.816406 C 249.15625 257.996094 249.707031 258.820312 250.566406 259.308594 C 249.527344 259.503906 248.980469 259.957031 248.980469 260.667969 C 248.980469 261.332031 249.453125 261.882812 250.15625 262.015625 C 250.828125 262.136719 248.566406 262.292969 248.566406 264.097656 C 248.566406 265.609375 250.179688 266.511719 252.296875 266.511719 C 254.765625 266.511719 257.398438 265.277344 257.398438 263.390625 C 257.398438 262.195312 256.28125 261.746094 254.4375 261.425781 L 251.292969 260.878906 C 250.769531 260.800781 250.390625 260.644531 250.390625 260.230469 C 250.390625 259.898438 250.648438 259.664062 251.15625 259.664062 Z M 252.453125 254.191406 C 253.847656 254.191406 254.730469 255.464844 254.730469 257.25 C 254.730469 258.269531 254.335938 259.386719 253.082031 259.386719 C 251.707031 259.386719 250.828125 258.113281 250.828125 256.324219 C 250.828125 255.304688 251.199219 254.191406 252.453125 254.191406 Z M 252.175781 262.414062 L 254.21875 262.742188 C 255.355469 262.941406 255.886719 263.238281 255.886719 263.863281 C 255.886719 265.253906 254.574219 265.980469 253.121094 265.980469 C 251.273438 265.980469 250.117188 265.078125 250.117188 263.863281 C 250.117188 262.917969 250.886719 262.195312 252.175781 262.414062 Z M 252.175781 262.414062\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 272.46875 260.726562 C 271.804688 261.570312 270.941406 261.824219 270.097656 261.824219 C 268.351562 261.824219 266.953125 260.761719 266.488281 259.03125 C 266.429688 258.566406 266.507812 258.308594 266.894531 258.308594 L 269.195312 258.269531 C 271.707031 258.210938 272.765625 257.875 272.765625 256.644531 C 272.765625 255.035156 271.371094 253.753906 269.289062 253.753906 C 266.917969 253.753906 264.699219 255.421875 264.699219 258.347656 C 264.699219 261.15625 266.785156 262.902344 269.230469 262.902344 C 271.21875 262.902344 272.433594 261.664062 272.804688 260.980469 Z M 268.976562 254.226562 C 270.394531 254.226562 271.160156 255.152344 271.160156 256.441406 C 271.160156 257.34375 270.546875 257.800781 268.664062 257.816406 L 266.9375 257.859375 C 266.523438 257.859375 266.3125 257.742188 266.347656 257.03125 C 266.507812 255.304688 267.410156 254.226562 268.976562 254.226562 Z M 268.976562 254.226562\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 283.152344 262.882812 C 284.03125 262.882812 284.5625 262.566406 284.839844 262.328125 L 284.621094 261.957031 C 284.460938 262.074219 284.148438 262.253906 283.617188 262.253906 C 282.738281 262.253906 282.460938 261.46875 282.460938 260.488281 L 282.460938 254.875 C 282.460938 254.578125 282.597656 254.460938 282.855469 254.460938 L 284.621094 254.460938 L 284.621094 253.929688 L 282.855469 253.929688 C 282.597656 253.929688 282.460938 253.8125 282.460938 253.421875 L 282.460938 251.890625 L 281.929688 251.890625 C 281.660156 253.246094 280.933594 253.855469 279.636719 254.089844 L 279.636719 254.460938 L 280.460938 254.460938 C 280.734375 254.460938 280.890625 254.5625 280.890625 254.875 L 280.890625 260.253906 C 280.890625 262.195312 281.8125 262.882812 283.152344 262.882812 Z M 283.152344 262.882812\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 300.417969 261.367188 L 300.417969 256.957031 C 300.417969 254.65625 299.027344 253.753906 297.550781 253.753906 C 295.847656 253.753906 295.003906 254.832031 294.707031 255.109375 C 294.429688 255.386719 294.253906 255.128906 294.253906 254.382812 L 294.253906 250.480469 C 294.253906 250.027344 294 249.832031 293.570312 249.929688 L 291.410156 250.398438 L 291.410156 250.773438 C 292.507812 250.675781 292.683594 251.027344 292.683594 251.890625 L 292.683594 261.332031 C 292.683594 262.058594 292.355469 262.269531 291.429688 262.386719 L 291.429688 262.785156 L 295.535156 262.785156 L 295.535156 262.386719 C 294.589844 262.269531 294.253906 262.058594 294.253906 261.332031 L 294.253906 257.367188 C 294.253906 255.910156 295.214844 254.773438 296.632812 254.773438 C 298.003906 254.773438 298.847656 255.910156 298.847656 257.367188 L 298.847656 261.546875 C 298.847656 262.53125 299.355469 262.882812 300.148438 262.882812 C 300.636719 262.882812 301.027344 262.742188 301.402344 262.53125 L 301.402344 262.160156 C 300.753906 262.3125 300.417969 262.058594 300.417969 261.367188 Z M 300.417969 261.367188\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 316.039062 260.726562 C 315.371094 261.570312 314.511719 261.824219 313.667969 261.824219 C 311.921875 261.824219 310.523438 260.761719 310.058594 259.03125 C 310 258.566406 310.074219 258.308594 310.464844 258.308594 L 312.765625 258.269531 C 315.277344 258.210938 316.332031 257.875 316.332031 256.644531 C 316.332031 255.035156 314.941406 253.753906 312.859375 253.753906 C 310.488281 253.753906 308.269531 255.421875 308.269531 258.347656 C 308.269531 261.15625 310.351562 262.902344 312.800781 262.902344 C 314.789062 262.902344 316.003906 261.664062 316.375 260.980469 Z M 312.546875 254.226562 C 313.960938 254.226562 314.730469 255.152344 314.730469 256.441406 C 314.730469 257.34375 314.117188 257.800781 312.234375 257.816406 L 310.507812 257.859375 C 310.09375 257.859375 309.882812 257.742188 309.917969 257.03125 C 310.074219 255.304688 310.976562 254.226562 312.546875 254.226562 Z M 312.546875 254.226562\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 323.425781 262.785156 L 327.566406 262.785156 L 327.566406 262.386719 C 326.578125 262.269531 326.25 262.058594 326.25 261.332031 L 326.25 257.664062 C 326.25 255.816406 327.210938 254.65625 328.324219 254.65625 C 328.972656 254.65625 329.328125 255.09375 329.328125 255.597656 C 329.328125 255.953125 329.640625 256.289062 330.152344 256.289062 C 330.660156 256.289062 331.054688 255.894531 331.054688 255.328125 C 331.054688 254.796875 330.777344 253.753906 329.25 253.753906 C 327.835938 253.753906 326.933594 254.757812 326.660156 255.035156 C 326.386719 255.304688 326.25 255.128906 326.25 254.382812 C 326.25 253.894531 325.988281 253.695312 325.558594 253.792969 L 323.398438 254.285156 L 323.398438 254.65625 C 324.503906 254.542969 324.675781 254.914062 324.675781 255.777344 L 324.675781 261.332031 C 324.675781 262.058594 324.34375 262.269531 323.425781 262.386719 Z M 323.425781 262.785156\"\n        ></path>\n      </svg>\n  </div>\n</div>\n  <div class=\"tui-space_bottom-10\">\n    <p class=\"tui-space_bottom-10 prim-color tui-text_body-m\">\n      Complete your Litto account!\n    </p>\n    <div class=\"center-children button-big-space\">\n      <div>\n        <tui-avatar\n          size=\"xl\"\n          [rounded]=\"true\"\n          class=\"avatar\"\n          [avatarUrl]=\"imageUrl\"\n        ></tui-avatar>\n        <button\n          tuiIconButton\n          type=\"button\"\n          size=\"m\"\n          appearance=\"secondary-custom\"\n          shape=\"rounded\"\n          icon=\"tuiIconPlus\"\n          class=\"floating-button\"\n          (click)=\"fileInput.click()\"\n        ></button>\n        <input\n          type=\"file\"\n          #fileInput\n          style=\"display: none\"\n          accept=\"image/*\"\n          (change)=\"uploadImage($event)\"\n        />\n      </div>\n    </div>\n    <form [formGroup]=\"form\" class=\"tui-space_top-5\">\n      <div class=\"tui-space_bottom-5\">\n        <tui-input formControlName=\"name\"> Name </tui-input>\n      </div>\n      <div class=\"tui-space_bottom-5\">\n        <tui-input formControlName=\"surname\"> Surname </tui-input>\n      </div>\n      <div>\n        <tui-text-area formControlName=\"bio\" [expandable]=\"true\" [rows]=\"10\">\n          Biography\n        </tui-text-area>\n      </div>\n    </form>\n  </div>\n  <div class=\"right-children tui-space_bottom-10 tui-space_top-5\">\n    <button\n      tuiIconButton\n      type=\"button\"\n      size=\"l\"\n      appearance=\"primary-custom\"\n      shape=\"rounded\"\n      icon=\"tuiIconChevronRight\"\n      (click)=\"sendData()\"\n    ></button>\n  </div>\n</div>\n");

/***/ }),

/***/ 95913:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/search-results/search-results.component.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-search-item></app-search-item>\n<div>\n  <app-back></app-back>\n</div>\n\n<div class=\"big-top-space\">\n  <!-- <div class=\"tui-text_body-l\">Results for: <span class=\"tui-text_body-xl prim-color\"> <strong>{{searched}}</strong></span></div> -->\n  <div class=\"tui-text_body-l\">\n    Results for: <span class=\"tui-text_h6 prim-color\">{{ searched }}</span>\n  </div>\n</div>\n\n<div class=\"tui-space_top-10\">\n  <div class=\"tui-text_body-xl\">Related Plans</div>\n  <div *ngIf=\"this.plans.length\">\n    <app-plan-slider [plans]=\"this.plans\"></app-plan-slider>\n  </div>\n  <div *ngIf=\"this.plans.length == 0\">\n    <div class=\"tui-text_body-m elems\" style=\"color: var(--tui-text-03)\">\n      No Plan Found\n    </div>\n  </div>\n</div>\n\n<div class=\"tui-space_top-10\">\n  <div class=\"tui-text_body-xl\">Related Tags</div>\n  <div *ngIf=\"this.tags.length\" class=\"in-row\">\n    <div\n      *ngFor=\"let item of [].constructor(this.tags.length); let idx = index\"\n      class=\"elems-tag\"\n    >\n      <tui-tag\n        size=\"l\"\n        [ngStyle]=\"{ opacity: 0.4 + (0.6 * idx) / this.tags.length }\"\n        status=\"custom\"\n        class=\"taggy shadow-light\"\n        [hoverable]=\"true\"\n        [value]=\"this.tags[idx]\"\n        (click)=\"searchString(this.tags[idx])\"\n      ></tui-tag>\n    </div>\n  </div>\n  <div *ngIf=\"this.tags.length == 0\">\n    <div class=\"tui-text_body-m elems\" style=\"color: var(--tui-text-03)\">\n      No Tag Found\n    </div>\n  </div>\n</div>\n\n<app-footer-tabs [index]=\"this.activeItemIndex\"></app-footer-tabs>\n");

/***/ }),

/***/ 7123:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/start-plan-date/start-plan-date.component.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-back></app-back>\n\n<div class=\"center-children-row go-up\">\n  <tui-avatar\n    size=\"m\"\n    [rounded]=\"true\"\n    class=\"avatar shadow-light top-align\"\n    avatarUrl=\"{{ this.plan.imageUrl }}\"\n  ></tui-avatar>\n  <div class=\"tui-text_h6 tui-space_left-3\">{{ this.plan.title }}</div>\n</div>\n\n<div class=\"tui-space_top-5 center-children\">\n  <button tuiButton type=\"button\" appearance=\"secondary-custom\" size=\"m\">\n    Plan is {{ plan.duration }} Weeks\n  </button>\n</div>\n\n<div class=\"tui-space_top-10\">\n  <div tuiIsland class=\"center-children\">\n    <div class=\"tui-island__category\">Choose when to start the plan</div>\n    <tui-calendar\n      [value]=\"value\"\n      [showAdjacent]=\"false\"\n      [month]=\"firstMonth\"\n      [(hoveredItem)]=\"hoveredItem\"\n      (dayClick)=\"onDayClick($event)\"\n    ></tui-calendar>\n  </div>\n</div>\n\n<!--<tui-island\n  size=\"m\"\n  textAlign=\"left\"\n  class=\"tui-space_top-3\"\n  [formGroup]=\"notificationForm\"\n>\n  <div class=\"tui-island__content\">\n    <figure class=\"tui-island__figure\">\n      <tui-toggle size=\"l\" formControlName=\"notifications\"></tui-toggle>\n    </figure>\n    <div>\n      <div class=\"tui-text_h6 tui-island__title\">Enable Notifications?</div>\n       \n      <div *ngIf=\"this.notificationForm.controls['notifications'].value\" class=\"tui-island__category\">Notifications <b class=\"prim-color\">enabled</b></div>\n      <div *ngIf=\"!this.notificationForm.controls['notifications'].value\" class=\"tui-island__category\">Notifications <b style=\"color: var(--tui-error-fill);\">disabled</b></div>\n      \n    </div>\n  </div>\n  <div\n    *ngIf=\"this.notificationForm.controls['notifications'].value\"\n    class=\"tui-space_top-2\"\n  >\n     <p class=\"tui-island__paragraph tui-space_right-2\">Notification time</p>\n    <tui-input-time formControlName=\"notifyTime\" tuiTextfieldSize=\"l\">\n      Notify Time\n    </tui-input-time>\n  </div> \n</tui-island>-->\n\n<div class=\"tui-space_top-5 tui-space_bottom-10 center-children\">\n  <button\n    tuiButton\n    type=\"button\"\n    appearance=\"primary-custom\"\n    size=\"l\"\n    (click)=\"startPlan()\"\n  >\n    Start Plan\n  </button>\n</div>\n\n<div class=\"big-footer-space\"></div>\n<app-footer-tabs [index]=\"this.activeItemIndex\"></app-footer-tabs>\n");

/***/ }),

/***/ 95473:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/step-complete/step-complete.component.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n  <app-back></app-back>\n</div>\n<div *ngIf=\"this.step\">\n  <div class=\"spacy-children-row tui-space_bottom-5\">\n    <div class=\"left-children\" >\n      <div class=\"tui-text_h4 ter-color\" style=\"width: 100px;\">Step {{ this.step.planWeek }}</div>\n    </div>\n    <div class=\"right-children\">\n      <tui-avatar\n        size=\"s\"\n        [rounded]=\"true\"\n        class=\"avatar official-shadow top-align\"\n        avatarUrl=\"{{ this.step.imageUrl }}\"\n      ></tui-avatar>\n      <div class=\"tui-text_xxl tui-space_left-3\">\n        <b>{{ this.step.planName }}</b>\n      </div>\n    </div>\n  </div>\n\n  <tui-progress-segmented\n    *ngIf=\"materialIndex != -1\"\n    class=\"tui-space_bottom-5\"\n    [max]=\"totalMaterials\"\n    [value]=\"materialIndex + 1\"\n  ></tui-progress-segmented>\n\n  <div>\n    <div *ngIf=\"materialIndex == -1\">\n      <div class=\"tui-text_h4 tui-space_top-10 text-center\">\n        {{ this.step.title }}\n      </div>\n      <div class=\"tui-space_top-2 tui-text_xxl\">{{ this.step.subtitle }}</div>\n    </div>\n    <div *ngIf=\"materialIndex != -1\">\n      <div *ngIf=\"this.step.material[materialIndex]['type'] == 'YouTube'\">\n        <div class=\"tui-space_bottom-10\">\n          <div class=\"tui-text_h5 tui-space_top-5 text-center\">\n            {{ this.step.material[materialIndex][\"title\"] }}\n          </div>\n          <div class=\"tui-space_top-2 tui-text_xxl\">\n            {{ this.step.material[materialIndex][\"description\"] }}\n          </div>\n        </div>\n        <youtube-player\n          #player\n          [videoId]=\"this.step.material[materialIndex]['link']\"\n          [width]=\"playerWidth\"\n          [height]=\"playerHeight\"\n        ></youtube-player>\n      </div>\n      <div *ngIf=\"this.step.material[materialIndex]['type'] == 'Link'\">\n        <div class=\"tui-space_bottom-10\">\n          <div class=\"tui-text_h5 tui-space_top-5 text-center\">\n            {{ this.step.material[materialIndex][\"title\"] }}\n          </div>\n          <div class=\"tui-space_top-2 tui-text_xxl\">\n            {{ this.step.material[materialIndex][\"description\"] }}\n          </div>\n        </div>\n        <a\n          href=\"{{ this.step.material[materialIndex]['link'] }}\"\n          class=\"center-children-row\"\n          ><button size=\"m\" appearance=\"quaternary-custom\" tuiButton>\n            Go to Link\n          </button></a\n        >\n\n        <!-- <iframe width=\"100%\" height=\"100%\" frameBorder=\"0\" [src]=\"sanitize()\"></iframe> -->\n      </div>\n      <div *ngIf=\"this.step.material[materialIndex]['type'] == 'Spreaker'\">\n        <div class=\"tui-space_bottom-10\">\n          <div class=\"tui-text_h5 tui-space_top-5 text-center\">\n            {{ this.step.material[materialIndex][\"title\"] }}\n          </div>\n          <div class=\"tui-space_top-2 tui-text_xxl\">\n            {{ this.step.material[materialIndex][\"description\"] }}\n          </div>\n        </div>\n        <!-- <iframe [src]=\"this.sanitize(this.step.material[materialIndex]['link'])\" frameborder=\"0\"></iframe> -->\n        <iframe\n          src=\"https://widget.spreaker.com/player?episode_id=17577829&theme=light&playlist=false&cover_image_url=https%3A%2F%2Fd3wo5wojvuv7l.cloudfront.net%2Fimages.spreaker.com%2Foriginal%2F846b65af72c5d3d160eef12a77418d48.jpg\"\n          width=\"100%\"\n          height=\"400px\"\n          frameborder=\"0\"\n        ></iframe>\n      </div>\n      <div *ngIf=\"this.step.material[materialIndex]['type'] == 'Text'\">\n        <div class=\"tui-space_bottom-10\">\n          <div class=\"tui-text_h5 tui-space_top-5 text-center\">\n            {{ this.step.material[materialIndex][\"title\"] }}\n          </div>\n        </div>\n        <div [innerHTML]=\"this.step.material[materialIndex]['text']\"></div>\n      </div>\n      <div *ngIf=\"this.step.material[materialIndex]['type'] == 'PDF'\">\n\n        <div class=\"tui-space_bottom-10\">\n          <div class=\"tui-text_h5 tui-space_top-5 text-center\">\n            {{ this.step.material[materialIndex][\"title\"] }}\n          </div>\n        </div>\n        <div class=\"center-children-row\">\n          <button\n            appearance=\"quaternary-custom\"\n            tuiButton\n            (click)=\"show(actions, this.step.material[materialIndex]['file'])\"\n          >\n            Read the File!\n          </button>\n        </div>\n        <ng-template #actions let-content=\"content\">\n          <a tuiButton shape=\"rounded\" size=\"s\" download [href]=\"content\"\n            >Download</a\n          >\n        </ng-template>\n      </div>\n    </div>\n\n    <div class=\"two-button big-top-space\">\n      <button\n        *ngIf=\"this.materialIndex > -1\"\n        tuiIconButton\n        type=\"button\"\n        size=\"l\"\n        appearance=\"secondary-custom\"\n        shape=\"rounded\"\n        icon=\"tuiIconChevronLeft\"\n        (click)=\"prevMaterial()\"\n      ></button>\n      <div></div>\n      <button\n        *ngIf=\"this.materialIndex < this.totalMaterials - 1\"\n        tuiIconButton\n        type=\"button\"\n        size=\"l\"\n        appearance=\"primary-custom\"\n        shape=\"rounded\"\n        iconRight=\"tuiIconChevronRight\"\n        (click)=\"nextMaterial()\"\n      ></button>\n      <button\n        *ngIf=\"this.materialIndex == this.totalMaterials - 1\"\n        tuiButton\n        type=\"button\"\n        size=\"l\"\n        appearance=\"flat\"\n        shape=\"rounded\"\n        iconRight=\"tuiIconChevronRight\"\n        class=\"shadow\"\n        (click)=\"completeStep()\"\n      >\n        Complete\n      </button>\n    </div>\n    <div class=\"big-footer-space\"></div>\n  </div>\n</div>\n<app-footer-tabs [index]=\"this.activeItemIndex\"></app-footer-tabs>\n");

/***/ }),

/***/ 1655:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/step-create/step-create.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div style=\"margin-top: -5vh\">\n  <div>\n    <app-back></app-back>\n  </div>\n\n  <div class=\"\">\n    <div\n      class=\"tui-text_body-xl big-top-space tui-space_bottom-3 spacy-children-row\"\n    >\n      <div class=\"tui-text_h4 ter-color\">Week {{ this.planWeek }}</div>\n      <!-- <tui-tag\n        status=\"custom\"\n        size=\"l\"\n        [hoverable]=\"true\"\n        [value]=\"'Plan is ' + planDuration + ' Weeks long'\"\n        class=\"sec-wrapper\"\n      ></tui-tag> -->\n    </div>\n\n    <form [formGroup]=\"form\" class=\"b-form tui-space_top-10\">\n      <div class=\"tui-space_bottom-5\">\n        <div class=\"tui-space_bottom-5\">\n          <tui-input formControlName=\"title\"> Title of the week</tui-input>\n        </div>\n        <tui-text-area\n          formControlName=\"subtitle\"\n          [expandable]=\"true\"\n          [rows]=\"10\"\n        >\n          Description: what the week is about\n        </tui-text-area>\n      </div>\n    </form>\n\n    <div *ngIf=\"!this.selectedMaterial\" class=\"prim-color tui-text_body-m tui-space_bottom-3\">\n      Here you can add the materials: each material will be a new step of the week! \n    </div>\n    <div class=\"spacy-children-row\" style=\"width: 100%\">\n      <tui-hosted-dropdown [content]=\"content\">\n        <button\n          tuiButton\n          type=\"button\"\n          size=\"m\"\n          appearance=\"secondary-custom\"\n          [iconRight]=\"arrow\"\n          class=\"official-shadow dropdown-button\"\n        >\n          Add Materials\n        </button>\n      </tui-hosted-dropdown>\n      <div *ngIf=\"this.selectedMaterial\" class=\"spacy-children-row\">\n        <tui-svg\n          src=\"{{ this.selectedMaterial['icon'] }}\"\n          class=\"tui-space_right-1\"\n        ></tui-svg>\n        <div class=\"tui-text_body-l\">{{ this.selectedMaterial[\"label\"] }}</div>\n      </div>\n    </div>\n\n    <ng-template #content class=\"\">\n      <tui-data-list role=\"menu\">\n        <button\n          *ngFor=\"let item of items\"\n          tuiOption\n          (click)=\"addMaterialComp(item)\"\n        >\n        <button\n        tuiIconButton\n        type=\"button\"\n        appearance=\"icon\"\n        size=\"m\"\n        shape=\"rounded\"\n        icon=\"{{ item.icon }}\"\n    ></button>\n          {{ item.label }}\n        </button>\n      </tui-data-list>\n    </ng-template>\n  </div>\n\n  <div *ngIf=\"this.selectedMaterial\">\n    <div *ngIf=\"this.selectedMaterial['label'] == 'YouTube'\">\n      <form [formGroup]=\"formYouTube\">\n        <tui-input\n          formControlName=\"title\"\n          icon=\"tuiIconCodeLarge\"\n          class=\"tui-space_top-5\"\n        >\n          Title\n        </tui-input>\n        <div class=\"spacy-children-row\">\n          <tui-input\n          formControlName=\"link\"\n          icon=\"tuiIconLinkLarge\"\n          class=\"tui-space_top-5\"\n          [tuiTextfieldLabelOutside]=\"true\"\n          style=\"width: 100%;\"\n        >\n          YouTube Link\n        </tui-input>\n\n      <tui-tooltip class=\"tui-space_left-2\" direction=\"right\" [content]=\"tooltip\"></tui-tooltip>\n        </div>\n      <ng-template #tooltip>\n        <img class=\"official-shadow\" src=\"./../../../assets/images/Screenshot 2022-01-25 at 18-57-39 Angular 9 Render PDF Documents Using ng2-pdf-viewer Library 2020 - YouTube.png\" alt=\"\">\n      </ng-template>\n        <tui-text-area\n          formControlName=\"description\"\n          [expandable]=\"true\"\n          [rows]=\"10\"\n          class=\"tui-space_top-5\"\n        >\n          Description\n        </tui-text-area>\n      </form>\n    </div>\n    <div *ngIf=\"this.selectedMaterial['label'] == 'Link'\">\n      <form [formGroup]=\"formLink\">\n        <tui-input\n          formControlName=\"title\"\n          icon=\"tuiIconCodeLarge\"\n          class=\"tui-space_top-5\"\n        >\n          Webpage Name\n        </tui-input>\n        <tui-input\n          formControlName=\"link\"\n          icon=\"tuiIconLinkLarge\"\n          class=\"tui-space_top-5\"\n        >\n          Webpage Link\n        </tui-input>\n        <tui-text-area\n          formControlName=\"description\"\n          [expandable]=\"true\"\n          [rows]=\"10\"\n          class=\"tui-space_top-5\"\n        >\n          Description\n        </tui-text-area>\n      </form>\n    </div>\n    <div *ngIf=\"this.selectedMaterial['label'] == 'Spreaker'\">\n      <form [formGroup]=\"formSpreaker\">\n        <tui-input\n          formControlName=\"title\"\n          icon=\"tuiIconCodeLarge\"\n          class=\"tui-space_top-5\"\n        >\n          Title\n        </tui-input>\n        <div class=\"spacy-children-row\">\n        <tui-input\n          formControlName=\"link\"\n          icon=\"tuiIconLinkLarge\"\n          class=\"tui-space_top-5\"\n          [tuiTextfieldLabelOutside]=\"true\"\n          style=\"width: 100%;\"\n        >\n          Spreaker Link\n        </tui-input>\n\n      <tui-tooltip class=\"tui-space_left-2\" direction=\"right\" [content]=\"tooltip\"></tui-tooltip>\n        </div>\n      <ng-template #tooltip class=\"center-children\">\n        <div class=\"center-children\">\n          <img class=\"official-shadow\" src=\"./../../../assets/images/Screenshot from 2022-01-25 19-03-54.png\" alt=\"\">\n        </div>\n        <div class=\"tui-space_top-3 center-children-row\">\n          <img class=\"official-shadow\" src=\"./../../../assets/images/Screenshot 2022-01-25 at 19-02-50 What is coding.png\" alt=\"\">\n          <img class=\"tui-space_left-2 official-shadow\" src=\"./../../../assets/images/Screenshot 2022-01-25 at 19-07-50 What is coding.png\" alt=\"\">\n        </div>\n      </ng-template>\n        <tui-text-area\n          formControlName=\"description\"\n          [expandable]=\"true\"\n          [rows]=\"10\"\n          class=\"tui-space_top-5\"\n        >\n          Description\n        </tui-text-area>\n      </form>\n    </div>\n    <div *ngIf=\"this.selectedMaterial['label'] == 'Text'\">\n      <form [formGroup]=\"formText\">\n        <tui-input\n          formControlName=\"title\"\n          icon=\"tuiIconCodeLarge\"\n          class=\"tui-space_top-5\"\n        >\n          Title\n        </tui-input>\n        <tui-editor\n          [tools]=\"tools\"\n          class=\"editor tui-space_top-5\"\n          formControlName=\"text\"\n        >\n          Write your formatted text!\n        </tui-editor>\n      </form>\n    </div>\n    <div *ngIf=\"this.selectedMaterial['label'] == 'PDF'\">\n      <form [formGroup]=\"formPDF\">\n        <tui-input\n          formControlName=\"title\"\n          icon=\"tuiIconCodeLarge\"\n          class=\"tui-space_top-5\"\n        >\n          Title\n        </tui-input>\n\n        <tui-input-file\n          class=\"tui-space_top-5\"\n          formControlName=\"file\"\n          [loadingFiles]=\"loading$\"\n          [accept]=\"'application/pdf'\"\n          [link]=\"'Choose a PDF'\"\n          [showSize]=\"true\"\n        ></tui-input-file>\n      </form>\n    </div>\n\n    <div class=\"right-children\">\n      <div></div>\n\n      <tui-tooltip class=\"tui-space_right-2\" direction=\"right\" [content]=\"tooltip\"></tui-tooltip>\n      <ng-template #tooltip>\n        <div>Click the <b>Add</b> button to add the material to the week</div>\n      </ng-template>\n      <button\n        tuiButton\n        type=\"button\"\n        size=\"s\"\n        appearance=\"secondary-custom\"\n        icon=\"tuiIconPlus\"\n        class=\"official-shadow dropdown-button tui-space_top-5\"\n        (click)=\"stepAdd(this.selectedMaterial['label'])\"\n      >\n        Add\n      </button>\n    </div>\n  </div>\n\n  <div *ngIf=\"this.printableSteps.length != 0\" class=\"prim-color tui-text_body-m tui-space_bottom-3 tui-space_top-7\">Reorder the materials</div>\n  <tui-reorder\n    *ngIf=\"this.printableSteps.length != 0\"\n    class=\"official-shadow  list\"\n    tuiTextfieldSize=\"l\"\n    [(items)]=this.printableSteps\n    [enabled]=\"this.printableSteps\"\n  ></tui-reorder>\n\n  <div class=\"two-button big-top-space\">\n    <button\n      *ngIf=\"this.planWeek > 1\"\n      tuiIconButton\n      type=\"button\"\n      size=\"l\"\n      appearance=\"secondary-custom\"\n      shape=\"rounded\"\n      icon=\"tuiIconChevronLeft\"\n      (click)=\"goCustStepsPrev()\"\n    ></button>\n    <div></div>\n    <button\n      tuiButton\n      type=\"button\"\n      size=\"l\"\n      appearance=\"primary-custom\"\n      shape=\"rounded\"\n      iconRight=\"tuiIconChevronRight\"\n      (click)=\"goCustStepsNext()\"\n    >\n      Week {{ this.planWeek + 1 }}\n    </button>\n  </div>\n  <div class=\"right-children tui-space_top-5 button-big-space\">\n    <div></div>\n    <tui-tooltip class=\"tui-space_right-2\" direction=\"right\" [content]=\"tooltip1\"></tui-tooltip>\n      <ng-template #tooltip1>\n        <div>Clicking the <b>Finish Editing</b> button you add this step to the plan and complete the editing</div>\n      </ng-template>\n    <button\n      tuiButton\n      type=\"button\"\n      size=\"l\"\n      appearance=\"flat\"\n      shape=\"rounded\"\n      iconRight=\"tuiIconCheckLarge\"\n      class=\"shadow-light\"\n      (click)=\"finishStepEditing()\"\n    >\n      Finish Editing\n    </button>\n  </div>\n  <div class=\"big-footer-space\"></div>\n  <app-footer-tabs [index]=\"this.activeItemIndex\"></app-footer-tabs>\n</div>\n");

/***/ }),

/***/ 96349:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/user-page/user-page.component.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<tui-hosted-dropdown\n  tuiDropdownAlign=\"right\"\n  [content]=\"dropdown\"\n  class=\"absolute\"\n>\n  <button\n    tuiIconButton\n    type=\"button\"\n    size=\"l\"\n    appearance=\"flat\"\n    iconRight=\"tuiIconMoreVertLarge\"\n  ></button>\n</tui-hosted-dropdown>\n<ng-template #dropdown>\n  <tui-data-list>\n    <button tuiOption (click)=\"logOut()\">Log Out</button>\n  </tui-data-list>\n</ng-template>\n\n<div *ngIf=\"user\" class=\"center-children moving\">\n  <tui-avatar\n    size=\"xxl\"\n    [rounded]=\"true\"\n    class=\"avatar shadow\"\n    avatarUrl=\"{{ user.imageUrl }}\"\n  ></tui-avatar>\n  <tui-tag\n    status=\"custom\"\n    class=\"level-{{ user.level }} tui-space_top-3\"\n    size=\"l\"\n    [hoverable]=\"true\"\n    [value]=\"'Level ' + user.level\"\n  ></tui-tag>\n  <div class=\"tui-text_h4 tui-space_top-5 text-center\">\n    {{ user.name }} {{ user.surname }}\n  </div>\n  <div class=\"tui-space_top-2 text-center\">{{ user.bio }}</div>\n</div>\n<div *ngIf=\"user\" class=\"tui-space_top-10\">\n  <div class=\"tui-text_body-xl\">Interests</div>\n  <div class=\"in-row\">\n    <div *ngFor=\"let i of user.interests\" class=\"elems\">\n      <div>\n        <tui-badged-content\n          size=\"m\"\n          colorTop=\"var(--level-{{ i.level }})\"\n          [contentTop]=\"i.level\"\n          status=\"success\"\n        >\n          <tui-avatar\n            size=\"m\"\n            [avatarUrl]=\"i.url\"\n            class=\"shadow-light\"\n          ></tui-avatar>\n        </tui-badged-content>\n      </div>\n      <div class=\"tui-text_body-m tui-space_top-2 logo-color\">\n        {{ i.inter }}\n      </div>\n    </div>\n  </div>\n  <div class=\"tui-space_top-10\">\n    <div class=\"tui-text_body-xl\">Plans Completed</div>\n    <app-plan-slider [plans]=\"this.user.plans\"></app-plan-slider>\n  </div>\n  <div class=\"button-big-space\"></div>\n</div>\n\n<app-footer-tabs [index]=\"this.activeItemIndex\"></app-footer-tabs>\n");

/***/ }),

/***/ 36463:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/welcome-page/welcome-page.component.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"sub-page\">\n  <div class=\"center-children big-top-space tui-space_bottom-5\">\n    <div class=\"center-children\">\n      <div class=\"tui-text_h2 tui-space_top-5 tui-space_bottom-10\">\n        Welcome to\n      </div>\n\n      <svg\n        class=\"expanded-img\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        version=\"1.0\"\n        viewBox=\"3.85 123.68 365.07 142.83\"\n      >\n        <defs>\n          <clipPath id=\"a\">\n            <path\n              d=\"M 3.882812 123.660156 L 136.386719 123.660156 L 136.386719 213.128906 L 3.882812 213.128906 Z M 3.882812 123.660156\"\n            ></path>\n          </clipPath>\n        </defs>\n        <g clip-path=\"url(#a)\">\n          <path\n            fill=\"#6C98DB\"\n            d=\"M 129.953125 209.242188 C 126.375 205.449219 122.890625 202.832031 119.453125 201.285156 C 146.648438 178.429688 159.308594 149.480469 156.988281 138.800781 C 153.183594 163.769531 129.230469 192.503906 119.441406 201.277344 C 116.460938 199.933594 113.519531 199.410156 110.597656 199.632812 C 118.808594 188.214844 126.628906 142.644531 121.894531 131.730469 C 125.6875 133.636719 129.652344 136.75 136.332031 135.675781 C 128.050781 133.230469 124.9375 130.714844 117.949219 126.246094 C 124.992188 150.628906 115.496094 186.832031 110.125 199.675781 C 108.027344 199.898438 105.933594 200.507812 103.84375 201.480469 C 104.046875 184.597656 84.894531 137.683594 72.925781 130.136719 C 79.996094 130.226562 85.199219 128.769531 91.59375 126.800781 C 95.980469 134.421875 98.964844 143.492188 101.308594 152.480469 C 100.460938 142.660156 96.707031 132.855469 93.128906 123.714844 C 83.667969 126.5 75.226562 127.269531 65.765625 127.3125 C 87.109375 146.011719 100.140625 185.507812 103.214844 201.785156 C 101.855469 202.46875 100.5 203.300781 99.144531 204.289062 C 92.621094 190.238281 51.332031 157.71875 36.78125 157.316406 C 42.917969 153.777344 45.640625 150.386719 50.152344 145.433594 C 57.785156 149.757812 69.292969 160.160156 75.855469 166.707031 C 70.152344 158.679688 57.617188 147.527344 49.914062 141.480469 C 43.167969 148.699219 36.289062 153.671875 28.160156 158.53125 C 56.699219 163.890625 88.769531 192.515625 98.859375 204.492188 C 98.058594 205.082031 97.257812 205.71875 96.453125 206.417969 C 69.558594 198.1875 42.113281 196.066406 9.765625 207.703125 C 13.257812 202.476562 14.535156 197.769531 14.617188 192.550781 C 29.789062 189.417969 47.4375 186.941406 68.066406 187.925781 C 52.757812 184.714844 31.382812 184.203125 12.320312 189.210938 C 10.726562 198.800781 7.527344 206.246094 3.882812 213.09375 C 39.398438 200.605469 69.710938 200.5 97.726562 211.292969 C 109.324219 202.222656 120.230469 202.132812 128.417969 211.554688 C 161.320312 209.441406 216.722656 208.074219 249.625 210.78125 C 220.976562 207.3125 165.417969 207.230469 129.953125 209.242188 Z M 129.953125 209.242188\"\n            fill-rule=\"evenodd\"\n          ></path>\n        </g>\n        <path\n          fill=\"#254D9D\"\n          d=\"M 109.804688 207.8125 C 116.515625 200.167969 125.1875 189.917969 135.804688 177.046875 C 146.433594 164.183594 154.265625 155.050781 159.300781 149.652344 C 164.332031 144.246094 168.675781 140.140625 172.328125 137.339844 C 180.800781 131.003906 189.421875 127.828125 198.183594 127.828125 C 200.148438 127.828125 202.367188 128.625 204.839844 130.214844 C 207.304688 131.804688 208.542969 134.269531 208.542969 137.621094 C 208.542969 140.878906 205.417969 145.914062 199.175781 152.722656 C 196.089844 156.070312 191.632812 159.503906 185.796875 163.007812 C 179.976562 166.5 173.480469 169.320312 166.308594 171.453125 C 163.601562 171.925781 161.621094 172.164062 160.363281 172.164062 C 159.101562 172.164062 158.476562 172.019531 158.476562 171.738281 C 158.476562 171.453125 158.796875 171.136719 159.445312 170.769531 C 167.277344 166.476562 176.058594 160 185.796875 151.328125 C 195.546875 142.664062 200.425781 136.976562 200.425781 134.269531 C 200.425781 133.894531 200.167969 133.703125 199.648438 133.703125 C 199.140625 133.703125 198.585938 133.800781 197.972656 133.988281 C 197.371094 134.175781 196.699219 134.367188 195.945312 134.554688 C 195.199219 134.730469 193.621094 135.492188 191.203125 136.84375 C 188.777344 138.199219 186.234375 139.878906 183.582031 141.890625 C 180.921875 143.890625 177.609375 146.964844 173.648438 151.117188 C 169.683594 155.269531 165.695312 160.046875 161.683594 165.4375 C 146.300781 186.992188 136.328125 200.234375 131.769531 205.171875 C 131.011719 206.007812 130.074219 207.027344 128.960938 208.238281 C 131.285156 208.519531 134.777344 208.851562 139.4375 209.226562 C 144.109375 209.59375 147.257812 209.890625 148.898438 210.125 C 150.53125 210.359375 152.933594 210.855469 156.09375 211.613281 C 159.265625 212.355469 161.785156 213.28125 163.644531 214.394531 C 168.488281 217.386719 173.152344 221.445312 177.636719 226.570312 C 178.65625 227.683594 179.167969 228.421875 179.167969 228.789062 C 179.167969 229.164062 179.027344 229.355469 178.742188 229.355469 C 178.285156 229.355469 177.683594 229.164062 176.925781 228.789062 C 175.523438 228.421875 173.496094 227.914062 170.839844 227.253906 C 168.179688 226.605469 162.46875 225.769531 153.710938 224.730469 C 144.945312 223.703125 136.910156 223.195312 129.597656 223.195312 C 122.285156 223.195312 116.941406 223.242188 113.578125 223.335938 C 108.636719 228.007812 101.691406 232.339844 92.746094 236.335938 C 83.789062 240.347656 77.066406 242.355469 72.546875 242.355469 C 68.019531 242.355469 63.746094 241.164062 59.738281 238.792969 C 55.726562 236.414062 53.71875 233.222656 53.71875 229.210938 C 53.71875 226.316406 55.914062 223.148438 60.304688 219.703125 C 70.371094 211.777344 86.871094 207.8125 109.804688 207.8125 Z M 61.410156 233.269531 C 61.410156 234.195312 62.539062 234.804688 64.785156 235.085938 C 67.664062 235.085938 70.136719 234.921875 72.195312 234.589844 C 74.242188 234.273438 77.242188 233.230469 81.207031 231.453125 C 85.171875 229.671875 89.347656 227.066406 93.734375 223.621094 C 87.753906 223.621094 80.875 224.6875 73.089844 226.828125 C 65.304688 228.980469 61.410156 231.128906 61.410156 233.269531 Z M 61.410156 233.269531\"\n        ></path>\n        <path\n          fill=\"#254D9D\"\n          d=\"M 215.648438 152.578125 C 216.59375 152.578125 217.195312 152.769531 217.464844 153.144531 C 218.769531 154.738281 219.425781 156.019531 219.425781 156.992188 C 219.425781 157.972656 219.140625 158.808594 218.574219 159.515625 C 218.019531 160.210938 217.355469 161.003906 216.570312 161.898438 C 215.777344 162.785156 214.191406 163.992188 211.804688 165.53125 C 209.425781 167.058594 207.121094 167.820312 204.890625 167.820312 C 203.203125 167.539062 202.367188 166.519531 202.367188 164.753906 C 202.367188 161.957031 204.042969 159.226562 207.390625 156.566406 C 210.753906 153.914062 213.507812 152.578125 215.648438 152.578125 Z M 182.097656 207.671875 C 181.34375 208.980469 180.964844 210.148438 180.964844 211.1875 C 180.964844 212.214844 181.53125 212.71875 182.664062 212.71875 C 183.308594 212.71875 184.421875 212.4375 186.015625 211.871094 C 203.441406 202.734375 220.496094 191.96875 237.191406 179.570312 C 238.023438 180.230469 238.441406 181.027344 238.441406 181.953125 C 238.441406 182.886719 237.976562 183.769531 237.050781 184.621094 C 236.117188 185.457031 234.789062 186.667969 233.0625 188.253906 C 231.34375 189.828125 228.058594 192.664062 223.199219 196.769531 C 218.351562 200.875 213.839844 204.605469 209.65625 207.953125 C 198.644531 216.8125 190.527344 222.027344 185.308594 223.621094 C 183.636719 224.09375 181.820312 224.328125 179.859375 224.328125 C 172.683594 224.328125 169.097656 220.507812 169.097656 212.863281 C 169.097656 209.878906 170.726562 205.613281 173.984375 200.074219 C 177.25 194.523438 180.613281 189.621094 184.058594 185.375 C 187.503906 181.128906 189.777344 178.78125 190.898438 178.320312 C 192.582031 177.300781 194.398438 176.785156 196.351562 176.785156 C 198.3125 176.785156 200.183594 177.160156 201.964844 177.894531 C 202.511719 178.179688 202.789062 178.554688 202.789062 179.027344 C 202.789062 179.488281 202.34375 180.183594 201.445312 181.128906 C 200.5625 182.058594 199.210938 183.5 197.386719 185.445312 C 195.578125 187.398438 192.882812 190.777344 189.296875 195.589844 C 185.707031 200.390625 183.308594 204.414062 182.097656 207.671875 Z M 182.097656 207.671875\"\n        ></path>\n        <path\n          fill=\"#254D9D\"\n          d=\"M 272.699219 157.203125 L 279.847656 157.0625 C 289.078125 157.0625 295.785156 158.371094 299.972656 160.980469 C 302.03125 161.628906 303.0625 162.460938 303.0625 163.480469 C 303.0625 164.234375 302.148438 164.753906 300.328125 165.039062 C 298.515625 165.308594 292.222656 166.027344 281.453125 167.207031 C 270.675781 168.375 263.289062 169.042969 259.296875 169.214844 C 257.515625 169.308594 253.433594 172.394531 247.050781 178.460938 C 240.664062 184.519531 234.578125 191.179688 228.789062 198.445312 C 223.015625 205.714844 220.132812 210.796875 220.132812 213.6875 C 220.132812 214.160156 220.355469 214.5625 220.816406 214.890625 C 221.289062 215.210938 221.867188 215.363281 222.5625 215.363281 C 223.269531 215.363281 224.367188 215.089844 225.863281 214.535156 C 243.570312 204.097656 260.773438 192.675781 277.464844 180.277344 C 278.296875 180.925781 278.714844 181.71875 278.714844 182.660156 C 278.714844 183.59375 278.25 184.496094 277.324219 185.375 C 276.390625 186.261719 275.015625 187.539062 273.195312 189.222656 C 271.382812 190.90625 268.003906 193.941406 263.046875 198.328125 C 258.105469 202.703125 253.453125 206.609375 249.082031 210.054688 C 237.332031 219.574219 229.125 225.070312 224.472656 226.570312 C 222.785156 227.023438 220.804688 227.253906 218.527344 227.253906 C 216.246094 227.253906 214.144531 226.085938 212.226562 223.761719 C 210.324219 221.4375 209.371094 218.265625 209.371094 214.253906 C 209.371094 210.242188 211.949219 204.460938 217.113281 196.914062 C 222.285156 189.363281 229.34375 181.625 238.300781 173.695312 C 239.148438 173.054688 239.574219 172.445312 239.574219 171.878906 C 239.574219 171.3125 238.589844 171.03125 236.625 171.03125 L 227.824219 171.3125 C 215.425781 171.3125 209.042969 169.921875 208.664062 167.136719 C 205.773438 166.570312 204.324219 165.734375 204.324219 164.613281 C 204.324219 164.234375 204.511719 164.023438 204.890625 163.976562 C 205.269531 163.929688 205.597656 163.882812 205.882812 163.835938 C 206.152344 163.785156 206.613281 163.714844 207.273438 163.621094 C 207.921875 163.527344 213.058594 162.789062 222.703125 161.402344 C 232.359375 160.007812 243.335938 158.832031 255.640625 157.886719 L 265.289062 145.03125 C 265.855469 143.914062 267.816406 143.355469 271.164062 143.355469 C 274.527344 143.355469 276.214844 144.054688 276.214844 145.453125 C 276.214844 145.914062 275.835938 146.753906 275.082031 147.980469 L 271.589844 152.863281 C 271.117188 154.359375 270.839844 155.476562 270.765625 156.214844 C 270.765625 156.875 271.40625 157.203125 272.699219 157.203125 Z M 272.699219 157.203125\"\n        ></path>\n        <path\n          fill=\"#254D9D\"\n          d=\"M 316.464844 157.203125 L 323.613281 157.0625 C 332.84375 157.0625 339.550781 158.371094 343.738281 160.980469 C 345.796875 161.628906 346.828125 162.460938 346.828125 163.480469 C 346.828125 164.234375 345.914062 164.753906 344.09375 165.039062 C 342.28125 165.308594 335.988281 166.027344 325.21875 167.207031 C 314.441406 168.375 307.054688 169.042969 303.0625 169.214844 C 301.28125 169.308594 297.199219 172.394531 290.816406 178.460938 C 284.429688 184.519531 278.34375 191.179688 272.554688 198.445312 C 266.78125 205.714844 263.898438 210.796875 263.898438 213.6875 C 263.898438 214.160156 264.121094 214.5625 264.582031 214.890625 C 265.054688 215.210938 265.632812 215.363281 266.328125 215.363281 C 267.035156 215.363281 268.132812 215.089844 269.632812 214.535156 C 287.339844 204.097656 304.539062 192.675781 321.230469 180.277344 C 322.0625 180.925781 322.480469 181.71875 322.480469 182.660156 C 322.480469 183.59375 322.015625 184.496094 321.089844 185.375 C 320.15625 186.261719 318.78125 187.539062 316.960938 189.222656 C 315.148438 190.90625 311.769531 193.941406 306.816406 198.328125 C 301.871094 202.703125 297.21875 206.609375 292.847656 210.054688 C 281.097656 219.574219 272.894531 225.070312 268.238281 226.570312 C 266.550781 227.023438 264.570312 227.253906 262.292969 227.253906 C 260.011719 227.253906 257.910156 226.085938 255.992188 223.761719 C 254.089844 221.4375 253.140625 218.265625 253.140625 214.253906 C 253.140625 210.242188 255.714844 204.460938 260.878906 196.914062 C 266.050781 189.363281 273.109375 181.625 282.066406 173.695312 C 282.914062 173.054688 283.339844 172.445312 283.339844 171.878906 C 283.339844 171.3125 282.355469 171.03125 280.390625 171.03125 L 271.589844 171.3125 C 259.191406 171.3125 252.808594 169.921875 252.429688 167.136719 C 249.539062 166.570312 248.089844 165.734375 248.089844 164.613281 C 248.089844 164.234375 248.277344 164.023438 248.65625 163.976562 C 249.035156 163.929688 249.363281 163.882812 249.648438 163.835938 C 249.917969 163.785156 250.378906 163.714844 251.039062 163.621094 C 251.6875 163.527344 256.824219 162.789062 266.46875 161.402344 C 276.125 160.007812 287.101562 158.832031 299.40625 157.886719 L 309.054688 145.03125 C 309.621094 143.914062 311.582031 143.355469 314.929688 143.355469 C 318.292969 143.355469 319.980469 144.054688 319.980469 145.453125 C 319.980469 145.914062 319.601562 146.753906 318.847656 147.980469 L 315.355469 152.863281 C 314.882812 154.359375 314.605469 155.476562 314.53125 156.214844 C 314.53125 156.875 315.171875 157.203125 316.464844 157.203125 Z M 316.464844 157.203125\"\n        ></path>\n        <path\n          fill=\"#254D9D\"\n          d=\"M 304.03125 215.644531 C 307.015625 215.644531 310.695312 213.6875 315.070312 209.769531 C 319.460938 205.855469 321.738281 203.160156 321.914062 201.679688 C 320.792969 200.734375 319.609375 199.03125 318.351562 196.558594 C 317.089844 194.09375 316.417969 192.855469 316.324219 192.855469 C 313.445312 195.5625 310.878906 198.683594 308.628906 202.222656 C 305.089844 208.203125 303.320312 212.308594 303.320312 214.535156 C 303.320312 215.28125 303.558594 215.644531 304.03125 215.644531 Z M 334.230469 181.386719 C 333.296875 181.386719 331.363281 182.839844 328.425781 185.730469 C 325.484375 188.625 324.015625 190.628906 324.015625 191.746094 C 324.015625 192.015625 324.296875 192.570312 324.863281 193.421875 C 325.429688 194.257812 325.84375 194.671875 326.113281 194.671875 C 327.699219 194.671875 329.492188 192.761719 331.492188 188.9375 C 333.503906 185.117188 334.511719 182.910156 334.511719 182.308594 C 334.511719 181.695312 334.417969 181.386719 334.230469 181.386719 Z M 334.511719 199.4375 C 337.121094 199.4375 341.195312 197.855469 346.734375 194.695312 C 352.285156 191.519531 357.164062 188.34375 361.363281 185.164062 L 367.664062 180.277344 C 368.492188 180.925781 368.914062 181.71875 368.914062 182.660156 C 368.914062 183.59375 368.492188 184.425781 367.664062 185.164062 C 352.277344 199.429688 340.625 206.5625 332.695312 206.5625 C 332.128906 206.5625 331.285156 206.46875 330.171875 206.277344 C 319.632812 218.5 310.589844 224.613281 303.039062 224.613281 C 298 223.855469 294.839844 222.074219 293.53125 219.28125 C 292.792969 217.882812 292.421875 216.113281 292.421875 213.972656 C 292.421875 207.824219 295.960938 200.488281 303.039062 191.957031 C 310.128906 183.417969 319.035156 177.140625 329.746094 173.128906 C 330.691406 173.128906 331.386719 173.34375 331.847656 173.765625 C 332.320312 174.191406 332.730469 174.425781 333.097656 174.476562 C 333.476562 174.523438 333.957031 174.332031 334.558594 173.910156 C 335.171875 173.484375 335.988281 173.246094 337.015625 173.199219 C 338.050781 173.152344 339.125 173.738281 340.246094 174.945312 C 341.738281 176.171875 342.488281 177.671875 342.488281 179.429688 C 342.488281 184.65625 339.828125 191.320312 334.511719 199.4375 Z M 334.511719 199.4375\"\n        ></path>\n        <path\n          fill=\"#6C98DB\"\n          d=\"M 94.523438 262.785156 L 104.003906 262.785156 C 103.960938 262.328125 104.0625 261.980469 104.199219 261.585938 L 104.609375 260.347656 L 104.164062 260.347656 L 103.824219 260.9375 C 103.453125 261.570312 102.90625 262.097656 101.667969 262.160156 L 98.605469 262.3125 C 97.78125 262.328125 97.484375 261.980469 97.484375 261.367188 L 97.484375 252.007812 C 97.484375 251.28125 97.898438 251.144531 98.683594 250.988281 L 98.683594 250.597656 L 94.523438 250.597656 L 94.523438 250.988281 C 95.308594 251.144531 95.699219 251.28125 95.699219 252.007812 L 95.699219 261.367188 C 95.699219 262.097656 95.308594 262.234375 94.523438 262.371094 Z M 94.523438 262.785156\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 119.246094 260.726562 C 118.578125 261.570312 117.71875 261.824219 116.875 261.824219 C 115.128906 261.824219 113.730469 260.761719 113.265625 259.03125 C 113.207031 258.566406 113.28125 258.308594 113.671875 258.308594 L 115.972656 258.269531 C 118.484375 258.210938 119.539062 257.875 119.539062 256.644531 C 119.539062 255.035156 118.148438 253.753906 116.066406 253.753906 C 113.695312 253.753906 111.476562 255.421875 111.476562 258.347656 C 111.476562 261.15625 113.558594 262.902344 116.007812 262.902344 C 117.996094 262.902344 119.210938 261.664062 119.582031 260.980469 Z M 115.753906 254.226562 C 117.167969 254.226562 117.9375 255.152344 117.9375 256.441406 C 117.9375 257.34375 117.320312 257.800781 115.441406 257.816406 L 113.710938 257.859375 C 113.300781 257.859375 113.085938 257.742188 113.121094 257.03125 C 113.28125 255.304688 114.183594 254.226562 115.753906 254.226562 Z M 115.753906 254.226562\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 129.253906 262.902344 C 130.511719 262.902344 131.769531 262.351562 132.476562 261.46875 C 132.609375 261.292969 132.769531 261.292969 132.769531 261.46875 C 132.789062 262.472656 133.320312 262.882812 134.101562 262.882812 C 134.5 262.882812 134.96875 262.765625 135.324219 262.53125 L 135.324219 262.160156 C 134.675781 262.3125 134.339844 262.058594 134.339844 261.367188 L 134.339844 256.972656 C 134.339844 254.796875 133.511719 253.753906 131.261719 253.753906 C 129.371094 253.753906 127.355469 254.519531 127.355469 255.875 C 127.355469 256.382812 127.625 256.738281 128.140625 256.738281 C 128.671875 256.738281 129 256.40625 129 255.71875 C 129 254.796875 129.492188 254.265625 130.550781 254.265625 C 132.105469 254.265625 132.769531 255.269531 132.769531 256.621094 L 132.769531 257.03125 C 132.769531 257.429688 132.59375 257.546875 132.316406 257.5625 C 127.902344 258.070312 126.707031 259.234375 126.707031 260.742188 C 126.707031 262.269531 127.941406 262.902344 129.253906 262.902344 Z M 130.238281 262 C 129 262 128.410156 261.15625 128.410156 260.269531 C 128.410156 259.351562 129.101562 258.425781 131.984375 258.070312 C 132.671875 257.996094 132.769531 258.289062 132.769531 258.742188 L 132.769531 259.917969 C 132.769531 260.996094 131.589844 262 130.238281 262 Z M 130.238281 262\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 142.113281 262.785156 L 146.253906 262.785156 L 146.253906 262.386719 C 145.269531 262.269531 144.941406 262.058594 144.941406 261.332031 L 144.941406 257.664062 C 144.941406 255.816406 145.902344 254.65625 147.015625 254.65625 C 147.664062 254.65625 148.019531 255.09375 148.019531 255.597656 C 148.019531 255.953125 148.332031 256.289062 148.84375 256.289062 C 149.351562 256.289062 149.746094 255.894531 149.746094 255.328125 C 149.746094 254.796875 149.46875 253.753906 147.941406 253.753906 C 146.527344 253.753906 145.625 254.757812 145.351562 255.035156 C 145.074219 255.304688 144.941406 255.128906 144.941406 254.382812 C 144.941406 253.894531 144.679688 253.695312 144.25 253.792969 L 142.089844 254.285156 L 142.089844 254.65625 C 143.195312 254.542969 143.367188 254.914062 143.367188 255.777344 L 143.367188 261.332031 C 143.367188 262.058594 143.035156 262.269531 142.113281 262.386719 Z M 142.113281 262.785156\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 165.152344 262.882812 C 165.644531 262.882812 166.039062 262.742188 166.410156 262.53125 L 166.410156 262.160156 C 165.761719 262.3125 165.425781 262.058594 165.425781 261.367188 L 165.425781 256.957031 C 165.425781 254.65625 164.035156 253.753906 162.566406 253.753906 C 160.855469 253.753906 159.96875 254.832031 159.714844 255.109375 C 159.445312 255.386719 159.265625 255.128906 159.265625 254.382812 C 159.265625 253.894531 159.007812 253.695312 158.578125 253.792969 L 156.417969 254.285156 L 156.417969 254.65625 C 157.519531 254.542969 157.691406 254.914062 157.691406 255.777344 L 157.691406 261.332031 C 157.691406 262.058594 157.363281 262.269531 156.441406 262.386719 L 156.441406 262.785156 L 160.542969 262.785156 L 160.542969 262.386719 C 159.597656 262.269531 159.265625 262.058594 159.265625 261.332031 L 159.265625 257.367188 C 159.265625 255.910156 160.230469 254.738281 161.636719 254.738281 C 163.113281 254.738281 163.855469 255.851562 163.855469 257.367188 L 163.855469 261.546875 C 163.855469 262.53125 164.371094 262.882812 165.152344 262.882812 Z M 165.152344 262.882812\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 182.699219 262.785156 L 186.859375 262.785156 L 186.859375 262.371094 C 186.074219 262.234375 185.660156 262.097656 185.660156 261.367188 L 185.660156 252.007812 C 185.660156 251.28125 186.074219 251.144531 186.859375 250.988281 L 186.859375 250.597656 L 182.699219 250.597656 L 182.699219 250.988281 C 183.484375 251.144531 183.875 251.28125 183.875 252.007812 L 183.875 261.367188 C 183.875 262.097656 183.484375 262.234375 182.699219 262.371094 Z M 182.699219 262.785156\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 197.148438 262.882812 C 198.027344 262.882812 198.558594 262.566406 198.835938 262.328125 L 198.617188 261.957031 C 198.457031 262.074219 198.144531 262.253906 197.613281 262.253906 C 196.734375 262.253906 196.457031 261.46875 196.457031 260.488281 L 196.457031 254.875 C 196.457031 254.578125 196.59375 254.460938 196.851562 254.460938 L 198.617188 254.460938 L 198.617188 253.929688 L 196.851562 253.929688 C 196.59375 253.929688 196.457031 253.8125 196.457031 253.421875 L 196.457031 251.890625 L 195.925781 251.890625 C 195.65625 253.246094 194.929688 253.855469 193.632812 254.089844 L 193.632812 254.460938 L 194.457031 254.460938 C 194.730469 254.460938 194.890625 254.5625 194.890625 254.875 L 194.890625 260.253906 C 194.890625 262.195312 195.808594 262.882812 197.148438 262.882812 Z M 197.148438 262.882812\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 217.875 262.785156 L 222.816406 262.785156 L 222.816406 262.371094 C 221.640625 262.234375 221.246094 262.097656 221.246094 261.367188 L 221.246094 252.167969 C 221.246094 251.5 221.367188 251.222656 222.835938 251.222656 C 224.207031 251.222656 224.679688 251.617188 225.210938 253.144531 L 225.664062 253.144531 L 225.347656 250.539062 L 224.230469 250.597656 L 216.457031 250.597656 L 215.335938 250.539062 L 215.023438 253.144531 L 215.480469 253.144531 C 216.027344 251.617188 216.476562 251.222656 217.851562 251.222656 C 219.324219 251.222656 219.460938 251.5 219.460938 252.167969 L 219.460938 261.367188 C 219.460938 262.097656 219.046875 262.234375 217.875 262.371094 Z M 217.875 262.785156\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 237.183594 262.902344 C 239.640625 262.902344 241.796875 261.113281 241.796875 258.289062 C 241.796875 255.464844 239.65625 253.753906 237.246094 253.753906 C 234.808594 253.753906 232.632812 255.523438 232.632812 258.347656 C 232.632812 261.171875 234.789062 262.902344 237.183594 262.902344 Z M 237.65625 262.371094 C 235.710938 262.371094 234.277344 260.230469 234.277344 257.699219 C 234.277344 255.363281 235.355469 254.285156 236.773438 254.285156 C 238.738281 254.285156 240.144531 256.425781 240.144531 258.957031 C 240.144531 261.273438 239.089844 262.371094 237.65625 262.371094 Z M 237.65625 262.371094\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 251.15625 259.664062 C 251.730469 259.664062 252.160156 259.824219 252.902344 259.824219 C 255.042969 259.824219 256.402344 258.625 256.402344 256.761719 C 256.402344 255.285156 256.476562 254.972656 256.96875 255.152344 C 257.421875 255.304688 257.929688 255.070312 257.929688 254.519531 C 257.929688 254.089844 257.59375 253.792969 257.042969 253.792969 C 256.28125 253.792969 255.964844 254.367188 255.929688 255.128906 C 255.296875 254.207031 254.101562 253.753906 252.765625 253.753906 C 250.492188 253.753906 249.15625 255.007812 249.15625 256.816406 C 249.15625 257.996094 249.707031 258.820312 250.566406 259.308594 C 249.527344 259.503906 248.980469 259.957031 248.980469 260.667969 C 248.980469 261.332031 249.453125 261.882812 250.15625 262.015625 C 250.828125 262.136719 248.566406 262.292969 248.566406 264.097656 C 248.566406 265.609375 250.179688 266.511719 252.296875 266.511719 C 254.765625 266.511719 257.398438 265.277344 257.398438 263.390625 C 257.398438 262.195312 256.28125 261.746094 254.4375 261.425781 L 251.292969 260.878906 C 250.769531 260.800781 250.390625 260.644531 250.390625 260.230469 C 250.390625 259.898438 250.648438 259.664062 251.15625 259.664062 Z M 252.453125 254.191406 C 253.847656 254.191406 254.730469 255.464844 254.730469 257.25 C 254.730469 258.269531 254.335938 259.386719 253.082031 259.386719 C 251.707031 259.386719 250.828125 258.113281 250.828125 256.324219 C 250.828125 255.304688 251.199219 254.191406 252.453125 254.191406 Z M 252.175781 262.414062 L 254.21875 262.742188 C 255.355469 262.941406 255.886719 263.238281 255.886719 263.863281 C 255.886719 265.253906 254.574219 265.980469 253.121094 265.980469 C 251.273438 265.980469 250.117188 265.078125 250.117188 263.863281 C 250.117188 262.917969 250.886719 262.195312 252.175781 262.414062 Z M 252.175781 262.414062\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 272.46875 260.726562 C 271.804688 261.570312 270.941406 261.824219 270.097656 261.824219 C 268.351562 261.824219 266.953125 260.761719 266.488281 259.03125 C 266.429688 258.566406 266.507812 258.308594 266.894531 258.308594 L 269.195312 258.269531 C 271.707031 258.210938 272.765625 257.875 272.765625 256.644531 C 272.765625 255.035156 271.371094 253.753906 269.289062 253.753906 C 266.917969 253.753906 264.699219 255.421875 264.699219 258.347656 C 264.699219 261.15625 266.785156 262.902344 269.230469 262.902344 C 271.21875 262.902344 272.433594 261.664062 272.804688 260.980469 Z M 268.976562 254.226562 C 270.394531 254.226562 271.160156 255.152344 271.160156 256.441406 C 271.160156 257.34375 270.546875 257.800781 268.664062 257.816406 L 266.9375 257.859375 C 266.523438 257.859375 266.3125 257.742188 266.347656 257.03125 C 266.507812 255.304688 267.410156 254.226562 268.976562 254.226562 Z M 268.976562 254.226562\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 283.152344 262.882812 C 284.03125 262.882812 284.5625 262.566406 284.839844 262.328125 L 284.621094 261.957031 C 284.460938 262.074219 284.148438 262.253906 283.617188 262.253906 C 282.738281 262.253906 282.460938 261.46875 282.460938 260.488281 L 282.460938 254.875 C 282.460938 254.578125 282.597656 254.460938 282.855469 254.460938 L 284.621094 254.460938 L 284.621094 253.929688 L 282.855469 253.929688 C 282.597656 253.929688 282.460938 253.8125 282.460938 253.421875 L 282.460938 251.890625 L 281.929688 251.890625 C 281.660156 253.246094 280.933594 253.855469 279.636719 254.089844 L 279.636719 254.460938 L 280.460938 254.460938 C 280.734375 254.460938 280.890625 254.5625 280.890625 254.875 L 280.890625 260.253906 C 280.890625 262.195312 281.8125 262.882812 283.152344 262.882812 Z M 283.152344 262.882812\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 300.417969 261.367188 L 300.417969 256.957031 C 300.417969 254.65625 299.027344 253.753906 297.550781 253.753906 C 295.847656 253.753906 295.003906 254.832031 294.707031 255.109375 C 294.429688 255.386719 294.253906 255.128906 294.253906 254.382812 L 294.253906 250.480469 C 294.253906 250.027344 294 249.832031 293.570312 249.929688 L 291.410156 250.398438 L 291.410156 250.773438 C 292.507812 250.675781 292.683594 251.027344 292.683594 251.890625 L 292.683594 261.332031 C 292.683594 262.058594 292.355469 262.269531 291.429688 262.386719 L 291.429688 262.785156 L 295.535156 262.785156 L 295.535156 262.386719 C 294.589844 262.269531 294.253906 262.058594 294.253906 261.332031 L 294.253906 257.367188 C 294.253906 255.910156 295.214844 254.773438 296.632812 254.773438 C 298.003906 254.773438 298.847656 255.910156 298.847656 257.367188 L 298.847656 261.546875 C 298.847656 262.53125 299.355469 262.882812 300.148438 262.882812 C 300.636719 262.882812 301.027344 262.742188 301.402344 262.53125 L 301.402344 262.160156 C 300.753906 262.3125 300.417969 262.058594 300.417969 261.367188 Z M 300.417969 261.367188\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 316.039062 260.726562 C 315.371094 261.570312 314.511719 261.824219 313.667969 261.824219 C 311.921875 261.824219 310.523438 260.761719 310.058594 259.03125 C 310 258.566406 310.074219 258.308594 310.464844 258.308594 L 312.765625 258.269531 C 315.277344 258.210938 316.332031 257.875 316.332031 256.644531 C 316.332031 255.035156 314.941406 253.753906 312.859375 253.753906 C 310.488281 253.753906 308.269531 255.421875 308.269531 258.347656 C 308.269531 261.15625 310.351562 262.902344 312.800781 262.902344 C 314.789062 262.902344 316.003906 261.664062 316.375 260.980469 Z M 312.546875 254.226562 C 313.960938 254.226562 314.730469 255.152344 314.730469 256.441406 C 314.730469 257.34375 314.117188 257.800781 312.234375 257.816406 L 310.507812 257.859375 C 310.09375 257.859375 309.882812 257.742188 309.917969 257.03125 C 310.074219 255.304688 310.976562 254.226562 312.546875 254.226562 Z M 312.546875 254.226562\"\n        ></path>\n        <path\n          fill=\"#376AA9\"\n          d=\"M 323.425781 262.785156 L 327.566406 262.785156 L 327.566406 262.386719 C 326.578125 262.269531 326.25 262.058594 326.25 261.332031 L 326.25 257.664062 C 326.25 255.816406 327.210938 254.65625 328.324219 254.65625 C 328.972656 254.65625 329.328125 255.09375 329.328125 255.597656 C 329.328125 255.953125 329.640625 256.289062 330.152344 256.289062 C 330.660156 256.289062 331.054688 255.894531 331.054688 255.328125 C 331.054688 254.796875 330.777344 253.753906 329.25 253.753906 C 327.835938 253.753906 326.933594 254.757812 326.660156 255.035156 C 326.386719 255.304688 326.25 255.128906 326.25 254.382812 C 326.25 253.894531 325.988281 253.695312 325.558594 253.792969 L 323.398438 254.285156 L 323.398438 254.65625 C 324.503906 254.542969 324.675781 254.914062 324.675781 255.777344 L 324.675781 261.332031 C 324.675781 262.058594 324.34375 262.269531 323.425781 262.386719 Z M 323.425781 262.785156\"\n        ></path>\n      </svg>\n      <!-- <div class=\"tui-text_h1 class logo-color tui-space_top-1\">Litto!</div> -->\n      <!-- <div class=\"tui-text_body-m tui-space_top- text-center\">\n        Where you can accomplish<br />goals and dreams\n      </div> -->\n    </div>\n  </div>\n\n  <div class=\"two-button big-top-space\">\n    <a routerLink=\"/login\">\n      <button tuiButton type=\"button\" appearance=\"secondary-custom\">\n        Log In\n      </button>\n    </a>\n    <a routerLink=\"/register\">\n      <button tuiButton type=\"button\" appearance=\"primary-custom\">\n        Register\n      </button>\n    </a>\n  </div>\n</div>\n");

/***/ }),

/***/ 72876:
/*!********************************************************************!*\
  !*** ./src/app/components/active-steps/active-steps.component.css ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3RpdmUtc3RlcHMuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 12104:
/*!**********************************************!*\
  !*** ./src/app/components/app.component.css ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".outer-container {\n  padding-left: 12.5vw;\n  padding-right: 12.5vw;\n  padding-top: 5vh;\n  align-self: center;\n  height: 100vh;\n  position: relative;\n}\n\n.expanded-img {\n  max-width: 100%;\n  height: auto;\n}\n\n.medium-img {\n  max-width: 50%;\n  height: auto;\n}\n\n.small-img {\n  max-width: 30%;\n  height: auto;\n}\n\n.center-children {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.center-children-row {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  align-items: center;\n}\n\n.spacy-children-row {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n}\n\n.right-children {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: end;\n}\n\n.left-children {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n}\n\n.two-button {\n  display: flex;\n  justify-content: space-between;\n}\n\n.button-big-space {\n  padding-bottom: 15vh;\n}\n\n.sub-page {\n  /* top: 0;\n  left: 0;\n  padding-left: 12.5vw;\n  padding-right: 12.5vw;\n  padding-top: 5vh;\n  padding-bottom: 5vh;\n  position: absolute;\n  display: grid;\n  align-content: space-between;\n  height: 90vh; */\n}\n\n.sub-page-compress {\n  /* top: 0;\n  left: 0;\n  padding-left: 12.5vw;\n  padding-right: 12.5vw;\n  padding-top: 5vh;\n  padding-bottom: 5vh;\n  position: absolute;\n  display: grid;\n  align-content: flex-start;\n  height: 90vh; */\n}\n\n.back-button {\n  position: absolute !important;\n  /* margin-left: -12.5vw; */\n}\n\n.absolute {\n  float: right;\n}\n\n.moving {\n  transform: translate(28px, 0);\n}\n\n.in-row {\n  white-space: nowrap; /* [1] */\n  overflow-x: auto; /* [2] */\n  overscroll-behavior-x: initial;\n  /* -webkit-overflow-scrolling: touch; [3] */\n}\n\n.elems {\n  display: inline-block;\n  text-align: center;\n  padding: 18px;\n  vertical-align: top;\n}\n\n.elems-tag {\n  display: inline-block;\n  text-align: center;\n  padding: 18px 0 18px 18px;\n  vertical-align: top;\n}\n\n.plans-show {\n  /* inline-size: 64px; */\n  white-space: normal;\n}\n\n.tabs {\n  position: fixed !important;\n  background-color: white;\n  z-index: 999;\n  width: 75vw;\n  left: 0;\n  bottom: 0;\n  padding-left: 12.5vw;\n  padding-right: 12.5vw;\n  box-shadow: 0px 0px 21px 9px rgba(0, 0, 0, 0.05) !important;\n  display: flex;\n  justify-content: space-between;\n  border-top: 1px solid gainsboro;\n}\n\n.tabs tui-underline {\n  top: 0;\n  height: 2px !important;\n  color: var(--prim-custom-dark);\n  width: 60px !important;\n  left: -16px;\n  border-radius: 0 0 1px 1px;\n}\n\n.tabs ._active {\n  color: var(--prim-custom-dark) !important;\n}\n\n._active .footer-icon > * {\n  stroke-width: 24;\n}\n\n.footer-icon {\n  width: 32;\n  height: 32;\n}\n\n.footer-icon > path,\nline,\ncircle {\n  stroke: currentColor !important;\n}\n\n.big-top-space {\n  margin-top: 60px;\n}\n\n.big-footer-space {\n  margin-top: 120px;\n}\n\n.sec-wrapper {\n  background: var(--sec-custom); /*var(--sec-custom-light);*/\n  color: var(--ter-custom);\n}\n\n.top-align {\n  align-self: flex-start;\n}\n\n.active-plans-island * {\n  margin: 0 !important;\n}\n\n.active-plans-island .spacy-children-row {\n  width: 100%;\n}\n\n.even-little-padding {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7Ozs7Ozs7OztpQkFTZTtBQUNqQjs7QUFFQTtFQUNFOzs7Ozs7Ozs7aUJBU2U7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsbUJBQW1CLEVBQUUsUUFBUTtFQUM3QixnQkFBZ0IsRUFBRSxRQUFRO0VBQzFCLDhCQUE4QjtFQUM5QiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztFQUNYLE9BQU87RUFDUCxTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiwyREFBMkQ7RUFDM0QsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxNQUFNO0VBQ04sc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7OztFQUdFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZCQUE2QixFQUFFLDJCQUEyQjtFQUMxRCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMTIuNXZ3O1xuICBwYWRkaW5nLXJpZ2h0OiAxMi41dnc7XG4gIHBhZGRpbmctdG9wOiA1dmg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZXhwYW5kZWQtaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5tZWRpdW0taW1nIHtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnNtYWxsLWltZyB7XG4gIG1heC13aWR0aDogMzAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jZW50ZXItY2hpbGRyZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNlbnRlci1jaGlsZHJlbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNwYWN5LWNoaWxkcmVuLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJpZ2h0LWNoaWxkcmVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG5cbi5sZWZ0LWNoaWxkcmVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cblxuLnR3by1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5idXR0b24tYmlnLXNwYWNlIHtcbiAgcGFkZGluZy1ib3R0b206IDE1dmg7XG59XG5cbi5zdWItcGFnZSB7XG4gIC8qIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZy1sZWZ0OiAxMi41dnc7XG4gIHBhZGRpbmctcmlnaHQ6IDEyLjV2dztcbiAgcGFkZGluZy10b3A6IDV2aDtcbiAgcGFkZGluZy1ib3R0b206IDV2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDkwdmg7ICovXG59XG5cbi5zdWItcGFnZS1jb21wcmVzcyB7XG4gIC8qIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZy1sZWZ0OiAxMi41dnc7XG4gIHBhZGRpbmctcmlnaHQ6IDEyLjV2dztcbiAgcGFkZGluZy10b3A6IDV2aDtcbiAgcGFkZGluZy1ib3R0b206IDV2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBoZWlnaHQ6IDkwdmg7ICovXG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAvKiBtYXJnaW4tbGVmdDogLTEyLjV2dzsgKi9cbn1cblxuLmFic29sdXRlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubW92aW5nIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjhweCwgMCk7XG59XG5cbi5pbi1yb3cge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvKiBbMV0gKi9cbiAgb3ZlcmZsb3cteDogYXV0bzsgLyogWzJdICovXG4gIG92ZXJzY3JvbGwtYmVoYXZpb3IteDogaW5pdGlhbDtcbiAgLyogLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoOyBbM10gKi9cbn1cblxuLmVsZW1zIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5lbGVtcy10YWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMThweCAwIDE4cHggMThweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLnBsYW5zLXNob3cge1xuICAvKiBpbmxpbmUtc2l6ZTogNjRweDsgKi9cbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLnRhYnMge1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgd2lkdGg6IDc1dnc7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAxMi41dnc7XG4gIHBhZGRpbmctcmlnaHQ6IDEyLjV2dztcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMXB4IDlweCByZ2JhKDAsIDAsIDAsIDAuMDUpICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdhaW5zYm9ybztcbn1cblxuLnRhYnMgdHVpLXVuZGVybGluZSB7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAycHggIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLXByaW0tY3VzdG9tLWRhcmspO1xuICB3aWR0aDogNjBweCAhaW1wb3J0YW50O1xuICBsZWZ0OiAtMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDFweCAxcHg7XG59XG5cbi50YWJzIC5fYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLXByaW0tY3VzdG9tLWRhcmspICFpbXBvcnRhbnQ7XG59XG5cbi5fYWN0aXZlIC5mb290ZXItaWNvbiA+ICoge1xuICBzdHJva2Utd2lkdGg6IDI0O1xufVxuXG4uZm9vdGVyLWljb24ge1xuICB3aWR0aDogMzI7XG4gIGhlaWdodDogMzI7XG59XG5cbi5mb290ZXItaWNvbiA+IHBhdGgsXG5saW5lLFxuY2lyY2xlIHtcbiAgc3Ryb2tlOiBjdXJyZW50Q29sb3IgIWltcG9ydGFudDtcbn1cblxuLmJpZy10b3Atc3BhY2Uge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4uYmlnLWZvb3Rlci1zcGFjZSB7XG4gIG1hcmdpbi10b3A6IDEyMHB4O1xufVxuXG4uc2VjLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWMtY3VzdG9tKTsgLyp2YXIoLS1zZWMtY3VzdG9tLWxpZ2h0KTsqL1xuICBjb2xvcjogdmFyKC0tdGVyLWN1c3RvbSk7XG59XG5cbi50b3AtYWxpZ24ge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4uYWN0aXZlLXBsYW5zLWlzbGFuZCAqIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5hY3RpdmUtcGxhbnMtaXNsYW5kIC5zcGFjeS1jaGlsZHJlbi1yb3cge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV2ZW4tbGl0dGxlLXBhZGRpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4iXX0= */";

/***/ }),

/***/ 28757:
/*!******************************************************************************!*\
  !*** ./src/app/components/create-plan-first/create-plan-first.component.css ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".floating-button {\n  position: absolute;\n  margin-left: calc(96px - 44px / 2);\n  margin-top: -96px;\n  top: inherit;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wbGFuLWZpcnN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2QiLCJmaWxlIjoiY3JlYXRlLXBsYW4tZmlyc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbG9hdGluZy1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDk2cHggLSA0NHB4IC8gMik7XG4gIG1hcmdpbi10b3A6IC05NnB4O1xuICB0b3A6IGluaGVyaXQ7XG59XG4iXX0= */";

/***/ }),

/***/ 35437:
/*!******************************************************************************!*\
  !*** ./src/app/components/display-interests/display-interests.component.css ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".wrapper1 {\n  display: grid;\n  grid-template-rows: auto;\n  grid-template-columns: repeat(3, 1fr);\n  grid-row-gap: 1em;\n  grid-column-gap: 1em;\n}\n\n.pre-trans {\n  transition: 0.2s linear all;\n  -webkit-transition: 0.2s linear all;\n}\n\n.back-button {\n  position: absolute !important;\n  margin-left: -12vw;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXktaW50ZXJlc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiZGlzcGxheS1pbnRlcmVzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyMSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ3JpZC1yb3ctZ2FwOiAxZW07XG4gIGdyaWQtY29sdW1uLWdhcDogMWVtO1xufVxuXG4ucHJlLXRyYW5zIHtcbiAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXIgYWxsO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgbGluZWFyIGFsbDtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAtMTJ2dztcbn1cbiJdfQ== */";

/***/ }),

/***/ 20097:
/*!**************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.css ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".center-children-top {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlci1jaGlsZHJlbi10b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXX0= */";

/***/ }),

/***/ 38867:
/*!****************************************************************!*\
  !*** ./src/app/components/injectables/back/back.component.css ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".back-button {\n  position: absolute !important;\n  margin-left: -7.75vw;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUE2QjtFQUM3QixvQkFBb0I7QUFDdEIiLCJmaWxlIjoiYmFjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAtNy43NXZ3O1xufVxuIl19 */";

/***/ }),

/***/ 25957:
/*!******************************************************************************!*\
  !*** ./src/app/components/injectables/footer-tabs/footer-tabs.component.css ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXItdGFicy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 17194:
/*!******************************************************************************!*\
  !*** ./src/app/components/injectables/plan-slider/plan-slider.component.css ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "/* .plan-slider.shadow-light:active {\n    box-shadow: none !important;\n} */\n.plan-slider{\n    width: 100px;\n    padding: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYW4tc2xpZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSDtJQUNJLFlBQVk7SUFDWix3QkFBd0I7QUFDNUIiLCJmaWxlIjoicGxhbi1zbGlkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5wbGFuLXNsaWRlci5zaGFkb3ctbGlnaHQ6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59ICovXG4ucGxhbi1zbGlkZXJ7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 57406:
/*!******************************************************************************!*\
  !*** ./src/app/components/injectables/search-item/search-item.component.css ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".search {\n  position: absolute !important;\n  height: 300px !important;\n  width: 90vw;\n  left: 0;\n  top: 10px;\n  padding-left: 5vw;\n  padding-right: 5vw;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxPQUFPO0VBQ1AsU0FBUztFQUNULGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic2VhcmNoLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogOTB2dztcbiAgbGVmdDogMDtcbiAgdG9wOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDV2dztcbiAgcGFkZGluZy1yaWdodDogNXZ3O1xufVxuIl19 */";

/***/ }),

/***/ 10085:
/*!********************************************************************************!*\
  !*** ./src/app/components/injectables/slider-steps/slider-steps.component.css ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbGlkZXItc3RlcHMuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 19305:
/*!****************************************************************!*\
  !*** ./src/app/components/login-page/login-page.component.css ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 56265:
/*!**********************************************************************!*\
  !*** ./src/app/components/plan-overview/plan-overview.component.css ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 65584:
/*!**********************************************************************!*\
  !*** ./src/app/components/register-page/register-page.component.css ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 33313:
/*!**************************************************************************!*\
  !*** ./src/app/components/register-second/register-second.component.css ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".floating-button {\n  position: absolute;\n  margin-left: 26px;\n}\n\n.avatar {\n  position: absolute;\n  margin-left: -48px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXNlY29uZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoicmVnaXN0ZXItc2Vjb25kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxvYXRpbmctYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMjZweDtcbn1cblxuLmF2YXRhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IC00OHB4O1xufVxuIl19 */";

/***/ }),

/***/ 67917:
/*!************************************************************************!*\
  !*** ./src/app/components/search-results/search-results.component.css ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".taggy {\n  background-color: rgba(55, 106, 169, 1);\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7RUFDdkMsV0FBVztBQUNiIiwiZmlsZSI6InNlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFnZ3kge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU1LCAxMDYsIDE2OSwgMSk7XG4gIGNvbG9yOiAjZmZmO1xufVxuIl19 */";

/***/ }),

/***/ 94752:
/*!**************************************************************************!*\
  !*** ./src/app/components/start-plan-date/start-plan-date.component.css ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".go-up {\n  margin-top: -12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LXBsYW4tZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InN0YXJ0LXBsYW4tZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdvLXVwIHtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG59XG4iXX0= */";

/***/ }),

/***/ 32170:
/*!**********************************************************************!*\
  !*** ./src/app/components/step-complete/step-complete.component.css ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGVwLWNvbXBsZXRlLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 83822:
/*!******************************************************************!*\
  !*** ./src/app/components/step-create/step-create.component.css ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".dropdown-button {\n  border-style: solid;\n  border-color: #0000ff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXAtY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InN0ZXAtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tYnV0dG9uIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMGZmO1xufVxuIl19 */";

/***/ }),

/***/ 65253:
/*!**************************************************************!*\
  !*** ./src/app/components/user-page/user-page.component.css ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 31846:
/*!********************************************************************!*\
  !*** ./src/app/components/welcome-page/welcome-page.component.css ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 14601:
/*!************************!*\
  !*** canvas (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 32767:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 28251:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 57677:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 1543:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 87324:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map