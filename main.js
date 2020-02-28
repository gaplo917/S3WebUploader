(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"d-flex main-container\"\n  [@fadeAnimation]=\"o.isActivated ? o.activatedRoute : ''\"\n  (dragstart)=\"disable($event)\"\n  (dragover)=\"disable($event)\"\n  (drop)=\"disable($event)\"\n>\n  <div class=\"side-nav-container\" ngResizable rzHandles=\"e\" style=\"width: 20%\">\n    <app-side-nav></app-side-nav>\n  </div>\n  <div class=\"router-container\">\n    <router-outlet #o=\"outlet\"></router-outlet>\n  </div>\n</div>\n<simple-notifications></simple-notifications>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%;\n  position: relative; }\n\n.side-nav-container {\n  height: 100%;\n  min-width: 20%;\n  max-width: 70%;\n  flex-shrink: 0;\n  border-right: 1px solid rgba(0, 0, 0, 0.1); }\n\n.router-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative; }\n\n.main-container {\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n\n/deep/ router-outlet ~ * {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9nYXBsbzkxNy9TM1dlYlVwbG9hZGVyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZO0VBQ1osY0FBYztFQUNkLGNBQWM7RUFDZCxjQUFjO0VBQ2QsMENBQTBDLEVBQUE7O0FBRzlDO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBVXBCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNpZGUtbmF2LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi13aWR0aDogMjAlO1xuICAgIG1heC13aWR0aDogNzAlO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnJvdXRlci1jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8vIHJvdXRlci1vdXRsZXQge1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgICBmbGV4LXNocmluazogMDtcbi8vICAgICBtaW4taGVpZ2h0OiAwO1xuLy8gfVxuXG4vZGVlcC8gcm91dGVyLW91dGxldH4qIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.animation */ "./src/app/router.animation.ts");
/* harmony import */ var _infrastructure_services_electron_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infrastructure/services/electron.service */ "./src/app/infrastructure/services/electron.service.ts");
/* harmony import */ var _aws_accounts_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aws-accounts/services/accounts.service */ "./src/app/aws-accounts/services/accounts.service.ts");
/* harmony import */ var _aws_s3_services_s3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aws-s3/services/s3.service */ "./src/app/aws-s3/services/s3.service.ts");
/* harmony import */ var _aws_s3_services_s3_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aws-s3/services/s3-notification.service */ "./src/app/aws-s3/services/s3-notification.service.ts");
/* harmony import */ var _request_tracking_services_request_tracking_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request-tracking/services/request-tracking.service */ "./src/app/request-tracking/services/request-tracking.service.ts");
/* harmony import */ var _job_view_job_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./job-view/job.service */ "./src/app/job-view/job.service.ts");
/* harmony import */ var _histories_services_histories_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./histories/services/histories.service */ "./src/app/histories/services/histories.service.ts");
/* harmony import */ var _aws_s3_services_request_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aws-s3/services/request-upload.service */ "./src/app/aws-s3/services/request-upload.service.ts");
/* harmony import */ var _infrastructure_services_updater_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./infrastructure/services/updater.service */ "./src/app/infrastructure/services/updater.service.ts");
/* harmony import */ var _infrastructure_services_analytics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./infrastructure/services/analytics.service */ "./src/app/infrastructure/services/analytics.service.ts");
/* harmony import */ var _services_accounts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/accounts */ "./src/app/services/accounts.ts");
/* harmony import */ var _services_aws__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/aws */ "./src/app/services/aws.ts");
/* harmony import */ var _services_history_storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/history-storage.service */ "./src/app/services/history-storage.service.ts");
/* harmony import */ var _services_job_manager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/job-manager */ "./src/app/services/job-manager.ts");
/* harmony import */ var _services_s3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/s3 */ "./src/app/services/s3.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AppComponent = /** @class */ (function () {
    function AppComponent(accounts, electron, s3, s3Noti, rt, jobs, histories, reqUpload, updater, analytics, eAccount, eAws, eHistoryStorage, eJobManager, eS3) {
        this.accounts = accounts;
        this.electron = electron;
        this.s3 = s3;
        this.s3Noti = s3Noti;
        this.rt = rt;
        this.jobs = jobs;
        this.histories = histories;
        this.reqUpload = reqUpload;
        this.updater = updater;
        this.analytics = analytics;
        this.eAccount = eAccount;
        this.eAws = eAws;
        this.eHistoryStorage = eHistoryStorage;
        this.eJobManager = eJobManager;
        this.eS3 = eS3;
        accounts.init();
        s3.init();
        s3Noti.init();
        rt.init();
        jobs.init();
        histories.init();
        reqUpload.init();
        updater.init();
        analytics.init();
        this.electron.send('Application-Initialize', {});
    }
    AppComponent.prototype.ngOnInit = function () {
        this.analytics.logEvent('Application', 'Initialize');
    };
    AppComponent.prototype.disable = function (event) {
        event.preventDefault();
        return false;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [_router_animation__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_aws_accounts_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"],
            _infrastructure_services_electron_service__WEBPACK_IMPORTED_MODULE_2__["ElectronService"],
            _aws_s3_services_s3_service__WEBPACK_IMPORTED_MODULE_4__["S3Service"],
            _aws_s3_services_s3_notification_service__WEBPACK_IMPORTED_MODULE_5__["S3NotificationService"],
            _request_tracking_services_request_tracking_service__WEBPACK_IMPORTED_MODULE_6__["RequestTrackingService"],
            _job_view_job_service__WEBPACK_IMPORTED_MODULE_7__["JobService"],
            _histories_services_histories_service__WEBPACK_IMPORTED_MODULE_8__["HistoriesService"],
            _aws_s3_services_request_upload_service__WEBPACK_IMPORTED_MODULE_9__["RequestUploadService"],
            _infrastructure_services_updater_service__WEBPACK_IMPORTED_MODULE_10__["UpdaterService"],
            _infrastructure_services_analytics_service__WEBPACK_IMPORTED_MODULE_11__["AnalyticsService"],
            _services_accounts__WEBPACK_IMPORTED_MODULE_12__["ElectronAccountsService"],
            _services_aws__WEBPACK_IMPORTED_MODULE_13__["ElectronAWSService"],
            _services_history_storage_service__WEBPACK_IMPORTED_MODULE_14__["ElectronHistoryStorage"],
            _services_job_manager__WEBPACK_IMPORTED_MODULE_15__["ElectronJobManager"],
            _services_s3__WEBPACK_IMPORTED_MODULE_16__["ElectronS3Service"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./infrastructure/infrastructure.module */ "./src/app/infrastructure/infrastructure.module.ts");
/* harmony import */ var angular2_draggable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-draggable */ "./node_modules/angular2-draggable/fesm5/angular2-draggable.js");
/* harmony import */ var _job_view_job_view_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./job-view/job-view.module */ "./src/app/job-view/job-view.module.ts");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "./src/app/side-nav/side-nav.component.ts");
/* harmony import */ var _tree_view_tree_view_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tree-view/tree-view.module */ "./src/app/tree-view/tree-view.module.ts");
/* harmony import */ var _aws_accounts_aws_accounts_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./aws-accounts/aws-accounts.module */ "./src/app/aws-accounts/aws-accounts.module.ts");
/* harmony import */ var _side_header_side_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./side-header/side-header.component */ "./src/app/side-header/side-header.component.ts");
/* harmony import */ var _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./welcome-page/welcome-page.component */ "./src/app/welcome-page/welcome-page.component.ts");
/* harmony import */ var _settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./settings-page/settings-page.component */ "./src/app/settings-page/settings-page.component.ts");
/* harmony import */ var _request_tracking_request_tracking_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./request-tracking/request-tracking.module */ "./src/app/request-tracking/request-tracking.module.ts");
/* harmony import */ var _folder_browser_folder_browser_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./folder-browser/folder-browser.module */ "./src/app/folder-browser/folder-browser.module.ts");
/* harmony import */ var _folder_browser_folder_browser_folder_browser_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./folder-browser/folder-browser/folder-browser.component */ "./src/app/folder-browser/folder-browser/folder-browser.component.ts");
/* harmony import */ var _histories_histories_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./histories/histories.module */ "./src/app/histories/histories.module.ts");
/* harmony import */ var _aws_s3_aws_s3_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./aws-s3/aws-s3.module */ "./src/app/aws-s3/aws-s3.module.ts");
/* harmony import */ var _infrastructure_analytics_exceptions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./infrastructure/analytics-exceptions */ "./src/app/infrastructure/analytics-exceptions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var routes = [
    { path: 'home', component: _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_15__["WelcomePageComponent"] },
    { path: 'settings', component: _settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_16__["SettingsPageComponent"] },
    {
        path: 'browse',
        children: [
            {
                path: '**',
                component: _folder_browser_folder_browser_folder_browser_component__WEBPACK_IMPORTED_MODULE_19__["FolderBrowserComponent"],
            },
        ],
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_11__["SideNavComponent"], _side_header_side_header_component__WEBPACK_IMPORTED_MODULE_14__["SideHeaderComponent"], _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_15__["WelcomePageComponent"], _settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_16__["SettingsPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: true, useHash: true }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["SimpleNotificationsModule"].forRoot({
                    position: ['top', 'right'],
                    timeOut: 0,
                    // showProgressBar: false,
                    icons: {
                        // tslint:disable-next-line:max-line-length
                        success: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.7 5.3c-0.4-0.4-1-0.4-1.4 0l-10.3 10.3-4.3-4.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5 5c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l11-11c0.4-0.4 0.4-1 0-1.4z"></path></svg>',
                        // tslint:disable-next-line:max-line-length
                        error: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"></path></svg>',
                        // tslint:disable-next-line:max-line-length
                        alert: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM12 21c-5 0-9-4-9-9s4-9 9-9c5 0 9 4 9 9s-4 9-9 9z"></path><path d="M12 7c-0.6 0-1 0.4-1 1v4c0 0.6 0.4 1 1 1s1-0.4 1-1v-4c0-0.6-0.4-1-1-1z"></path><path d="M11.3 15.3c-0.2 0.2-0.3 0.4-0.3 0.7s0.1 0.5 0.3 0.7c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.2-0.2 0.3-0.5 0.3-0.7s-0.1-0.5-0.3-0.7c-0.4-0.4-1-0.4-1.4 0z"></path></svg>',
                        // tslint:disable-next-line:max-line-length
                        info: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM12 21c-5 0-9-4-9-9s4-9 9-9c5 0 9 4 9 9s-4 9-9 9z"></path><path d="M12 11c-0.6 0-1 0.4-1 1v4c0 0.6 0.4 1 1 1s1-0.4 1-1v-4c0-0.6-0.4-1-1-1z"></path><path d="M11.3 7.3c-0.2 0.2-0.3 0.4-0.3 0.7s0.1 0.5 0.3 0.7c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.2-0.2 0.3-0.4 0.3-0.7s-0.1-0.5-0.3-0.7c-0.4-0.4-1-0.4-1.4 0z"></path></svg>',
                        // tslint:disable-next-line:max-line-length
                        warn: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 17.5l-8.4-14.2c-0.4-0.7-1.1-1.2-1.9-1.4s-1.6-0.1-2.3 0.3c-0.4 0.2-0.8 0.6-1 1 0 0 0 0 0 0l-8.4 14.3c-0.8 1.4-0.3 3.3 1.1 4.1 0.4 0.3 0.9 0.4 1.4 0.4h17c0.8 0 1.6-0.3 2.1-0.9 0.6-0.6 0.9-1.3 0.9-2.1-0.1-0.5-0.2-1.1-0.5-1.5zM21.2 19.7c-0.2 0.2-0.5 0.3-0.7 0.3h-17c-0.2 0-0.3 0-0.5-0.1-0.5-0.3-0.6-0.9-0.4-1.4l8.5-14.1c0.1-0.1 0.2-0.3 0.3-0.3 0.5-0.3 1.1-0.1 1.4 0.3l8.5 14.1c0.1 0.1 0.1 0.3 0.1 0.5 0.1 0.3-0.1 0.5-0.2 0.7z"></path><path d="M12 8c-0.6 0-1 0.4-1 1v4c0 0.6 0.4 1 1 1s1-0.4 1-1v-4c0-0.6-0.4-1-1-1z"></path><path d="M11.3 16.3c-0.2 0.2-0.3 0.4-0.3 0.7s0.1 0.5 0.3 0.7c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.2-0.2 0.3-0.5 0.3-0.7s-0.1-0.5-0.3-0.7c-0.4-0.4-1-0.4-1.4 0z"></path></svg>',
                    },
                    showProgressBar: false,
                    animate: angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationAnimationType"].Fade,
                    theClass: 'top-noti',
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                angular2_draggable__WEBPACK_IMPORTED_MODULE_9__["AngularDraggableModule"],
                _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_8__["InfrastructureModule"],
                _tree_view_tree_view_module__WEBPACK_IMPORTED_MODULE_12__["TreeViewModule"],
                _job_view_job_view_module__WEBPACK_IMPORTED_MODULE_10__["JobViewModule"],
                _aws_accounts_aws_accounts_module__WEBPACK_IMPORTED_MODULE_13__["AwsAccountsModule"],
                _aws_s3_aws_s3_module__WEBPACK_IMPORTED_MODULE_21__["AwsS3Module"],
                _request_tracking_request_tracking_module__WEBPACK_IMPORTED_MODULE_17__["RequestTrackingModule"],
                _folder_browser_folder_browser_module__WEBPACK_IMPORTED_MODULE_18__["FolderBrowserModule"],
                _histories_histories_module__WEBPACK_IMPORTED_MODULE_20__["HistoriesModule"],
            ],
            providers: [
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"],
                    useClass: _infrastructure_analytics_exceptions__WEBPACK_IMPORTED_MODULE_22__["AnalyticsExceptionHandler"],
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/aws-accounts/add-account/add-account.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/aws-accounts/add-account/add-account.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"screen-container d-flex justify-content-center align-items-center\">\n  <div class=\"card-container\">\n    <div class=\"card text-center\" style=\"width: 70rem;\">\n      <div class=\"card-body smooth\">\n        <h2 class=\"card-title\">Add Account</h2>\n        <div class=\"close-container\">\n          <a class=\"close-btn\" (click)=\"close()\">\n            <i class=\"ion-ios-close\"></i>\n          </a>\n        </div>\n        <form class=\"text-left\" name=\"createForm\">\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <div\n                class=\"from-group\"\n                [class.has-success]=\"!loading && tested && valid\"\n                [class.has-danger]=\"!loading && tested && !valid\"\n              >\n                <input\n                  type=\"text\"\n                  name=\"account-key\"\n                  class=\"form-control form-control-alternative\"\n                  [class.is-valid]=\"!loading && tested && valid\"\n                  [class.is-invalid]=\"!loading && tested && !valid\"\n                  placeholder=\"Access Key ID\"\n                  [(ngModel)]=\"key\"\n                  (input)=\"onTextChange()\"\n                />\n                <input\n                  type=\"password\"\n                  name=\"account-secret\"\n                  class=\"form-control form-control-alternative\"\n                  [class.is-valid]=\"!loading && tested && valid\"\n                  [class.is-invalid]=\"!loading && tested && !valid\"\n                  placeholder=\"Acces Key Secret\"\n                  [(ngModel)]=\"secret\"\n                  (input)=\"onTextChange()\"\n                />\n                <input\n                  type=\"text\"\n                  name=\"url-name\"\n                  class=\"form-control form-control-alternative mt-1\"\n                  [class.is-valid]=\"!loading && tested && valid && url\"\n                  [class.is-invalid]=\"!loading && tested && !valid && url\"\n                  placeholder=\"Endpoint that is points to AWS S3-compatible service\"\n                  [(ngModel)]=\"url\"\n                  (input)=\"onTextChange()\"\n                />\n                <small class=\"form-text text-muted\">\n                  Having trouble on getting a running s3 service?\n                  <a (click)=\"fillInMinIODemo()\" href=\"#\">Try a minIO official demo account</a>\n                </small>\n                <div class=\"valid-feedback\">\n                  Connection Successful\n                </div>\n                <div class=\"invalid-feedback\">\n                  Connection Failed\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n        <div *ngIf=\"!loading && !valid\" @ngIfAnimation>\n          <button\n            id=\"test-btn\"\n            class=\"btn btn-info\"\n            [class.disabled]=\"key === '' && secret === ''\"\n            (click)=\"testAccount()\"\n          >\n            Add Account\n          </button>\n        </div>\n        <app-spinner *ngIf=\"loading\" @ngIfAnimation></app-spinner>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/aws-accounts/add-account/add-account.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/aws-accounts/add-account/add-account.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  margin: 8px 0; }\n\na {\n  color: orange;\n  text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9nYXBsbzkxNy9TM1dlYlVwbG9hZGVyL3NyYy9hcHAvYXdzLWFjY291bnRzL2FkZC1hY2NvdW50L2FkZC1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXdzLWFjY291bnRzL2FkZC1hY2NvdW50L2FkZC1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbnB1dCB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbmEge1xuICBjb2xvcjogb3JhbmdlO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/aws-accounts/add-account/add-account.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/aws-accounts/add-account/add-account.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAccountComponent", function() { return AddAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_accounts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/accounts.service */ "./src/app/aws-accounts/services/accounts.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var src_app_infrastructure_subscription_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/infrastructure/subscription-component */ "./src/app/infrastructure/subscription-component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddAccountComponent = /** @class */ (function (_super) {
    __extends(AddAccountComponent, _super);
    function AddAccountComponent(accounts) {
        var _this = _super.call(this) || this;
        _this.accounts = accounts;
        _this.toClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.loading = false;
        _this.key = '';
        _this.secret = '';
        _this.url = '';
        _this.valid = false;
        _this.tested = false;
        return _this;
    }
    AddAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recordSubscription(this.accounts.AccountTestResult.subscribe(function (_) {
            if (_.account.id === _this.key && _.account.secret === _this.secret) {
                _this.tested = true;
                _this.valid = _.success;
                _this.loading = false;
                if (_this.valid) {
                    _this.addAccount();
                }
            }
        }));
    };
    AddAccountComponent.prototype.close = function () {
        this.toClose.emit();
    };
    AddAccountComponent.prototype.testAccount = function () {
        if (this.key) {
            this.loading = true;
            this.accounts.testAccount({
                id: this.key,
                secret: this.secret,
                url: this.url,
            });
        }
    };
    AddAccountComponent.prototype.onTextChange = function () {
        this.tested = false;
        this.valid = false;
    };
    AddAccountComponent.prototype.addAccount = function () {
        this.accounts.addAccount({
            id: this.key,
            secret: this.secret,
            url: this.url,
        });
        this.toClose.emit();
    };
    AddAccountComponent.prototype.fillInMinIODemo = function () {
        this.key = 'Q3AM3UQ867SPQQA43P2F';
        this.secret = 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG';
        this.url = 'https://play.minio.io/';
    };
    AddAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-account',
            template: __webpack_require__(/*! ./add-account.component.html */ "./src/app/aws-accounts/add-account/add-account.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('ngIfAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':self', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('300ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })]))]), { optional: true }),
                    ]),
                ]),
            ],
            styles: [__webpack_require__(/*! ../../infrastructure/prompt.scss */ "./src/app/infrastructure/prompt.scss"), __webpack_require__(/*! ./add-account.component.scss */ "./src/app/aws-accounts/add-account/add-account.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_accounts_service__WEBPACK_IMPORTED_MODULE_1__["AccountsService"]])
    ], AddAccountComponent);
    return AddAccountComponent;
}(src_app_infrastructure_subscription_component__WEBPACK_IMPORTED_MODULE_3__["SubscriptionComponent"]));



/***/ }),

/***/ "./src/app/aws-accounts/aws-accounts.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/aws-accounts/aws-accounts.module.ts ***!
  \*****************************************************/
/*! exports provided: AwsAccountsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwsAccountsModule", function() { return AwsAccountsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../infrastructure/infrastructure.module */ "./src/app/infrastructure/infrastructure.module.ts");
/* harmony import */ var _add_account_add_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-account/add-account.component */ "./src/app/aws-accounts/add-account/add-account.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AwsAccountsModule = /** @class */ (function () {
    function AwsAccountsModule() {
    }
    AwsAccountsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_2__["InfrastructureModule"]],
            declarations: [_add_account_add_account_component__WEBPACK_IMPORTED_MODULE_3__["AddAccountComponent"]],
            exports: [_add_account_add_account_component__WEBPACK_IMPORTED_MODULE_3__["AddAccountComponent"]],
            entryComponents: [_add_account_add_account_component__WEBPACK_IMPORTED_MODULE_3__["AddAccountComponent"]],
        })
    ], AwsAccountsModule);
    return AwsAccountsModule;
}());



/***/ }),

/***/ "./src/app/aws-accounts/services/accounts.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/aws-accounts/services/accounts.service.ts ***!
  \***********************************************************/
/*! exports provided: AccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsService", function() { return AccountsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_infrastructure_services_electron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/infrastructure/services/electron.service */ "./src/app/infrastructure/services/electron.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountsService = /** @class */ (function () {
    function AccountsService(electron) {
        this.electron = electron;
        this.AccountTestResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.InitializingAccount = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._accounts = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._validAccounts = [];
        this.Accounts = this._accounts.asObservable();
    }
    AccountsService.prototype.init = function () {
        var _this = this;
        this.electron.onCD('Settings-SettingsChanged', function (event, arg) {
            // 0.2.0: Settings accounts in settings are deprecated, convert legacy accounts to accounts service
            arg.accounts.forEach(function (a) {
                _this.addAccount(a);
            });
        });
        this.electron.onCD('Accounts-AccountAdded', function (event, arg) {
            _this.electron.send('AWS-InitAccount', arg);
        });
        this.electron.onCD('Accounts-AccountsLoaded', function (event, arg) {
            arg.forEach(function (acc) {
                _this.electron.send('AWS-InitAccount', acc);
            });
        });
        this.electron.onCD('AWS-AccountInitialized', function (event, arg) {
            _this._validAccounts.push(arg);
            _this._accounts.next(_this._validAccounts);
        });
        this.electron.onCD('AWS-CredentialFound', function (event, arg) {
            _this.AccountTestResult.emit({
                account: arg,
                success: true,
            });
        });
        this.electron.onCD('AWS-CredentialNotFound', function (event, arg) {
            _this.AccountTestResult.emit({
                account: arg,
                success: false,
            });
        });
    };
    AccountsService.prototype.testAccount = function (account) {
        this.electron.send('AWS-TestAccount', account);
    };
    AccountsService.prototype.addAccount = function (account) {
        this.electron.send('Accounts-AddAccount', account);
    };
    AccountsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [src_app_infrastructure_services_electron_service__WEBPACK_IMPORTED_MODULE_1__["ElectronService"]])
    ], AccountsService);
    return AccountsService;
}());



/***/ }),

/***/ "./src/app/aws-s3/aws-s3.module.ts":
/*!*****************************************!*\
  !*** ./src/app/aws-s3/aws-s3.module.ts ***!
  \*****************************************/
/*! exports provided: AwsS3Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwsS3Module", function() { return AwsS3Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../infrastructure/infrastructure.module */ "./src/app/infrastructure/infrastructure.module.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _confirm_upload_confirm_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirm-upload/confirm-upload.component */ "./src/app/aws-s3/confirm-upload/confirm-upload.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AwsS3Module = /** @class */ (function () {
    function AwsS3Module() {
    }
    AwsS3Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_2__["InfrastructureModule"], angular2_notifications__WEBPACK_IMPORTED_MODULE_3__["SimpleNotificationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
            declarations: [_confirm_upload_confirm_upload_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmUploadComponent"]],
            entryComponents: [_confirm_upload_confirm_upload_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmUploadComponent"]],
        })
    ], AwsS3Module);
    return AwsS3Module;
}());



/***/ }),

/***/ "./src/app/aws-s3/confirm-upload/confirm-upload.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/aws-s3/confirm-upload/confirm-upload.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"screen-container d-flex justify-content-center align-items-center\">\n  <div class=\"card-container\">\n    <div class=\"card text-center\" style=\"width: 70rem;\">\n      <div class=\"card-body smooth\">\n        <h2 class=\"card-title\">Confirm Upload</h2>\n        <h5 class=\"text-muted\">to: {{ location() }}</h5>\n        <div class=\"close-container\">\n          <a class=\"close-btn\" (click)=\"close()\">\n            <i class=\"ion-ios-close\"></i>\n          </a>\n        </div>\n        <form class=\"text-left p-1\" name=\"upload-form\" id=\"upload-form\">\n          <div class=\"upload-items p-2\">\n            <div class=\"row mb-2\" *ngFor=\"let item of Items; let index = index\">\n              <div class=\"col-12\">\n                <div class=\"from-group\" [class.has-success]=\"false\" [class.has-danger]=\"false\">\n                  <h4 class=\"form-text text-muted m-0\">\n                    <i class=\"ion-ios-document\"></i>\n                    {{ item.originalName }} upload as\n                  </h4>\n                  <div class=\"input-group\">\n                    <input\n                      type=\"text\"\n                      name=\"account-name-{{ index }}\"\n                      class=\"form-control\"\n                      [class.is-valid]=\"false\"\n                      [class.is-invalid]=\"false\"\n                      placeholder=\"New File Name\"\n                      [(ngModel)]=\"Items[index].newName\"\n                      (input)=\"onTextChange()\"\n                    />\n                    <div class=\"input-group-append\">\n                      <button class=\"btn btn-outline-danger\" type=\"button\" (click)=\"removeItem(item)\">\n                        <i class=\"ion-ios-trash\"></i>\n                      </button>\n                    </div>\n                  </div>\n                  <div class=\"invalid-feedback\">\n                    Name invalid\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row mt-1\">\n            <div class=\"col-12\">\n              <div\n                style=\"display: inline-block\"\n                appTooltip\n                tooltipTitle=\"You can change this later in the settings page\"\n                tooltipPlacement=\"top\"\n              >\n                <app-checkbox [(checkedValue)]=\"promptSetting\" (checkedValueChange)=\"changePromptSetting($event)\">\n                  Ask for confirmation on upload\n                </app-checkbox>\n              </div>\n            </div>\n          </div>\n          <div class=\"row mt-3\">\n            <div class=\"col-12\">\n              <button class=\"btn btn-primary\" [class.disabled]=\"!isValid\" (click)=\"upload()\">Upload</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/aws-s3/confirm-upload/confirm-upload.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/aws-s3/confirm-upload/confirm-upload.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-items {\n  max-height: 500px;\n  overflow-y: auto;\n  overflow-x: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9nYXBsbzkxNy9TM1dlYlVwbG9hZGVyL3NyYy9hcHAvYXdzLXMzL2NvbmZpcm0tdXBsb2FkL2NvbmZpcm0tdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F3cy1zMy9jb25maXJtLXVwbG9hZC9jb25maXJtLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWQtaXRlbXMge1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/aws-s3/confirm-upload/confirm-upload.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/aws-s3/confirm-upload/confirm-upload.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmUploadComponent", function() { return ConfirmUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_s3_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/s3.service */ "./src/app/aws-s3/services/s3.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmUploadComponent = /** @class */ (function () {
    function ConfirmUploadComponent(s3) {
        this.s3 = s3;
        this.isValid = true;
        this.bucket = '';
        this.prefix = '';
        this.promptSetting = true;
        this.Items = [];
        this.toClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ConfirmUploadComponent.prototype.ngOnInit = function () { };
    ConfirmUploadComponent.prototype.close = function () {
        this.toClose.emit();
    };
    ConfirmUploadComponent.prototype.upload = function () {
        var _this = this;
        if (this.account && this.bucket) {
            var files = this.Items.map(function (_) {
                return {
                    filePath: _.path,
                    newPath: _this.prefix + _.newName,
                    file: _.file,
                };
            });
            this.s3.requestBulkUpload(this.account, this.bucket, this.prefix, files);
        }
        this.toClose.emit();
    };
    ConfirmUploadComponent.prototype.removeItem = function (item) {
        this.Items.splice(this.Items.indexOf(item), 1);
    };
    ConfirmUploadComponent.prototype.location = function () {
        return [this.account && this.account.url, this.bucket, this.prefix].join('/');
    };
    ConfirmUploadComponent.prototype.onTextChange = function () {
        var _this = this;
        if (this.Items.length === 0) {
            this.isValid = false;
        }
        else {
            this.Items.forEach(function (it) {
                if (!it.newName) {
                    _this.isValid = false;
                }
                else if (_this.Items.filter(function (_) { return _.newName === it.newName; }).length > 1) {
                    _this.isValid = false;
                }
            });
        }
    };
    ConfirmUploadComponent.prototype.changePromptSetting = function (val) {
        this.s3.changeUploadPromptSetting(val);
    };
    ConfirmUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-upload',
            template: __webpack_require__(/*! ./confirm-upload.component.html */ "./src/app/aws-s3/confirm-upload/confirm-upload.component.html"),
            styles: [__webpack_require__(/*! ../../infrastructure/prompt.scss */ "./src/app/infrastructure/prompt.scss"), __webpack_require__(/*! ./confirm-upload.component.scss */ "./src/app/aws-s3/confirm-upload/confirm-upload.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_s3_service__WEBPACK_IMPORTED_MODULE_1__["S3Service"]])
    ], ConfirmUploadComponent);
    return ConfirmUploadComponent;
}());



/***/ }),

/***/ "./src/app/aws-s3/services/request-upload.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/aws-s3/services/request-upload.service.ts ***!
  \***********************************************************/
/*! exports provided: RequestUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestUploadService", function() { return RequestUploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_infrastructure_services_dom_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/infrastructure/services/dom.service */ "./src/app/infrastructure/services/dom.service.ts");
/* harmony import */ var _confirm_upload_confirm_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirm-upload/confirm-upload.component */ "./src/app/aws-s3/confirm-upload/confirm-upload.component.ts");
/* harmony import */ var src_app_infrastructure_services_electron_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/infrastructure/services/electron.service */ "./src/app/infrastructure/services/electron.service.ts");
/* harmony import */ var _s3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./s3.service */ "./src/app/aws-s3/services/s3.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequestUploadService = /** @class */ (function () {
    function RequestUploadService(dom, s3, electron) {
        this.dom = dom;
        this.s3 = s3;
        this.electron = electron;
        this.toPrompt = true;
    }
    RequestUploadService.prototype.init = function () {
        var _this = this;
        this.electron.onCD('Settings-SettingsChanged', function (event, arg) {
            _this.toPrompt = arg['prompt-upload'];
        });
    };
    RequestUploadService.prototype.requestUpload = function (account, bucket, prefix, items) {
        if (this.toPrompt) {
            var comp_1 = this.dom.appendComponentToBody(_confirm_upload_confirm_upload_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmUploadComponent"]);
            comp_1.instance.account = account;
            comp_1.instance.bucket = bucket;
            comp_1.instance.prefix = prefix;
            comp_1.instance.Items = items;
            comp_1.instance.promptSetting = this.toPrompt;
            comp_1.instance.toClose.subscribe(function (_) {
                comp_1.destroy();
            });
        }
        else {
            var files = items.map(function (_) {
                return {
                    filePath: _.path,
                    newPath: prefix + _.newName,
                    file: _.file,
                };
            });
            this.s3.requestBulkUpload(account, bucket, prefix, files);
        }
    };
    RequestUploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [src_app_infrastructure_services_dom_service__WEBPACK_IMPORTED_MODULE_1__["DomService"], _s3_service__WEBPACK_IMPORTED_MODULE_4__["S3Service"], src_app_infrastructure_services_electron_service__WEBPACK_IMPORTED_MODULE_3__["ElectronService"]])
    ], RequestUploadService);
    return RequestUploadService;
}());



/***/ }),

/***/ "./src/app/aws-s3/services/s3-notification.service.ts":
/*!************************************************************!*\
  !*** ./src/app/aws-s3/services/s3-notification.service.ts ***!
  \************************************************************/
/*! exports provided: S3NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S3NotificationService", function() { return S3NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_infrastructure_services_electron_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/infrastructure/services/electron.service */ "./src/app/infrastructure/services/electron.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var S3NotificationService = /** @class */ (function () {
    function S3NotificationService(electron, noti) {
        this.electron = electron;
        this.noti = noti;
    }
    S3NotificationService.prototype.init = function () {
        var _this = this;
        this.electron.onCD('S3-OperationFailed', function (event, arg) {
            _this.noti.error('Operation Failed', arg.error.message);
        });
        this.electron.onCD('S3-LocationNotFound', function (event, arg) {
            _this.noti.error('Location Not Found', "Cannot find location " + arg.path + ". You need to specify a download path under Settings");
        });
    };
    S3NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [src_app_infrastructure_services_electron_service__WEBPACK_IMPORTED_MODULE_2__["ElectronService"], angular2_notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationsService"]])
    ], S3NotificationService);
    return S3NotificationService;
}());



/***/ }),

/***/ "./src/app/aws-s3/services/s3.service.ts":
/*!***********************************************!*\
  !*** ./src/app/aws-s3/services/s3.service.ts ***!
  \***********************************************/
/*! exports provided: S3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S3Service", function() { return S3Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_infrastructure_services_electron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/infrastructure/services/electron.service */ "./src/app/infrastructure/services/electron.service.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_infrastructure_services_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/infrastructure/services/analytics.service */ "./src/app/infrastructure/services/analytics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var S3Service = /** @class */ (function () {
    function S3Service(electron, analytics) {
        this.electron = electron;
        this.analytics = analytics;
        this.RefreshingObjects = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ItemsEnumerated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ItemAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._cachedItems = {};
        this._cachedAccounts = {};
        this._downloadPath = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.DownloadPath = this._downloadPath.asObservable();
    }
    S3Service.prototype.init = function () {
        var _this = this;
        this.electron.onCD('S3-BucketsListed', function (event, arg) {
            var buckets = [];
            arg.buckets.forEach(function (b) {
                buckets.push({
                    type: 'bucket',
                    name: b.Name,
                });
            });
            _this.ItemsEnumerated.emit({
                account: arg.account,
                parents: [arg.account.id],
                items: buckets,
            });
        });
        this.electron.onCD('S3-ObjectListed', function (event, arg) {
            var items = [];
            if (arg.objects) {
                items = arg.objects.map(function (_) {
                    return {
                        name: _.Key,
                        type: 'file',
                        size: _.Size,
                        Etag: _.ETag,
                        LastModified: _.LastModified,
                        Metadata: _.Metadata,
                        ContentType: _.ContentType,
                        StorageClass: _.StorageClass,
                    };
                });
            }
            if (arg.folders) {
                items = items.concat(arg.folders.map(function (_) {
                    return {
                        type: 'folder',
                        name: _.Prefix.substring(0, _.Prefix.length - 1)
                            .split('/')
                            .pop(),
                        Etag: _.ETag,
                        LastModified: _.LastModified,
                        Metadata: _.Metadata,
                        ContentType: _.ContentType,
                        StorageClass: _.StorageClass,
                    };
                }));
            }
            _this._cachedItems[arg.parents.join('/')] = items;
            _this._cachedAccounts[arg.parents[0]] = arg.account;
            _this.ItemsEnumerated.emit({
                account: arg.account,
                parents: arg.parents,
                items: items,
            });
        });
        this.electron.onCD('S3-OperationFailed', function (event, arg) {
            _this.ItemsEnumerated.emit({
                account: arg.account,
                parents: arg.parents,
                items: [],
            });
        });
        this.electron.onCD('S3-UploadSuccessful', function (event, arg) { });
        this.electron.onCD('S3-BulkUploadCompleted', function (event, arg) {
            var params = _this.getS3Parameters(arg.parents);
            _this.listObjects(arg.account, params.bucket, params.prefix);
        });
        this.electron.onCD('S3-BulkUploadFailed', function (event, arg) {
            var params = _this.getS3Parameters(arg.parents);
            _this.listObjects(arg.account, params.bucket, params.prefix);
        });
        this.electron.onCD('Settings-SettingsChanged', function (event, arg) {
            _this._downloadPath.next(arg['download-path']);
        });
        this.electron.onCD('S3-ListingObjects', function (event, arg) {
            _this.RefreshingObjects.emit(arg);
        });
    };
    S3Service.prototype.getCachedItems = function (key) {
        var items = this._cachedItems[key];
        if (items) {
            return items;
        }
        else {
            return [];
        }
    };
    S3Service.prototype.getCachedAccount = function (key) {
        var acc = this._cachedAccounts[key];
        return acc;
    };
    S3Service.prototype.listBuckets = function (account) {
        this.electron.send('S3-ListBuckets', account);
    };
    S3Service.prototype.listObjects = function (account, bucket, prefix) {
        if (prefix === void 0) { prefix = ''; }
        this.electron.send('S3-ListObjects', { account: account, bucket: bucket, prefix: prefix });
    };
    S3Service.prototype.requestDownload = function (account, bucket, key) {
        var id = uuid__WEBPACK_IMPORTED_MODULE_2__["v4"]();
        this.electron.send('S3-RequestDownload', {
            jobID: id,
            account: account,
            bucket: bucket,
            key: key,
            saveTo: this._downloadPath.value,
        });
        this.analytics.logEvent('S3', 'RequestDownload');
        return id.toString();
    };
    S3Service.prototype.requestBulkUpload = function (account, bucket, prefix, items) {
        var files = items.map(function (item) {
            var id = uuid__WEBPACK_IMPORTED_MODULE_2__["v4"]();
            return {
                account: account,
                bucket: bucket,
                filePath: item.filePath,
                newPath: item.newPath,
                jobID: id,
                file: item.file,
            };
        });
        this.electron.send('S3-RequestBulkUpload', {
            files: files,
            parents: [account.id, bucket].concat(prefix.split('/')),
        });
        this.analytics.logEvent('S3', 'RequestBulkUpload');
    };
    S3Service.prototype.browseDownloadPath = function () {
        this.electron.send('Settings-BrowseDownloadPath', {});
    };
    S3Service.prototype.resetDownloadPath = function () {
        this.electron.send('Settings-ResetDownloadPath', {});
    };
    S3Service.prototype.changeUploadPromptSetting = function (val) {
        this.analytics.logEvent('S3', 'ChangeUploadPromptSetting : ' + ("" + val));
        this.electron.send('Settings-Set', { key: 'prompt-upload', value: val });
    };
    S3Service.prototype.getS3Parameters = function (parents) {
        if (parents.length < 2) {
            return null;
        }
        var account = parents[0];
        var bucket = parents[1];
        var prefix = parents.slice(2, parents.length).join('/');
        return { account: account, bucket: bucket, prefix: prefix ? prefix + '/' : '' };
    };
    S3Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [src_app_infrastructure_services_electron_service__WEBPACK_IMPORTED_MODULE_1__["ElectronService"], src_app_infrastructure_services_analytics_service__WEBPACK_IMPORTED_MODULE_4__["AnalyticsService"]])
    ], S3Service);
    return S3Service;
}());



/***/ }),

/***/ "./src/app/aws-s3/upload-item.ts":
/*!***************************************!*\
  !*** ./src/app/aws-s3/upload-item.ts ***!
  \***************************************/
/*! exports provided: UploadItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadItem", function() { return UploadItem; });
/* eslint-disable @typescript-eslint/restrict-plus-operands */
var UploadItem = /** @class */ (function () {
    function UploadItem(file, path) {
        this.originalName = '';
        this.newName = '';
        this.path = '';
        this.file = file;
        this.newName = path + file.name;
        this.originalName = path + file.name;
        this.path = file.path;
    }
    return UploadItem;
}());



/***/ }),

/***/ "./src/app/collectfiles.ts":
/*!*********************************!*\
  !*** ./src/app/collectfiles.ts ***!
  \*********************************/
/*! exports provided: collectFiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectFiles", function() { return collectFiles; });
/* harmony import */ var _aws_s3_upload_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aws-s3/upload-item */ "./src/app/aws-s3/upload-item.ts");
/* eslint-disable @typescript-eslint/restrict-plus-operands */

function collectFiles(item, path, items) {
    path = path || '';
    if (item.isFile) {
        var p = new Promise(function (resolve, reject) {
            item.file(function (file) {
                resolve([new _aws_s3_upload_item__WEBPACK_IMPORTED_MODULE_0__["UploadItem"](file, path)]);
            });
        });
        return p;
    }
    else if (item.isDirectory) {
        var dirReader_1 = item.createReader();
        var p = new Promise(function (resolve, reject) {
            var promises = [];
            dirReader_1.readEntries(function (entries) {
                for (var i = 0; i < entries.length; i++) {
                    promises.push(collectFiles(entries[i], path + item.name + '/', items));
                }
                Promise.all(promises).then(function (results) {
                    results.forEach(function (r) {
                        items = items.concat(r);
                    });
                    resolve(items);
                });
            });
        });
        return p;
    }
    else {
        return Promise.reject(new Error('Not a file or directory'));
    }
}


/***/ }),

/***/ "./src/app/folder-browser/file-info/file-info.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/folder-browser/file-info/file-info.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info-panel-container d-flex flex-column\" *ngIf=\"_item\">\n  <div class=\"path-container\">\n    <h5>{{ _item.name }}</h5>\n  </div>\n  <div class=\"details-container d-flex\">\n    <div class=\"details-section\">\n      <h3>Summary</h3>\n      <h5>Last Modified: {{ _item.LastModified }}</h5>\n      <h5>Etag: {{ _item.Etag }}</h5>\n      <h5>Storage Class: {{ _item.StorageClass }}</h5>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/folder-browser/file-info/file-info.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/folder-browser/file-info/file-info.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.info-panel-container {\n  width: 100%; }\n\n.info-panel-container .path-container {\n    padding: 5px;\n    border-bottom: 1px solid var(--secondary);\n    flex-shrink: 0; }\n\n.info-panel-container .path-container h5 {\n      margin: 0; }\n\n.info-panel-container .details-container .details-section {\n    width: 100%;\n    min-width: 0;\n    padding: 5px;\n    border-right: 1px solid var(--secondary); }\n\n.info-panel-container .details-container .details-section:last-child {\n      border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9nYXBsbzkxNy9TM1dlYlVwbG9hZGVyL3NyYy9hcHAvZm9sZGVyLWJyb3dzZXIvZmlsZS1pbmZvL2ZpbGUtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFdBQVcsRUFBQTs7QUFEZjtJQUdRLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsY0FBYyxFQUFBOztBQUx0QjtNQU9ZLFNBQVMsRUFBQTs7QUFQckI7SUFZWSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWix3Q0FBd0MsRUFBQTs7QUFmcEQ7TUFpQmdCLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyLWJyb3dzZXIvZmlsZS1pbmZvL2ZpbGUtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5pbmZvLXBhbmVsLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLnBhdGgtY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGg1IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZGV0YWlscy1jb250YWluZXJ7XG4gICAgICAgIC5kZXRhaWxzLXNlY3Rpb24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/folder-browser/file-info/file-info.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/folder-browser/file-info/file-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: FileInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInfoComponent", function() { return FileInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FileInfoComponent = /** @class */ (function () {
    function FileInfoComponent() {
    }
    Object.defineProperty(FileInfoComponent.prototype, "item", {
        set: function (v) {
            this._item = v;
        },
        enumerable: true,
        configurable: true
    });
    FileInfoComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FileInfoComponent.prototype, "item", null);
    FileInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-info',
            template: __webpack_require__(/*! ./file-info.component.html */ "./src/app/folder-browser/file-info/file-info.component.html"),
            styles: [__webpack_require__(/*! ./file-info.component.scss */ "./src/app/folder-browser/file-info/file-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FileInfoComponent);
    return FileInfoComponent;
}());



/***/ }),

/***/ "./src/app/folder-browser/folder-browser.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/folder-browser/folder-browser.module.ts ***!
  \*********************************************************/
/*! exports provided: FolderBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderBrowserModule", function() { return FolderBrowserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _folder_browser_folder_browser_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./folder-browser/folder-browser.component */ "./src/app/folder-browser/folder-browser/folder-browser.component.ts");
/* harmony import */ var _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../infrastructure/infrastructure.module */ "./src/app/infrastructure/infrastructure.module.ts");
/* harmony import */ var _aws_s3_aws_s3_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../aws-s3/aws-s3.module */ "./src/app/aws-s3/aws-s3.module.ts");
/* harmony import */ var _tree_view_tree_view_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tree-view/tree-view.module */ "./src/app/tree-view/tree-view.module.ts");
/* harmony import */ var _file_info_file_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./file-info/file-info.component */ "./src/app/folder-browser/file-info/file-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FolderBrowserModule = /** @class */ (function () {
    function FolderBrowserModule() {
    }
    FolderBrowserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_3__["InfrastructureModule"], _aws_s3_aws_s3_module__WEBPACK_IMPORTED_MODULE_4__["AwsS3Module"], _tree_view_tree_view_module__WEBPACK_IMPORTED_MODULE_5__["TreeViewModule"]],
            declarations: [_folder_browser_folder_browser_component__WEBPACK_IMPORTED_MODULE_2__["FolderBrowserComponent"], _file_info_file_info_component__WEBPACK_IMPORTED_MODULE_6__["FileInfoComponent"]],
            exports: [_folder_browser_folder_browser_component__WEBPACK_IMPORTED_MODULE_2__["FolderBrowserComponent"]],
        })
    ], FolderBrowserModule);
    return FolderBrowserModule;
}());



/***/ }),

/***/ "./src/app/folder-browser/folder-browser/folder-browser.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/folder-browser/folder-browser/folder-browser.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n  <div class=\"side-header-container left\">\n    <div class=\"settings-icon\" id=\"back-btn\" (click)=\"goToHome()\">\n      <i class=\"ion-ios-arrow-round-back\"></i>\n    </div>\n    <div class=\"settings-icon\" id=\"refresh-btn\" (click)=\"refresh()\">\n      <i class=\"ion-ios-refresh\"></i>\n    </div>\n  </div>\n  <div class=\"page-contents container-fluid d-flex flex-column pb-2\">\n    <h1>Browse</h1>\n    <div class=\"list-container d-flex flex-column\">\n      <div class=\"path-container\">\n        <h5 id=\"path-display\">{{ currentPath }}</h5>\n      </div>\n      <div\n        class=\"items-container\"\n        [class.dragged-over]=\"draggedOver\"\n        (drop)=\"drop($event)\"\n        (dragenter)=\"dragEnter($event)\"\n        (dragleave)=\"dragLeave($event)\"\n      >\n        <div\n          class=\"item smooth-1\"\n          *ngFor=\"let item of items\"\n          (click)=\"onClick(item, $event)\"\n          (dblclick)=\"requestDownload(item, $event)\"\n        >\n          <div class=\"item-icon mr-2\">\n            <i\n              [class.ion-ios-folder]=\"item.type === 'folder'\"\n              [class.ion-ios-cloud-download]=\"item.type === 'file'\"\n              (click)=\"item.type === 'file' ? requestDownload(item, $event) : null\"\n            ></i>\n          </div>\n          <div class=\"item-title mr-2\">\n            <small>{{ item.name }}</small>\n          </div>\n          <div class=\"item-size\">\n            <small>{{ getSizeString(item) }}</small>\n          </div>\n        </div>\n        <app-busy-screen *ngIf=\"busy\"></app-busy-screen>\n        <div class=\"drag-prompt\">\n          <div>\n            <div class=\"large-icon d-flex align-items-center justify-content-center\">\n              <i class=\"ion-ios-cloud-upload\"></i>\n            </div>\n            <h3>Drop file(s) here to upload</h3>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"info-container mt-2 smooth\">\n      <app-file-info *ngIf=\"selectedFile\" [item]=\"selectedFile\"></app-file-info>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/folder-browser/folder-browser/folder-browser.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/folder-browser/folder-browser/folder-browser.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-container {\n  width: 100%;\n  height: 100%;\n  min-height: 0;\n  border-radius: 3px;\n  background: white; }\n  .list-container .path-container {\n    padding: 5px;\n    border-bottom: 1px solid var(--secondary);\n    flex-shrink: 0; }\n  .list-container .path-container h5 {\n      margin: 0; }\n  .list-container .items-container {\n    height: 100%;\n    min-height: 0;\n    position: relative;\n    overflow-y: auto; }\n  .list-container .items-container .item {\n      padding: 5px;\n      display: flex;\n      cursor: pointer; }\n  .list-container .items-container .item .item-icon {\n        font-size: 16px; }\n  .list-container .items-container .item .item-title {\n        width: 100%; }\n  .list-container .items-container .item:hover {\n        background: var(--secondary); }\n  .list-container .items-container .item .item-size {\n        flex-shrink: 0; }\n  .list-container .items-container .drag-prompt {\n      position: absolute;\n      display: none;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: var(--lighter);\n      align-items: center;\n      justify-content: center; }\n  .list-container .items-container .drag-prompt .large-icon {\n        font-size: 64px; }\n  .list-container .items-container.dragged-over .drag-prompt {\n      display: flex; }\n  .info-container {\n  width: 100%;\n  border-radius: 3px;\n  background: white; }\n  .ion-ios-cloud-download:hover {\n  color: orange; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9nYXBsbzkxNy9TM1dlYlVwbG9hZGVyL3NyYy9hcHAvZm9sZGVyLWJyb3dzZXIvZm9sZGVyLWJyb3dzZXIvZm9sZGVyLWJyb3dzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7RUFMckI7SUFTUSxZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLGNBQWMsRUFBQTtFQVh0QjtNQWFZLFNBQVMsRUFBQTtFQWJyQjtJQWlCUSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTtFQXBCeEI7TUFzQlksWUFBWTtNQUNaLGFBQWE7TUFDYixlQUFlLEVBQUE7RUF4QjNCO1FBMEJnQixlQUFlLEVBQUE7RUExQi9CO1FBNkJnQixXQUFXLEVBQUE7RUE3QjNCO1FBZ0NnQiw0QkFBNEIsRUFBQTtFQWhDNUM7UUFtQ2dCLGNBQWMsRUFBQTtFQW5DOUI7TUF1Q1ksa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixNQUFNO01BQ04sT0FBTztNQUNQLFdBQVc7TUFDWCxZQUFZO01BQ1osMEJBQTBCO01BQzFCLG1CQUFtQjtNQUNuQix1QkFBdUIsRUFBQTtFQS9DbkM7UUFpRGdCLGVBQWUsRUFBQTtFQWpEL0I7TUFzRFksYUFBYSxFQUFBO0VBSXpCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTtFQUVyQjtFQUVJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci1icm93c2VyL2ZvbGRlci1icm93c2VyL2ZvbGRlci1icm93c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG5cblxuICAgIC5wYXRoLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBoNSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLml0ZW1zLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgLml0ZW0taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLml0ZW0tdGl0bGUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pdGVtLXNpemUge1xuICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5kcmFnLXByb21wdCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRlcik7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAubGFyZ2UtaWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA2NHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5kcmFnZ2VkLW92ZXIgLmRyYWctcHJvbXB0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICB9XG59XG4uaW5mby1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5pb24taW9zLWNsb3VkLWRvd25sb2FkIHtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/folder-browser/folder-browser/folder-browser.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/folder-browser/folder-browser/folder-browser.component.ts ***!
  \***************************************************************************/
/*! exports provided: FolderBrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderBrowserComponent", function() { return FolderBrowserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_infrastructure_subscription_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/infrastructure/subscription-component */ "./src/app/infrastructure/subscription-component.ts");
/* harmony import */ var src_app_aws_s3_services_s3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/aws-s3/services/s3.service */ "./src/app/aws-s3/services/s3.service.ts");
/* harmony import */ var src_app_tree_view_services_selection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/tree-view/services/selection.service */ "./src/app/tree-view/services/selection.service.ts");
/* harmony import */ var src_app_collectfiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/collectfiles */ "./src/app/collectfiles.ts");
/* harmony import */ var src_app_aws_s3_services_request_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/aws-s3/services/request-upload.service */ "./src/app/aws-s3/services/request-upload.service.ts");
/* harmony import */ var src_app_infrastructure_services_analytics_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/infrastructure/services/analytics.service */ "./src/app/infrastructure/services/analytics.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FolderBrowserComponent = /** @class */ (function (_super) {
    __extends(FolderBrowserComponent, _super);
    function FolderBrowserComponent(router, route, s3, upload, selection, analytics) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.route = route;
        _this.s3 = s3;
        _this.upload = upload;
        _this.selection = selection;
        _this.analytics = analytics;
        _this.busy = false;
        _this.draggedOver = false;
        _this.dragCount = 0;
        _this.items = [];
        _this.currentPath = '';
        return _this;
    }
    FolderBrowserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recordSubscription(this.route.url.subscribe(function (segments) {
            var segmentNames = segments.join('/');
            _this.currentPath = decodeURI(segmentNames);
            _this.items = _this.s3.getCachedItems(_this.currentPath);
            _this.account = _this.s3.getCachedAccount(segments[0].path);
        }));
        this.recordSubscription(this.s3.RefreshingObjects.subscribe(function (res) {
            var segmentNames = res.parents.join('/');
            if (_this.currentPath === segmentNames) {
                _this.busy = true;
            }
        }));
        this.recordSubscription(this.s3.ItemsEnumerated.subscribe(function (result) {
            _this.account = result.account;
            var parents = result.parents.slice();
            var parentPath = parents.join('/');
            if (parentPath === _this.currentPath) {
                _this.busy = false;
                _this.items = result.items;
            }
        }));
    };
    FolderBrowserComponent.prototype.goToHome = function () {
        this.router.navigateByUrl('/home');
    };
    FolderBrowserComponent.prototype.refresh = function () {
        var params = this.getS3Parameters();
        this.s3.listObjects(this.account, params.bucket, params.prefix);
    };
    FolderBrowserComponent.prototype.onClick = function (item, event) {
        if (item.type === 'folder') {
            event.preventDefault();
            event.stopPropagation();
            var newPath = this.currentPath + '/' + item.name;
            this.router.navigateByUrl("/browse/" + newPath);
            this.selection.selectItem(newPath);
        }
        else if (item.type === 'file') {
            event.preventDefault();
            event.stopPropagation();
            this.selectedFile = item;
        }
    };
    FolderBrowserComponent.prototype.requestDownload = function (item, event) {
        if (item.type === 'file') {
            event.preventDefault();
            event.stopPropagation();
            var params = this.getS3Parameters();
            this.s3.requestDownload(this.account, params.bucket, params.prefix + item.name);
        }
    };
    FolderBrowserComponent.prototype.getSizeString = function (item) {
        if (item && item.size) {
            var mb = item.size / 1024 / 1024;
            var kb = item.size / 1024;
            if (mb >= 1) {
                return Math.round(mb * 100) / 100 + " MB";
            }
            else {
                return Math.round(kb * 100) / 100 + " KB";
            }
        }
        else {
            return '0 KB';
        }
    };
    FolderBrowserComponent.prototype.drop = function (event) {
        var _this = this;
        this.dragCount = 0;
        this.draggedOver = false;
        if (event.dataTransfer) {
            var promises = [];
            for (var _i = 0, _a = event.dataTransfer.items; _i < _a.length; _i++) {
                var f = _a[_i];
                var item = f.webkitGetAsEntry();
                if (item) {
                    promises.push(Object(src_app_collectfiles__WEBPACK_IMPORTED_MODULE_5__["collectFiles"])(item, '', []));
                }
            }
            Promise.all(promises).then(function (results) {
                var items = [];
                results.forEach(function (r) {
                    items = items.concat(r);
                });
                var params = _this.getS3Parameters();
                _this.upload.requestUpload(_this.account, params.bucket, params.prefix, items);
            });
        }
        event.preventDefault();
        return false;
    };
    FolderBrowserComponent.prototype.dragEnter = function (event) {
        this.draggedOver = true;
        this.dragCount += 1;
        event.preventDefault();
        return false;
    };
    FolderBrowserComponent.prototype.dragLeave = function (event) {
        this.dragCount -= 1;
        if (this.dragCount <= 0) {
            this.draggedOver = false;
            this.dragCount = 0;
        }
        event.preventDefault();
        return false;
    };
    FolderBrowserComponent.prototype.getS3Parameters = function () {
        var path = this.currentPath.split('/');
        if (path.length >= 2) {
            var account = path[0];
            var bucket = path[1];
            var prefix = path.slice(2, path.length).join('/');
            return { account: account, bucket: bucket, prefix: prefix ? prefix + '/' : '' };
        }
        else {
            return null;
        }
    };
    FolderBrowserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-folder-browser',
            template: __webpack_require__(/*! ./folder-browser.component.html */ "./src/app/folder-browser/folder-browser/folder-browser.component.html"),
            styles: [__webpack_require__(/*! ../../page.scss */ "./src/app/page.scss"), __webpack_require__(/*! ./folder-browser.component.scss */ "./src/app/folder-browser/folder-browser/folder-browser.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_aws_s3_services_s3_service__WEBPACK_IMPORTED_MODULE_3__["S3Service"],
            src_app_aws_s3_services_request_upload_service__WEBPACK_IMPORTED_MODULE_6__["RequestUploadService"],
            src_app_tree_view_services_selection_service__WEBPACK_IMPORTED_MODULE_4__["SelectionService"],
            src_app_infrastructure_services_analytics_service__WEBPACK_IMPORTED_MODULE_7__["AnalyticsService"]])
    ], FolderBrowserComponent);
    return FolderBrowserComponent;
}(src_app_infrastructure_subscription_component__WEBPACK_IMPORTED_MODULE_2__["SubscriptionComponent"]));



/***/ }),

/***/ "./src/app/histories/histories.module.ts":
/*!***********************************************!*\
  !*** ./src/app/histories/histories.module.ts ***!
  \***********************************************/
/*! exports provided: HistoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriesModule", function() { return HistoriesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _history_list_history_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history-list/history-list.component */ "./src/app/histories/history-list/history-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistoriesModule = /** @class */ (function () {
    function HistoriesModule() {
    }
    HistoriesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_history_list_history_list_component__WEBPACK_IMPORTED_MODULE_2__["HistoryListComponent"]],
            exports: [_history_list_history_list_component__WEBPACK_IMPORTED_MODULE_2__["HistoryListComponent"]],
        })
    ], HistoriesModule);
    return HistoriesModule;
}());



/***/ }),

/***/ "./src/app/histories/history-list/history-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/histories/history-list/history-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"history-list\">\n  <div\n    class=\"history-entry\"\n    [class.text-success]=\"item.status === 'success'\"\n    [class.text-danger]=\"item.status === 'failed'\"\n    *ngFor=\"let item of entries\"\n  >\n    <div class=\"entry-type mr-1\">\n      <i\n        [class.ion-ios-cloud-upload]=\"item.type === 'upload'\"\n        [class.ion-ios-cloud-download]=\"item.type === 'download'\"\n      ></i>\n    </div>\n    <div class=\"entry-content\">\n      {{ item.name }}\n    </div>\n    <div class=\"entry-time ml-1 mr-1\">\n      {{ item.time }}\n    </div>\n  </div>\n  <small *ngIf=\"entries.length === 0\" class=\"no-history-desc\">No History</small>\n</div>\n"

/***/ }),

/***/ "./src/app/histories/history-list/history-list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/histories/history-list/history-list.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.history-container {\n  width: 100%;\n  position: relative; }\n\n.history-entry {\n  display: flex;\n  width: 100%; }\n\n.history-entry .entry-type {\n    flex-shrink: 0;\n    font-size: 16px; }\n\n.history-entry .entry-content {\n    width: 100%;\n    min-width: 0;\n    text-overflow: ellipsis;\n    overflow-x: hidden;\n    white-space: nowrap;\n    font-size: 12px; }\n\n.history-entry .entry-time {\n    font-size: 12px;\n    flex-shrink: 0; }\n\n.no-history-desc {\n  text-align: center;\n  color: rgba(0, 0, 0, 0.4); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9nYXBsbzkxNy9TM1dlYlVwbG9hZGVyL3NyYy9hcHAvaGlzdG9yaWVzL2hpc3RvcnktbGlzdC9oaXN0b3J5LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUE7O0FBRWY7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFGZjtJQUlRLGNBQWM7SUFDZCxlQUFlLEVBQUE7O0FBTHZCO0lBUVEsV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlLEVBQUE7O0FBYnZCO0lBZ0JRLGVBQWU7SUFDZixjQUFjLEVBQUE7O0FBSXRCO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGlzdG9yaWVzL2hpc3RvcnktbGlzdC9oaXN0b3J5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uaGlzdG9yeS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhpc3RvcnktZW50cnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLmVudHJ5LXR5cGUge1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAuZW50cnktY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLmVudHJ5LXRpbWUge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIH1cbn1cblxuLm5vLWhpc3RvcnktZGVzYyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/histories/history-list/history-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/histories/history-list/history-list.component.ts ***!
  \******************************************************************/
/*! exports provided: HistoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryListComponent", function() { return HistoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_histories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/histories.service */ "./src/app/histories/services/histories.service.ts");
/* harmony import */ var src_app_infrastructure_subscription_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/infrastructure/subscription-component */ "./src/app/infrastructure/subscription-component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryListComponent = /** @class */ (function (_super) {
    __extends(HistoryListComponent, _super);
    function HistoryListComponent(histories) {
        var _this = _super.call(this) || this;
        _this.histories = histories;
        _this.entries = [];
        return _this;
    }
    HistoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recordSubscription(this.histories.Histories.subscribe(function (res) {
            _this.entries = res;
            _this.entries.forEach(function (ent) {
                ent.time = new Date(ent.time).toLocaleString();
            });
        }));
    };
    HistoryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history-list',
            template: __webpack_require__(/*! ./history-list.component.html */ "./src/app/histories/history-list/history-list.component.html"),
            styles: [__webpack_require__(/*! ./history-list.component.scss */ "./src/app/histories/history-list/history-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_histories_service__WEBPACK_IMPORTED_MODULE_1__["HistoriesService"]])
    ], HistoryListComponent);
    return HistoryListComponent;
}(src_app_infrastructure_subscription_component__WEBPACK_IMPORTED_MODULE_2__["SubscriptionComponent"]));



/***/ }),

/***/ "./src/app/histories/services/histories.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/histories/services/histories.service.ts ***!
  \*********************************************************/
/*! exports provided: HistoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriesService", function() { return HistoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_infrastructure_services_electron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/infrastructure/services/electron.service */ "./src/app/infrastructure/services/electron.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* eslint-disable @typescript-eslint/restrict-plus-operands */



var HistoriesService = /** @class */ (function () {
    function HistoriesService(electron) {
        this.electron = electron;
        this._histories = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.Histories = this._histories.asObservable();
    }
    HistoriesService.prototype.init = function () {
        var _this = this;
        this.electron.onCD('History-Changed', function (event, arg) {
            _this._histories.next(arg.histories);
        });
        this.electron.onCD('S3-UploadSuccessful', function (event, arg) {
            _this.handleUpload(arg, 'success');
        });
        this.electron.onCD('S3-UploadFailed', function (event, arg) {
            _this.handleUpload(arg, 'failed');
        });
        this.electron.onCD('S3-DownloadSuccessful', function (event, arg) {
            _this.handleDownload(arg, 'success');
        });
        this.electron.onCD('S3-DownloadFailed', function (event, arg) {
            _this.handleDownload(arg, 'failed');
        });
    };
    HistoriesService.prototype.clearHistory = function () {
        this.electron.send('History-Clear', {});
    };
    HistoriesService.prototype.handleUpload = function (arg, status) {
        var to = arg.parents.join('/') + '/' + arg.filename;
        this.electron.send('History-Add', {
            type: 'upload',
            name: "" + to,
            status: status,
        });
    };
    HistoriesService.prototype.handleDownload = function (arg, status) {
        var to = arg.saveAs;
        this.electron.send('History-Add', {
            type: 'download',
            name: "" + to,
            status: status,
        });
    };
    HistoriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [src_app_infrastructure_services_electron_service__WEBPACK_IMPORTED_MODULE_1__["ElectronService"]])
    ], HistoriesService);
    return HistoriesService;
}());



/***/ }),

/***/ "./src/app/infrastructure/analytics-consent/analytics-consent.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/infrastructure/analytics-consent/analytics-consent.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"screen-container d-flex justify-content-center align-items-center\">\n  <div class=\"card-container\">\n    <div class=\"card text-center\" style=\"width: 70rem;\">\n      <div class=\"card-body smooth\">\n        <h4 class=\"card-title\">Usage Data Collection</h4>\n        <p>Hi, thanks for using S3Uploader!</p>\n        <p>\n          Please indicate below if you want to opt-in for anonymous usage data collection to help us make this app\n          better.\n        </p>\n        <p>\n          We currently use Google Analytics as our data processing service, for Google Analytics' notice to users,\n          please click\n          <a href=\"javascript:void(0)\" (click)=\"openHelp()\">here</a>\n        </p>\n        <p>\n          You can change your mind any time via the Settings Menu\n          <i class=\"ion-ios-settings\"></i>\n          .\n        </p>\n        <app-checkbox [(checkedValue)]=\"optIn\" style=\"font-size: 26px;\">Opt-in To Help Improve S3Uploader</app-checkbox>\n        <button class=\"btn btn-primary\" (click)=\"confirm()\">Confirm</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/infrastructure/analytics-consent/analytics-consent.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/infrastructure/analytics-consent/analytics-consent.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZnJhc3RydWN0dXJlL2FuYWx5dGljcy1jb25zZW50L2FuYWx5dGljcy1jb25zZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/infrastructure/analytics-consent/analytics-consent.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/infrastructure/analytics-consent/analytics-consent.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AnalyticsConsentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsConsentComponent", function() { return AnalyticsConsentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/analytics.service */ "./src/app/infrastructure/services/analytics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnalyticsConsentComponent = /** @class */ (function () {
    function AnalyticsConsentComponent(analytics) {
        this.analytics = analytics;
        this.toClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.optIn = true;
    }
    AnalyticsConsentComponent.prototype.ngOnInit = function () { };
    AnalyticsConsentComponent.prototype.confirm = function () {
        this.analytics.changeOpt(this.optIn);
        this.toClose.emit();
    };
    AnalyticsConsentComponent.prototype.openHelp = function () {
        this.analytics.openGoogleAnalyticsHelp();
    };
    AnalyticsConsentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analytics-consent',
            template: __webpack_require__(/*! ./analytics-consent.component.html */ "./src/app/infrastructure/analytics-consent/analytics-consent.component.html"),
            styles: [__webpack_require__(/*! ../prompt.scss */ "./src/app/infrastructure/prompt.scss"), __webpack_require__(/*! ./analytics-consent.component.scss */ "./src/app/infrastructure/analytics-consent/analytics-consent.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_analytics_service__WEBPACK_IMPORTED_MODULE_1__["AnalyticsService"]])
    ], AnalyticsConsentComponent);
    return AnalyticsConsentComponent;
}());



/***/ }),

/***/ "./src/app/infrastructure/analytics-exceptions.ts":
/*!********************************************************!*\
  !*** ./src/app/infrastructure/analytics-exceptions.ts ***!
  \********************************************************/
/*! exports provided: AnalyticsExceptionHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsExceptionHandler", function() { return AnalyticsExceptionHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/analytics.service */ "./src/app/infrastructure/services/analytics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnalyticsExceptionHandler = /** @class */ (function () {
    function AnalyticsExceptionHandler(analytics) {
        this.analytics = analytics;
    }
    AnalyticsExceptionHandler.prototype.handleError = function (error) {
        this.analytics.exception("UIException");
        throw error;
    };
    AnalyticsExceptionHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_analytics_service__WEBPACK_IMPORTED_MODULE_1__["AnalyticsService"]])
    ], AnalyticsExceptionHandler);
    return AnalyticsExceptionHandler;
}());



/***/ }),

/***/ "./src/app/infrastructure/analytics-tracked.ts":
/*!*****************************************************!*\
  !*** ./src/app/infrastructure/analytics-tracked.ts ***!
  \*****************************************************/
/*! exports provided: AnalyticsTracked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsTracked", function() { return AnalyticsTracked; });
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/analytics.service */ "./src/app/infrastructure/services/analytics.service.ts");

function AnalyticsTracked(screen) {
    return function (constructor) {
        // You can add/remove events for your needs
        var LIFECYCLE_HOOKS = ['ngOnInit'];
        LIFECYCLE_HOOKS.forEach(function (hook) {
            var original = constructor.prototype[hook];
            constructor.prototype[hook] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                original && original.apply(this, args);
                if (this.analytics instanceof _services_analytics_service__WEBPACK_IMPORTED_MODULE_0__["AnalyticsService"]) {
                    ;
                    this.analytics.screenView(screen);
                }
            };
        });
    };
}


/***/ }),

/***/ "./src/app/infrastructure/busy-screen/busy-screen.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/infrastructure/busy-screen/busy-screen.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-center justify-content-center spinner-container\">\n  <app-spinner [size]=\"spinnerSize\"></app-spinner>\n</div>\n"

/***/ }),

/***/ "./src/app/infrastructure/busy-screen/busy-screen.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/infrastructure/busy-screen/busy-screen.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 100;\n  top: 0;\n  left: 0; }\n\n.spinner-container {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9nYXBsbzkxNy9TM1dlYlVwbG9hZGVyL3NyYy9hcHAvaW5mcmFzdHJ1Y3R1cmUvYnVzeS1zY3JlZW4vYnVzeS1zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU8sRUFBQTs7QUFHWDtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pbmZyYXN0cnVjdHVyZS9idXN5LXNjcmVlbi9idXN5LXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTAwO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xufVxuXG4uc3Bpbm5lci1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/infrastructure/busy-screen/busy-screen.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/infrastructure/busy-screen/busy-screen.component.ts ***!
  \*********************************************************************/
/*! exports provided: BusyScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusyScreenComponent", function() { return BusyScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BusyScreenComponent = /** @class */ (function () {
    function BusyScreenComponent() {
        this.spinnerSize = '40';
    }
    BusyScreenComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BusyScreenComponent.prototype, "spinnerSize", void 0);
    BusyScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-busy-screen',
            template: __webpack_require__(/*! ./busy-screen.component.html */ "./src/app/infrastructure/busy-screen/busy-screen.component.html"),
            styles: [__webpack_require__(/*! ./busy-screen.component.scss */ "./src/app/infrastructure/busy-screen/busy-screen.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BusyScreenComponent);
    return BusyScreenComponent;
}());



/***/ }),

/***/ "./src/app/infrastructure/checkbox/checkbox.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/infrastructure/checkbox/checkbox.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"custom-control custom-checkbox mb-3\">\n  <input class=\"custom-control-input\" id=\"customCheck1\" type=\"checkbox\" [checked]=\"checkedValue\" (click)=\"onClick($event)\">\n  <label class=\"custom-control-label\" for=\"customCheck1\">{{prompt}}</label>\n</div> -->\n<div class=\"custom-control custom-checkbox\" (click)=\"onClick($event)\">\n  <input class=\"custom-control-input\" type=\"checkbox\" [checked]=\"checkedValue\" />\n  <label class=\"custom-control-label\">\n    <ng-content></ng-content>\n  </label>\n</div>\n"

/***/ }),

/***/ "./src/app/infrastructure/checkbox/checkbox.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/infrastructure/checkbox/checkbox.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZnJhc3RydWN0dXJlL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/infrastructure/checkbox/checkbox.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/infrastructure/checkbox/checkbox.component.ts ***!
  \***************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.disabled = false;
        this.checkedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._checked = false;
    }
    Object.defineProperty(CheckboxComponent.prototype, "checkedValue", {
        get: function () {
            return this._checked;
        },
        set: function (v) {
            if (this._checked !== v) {
                this.checkedValueChange.emit(v);
                this._checked = v;
            }
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.prototype.ngOnInit = function () { };
    CheckboxComponent.prototype.onClick = function ($event) {
        if (!this.disabled) {
            this.checkedValue = !this.checkedValue;
            $event.stopPropagation();
            $event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CheckboxComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CheckboxComponent.prototype, "checkedValue", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CheckboxComponent.prototype, "checkedValueChange", void 0);
    CheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "./src/app/infrastructure/checkbox/checkbox.component.html"),
            styles: [__webpack_require__(/*! ./checkbox.component.scss */ "./src/app/infrastructure/checkbox/checkbox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./src/app/infrastructure/infrastructure.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/infrastructure/infrastructure.module.ts ***!
  \*********************************************************/
/*! exports provided: InfrastructureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfrastructureModule", function() { return InfrastructureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_electron_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/electron.service */ "./src/app/infrastructure/services/electron.service.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/infrastructure/spinner/spinner.component.ts");
/* harmony import */ var _busy_screen_busy_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./busy-screen/busy-screen.component */ "./src/app/infrastructure/busy-screen/busy-screen.component.ts");
/* harmony import */ var _services_dom_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/dom.service */ "./src/app/infrastructure/services/dom.service.ts");
/* harmony import */ var _tooltip_directive_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tooltip-directive/tooltip.directive */ "./src/app/infrastructure/tooltip-directive/tooltip.directive.ts");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "./src/app/infrastructure/tooltip/tooltip.component.ts");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "./src/app/infrastructure/checkbox/checkbox.component.ts");
/* harmony import */ var _services_updater_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/updater.service */ "./src/app/infrastructure/services/updater.service.ts");
/* harmony import */ var _analytics_consent_analytics_consent_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./analytics-consent/analytics-consent.component */ "./src/app/infrastructure/analytics-consent/analytics-consent.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var InfrastructureModule = /** @class */ (function () {
    function InfrastructureModule() {
    }
    InfrastructureModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            providers: [_services_electron_service__WEBPACK_IMPORTED_MODULE_2__["ElectronService"], _services_dom_service__WEBPACK_IMPORTED_MODULE_5__["DomService"], _services_updater_service__WEBPACK_IMPORTED_MODULE_9__["UpdaterService"]],
            declarations: [
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"],
                _busy_screen_busy_screen_component__WEBPACK_IMPORTED_MODULE_4__["BusyScreenComponent"],
                _tooltip_directive_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__["TooltipDirective"],
                _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_7__["TooltipComponent"],
                _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["CheckboxComponent"],
                _analytics_consent_analytics_consent_component__WEBPACK_IMPORTED_MODULE_10__["AnalyticsConsentComponent"],
            ],
            exports: [_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"], _busy_screen_busy_screen_component__WEBPACK_IMPORTED_MODULE_4__["BusyScreenComponent"], _tooltip_directive_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__["TooltipDirective"], _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["CheckboxComponent"]],
            entryComponents: [_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_7__["TooltipComponent"], _analytics_consent_analytics_consent_component__WEBPACK_IMPORTED_MODULE_10__["AnalyticsConsentComponent"]],
        })
    ], InfrastructureModule);
    return InfrastructureModule;
}());



/***/ }),

/***/ "./src/app/infrastructure/prompt.scss":
/*!********************************************!*\
  !*** ./src/app/infrastructure/prompt.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100; }\n\n.screen-container {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-animation: 0.3s ease-out 0s 1 fadeIn;\n          animation: 0.3s ease-out 0s 1 fadeIn; }\n\n.issue-data-container {\n  -webkit-animation: 0.3s ease-out 0s 1 fadeIn;\n          animation: 0.3s ease-out 0s 1 fadeIn; }\n\n.card-container {\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5); }\n\n.card-container .card {\n    margin-bottom: 0;\n    background: var(--secondary); }\n\n.card-container .card-body {\n    position: relative; }\n\n.card-container .close-container {\n    position: absolute;\n    top: 0;\n    right: 20px; }\n\n.card-container .close-container .close-btn {\n      cursor: pointer; }\n\n.card-container .close-container .close-btn i {\n        font-size: 40px; }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9nYXBsbzkxNy9TM1dlYlVwbG9hZGVyL3NyYy9hcHAvaW5mcmFzdHJ1Y3R1cmUvcHJvbXB0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtFQUM5Qiw0Q0FBb0M7VUFBcEMsb0NBQW9DLEVBQUE7O0FBR3hDO0VBQ0ksNENBQW9DO1VBQXBDLG9DQUFvQyxFQUFBOztBQUd4QztFQUNJLHNDQUFzQyxFQUFBOztBQUQxQztJQUdRLGdCQUFnQjtJQUNoQiw0QkFBNEIsRUFBQTs7QUFKcEM7SUFPUSxrQkFBa0IsRUFBQTs7QUFQMUI7SUFVUSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVcsRUFBQTs7QUFabkI7TUFpQlksZUFBZSxFQUFBOztBQWpCM0I7UUFlZ0IsZUFBZSxFQUFBOztBQU8vQjtFQUNJO0lBQ0ksVUFBVSxFQUFBO0VBRWQ7SUFDSSxVQUFVLEVBQUEsRUFBQTs7QUFMbEI7RUFDSTtJQUNJLFVBQVUsRUFBQTtFQUVkO0lBQ0ksVUFBVSxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pbmZyYXN0cnVjdHVyZS9wcm9tcHQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTAwO1xufVxuXG4uc2NyZWVuLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBhbmltYXRpb246IDAuM3MgZWFzZS1vdXQgMHMgMSBmYWRlSW47XG59XG5cbi5pc3N1ZS1kYXRhLWNvbnRhaW5lciB7XG4gICAgYW5pbWF0aW9uOiAwLjNzIGVhc2Utb3V0IDBzIDEgZmFkZUluO1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIC5jYXJkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICB9XG4gICAgLmNhcmQtYm9keSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLmNsb3NlLWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgLmNsb3NlLWJ0biB7XG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/infrastructure/services/analytics.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/infrastructure/services/analytics.service.ts ***!
  \**************************************************************/
/*! exports provided: AnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsService", function() { return AnalyticsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _electron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./electron.service */ "./src/app/infrastructure/services/electron.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnalyticsService = /** @class */ (function () {
    function AnalyticsService(electron) {
        this.electron = electron;
        this._enabled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.enabled = this._enabled.asObservable();
    }
    AnalyticsService.prototype.init = function () {
        var _this = this;
        this.electron.onCD('Settings-SettingsChanged', function (event, arg) {
            _this._enabled.next(arg['analytics']);
            if (arg['analytics'] === true) {
                _this.electron.send('Analytics-OptChanged', { enabled: true });
            }
            else if (arg['analytics'] === false) {
                _this.electron.send('Analytics-OptChanged', { enabled: false });
            }
        });
    };
    AnalyticsService.prototype.changeOpt = function (enabled) {
        this.electron.send('Settings-Set', { key: 'analytics', value: enabled });
    };
    AnalyticsService.prototype.screenView = function (name) {
        this.electron.send('Analytics-ScreenView', { screenName: name });
    };
    AnalyticsService.prototype.exception = function (name, fatal) {
        if (fatal === void 0) { fatal = false; }
        this.electron.send('Analytics-Exception', { exceptionName: name, fatal: fatal });
    };
    AnalyticsService.prototype.logEvent = function (category, action) {
        this.electron.send('Analytics-Event', { category: category, action: action });
    };
    AnalyticsService.prototype.logOpenExternal = function (action) {
        this.electron.send('Analytics-Event', { category: 'External', action: action });
    };
    AnalyticsService.prototype.openGoogleAnalyticsHelp = function () {
        this.electron.send('Application-OpenExternal', {
            address: 'https://policies.google.com/technologies/partner-sites',
        });
    };
    AnalyticsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_electron_service__WEBPACK_IMPORTED_MODULE_1__["ElectronService"]])
    ], AnalyticsService);
    return AnalyticsService;
}());



/***/ }),

/***/ "./src/app/infrastructure/services/dom.service.ts":
/*!********************************************************!*\
  !*** ./src/app/infrastructure/services/dom.service.ts ***!
  \********************************************************/
/*! exports provided: DomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomService", function() { return DomService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DomService = /** @class */ (function () {
    function DomService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    DomService.prototype.appendComponentToBody = function (component) {
        var componentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector);
        this.appRef.attachView(componentRef.hostView);
        var domElem = componentRef.hostView.rootNodes[0];
        document.body.appendChild(domElem);
        return componentRef;
    };
    DomService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], DomService);
    return DomService;
}());



/***/ }),

/***/ "./src/app/infrastructure/services/electron.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/infrastructure/services/electron.service.ts ***!
  \*************************************************************/
/*! exports provided: ElectronService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectronService", function() { return ElectronService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/message-bus */ "./src/app/services/message-bus.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ElectronService = /** @class */ (function () {
    function ElectronService(zone, messageBus) {
        this.zone = zone;
        this.messageBus = messageBus;
        this.initialized = false;
        this.ipcRenderer = null;
        if (electron) {
            this.ipcRenderer = electron.ipcRenderer;
            this.initialized = true;
        }
        else {
            this.ipcRenderer = messageBus;
            this.initialized = true;
            console.warn('Electron not available');
        }
    }
    // safe subscribe method for angular change detection
    ElectronService.prototype.onCD = function (event, handler) {
        var _this = this;
        if (this.available) {
            this.ipcRenderer.on(event, function (ev, arg) {
                _this.zone.run(function () {
                    handler(ev, arg);
                });
            });
        }
    };
    ElectronService.prototype.send = function (event, arg) {
        this.ipcRenderer.send(event, arg);
    };
    Object.defineProperty(ElectronService.prototype, "available", {
        get: function () {
            return this.initialized;
        },
        enumerable: true,
        configurable: true
    });
    ElectronService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _services_message_bus__WEBPACK_IMPORTED_MODULE_1__["MessageBus"]])
    ], ElectronService);
    return ElectronService;
}());



/***/ }),

/***/ "./src/app/infrastructure/services/updater.service.ts":
/*!************************************************************!*\
  !*** ./src/app/infrastructure/services/updater.service.ts ***!
  \************************************************************/
/*! exports provided: UpdaterStatus, UpdaterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdaterStatus", function() { return UpdaterStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdaterService", function() { return UpdaterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _electron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./electron.service */ "./src/app/infrastructure/services/electron.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdaterStatus;
(function (UpdaterStatus) {
    UpdaterStatus[UpdaterStatus["NoUpdateAvailable"] = 0] = "NoUpdateAvailable";
    UpdaterStatus[UpdaterStatus["CheckingUpdate"] = 1] = "CheckingUpdate";
    UpdaterStatus[UpdaterStatus["UpdateAvailable"] = 2] = "UpdateAvailable";
    UpdaterStatus[UpdaterStatus["DownloadingUpdate"] = 3] = "DownloadingUpdate";
    UpdaterStatus[UpdaterStatus["InstallingUpdate"] = 4] = "InstallingUpdate";
})(UpdaterStatus || (UpdaterStatus = {}));
var UpdaterService = /** @class */ (function () {
    function UpdaterService(electron, noti) {
        this.electron = electron;
        this.noti = noti;
        this.updateVersion = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]();
        this.updaterStatus = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]();
        this.updateDownloadProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._updaterStatus = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](UpdaterStatus.NoUpdateAvailable);
        this._updateVersion = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.updaterStatus = this._updaterStatus.asObservable();
        this.updateVersion = this._updateVersion.asObservable();
    }
    UpdaterService.prototype.init = function () {
        var _this = this;
        this.electron.onCD('Updater', function (event, arg) {
            if (arg.msg === 'update-available') {
                // tslint:disable-next-line:max-line-length
                var notification = _this.noti.info('Update Available', 'Click here to install update, the app will restart automatically to update', {
                    timeOut: 5000,
                });
                notification.click.subscribe(function () {
                    _this.electron.send('Updater', 'commence-download');
                });
                _this._updateVersion.next(arg.version);
                _this._updaterStatus.next(UpdaterStatus.UpdateAvailable);
            }
            else if (arg.msg === 'update-not-available') {
                _this._updaterStatus.next(UpdaterStatus.NoUpdateAvailable);
            }
            else if (arg.msg === 'downloading-update') {
                _this.updateDownloadProgress.emit(Math.floor(arg.percentage));
            }
            else if (arg.msg === 'download-complete') {
                _this._updaterStatus.next(UpdaterStatus.InstallingUpdate);
                _this.noti.info('Installing Update', 'The download has completed, starting installation...', {
                    timeOut: 7000,
                });
                setTimeout(function () {
                    _this.electron.send('Updater', 'commence-install-update');
                }, 7 * 1000);
            }
        });
        this.electron.onCD('Updater-Checking', function (event, arg) {
            if (arg.inProgress) {
                _this._updaterStatus.next(UpdaterStatus.CheckingUpdate);
            }
        });
    };
    UpdaterService.prototype.checkUpdate = function () {
        this.electron.send('Updater-Check', {});
    };
    UpdaterService.prototype.installUpdate = function () {
        this._updaterStatus.next(UpdaterStatus.DownloadingUpdate);
        this.electron.send('Updater', 'commence-download');
    };
    UpdaterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_electron_service__WEBPACK_IMPORTED_MODULE_1__["ElectronService"], angular2_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"]])
    ], UpdaterService);
    return UpdaterService;
}());



/***/ }),

/***/ "./src/app/infrastructure/spinner/spinner.component.html":
/*!***************************************************************!*\
  !*** ./src/app/infrastructure/spinner/spinner.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->\n<!-- <svg [style.width.px]=\"size\" [style.height.px]=\"size\" viewBox=\"0 0 44 44\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"#fff\"  *ngIf=\"enabled\">\n</svg> -->\n<svg\n  [style.width.px]=\"size\"\n  [style.height.px]=\"size\"\n  viewBox=\"0 0 38 38\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  stroke=\"#011B45\"\n>\n  <g fill=\"none\" fill-rule=\"evenodd\">\n    <g transform=\"translate(1 1)\" stroke-width=\"2\">\n      <circle stroke-opacity=\".2\" cx=\"18\" cy=\"18\" r=\"18\" />\n      <path d=\"M36 18c0-9.94-8.06-18-18-18\">\n        <animateTransform\n          attributeName=\"transform\"\n          type=\"rotate\"\n          from=\"0 18 18\"\n          to=\"360 18 18\"\n          dur=\"1s\"\n          repeatCount=\"indefinite\"\n        />\n      </path>\n    </g>\n  </g>\n</svg>\n"

/***/ }),

/***/ "./src/app/infrastructure/spinner/spinner.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/infrastructure/spinner/spinner.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZnJhc3RydWN0dXJlL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/infrastructure/spinner/spinner.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/infrastructure/spinner/spinner.component.ts ***!
  \*************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
        this.enabled = false;
        this.size = '25';
        this.class = 'd-flex justify-content-center align-items-center';
    }
    SpinnerComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "enabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "class", void 0);
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/infrastructure/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/app/infrastructure/spinner/spinner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/infrastructure/subscription-component.ts":
/*!**********************************************************!*\
  !*** ./src/app/infrastructure/subscription-component.ts ***!
  \**********************************************************/
/*! exports provided: SubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionComponent", function() { return SubscriptionComponent; });
var SubscriptionComponent = /** @class */ (function () {
    function SubscriptionComponent() {
        this.subs = [];
    }
    SubscriptionComponent.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (s) {
            s.unsubscribe();
        });
    };
    SubscriptionComponent.prototype.recordSubscription = function (s) {
        this.subs.push(s);
    };
    return SubscriptionComponent;
}());



/***/ }),

/***/ "./src/app/infrastructure/tooltip-directive/tooltip.directive.ts":
/*!***********************************************************************!*\
  !*** ./src/app/infrastructure/tooltip-directive/tooltip.directive.ts ***!
  \***********************************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tooltip/tooltip.component */ "./src/app/infrastructure/tooltip/tooltip.component.ts");
/* harmony import */ var _services_dom_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dom.service */ "./src/app/infrastructure/services/dom.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(el, renderer, dom) {
        this.el = el;
        this.renderer = renderer;
        this.dom = dom;
        this.tooltipPlacement = '';
        this.tooltipTitle = '';
        this.delay = 0.8;
    }
    TooltipDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.el.nativeElement.addEventListener('mouseover', function () {
            _this.show();
        });
        this.el.nativeElement.addEventListener('mouseout', function () {
            if (_this.currentTooltip) {
                _this.currentTooltip.destroy();
                _this.currentTooltip = null;
            }
        });
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        if (this.currentTooltip) {
            this.currentTooltip.destroy();
        }
    };
    TooltipDirective.prototype.show = function () {
        if (!this.currentTooltip) {
            var elem = this.dom.appendComponentToBody(_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_1__["TooltipComponent"]);
            this.currentTooltip = elem;
            var rect = this.el.nativeElement.getBoundingClientRect();
            elem.instance.tooltipPlacement = this.tooltipPlacement;
            elem.instance.elemRect = rect;
            elem.instance.tooltipTitle = this.tooltipTitle;
            elem.instance.delay = this.delay;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "tooltipPlacement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "tooltipTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "delay", void 0);
    TooltipDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appTooltip]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _services_dom_service__WEBPACK_IMPORTED_MODULE_2__["DomService"]])
    ], TooltipDirective);
    return TooltipDirective;
}());



/***/ }),

/***/ "./src/app/infrastructure/tooltip/tooltip.component.html":
/*!***************************************************************!*\
  !*** ./src/app/infrastructure/tooltip/tooltip.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  [style.transform]=\"'translate(' + X + 'px,' + Y + 'px)'\"\n  class=\"tooltip show\"\n  role=\"tooltip\"\n  [class.bs-tooltip-top]=\"tooltipPlacement === 'top'\"\n  [class.bs-tooltip-left]=\"tooltipPlacement === 'left'\"\n  [class.bs-tooltip-bottom]=\"tooltipPlacement === 'bottom'\"\n  [class.bs-tooltip-right]=\"tooltipPlacement === 'right'\"\n  [class.fade-in]=\"show\"\n  #tp\n>\n  <div class=\"arrow\" [style.transform]=\"'translate(' + aX + 'px,' + aY + 'px)'\" #arrow></div>\n  <div class=\"tooltip-inner\">\n    {{ tooltipTitle }}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/infrastructure/tooltip/tooltip.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/infrastructure/tooltip/tooltip.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tooltip {\n  top: 0;\n  left: 0;\n  opacity: 0; }\n  .tooltip.fade-in {\n    opacity: 1;\n    -webkit-animation: 0.3s ease-out 0s 1 fadeIn;\n            animation: 0.3s ease-out 0s 1 fadeIn; }\n  @-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n  @keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9nYXBsbzkxNy9TM1dlYlVwbG9hZGVyL3NyYy9hcHAvaW5mcmFzdHJ1Y3R1cmUvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFVLEVBQUE7RUFIZDtJQUtRLFVBQVU7SUFDViw0Q0FBb0M7WUFBcEMsb0NBQW9DLEVBQUE7RUFJNUM7RUFDSTtJQUNJLFVBQVUsRUFBQTtFQUVkO0lBQ0ksVUFBVSxFQUFBLEVBQUE7RUFMbEI7RUFDSTtJQUNJLFVBQVUsRUFBQTtFQUVkO0lBQ0ksVUFBVSxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pbmZyYXN0cnVjdHVyZS90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbHRpcCB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICAmLmZhZGUtaW4ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBhbmltYXRpb246IDAuM3MgZWFzZS1vdXQgMHMgMSBmYWRlSW47XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/infrastructure/tooltip/tooltip.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/infrastructure/tooltip/tooltip.component.ts ***!
  \*************************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* eslint-disable @typescript-eslint/restrict-plus-operands */

var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
        this.tooltipTitle = '';
        this.tooltipPlacement = '';
        this.aX = '0';
        this.X = '0';
        this.aY = '0';
        this.Y = '0';
        this.show = false;
    }
    Object.defineProperty(TooltipComponent.prototype, "boundingRect", {
        get: function () {
            return this.tp.nativeElement.getBoundingClientRect();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "arrowRect", {
        get: function () {
            return this.arrow.nativeElement.getBoundingClientRect();
        },
        enumerable: true,
        configurable: true
    });
    TooltipComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            var centerX = _this.elemRect.x + _this.elemRect.width / 2;
            var centerY = _this.elemRect.y + _this.elemRect.height / 2;
            var tpRect = _this.boundingRect;
            var tpWidth = tpRect.width;
            var tpHeight = tpRect.height;
            if (_this.tooltipPlacement === 'top') {
                _this.X = "" + (centerX - tpWidth / 2);
                _this.Y = "" + (centerY - _this.elemRect.height / 2 - tpHeight);
                _this.aX = "" + (tpWidth / 2 - _this.arrowRect.width / 2);
            }
            else if (_this.tooltipPlacement === 'left') {
                _this.X = "" + (centerX - tpWidth - _this.elemRect.width / 2);
                _this.Y = "" + (centerY - tpHeight / 2);
                _this.aY = "" + (tpHeight / 2 - _this.arrowRect.height / 2);
            }
            else if (_this.tooltipPlacement === 'bottom') {
                _this.X = "" + (centerX - tpWidth / 2);
                _this.Y = "" + (centerY + tpHeight / 2);
                _this.aX = "" + (tpWidth / 2 - _this.arrowRect.width / 2);
            }
            else if (_this.tooltipPlacement === 'right') {
                _this.X = "" + (centerX + _this.elemRect.width / 2);
                _this.Y = "" + (centerY - tpHeight / 2);
                _this.aY = "" + (tpHeight / 2 - _this.arrowRect.height / 2);
            }
        }, 0);
        setTimeout(function () {
            _this.show = true;
        }, this.delay * 1000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipComponent.prototype, "tooltipTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipComponent.prototype, "tooltipPlacement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipComponent.prototype, "elemRect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TooltipComponent.prototype, "delay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tp'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TooltipComponent.prototype, "tp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('arrow'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TooltipComponent.prototype, "arrow", void 0);
    TooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tooltip',
            template: __webpack_require__(/*! ./tooltip.component.html */ "./src/app/infrastructure/tooltip/tooltip.component.html"),
            styles: [__webpack_require__(/*! ./tooltip.component.scss */ "./src/app/infrastructure/tooltip/tooltip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ }),

/***/ "./src/app/job-view/job-item/job-item.component.html":
/*!***********************************************************!*\
  !*** ./src/app/job-view/job-item/job-item.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"job\" [class.finished]=\"_jobstatus !== 'r'\">\n  <div class=\"icon-container\">\n    <div class=\"job-icon flex-center-all\">\n      <i\n        [class.ion-ios-cloud-upload]=\"_jobtype === 'upload'\"\n        [class.ion-ios-cloud-download]=\"_jobtype === 'download'\"\n        [class.success]=\"_jobstatus === 'c'\"\n        [class.failed]=\"_jobstatus === 'f'\"\n      ></i>\n      <app-spinner *ngIf=\"_jobstatus === 'r'\" [size]=\"'35'\"></app-spinner>\n      <div\n        *ngIf=\"_jobstatus !== 'r'\"\n        class=\"outline\"\n        [class.success]=\"_jobstatus === 'c'\"\n        [class.failed]=\"_jobstatus === 'f'\"\n      ></div>\n    </div>\n  </div>\n  <div class=\"job-content\">\n    <div class=\"d-flex\">\n      <div class=\"job-desc\">\n        <div class=\"desc-text\">{{ source }}</div>\n        <i class=\"ion-ios-arrow-round-forward ml-2 mr-2\"></i>\n        <div class=\"desc-text\">{{ destination }}</div>\n      </div>\n      <div class=\"job-desc\">\n        <div class=\"desc-text\">\n          ({{ loaded / 1024 / 1024 | number: '1.1-1' }}MB/{{ total / 1024 / 1024 | number: '1.1-1' }}MB)\n        </div>\n      </div>\n      <div class=\"ml-2 progress-percentage\" *ngIf=\"_jobstatus === 'r'\" @ngIfAnimation>\n        <span>{{ percentage }}%</span>\n      </div>\n      <div class=\"job-actions running smooth-4\" *ngIf=\"_jobstatus === 'r'\">\n        <div class=\"job-action flex-center-all\" id=\"stop-job-btn\" (click)=\"onStopJob($event)\">\n          <i class=\"ion-ios-square\"></i>\n        </div>\n      </div>\n      <div class=\"job-actions finished smooth-4\" *ngIf=\"_jobstatus !== 'r'\">\n        <div class=\"job-action flex-center-all\" id=\"open-folder-btn\" (click)=\"onOpenFileLocation($event)\">\n          <i class=\"ion-ios-folder-open\"></i>\n        </div>\n        <div class=\"job-action flex-center-all\" id=\"delete-job-btn\" (click)=\"onDeleteJob($event)\">\n          <i class=\"ion-ios-trash\"></i>\n        </div>\n      </div>\n    </div>\n    <div class=\"progress\" *ngIf=\"_jobstatus === 'r'\" @ngIfAnimation>\n      <div\n        class=\"progress-bar bg-primary smooth\"\n        role=\"progressbar\"\n        aria-valuenow=\"60\"\n        aria-valuemin=\"0\"\n        aria-valuemax=\"100\"\n        [style.width.%]=\"percentage\"\n      ></div>\n    </div>\n    <div class=\"message\" *ngIf=\"_jobstatus === 'f'\" @ngIfAnimation>\n      <small class=\"text-danger\">{{ message }}</small>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/job-view/job-item/job-item.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/job-view/job-item/job-item.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.flex-center-all {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.job {\n  display: flex;\n  padding: 5px;\n  width: 100%; }\n\n.job .icon-container {\n    width: 45px;\n    height: 45px;\n    padding: 5px;\n    flex-shrink: 0; }\n\n.job .icon-container .job-icon {\n      width: 35px;\n      height: 35px;\n      font-size: 17px;\n      color: var(--primary);\n      position: relative; }\n\n.job .icon-container .job-icon app-spinner {\n        position: absolute; }\n\n.job .icon-container .job-icon .outline {\n        height: 35px;\n        width: 35px;\n        position: absolute;\n        border: 2px solid var(--primary);\n        border-radius: 50%;\n        transform-origin: center;\n        -webkit-animation: outline-entry 0.4s cubic-bezier(0.19, 1, 0.22, 1) forwards;\n                animation: outline-entry 0.4s cubic-bezier(0.19, 1, 0.22, 1) forwards; }\n\n.job .icon-container .job-icon .outline.success {\n          border-color: var(--success); }\n\n.job .icon-container .job-icon .outline.failed {\n          border-color: var(--danger); }\n\n.job .icon-container .job-icon i.success {\n        color: var(--success); }\n\n.job .icon-container .job-icon i.failed {\n        color: var(--danger); }\n\n.job .job-content {\n    font-size: 12px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    min-width: 0;\n    justify-content: center; }\n\n.job .job-content .progress {\n      font-size: 12px;\n      margin: 0;\n      flex-shrink: 0; }\n\n.job .job-content .job-desc {\n      width: 100%;\n      flex-shrink: 1;\n      display: flex;\n      padding-left: 5px;\n      min-width: 0; }\n\n.job .job-content .job-desc .desc-text {\n        overflow: hidden; }\n\n.job .job-content .job-actions {\n      max-width: 0;\n      overflow: 0;\n      opacity: 0;\n      overflow: hidden;\n      padding-left: 10px;\n      flex-shrink: 0;\n      font-size: 14px;\n      display: flex;\n      justify-content: flex-end; }\n\n.job .job-content .job-actions .job-action {\n        cursor: pointer;\n        width: 20px;\n        height: 20px;\n        border-radius: 50%;\n        border: solid 1px var(--gray);\n        margin-right: 5px; }\n\n.job .job-content .job-actions .job-action:hover {\n          background: rgba(136, 152, 170, 0.2); }\n\n.job .job-content .message {\n      line-height: 15px;\n      padding-left: 5px; }\n\n.job.finished:hover .job-content .job-actions.finished {\n    opacity: 1;\n    max-width: 200px; }\n\n.job:not(.finished):hover .job-content .job-actions.running {\n    opacity: 1;\n    max-width: 200px; }\n\n@-webkit-keyframes outline-entry {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes outline-entry {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9nYXBsbzkxNy9TM1dlYlVwbG9hZGVyL3NyYy9hcHAvam9iLXZpZXcvam9iLWl0ZW0vam9iLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUhmO0lBS1EsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYyxFQUFBOztBQVJ0QjtNQVVZLFdBckJJO01Bc0JKLFlBdEJJO01BdUJKLGVBQWU7TUFDZixxQkFBcUI7TUFDckIsa0JBQWtCLEVBQUE7O0FBZDlCO1FBZ0JnQixrQkFBa0IsRUFBQTs7QUFoQmxDO1FBbUJnQixZQTlCQTtRQStCQSxXQS9CQTtRQWdDQSxrQkFBa0I7UUFDbEIsZ0NBQWdDO1FBQ2hDLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsNkVBQW9FO2dCQUFwRSxxRUFBb0UsRUFBQTs7QUF6QnBGO1VBMkJvQiw0QkFBNEIsRUFBQTs7QUEzQmhEO1VBOEJvQiwyQkFBMkIsRUFBQTs7QUE5Qi9DO1FBa0NnQixxQkFBcUIsRUFBQTs7QUFsQ3JDO1FBcUNnQixvQkFBb0IsRUFBQTs7QUFyQ3BDO0lBMENRLGVBQWU7SUFDZixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osdUJBQXVCLEVBQUE7O0FBL0MvQjtNQWlEWSxlQUFlO01BQ2YsU0FBUztNQUNULGNBQWMsRUFBQTs7QUFuRDFCO01Bc0RZLFdBQVc7TUFDWCxjQUFjO01BQ2QsYUFBYTtNQUNiLGlCQUFpQjtNQUNqQixZQUFZLEVBQUE7O0FBMUR4QjtRQTREZ0IsZ0JBQWdCLEVBQUE7O0FBNURoQztNQWdFWSxZQUFZO01BQ1osV0FBVztNQUNYLFVBQVU7TUFDVixnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxlQUFlO01BQ2YsYUFBYTtNQUNiLHlCQUF5QixFQUFBOztBQXhFckM7UUEwRWdCLGVBQWU7UUFDZixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQiw2QkFBNkI7UUFDN0IsaUJBQWlCLEVBQUE7O0FBL0VqQztVQWlGb0Isb0NBQXdCLEVBQUE7O0FBakY1QztNQXNGWSxpQkFBaUI7TUFDakIsaUJBQWlCLEVBQUE7O0FBdkY3QjtJQTJGUSxVQUFVO0lBQ1YsZ0JBQWdCLEVBQUE7O0FBNUZ4QjtJQStGUSxVQUFVO0lBQ1YsZ0JBQWdCLEVBQUE7O0FBS3hCO0VBQ0k7SUFDSSxtQkFBbUIsRUFBQTtFQUd2QjtJQUNJLG1CQUFtQixFQUFBLEVBQUE7O0FBTjNCO0VBQ0k7SUFDSSxtQkFBbUIsRUFBQTtFQUd2QjtJQUNJLG1CQUFtQixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9qb2Itdmlldy9qb2ItaXRlbS9qb2ItaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRpY29uLXNpemU6IDM1cHg7XG46aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5mbGV4LWNlbnRlci1hbGx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uam9iIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuaWNvbi1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAuam9iLWljb24ge1xuICAgICAgICAgICAgd2lkdGg6ICRpY29uLXNpemU7XG4gICAgICAgICAgICBoZWlnaHQ6ICRpY29uLXNpemU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBhcHAtc3Bpbm5lciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm91dGxpbmUge1xuICAgICAgICAgICAgICAgIGhlaWdodDogJGljb24tc2l6ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogJGljb24tc2l6ZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IG91dGxpbmUtZW50cnkgLjRzIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKSBmb3J3YXJkcztcbiAgICAgICAgICAgICAgICAmLnN1Y2Nlc3MgIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJi5mYWlsZWQgIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkuc3VjY2VzcyB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaS5mYWlsZWQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5qb2ItY29udGVudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIC5wcm9ncmVzcyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgfVxuICAgICAgICAuam9iLWRlc2Mge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LXNocmluazogMTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgIC5kZXNjLXRleHR7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuam9iLWFjdGlvbnN7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIC5qb2ItYWN0aW9ue1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWdyYXkpO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCM4ODk4YWEsIDAuMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi5maW5pc2hlZDpob3ZlciAuam9iLWNvbnRlbnQgLmpvYi1hY3Rpb25zLmZpbmlzaGVke1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIH1cbiAgICAmOm5vdCguZmluaXNoZWQpOmhvdmVyIC5qb2ItY29udGVudCAuam9iLWFjdGlvbnMucnVubmluZ3tcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICB9XG59XG5cblxuQGtleWZyYW1lcyBvdXRsaW5lLWVudHJ5IHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/job-view/job-item/job-item.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/job-view/job-item/job-item.component.ts ***!
  \*********************************************************/
/*! exports provided: JobItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobItemComponent", function() { return JobItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _job_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../job-type */ "./src/app/job-view/job-type.ts");
/* harmony import */ var _job_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../job-status */ "./src/app/job-view/job-status.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobItemComponent = /** @class */ (function () {
    function JobItemComponent() {
        this.percentage = 50;
        this.loaded = 0; // in byte
        this.total = 0; // in byte
        this.source = '';
        this.destination = '';
        this.message = '';
        this.toDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toStop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._jobtype = '';
        this._jobstatus = '';
        this.jobType = _job_type__WEBPACK_IMPORTED_MODULE_1__["JobType"].Upload;
        this.jobStatus = _job_status__WEBPACK_IMPORTED_MODULE_2__["JobStatus"].Running;
    }
    Object.defineProperty(JobItemComponent.prototype, "jobType", {
        set: function (v) {
            this.setJobType(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobItemComponent.prototype, "jobStatus", {
        set: function (v) {
            this.setJobStatus(v);
        },
        enumerable: true,
        configurable: true
    });
    JobItemComponent.prototype.ngOnInit = function () { };
    JobItemComponent.prototype.setJobType = function (j) {
        if (j === _job_type__WEBPACK_IMPORTED_MODULE_1__["JobType"].Download) {
            this._jobtype = 'download';
        }
        else {
            this._jobtype = 'upload';
        }
    };
    JobItemComponent.prototype.setJobStatus = function (j) {
        if (j === _job_status__WEBPACK_IMPORTED_MODULE_2__["JobStatus"].Completed) {
            this._jobstatus = 'c';
        }
        else if (j === _job_status__WEBPACK_IMPORTED_MODULE_2__["JobStatus"].Failed) {
            this._jobstatus = 'f';
        }
        else {
            this._jobstatus = 'r';
        }
    };
    JobItemComponent.prototype.onDeleteJob = function (event) {
        this.toDelete.emit();
        event.stopPropagation();
    };
    JobItemComponent.prototype.onOpenFileLocation = function (event) {
        this.toOpen.emit();
        event.stopPropagation();
    };
    JobItemComponent.prototype.onStopJob = function (event) {
        this.toStop.emit();
        event.stopPropagation();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JobItemComponent.prototype, "percentage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JobItemComponent.prototype, "loaded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JobItemComponent.prototype, "total", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], JobItemComponent.prototype, "jobType", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JobItemComponent.prototype, "source", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JobItemComponent.prototype, "destination", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], JobItemComponent.prototype, "jobStatus", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JobItemComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], JobItemComponent.prototype, "toDelete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], JobItemComponent.prototype, "toOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], JobItemComponent.prototype, "toStop", void 0);
    JobItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-item',
            template: __webpack_require__(/*! ./job-item.component.html */ "./src/app/job-view/job-item/job-item.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('ngIfAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])('300ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 })]))]), { optional: true }),
                    ]),
                ]),
            ],
            styles: [__webpack_require__(/*! ./job-item.component.scss */ "./src/app/job-view/job-item/job-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], JobItemComponent);
    return JobItemComponent;
}());



/***/ }),

/***/ "./src/app/job-view/job-list/job-list.component.html":
/*!***********************************************************!*\
  !*** ./src/app/job-view/job-list/job-list.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"job-container d-flex flex-column\">\n  <app-job-item\n    *ngFor=\"let j of jobList; trackBy: trackJob\"\n    [jobType]=\"j.type\"\n    [jobStatus]=\"j.status\"\n    [percentage]=\"j.percentage\"\n    [loaded]=\"j.loaded\"\n    [total]=\"j.total\"\n    @ngIfAnimation\n    (toDelete)=\"deleteJob(j)\"\n    [source]=\"j.from\"\n    [destination]=\"j.to\"\n    (toOpen)=\"openJobFileLication(j)\"\n    [message]=\"j.message\"\n    (toStop)=\"stopJob(j)\"\n  ></app-job-item>\n  <small *ngIf=\"jobList.length === 0\" class=\"no-active-desc\">No Active Upload</small>\n</div>\n"

/***/ }),

/***/ "./src/app/job-view/job-list/job-list.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/job-view/job-list/job-list.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n.job-list {\n  width: 100%;\n  height: 100%; }\n\n.no-active-desc {\n  text-align: center;\n  color: rgba(0, 0, 0, 0.4);\n  padding: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9nYXBsbzkxNy9TM1dlYlVwbG9hZGVyL3NyYy9hcHAvam9iLXZpZXcvam9iLWxpc3Qvam9iLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvam9iLXZpZXcvam9iLWxpc3Qvam9iLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5qb2ItbGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubm8tYWN0aXZlLWRlc2Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/job-view/job-list/job-list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/job-view/job-list/job-list.component.ts ***!
  \*********************************************************/
/*! exports provided: JobListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobListComponent", function() { return JobListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../job.service */ "./src/app/job-view/job.service.ts");
/* harmony import */ var _infrastructure_subscription_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../infrastructure/subscription-component */ "./src/app/infrastructure/subscription-component.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobListComponent = /** @class */ (function (_super) {
    __extends(JobListComponent, _super);
    function JobListComponent(jobs) {
        var _this = _super.call(this) || this;
        _this.jobs = jobs;
        _this.jobList = [];
        return _this;
    }
    JobListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recordSubscription(this.jobs.Jobs.subscribe(function (js) {
            _this.jobList = js;
        }));
    };
    JobListComponent.prototype.trackJob = function (index, elem) {
        return elem ? elem.id : null;
    };
    JobListComponent.prototype.deleteJob = function (j) {
        this.jobList.splice(this.jobList.indexOf(j), 1);
    };
    JobListComponent.prototype.openJobFileLication = function (j) {
        this.jobs.openJobFileLocation(j.id);
    };
    JobListComponent.prototype.stopJob = function (j) {
        this.jobs.stopJob(j.id);
    };
    JobListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-list',
            template: __webpack_require__(/*! ./job-list.component.html */ "./src/app/job-view/job-list/job-list.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('ngIfAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':self', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])('100ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 })]))]), { optional: true }),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':self', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])('500ms', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 })]))]), { optional: true }),
                    ]),
                ]),
            ],
            styles: [__webpack_require__(/*! ./job-list.component.scss */ "./src/app/job-view/job-list/job-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_job_service__WEBPACK_IMPORTED_MODULE_1__["JobService"]])
    ], JobListComponent);
    return JobListComponent;
}(_infrastructure_subscription_component__WEBPACK_IMPORTED_MODULE_2__["SubscriptionComponent"]));



/***/ }),

/***/ "./src/app/job-view/job-status.ts":
/*!****************************************!*\
  !*** ./src/app/job-view/job-status.ts ***!
  \****************************************/
/*! exports provided: JobStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobStatus", function() { return JobStatus; });
var JobStatus;
(function (JobStatus) {
    JobStatus[JobStatus["Running"] = 0] = "Running";
    JobStatus[JobStatus["Completed"] = 1] = "Completed";
    JobStatus[JobStatus["Failed"] = 2] = "Failed";
})(JobStatus || (JobStatus = {}));


/***/ }),

/***/ "./src/app/job-view/job-type.ts":
/*!**************************************!*\
  !*** ./src/app/job-view/job-type.ts ***!
  \**************************************/
/*! exports provided: JobType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobType", function() { return JobType; });
var JobType;
(function (JobType) {
    JobType[JobType["Upload"] = 0] = "Upload";
    JobType[JobType["Download"] = 1] = "Download";
})(JobType || (JobType = {}));


/***/ }),

/***/ "./src/app/job-view/job-view.module.ts":
/*!*********************************************!*\
  !*** ./src/app/job-view/job-view.module.ts ***!
  \*********************************************/
/*! exports provided: JobViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobViewModule", function() { return JobViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-list/job-list.component */ "./src/app/job-view/job-list/job-list.component.ts");
/* harmony import */ var _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../infrastructure/infrastructure.module */ "./src/app/infrastructure/infrastructure.module.ts");
/* harmony import */ var _job_item_job_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./job-item/job-item.component */ "./src/app/job-view/job-item/job-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var JobViewModule = /** @class */ (function () {
    function JobViewModule() {
    }
    JobViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_3__["InfrastructureModule"]],
            declarations: [_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_2__["JobListComponent"], _job_item_job_item_component__WEBPACK_IMPORTED_MODULE_4__["JobItemComponent"]],
            exports: [_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_2__["JobListComponent"]],
        })
    ], JobViewModule);
    return JobViewModule;
}());



/***/ }),

/***/ "./src/app/job-view/job.service.ts":
/*!*****************************************!*\
  !*** ./src/app/job-view/job.service.ts ***!
  \*****************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _job_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-status */ "./src/app/job-view/job-status.ts");
/* harmony import */ var _job_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-type */ "./src/app/job-view/job-type.ts");
/* harmony import */ var _infrastructure_services_electron_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../infrastructure/services/electron.service */ "./src/app/infrastructure/services/electron.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobService = /** @class */ (function () {
    function JobService(electron) {
        this.electron = electron;
        this._jobs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this._jobObj = {};
        this._jobList = [];
        this.Jobs = this._jobs.asObservable();
    }
    JobService.prototype.init = function () {
        var _this = this;
        this.electron.onCD('Jobs-Created', function (event, arg) {
            var type = _job_type__WEBPACK_IMPORTED_MODULE_3__["JobType"].Download;
            if (arg.type === 'upload') {
                type = _job_type__WEBPACK_IMPORTED_MODULE_3__["JobType"].Upload;
            }
            _this.createJob(type, arg.id, arg.from, arg.to, arg.localFile);
        });
        this.electron.onCD('Jobs-Completed', function (event, arg) {
            _this.updateJobStatus(arg.id, _job_status__WEBPACK_IMPORTED_MODULE_2__["JobStatus"].Completed);
        });
        this.electron.onCD('Jobs-Failed', function (event, arg) {
            _this.updateJobStatus(arg.id, _job_status__WEBPACK_IMPORTED_MODULE_2__["JobStatus"].Failed);
            _this.updateJobMessage(arg.id, arg.error);
        });
        this.electron.onCD('Jobs-Progress', function (event, arg) {
            _this.updatePercentage(arg.id, arg.percentage, arg.loaded, arg.total);
        });
    };
    JobService.prototype.clearNotRunningJobs = function () {
        var _this = this;
        var idToDelete = [];
        this._jobList.forEach(function (j) {
            if (j.status !== _job_status__WEBPACK_IMPORTED_MODULE_2__["JobStatus"].Running) {
                idToDelete.push(j.id);
            }
        });
        idToDelete.forEach(function (id) {
            _this._jobList.splice(_this._jobList.indexOf(_this._jobObj[id]), 1);
        });
        this._jobs.next(this._jobList);
    };
    JobService.prototype.createJob = function (type, id, from, to, localFile) {
        if (from === void 0) { from = ''; }
        if (to === void 0) { to = ''; }
        if (localFile === void 0) { localFile = ''; }
        var newJob = new JobItem(id, type, _job_status__WEBPACK_IMPORTED_MODULE_2__["JobStatus"].Running, from, to, localFile);
        this._jobObj[id] = newJob;
        this._jobList.push(newJob);
        this._jobs.next(this._jobList);
        return id;
    };
    JobService.prototype.updateJobStatus = function (id, s) {
        if (this._jobObj[id]) {
            this._jobObj[id].status = s;
        }
    };
    JobService.prototype.updateJobMessage = function (id, message) {
        if (this._jobObj[id]) {
            this._jobObj[id].message = message;
        }
    };
    JobService.prototype.updatePercentage = function (id, p, loaded, total) {
        if (this._jobObj[id]) {
            this._jobObj[id].percentage = p;
            this._jobObj[id].loaded = loaded;
            this._jobObj[id].total = total;
        }
    };
    JobService.prototype.openJobFileLocation = function (id) {
        var job = this._jobObj[id];
        if (job && job.localFile) {
            this.electron.send('Application-ShowInFolder', { path: job.localFile });
        }
    };
    JobService.prototype.stopJob = function (id) {
        var job = this._jobObj[id];
        if (job) {
            this.electron.send('Jobs-Abort', { id: id });
        }
    };
    JobService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_infrastructure_services_electron_service__WEBPACK_IMPORTED_MODULE_4__["ElectronService"]])
    ], JobService);
    return JobService;
}());

var JobItem = /** @class */ (function () {
    function JobItem(i, t, s, f, to, lf) {
        this.from = '';
        this.to = '';
        this.localFile = '';
        this.loaded = 0;
        this.total = 0;
        this.id = i;
        this.type = t;
        this.status = s;
        this.percentage = 0;
        this.from = f;
        this.to = to;
        this.localFile = lf;
    }
    return JobItem;
}());


/***/ }),

/***/ "./src/app/page.scss":
/*!***************************!*\
  !*** ./src/app/page.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%; }\n\n.page-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative; }\n\n.page-container .page-contents {\n    height: 100%;\n    position: relative;\n    min-height: 0; }\n\n.page-container .page-header-overlay {\n    width: 100%;\n    position: absolute;\n    height: 25%; }\n\n.side-header-container {\n  width: 100%;\n  position: relative;\n  padding: 10px 30px;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: flex-end; }\n\n.side-header-container.left {\n    justify-content: flex-start; }\n\n.side-header-container .settings-icon {\n    font-size: 32px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    cursor: pointer;\n    position: relative;\n    margin-right: 10px; }\n\n.side-header-container .settings-icon .badge {\n      position: absolute;\n      top: 5px;\n      left: 5px;\n      border-radius: 50%;\n      width: 18px;\n      height: 18px;\n      color: white;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 26px; }\n\n.side-header-container .settings-icon:hover {\n      background-color: var(--lighter); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9nYXBsbzkxNy9TM1dlYlVwbG9hZGVyL3NyYy9hcHAvcGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBTHRCO0lBT1EsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhLEVBQUE7O0FBVHJCO0lBWVEsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXLEVBQUE7O0FBR25CO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGNBQWM7RUFDZCx5QkFBeUIsRUFBQTs7QUFON0I7SUFRUSwyQkFBMkIsRUFBQTs7QUFSbkM7SUFXUSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0IsRUFBQTs7QUFwQjFCO01Bc0JZLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsU0FBUztNQUNULGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsWUFBWTtNQUNaLFlBQVk7TUFDWixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixlQUFlLEVBQUE7O0FBaEMzQjtNQW1DWSxnQ0FBZ0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wYWdlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLnBhZ2UtY29udGVudHMge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWluLWhlaWdodDogMDtcbiAgICB9XG4gICAgLnBhZ2UtaGVhZGVyLW92ZXJsYXkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDI1JTtcbiAgICB9XG59XG4uc2lkZS1oZWFkZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICYubGVmdHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgICAuc2V0dGluZ3MtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgLmJhZGdlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlcik7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/request-tracking/request-tracking.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/request-tracking/request-tracking.module.ts ***!
  \*************************************************************/
/*! exports provided: RequestTrackingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestTrackingModule", function() { return RequestTrackingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../infrastructure/infrastructure.module */ "./src/app/infrastructure/infrastructure.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RequestTrackingModule = /** @class */ (function () {
    function RequestTrackingModule() {
    }
    RequestTrackingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_2__["InfrastructureModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [],
        })
    ], RequestTrackingModule);
    return RequestTrackingModule;
}());



/***/ }),

/***/ "./src/app/request-tracking/services/request-tracking.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/request-tracking/services/request-tracking.service.ts ***!
  \***********************************************************************/
/*! exports provided: RequestTrackingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestTrackingService", function() { return RequestTrackingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_infrastructure_services_electron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/infrastructure/services/electron.service */ "./src/app/infrastructure/services/electron.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestTrackingService = /** @class */ (function () {
    function RequestTrackingService(electron) {
        this.electron = electron;
        this._requests = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.RequestCounts = this._requests.asObservable();
    }
    RequestTrackingService.prototype.init = function () {
        var _this = this;
        this.electron.onCD('RequestTracking-Updated', function (event, arg) {
            _this._requests.next(arg.requests.S3.generic);
        });
    };
    RequestTrackingService.prototype.resetRequests = function () {
        this.electron.send('RequestTracking-Reset', {});
    };
    RequestTrackingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [src_app_infrastructure_services_electron_service__WEBPACK_IMPORTED_MODULE_1__["ElectronService"]])
    ], RequestTrackingService);
    return RequestTrackingService;
}());



/***/ }),

/***/ "./src/app/router.animation.ts":
/*!*************************************!*\
  !*** ./src/app/router.animation.ts ***!
  \*************************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))], { optional: true }),
    ]),
]);


/***/ }),

/***/ "./src/app/services/accounts.ts":
/*!**************************************!*\
  !*** ./src/app/services/accounts.ts ***!
  \**************************************/
/*! exports provided: ElectronAccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectronAccountsService", function() { return ElectronAccountsService; });
/* harmony import */ var _message_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-bus */ "./src/app/services/message-bus.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ElectronAccountsService = /** @class */ (function () {
    function ElectronAccountsService(messageBus) {
        var _this = this;
        this.messageBus = messageBus;
        this.accounts = [];
        // TODO: Restore
        // this.accountsFile = path.join(appDir, 'accounts.json');
        this.messageBus.on('Accounts-AddAccount', function (event, arg) {
            _this.AddAccount(arg);
        });
    }
    ElectronAccountsService.prototype.initialize = function () {
        this.LoadAccounts();
    };
    ElectronAccountsService.prototype.AddAccount = function (acc) {
        if (!this.accounts.find(function (_) { return _.id === acc.id; }) && acc.id) {
            this.accounts.push(acc);
            this.SaveAccoutns();
            this.messageBus.send('Accounts-AccountAdded', acc);
        }
    };
    ElectronAccountsService.prototype.LoadAccounts = function () {
        // TODO: load
        // if (fs.existsSync(this.accountsFile)) {
        //     this.accounts = JSON.parse(fs.readFileSync(this.accountsFile).toString());
        //     this.messageBus.send('Accounts-AccountsLoaded', this.accounts);
        // }
    };
    ElectronAccountsService.prototype.SaveAccoutns = function () {
        // TODO:save
        // if (!fs.existsSync(this.appDir)) {
        //     fs.mkdirSync(this.appDir);
        // }
        // fs.writeFileSync(this.accountsFile, JSON.stringify(this.accounts), 'utf8');
    };
    ElectronAccountsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_message_bus__WEBPACK_IMPORTED_MODULE_0__["MessageBus"]])
    ], ElectronAccountsService);
    return ElectronAccountsService;
}());



/***/ }),

/***/ "./src/app/services/aws.ts":
/*!*********************************!*\
  !*** ./src/app/services/aws.ts ***!
  \*********************************/
/*! exports provided: ElectronAWSService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectronAWSService", function() { return ElectronAWSService; });
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ "./node_modules/aws-sdk/lib/browser.js");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _message_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-bus */ "./src/app/services/message-bus.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ElectronAWSService = /** @class */ (function () {
    function ElectronAWSService(messageBus) {
        var _this = this;
        this.messageBus = messageBus;
        this.messageBus.on('AWS-InitAccount', function (event, arg) {
            _this.testAccount(arg).then(function (success) {
                if (success) {
                    _this.messageBus.send('AWS-AccountInitialized', arg);
                }
            });
        });
        this.messageBus.on('AWS-TestAccount', function (event, arg) {
            _this.testAccount(arg).then(function (success) {
                if (success) {
                    _this.messageBus.send('AWS-CredentialFound', arg);
                }
                else {
                    _this.messageBus.send('AWS-CredentialNotFound', arg);
                }
            });
        });
    }
    ElectronAWSService.prototype.initialize = function () { };
    ElectronAWSService.prototype.testAccount = function (account) {
        var s3;
        if (account.url) {
            s3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_0__["S3"]({
                endpoint: account.url,
                credentials: new aws_sdk__WEBPACK_IMPORTED_MODULE_0__["Credentials"](account.id, account.secret),
            });
        }
        else {
            s3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_0__["S3"]({
                endpoint: account.url,
                credentials: new aws_sdk__WEBPACK_IMPORTED_MODULE_0__["Credentials"](account.id, account.secret),
            });
        }
        var p = new Promise(function (resolve, reject) {
            s3.listBuckets(function (err, data) {
                if (err) {
                    resolve(false);
                }
                else {
                    resolve(true);
                }
            });
        });
        return p;
    };
    ElectronAWSService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_message_bus__WEBPACK_IMPORTED_MODULE_1__["MessageBus"]])
    ], ElectronAWSService);
    return ElectronAWSService;
}());



/***/ }),

/***/ "./src/app/services/history-storage.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/history-storage.service.ts ***!
  \*****************************************************/
/*! exports provided: ElectronHistoryStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectronHistoryStorage", function() { return ElectronHistoryStorage; });
/* harmony import */ var _message_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-bus */ "./src/app/services/message-bus.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ElectronHistoryStorage = /** @class */ (function () {
    function ElectronHistoryStorage(messageBus) {
        var _this = this;
        this.messageBus = messageBus;
        this.historyFile = this.appDir + 'history.json';
        this.historyEntries = [];
        this.messageBus.on('History-Add', function (event, arg) {
            _this.addEntry(arg.type, arg.name, arg.status);
        });
        this.messageBus.on('History-Clear', function (event, arg) {
            _this.clearHistory();
        });
    }
    ElectronHistoryStorage.prototype.initialize = function () {
        // TODO
        // if (fs.existsSync(this.historyFile)) {
        //     this.load(this.historyFile);
        // }
        this.save();
        this.messageBus.send('History-Changed', { histories: this.getHistory() });
    };
    ElectronHistoryStorage.prototype.clearHistory = function () {
        this.historyEntries = [];
        this.save();
        this.messageBus.send('History-Changed', { histories: this.getHistory() });
    };
    ElectronHistoryStorage.prototype.getHistory = function () {
        return this.historyEntries;
    };
    ElectronHistoryStorage.prototype.addEntry = function (type, name, status) {
        this.historyEntries.unshift({
            type: type,
            name: name,
            status: status,
            time: new Date(),
        });
        if (this.historyEntries.length > 10) {
            this.historyEntries.splice(10, this.historyEntries.length - 10);
        }
        this.save();
        this.messageBus.send('History-Changed', { histories: this.getHistory() });
    };
    ElectronHistoryStorage.prototype.load = function (path) {
        // TODO
        // this.historyEntries = JSON.parse(fs.readFileSync(path).toString());
    };
    ElectronHistoryStorage.prototype.save = function () {
        // TODO
        // if (!fs.existsSync(this.appDir)) {
        //     fs.mkdirSync(this.appDir);
        // }
        // fs.writeFileSync(this.historyFile, JSON.stringify(this.historyEntries), 'utf8');
    };
    ElectronHistoryStorage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_message_bus__WEBPACK_IMPORTED_MODULE_0__["MessageBus"]])
    ], ElectronHistoryStorage);
    return ElectronHistoryStorage;
}());



/***/ }),

/***/ "./src/app/services/job-manager.ts":
/*!*****************************************!*\
  !*** ./src/app/services/job-manager.ts ***!
  \*****************************************/
/*! exports provided: ElectronJobManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectronJobManager", function() { return ElectronJobManager; });
/* harmony import */ var _message_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-bus */ "./src/app/services/message-bus.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ElectronJobManager = /** @class */ (function () {
    function ElectronJobManager(messageBus) {
        var _this = this;
        this.messageBus = messageBus;
        this.jobs = {};
        this.jobsProgress = {};
        this.messageBus.on('Jobs-Abort', function (event, arg) {
            _this.stopJob(arg.id);
        });
    }
    ElectronJobManager.prototype.initialize = function () { };
    // tslint:disable-next-line:max-line-length
    ElectronJobManager.prototype.addJob = function (id, type, request, from, to, localFile) {
        var _this = this;
        this.jobs[id] = request;
        this.messageBus.send('Jobs-Created', { id: id, type: type, from: from, to: to, localFile: localFile });
        if (request) {
            request.on('success', function () {
                _this.completeJob(id);
            });
            request.on('error', function (resp) {
                _this.failJob(id, resp);
            });
            if (type === 'download') {
                request.on('httpDownloadProgress', function (p) {
                    _this.reportProgress(id, p.loaded, p.total);
                });
            }
            else {
                request.on('httpUploadProgress', function (p) {
                    _this.reportProgress(id, p.loaded, p.total);
                });
            }
        }
    };
    // tslint:disable-next-line:max-line-length
    ElectronJobManager.prototype.addManagedUploadJob = function (id, type, request, from, to, localFile) {
        var _this = this;
        this.jobs[id] = request;
        this.messageBus.send('Jobs-Created', { id: id, type: type, from: from, to: to, localFile: localFile });
        if (request) {
            request.on('httpUploadProgress', function (p) {
                _this.reportProgress(id, p.loaded, p.total);
            });
            return request.promise().then(function (data) {
                _this.completeJob(id);
                return Promise.resolve(data);
            }, function (err) {
                _this.failJob(id, err);
                return Promise.reject(err);
            });
        }
        return Promise.reject(new Error('Attempt to add job with no request'));
    };
    ElectronJobManager.prototype.completeJob = function (id) {
        if (this.jobs[id] !== undefined) {
            this.messageBus.send('Jobs-Completed', { id: id });
            delete this.jobs[id];
        }
    };
    ElectronJobManager.prototype.failJob = function (id, error) {
        if (this.jobs[id] !== undefined) {
            this.messageBus.send('Jobs-Failed', { id: id, error: error.message });
            delete this.jobs[id];
            delete this.jobsProgress[id];
        }
    };
    ElectronJobManager.prototype.reportProgress = function (id, loaded, total) {
        if (this.jobs[id] !== undefined) {
            var percentage = Math.round((loaded / total) * 100);
            if (!this.jobsProgress[id] || this.jobsProgress[id] < percentage) {
                this.jobsProgress[id] = percentage;
                this.messageBus.send('Jobs-Progress', { id: id, percentage: percentage, loaded: loaded, total: total });
            }
        }
    };
    ElectronJobManager.prototype.stopJob = function (id) {
        if (this.jobs[id] !== undefined) {
            this.jobs[id].abort();
        }
    };
    ElectronJobManager = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_message_bus__WEBPACK_IMPORTED_MODULE_0__["MessageBus"]])
    ], ElectronJobManager);
    return ElectronJobManager;
}());



/***/ }),

/***/ "./src/app/services/message-bus.ts":
/*!*****************************************!*\
  !*** ./src/app/services/message-bus.ts ***!
  \*****************************************/
/*! exports provided: MessageBus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBus", function() { return MessageBus; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageBus = /** @class */ (function () {
    function MessageBus() {
        this.map = new Map();
    }
    MessageBus.prototype.send = function (key, data) {
        var cbs = this.map.get(key);
        if (cbs !== undefined) {
            // eslint-disable-next-line no-console
            console.debug("Publishing channel " + key + " " + JSON.stringify(data));
            cbs.forEach(function (it) { return it(key, data); });
        }
    };
    MessageBus.prototype.on = function (key, cb) {
        // eslint-disable-next-line no-console
        console.debug("Subscribing channel " + key);
        var cbs = this.map.get(key);
        if (cbs === undefined) {
            this.map.set(key, [cb]);
        }
        else if (Array.isArray(cbs)) {
            this.map.set(key, cbs.concat([cb]));
        }
    };
    MessageBus = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], MessageBus);
    return MessageBus;
}());



/***/ }),

/***/ "./src/app/services/s3.ts":
/*!********************************!*\
  !*** ./src/app/services/s3.ts ***!
  \********************************/
/*! exports provided: ElectronS3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectronS3Service", function() { return ElectronS3Service; });
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ "./node_modules/aws-sdk/lib/browser.js");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _job_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-manager */ "./src/app/services/job-manager.ts");
/* harmony import */ var _message_bus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-bus */ "./src/app/services/message-bus.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




aws_sdk__WEBPACK_IMPORTED_MODULE_0__["config"].apiVersions = {
    s3: '2006-03-01',
};
var ElectronS3Service = /** @class */ (function () {
    function ElectronS3Service(messageBus, jobs) {
        var _this = this;
        this.messageBus = messageBus;
        this.jobs = jobs;
        this.messageBus.on('S3-ListBuckets', function (event, arg) {
            _this.listBuckets(arg).then(function (result) {
                _this.messageBus.send('S3-BucketsListed', { account: arg, buckets: result.Buckets });
            });
        });
        this.messageBus.on('S3-ListObjects', function (event, arg) {
            _this.listObjects(arg.account, arg.bucket, arg.prefix);
        });
        this.messageBus.on('S3-RequestDownload', function (event, arg) {
            _this.downloadFile(arg.jobID, arg.account, arg.bucket, arg.key, arg.saveTo);
        });
        this.messageBus.on('S3-RequestBulkUpload', function (event, arg) {
            _this.bulkUpload(arg.files, arg.parents);
        });
    }
    ElectronS3Service.prototype.downloadFile = function (jobID, account, bucket, key, saveTo) {
        if (saveTo === void 0) { saveTo = ''; }
        var s3 = this.createS3Instance(account);
        var params = {
            Bucket: bucket,
            Key: key,
            Expires: 15,
        };
        s3.getSignedUrl('getObject', params, function (err, url) {
            if (err) {
                // SharedService.showError(params, err);
            }
            else {
                window.open(url, '_blank');
            }
        });
    };
    ElectronS3Service.prototype.bulkUpload = function (files, location) {
        var _this = this;
        var jobs = [];
        // TODO: consolidate/reformat files array, they all belong to 1 account anyway
        // Temporary: just take the first file's account as the result
        var account;
        if (files.length) {
            account = files[0].account;
        }
        files.forEach(function (f) {
            var file = f.file;
            var r = _this.upload(f.account, f.bucket, f.newPath, file);
            // tslint:disable-next-line:max-line-length
            var resultPromise = _this.jobs.addManagedUploadJob(f.jobID, 'upload', r.request, file.name, f.newPath, f.filePath);
            var parents = [f.account.id, f.bucket].concat(f.newPath.split('/'));
            parents.splice(parents.length - 1, 1);
            parents = _this.pruneParentsArray(parents);
            jobs.push(resultPromise
                .then(function (_) {
                _this.messageBus.send('S3-UploadSuccessful', { account: f.account, parents: parents, filename: file.name });
                return Promise.resolve(_);
            })
                .catch(function (err) {
                _this.messageBus.send('S3-UploadFailed', { account: f.account, parents: parents, filename: file.name });
                return Promise.reject(err);
            }));
        });
        Promise.all(jobs)
            .then(function () {
            // tslint:disable-next-line:max-line-length
            _this.messageBus.send('S3-BulkUploadCompleted', { account: account, parents: _this.pruneParentsArray(location) });
        })
            .catch(function () {
            _this.messageBus.send('S3-BulkUploadFailed', { account: account, parents: _this.pruneParentsArray(location) });
        });
    };
    ElectronS3Service.prototype.listObjects = function (account, bucket, prefix, delimiter) {
        var _this = this;
        if (delimiter === void 0) { delimiter = '/'; }
        var parents = [account.id, bucket].concat(prefix.split('/'));
        parents = this.pruneParentsArray(parents);
        this.messageBus.send('S3-ListingObjects', { parents: parents, prefix: prefix });
        this.listObjectsReq(account, bucket, prefix, delimiter)
            .then(function (result) {
            // tslint:disable-next-line:max-line-length
            _this.messageBus.send('S3-ObjectListed', {
                account: account,
                parents: parents,
                objects: result.Contents,
                folders: result.CommonPrefixes,
            });
        })
            .catch(function (err) {
            _this.messageBus.send('S3-OperationFailed', { account: account, parents: parents, error: err });
        });
    };
    ElectronS3Service.prototype.createS3Instance = function (acc) {
        var s3;
        if (acc.url) {
            s3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_0__["S3"]({
                endpoint: acc.url,
                credentials: new aws_sdk__WEBPACK_IMPORTED_MODULE_0__["Credentials"](acc.id, acc.secret),
                s3ForcePathStyle: true,
                signatureVersion: 'v4',
            });
        }
        else {
            s3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_0__["S3"]({
                credentials: new aws_sdk__WEBPACK_IMPORTED_MODULE_0__["Credentials"](acc.id, acc.secret),
                s3ForcePathStyle: true,
                signatureVersion: 'v4',
            });
        }
        return s3;
    };
    ElectronS3Service.prototype.listBuckets = function (account) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var s3 = _this.createS3Instance(account);
            s3.listBuckets(function (err, data) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
        return promise;
    };
    // tslint:disable-next-line:max-line-length
    ElectronS3Service.prototype.listObjectsReq = function (account, bucket, prefix, delimiter) {
        var _this = this;
        if (delimiter === void 0) { delimiter = '/'; }
        var promise = new Promise(function (resolve, reject) {
            var params = {
                Bucket: bucket,
                Prefix: prefix,
                Delimiter: delimiter,
            };
            var s3 = _this.createS3Instance(account);
            s3.listObjectsV2(params, function (err, data) {
                if (err) {
                    reject(err);
                }
                else {
                    if (data.Contents) {
                        data.Contents = data.Contents.filter(function (_) { return _.Key !== prefix; });
                        data.Contents.forEach(function (c) {
                            c.Key = c.Key.replace(prefix, '');
                        });
                    }
                    resolve(data);
                }
            });
        });
        return promise;
    };
    // tslint:disable-next-line:max-line-length
    ElectronS3Service.prototype.getObject = function (account, bucket, key) {
        var _this = this;
        var req = null;
        var promise = new Promise(function (resolve, reject) {
            var params = {
                Bucket: bucket,
                Key: key,
            };
            var s3 = _this.createS3Instance(account);
            req = s3.getObject(params, function (err, data) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
        return { result: promise, request: req };
    };
    ElectronS3Service.prototype.upload = function (account, bucket, key, data) {
        var params = {
            Body: data,
            Bucket: bucket,
            Key: key,
        };
        var s3 = this.createS3Instance(account);
        var req = s3.upload(params);
        return { request: req };
    };
    ElectronS3Service.prototype.pruneParentsArray = function (parents) {
        var res = parents.slice();
        if (res[res.length - 1] === '') {
            res.splice(res.length - 1, 1);
        }
        return res;
    };
    ElectronS3Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_message_bus__WEBPACK_IMPORTED_MODULE_2__["MessageBus"], _job_manager__WEBPACK_IMPORTED_MODULE_1__["ElectronJobManager"]])
    ], ElectronS3Service);
    return ElectronS3Service;
}());



/***/ }),

/***/ "./src/app/settings-page/settings-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/settings-page/settings-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n  <div class=\"side-header-container left\">\n    <div class=\"settings-icon\" id=\"back-btn\" (click)=\"goToHome()\">\n      <i class=\"ion-ios-arrow-round-back\"></i>\n    </div>\n  </div>\n  <div class=\"page-contents container-fluid\">\n    <h1>Settings</h1>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card card-stats mb-4 mb-xl-0\">\n          <div class=\"card-body\">\n            <h2>Prompt For Confirmation On Upload</h2>\n            <small>\n              Uncheck the checkbox to skip confirmation dialog on upload. When confirmation is turned off, all uploads\n              will start as soon as files are dropped and default file name will be used.\n            </small>\n            <app-checkbox (checkedValueChange)=\"updatePrompt($event)\" [(checkedValue)]=\"promptUpload\">\n              Prompt for confirmation\n            </app-checkbox>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row mt-3\">\n      <div class=\"col\">\n        <div class=\"card card-stats mb-4 mb-xl-0\">\n          <div class=\"card-body\">\n            <h2>Download Path</h2>\n            <div>\n              <small>\n                Choose a folder to save downloaded files. The default location is the \"Downloads\" folder under your home\n                directory\n              </small>\n            </div>\n            <div class=\"form-group mt-3\">\n              <input\n                type=\"text\"\n                id=\"download-path-display\"\n                placeholder=\"Default Location\"\n                class=\"form-control form-control-alternative\"\n                disabled\n                [(ngModel)]=\"downloadPath\"\n              />\n            </div>\n            <button class=\"btn btn-primary\" id=\"browse-download-path-btn\" (click)=\"browseDownloadPath()\">\n              Select Download Path\n            </button>\n            <button class=\"btn btn-warning\" id=\"reset-download-path-btn\" (click)=\"resetDownloadPath()\">\n              Reset Download Path\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row mt-3\">\n      <div class=\"col\">\n        <div class=\"card card-stats mb-4 mb-xl-0\">\n          <div class=\"card-body\">\n            <h2>Request Tracking</h2>\n            <div>\n              <small>\n                Request Tracking helps you keep track of requests made to AWS through the app. The numbers are for\n                reference only and may not reflect accurate request counts on AWS. Please check your AWS billing\n                dashboard for the accurate request counts.\n              </small>\n            </div>\n            <div class=\"row\" id=\"request-counts\">\n              <div class=\"col\">\n                <h5>GET: {{ requestCounts['0'] }}</h5>\n              </div>\n              <div class=\"col\">\n                <h5>PUT: {{ requestCounts['1'] }}</h5>\n              </div>\n              <div class=\"col\">\n                <h5>COPY: {{ requestCounts['2'] }}</h5>\n              </div>\n              <div class=\"col\">\n                <h5>POST: {{ requestCounts['3'] }}</h5>\n              </div>\n              <div class=\"col\">\n                <h5>DELETE: {{ requestCounts['4'] }}</h5>\n              </div>\n              <div class=\"col\">\n                <h5>LIST: {{ requestCounts['5'] }}</h5>\n              </div>\n              <div class=\"col\">\n                <h5>SELECT: {{ requestCounts['6'] }}</h5>\n              </div>\n            </div>\n            <button class=\"btn btn-danger mt-2\" id=\"reset-request-btn\" (click)=\"resetRequests()\">\n              Reset Request Count\n            </button>\n            <button class=\"btn btn-warning mt-2\" id=\"clear-history-btn\" (click)=\"clearHistories()\">\n              Clear Upload/Download Histories\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row mt-3\">\n      <div class=\"col\">\n        <div class=\"card card-stats mb-4 mb-xl-0\">\n          <div class=\"card-body\">\n            <h2>Usage Data Collection</h2>\n            <a href=\"javascript:void(0)\" (click)=\"openDataCollectionSupplement()\">\n              Click here to see the Data Collection Supplement\n            </a>\n            <app-checkbox (checkedValueChange)=\"changeAnalyticsOpt($event)\" [(checkedValue)]=\"optInAnalytics\">\n              Opt-in For Anonymous Usage Data Collection\n            </app-checkbox>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row mt-3\">\n      <div class=\"col-12\">\n        <div class=\"card card-stats mb-4 mb-xl-0\">\n          <div class=\"card-body\">\n            <h2>About</h2>\n            <h5>S3Uploader version 0.2.0 MIT Licensed.</h5>\n            <h5>\n              For help, issues and suggestions, see our\n              <a href=\"javascript:void(0)\" (click)=\"openIssuesPage()\">Github page</a>\n            </h5>\n            <h5>If you like this app, you can support it by</h5>\n            <style>\n              .bmc-button img {\n                width: 27px !important;\n                margin-bottom: 1px !important;\n                box-shadow: none !important;\n                border: none !important;\n                vertical-align: middle !important;\n              }\n\n              .bmc-button {\n                line-height: 36px !important;\n                height: 37px !important;\n                text-decoration: none !important;\n                display: inline-flex !important;\n                color: #ffffff !important;\n                background-color: #ff813f !important;\n                border-radius: 3px !important;\n                border: 1px solid transparent !important;\n                padding: 0px 9px !important;\n                font-size: 17px !important;\n                letter-spacing: -0.08px !important;\n                margin: 0 auto !important;\n                font-family: 'Lato', sans-serif !important;\n                -webkit-box-sizing: border-box !important;\n                box-sizing: border-box !important;\n                -o-transition: 0.3s all linear !important;\n                -webkit-transition: 0.3s all linear !important;\n                -moz-transition: 0.3s all linear !important;\n                -ms-transition: 0.3s all linear !important;\n                transition: 0.3s all linear !important;\n              }\n\n              .bmc-button:hover,\n              .bmc-button:active,\n              .bmc-button:focus {\n                text-decoration: none !important;\n                opacity: 0.85 !important;\n                color: #ffffff !important;\n              }\n            </style>\n            <link href=\"https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext\" rel=\"stylesheet\" />\n            <a class=\"bmc-button\" target=\"_blank\" href=\"javascript:void(0)\" (click)=\"openBMC()\">\n              <img src=\"https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg\" alt=\"Buy me a tea\" />\n              <span style=\"margin-left:5px\">Buy me a tea</span>\n            </a>\n            <br />\n            <h5 *ngIf=\"updaterStatus === UpdaterStatusEnum.UpdateAvailable\">\n              Update available! New version: {{ updateVersion }}\n            </h5>\n            <div style=\"display: flex; align-items: center\">\n              <app-spinner\n                *ngIf=\"\n                  updaterStatus === UpdaterStatusEnum.CheckingUpdate ||\n                  updaterStatus === UpdaterStatusEnum.DownloadingUpdate\n                \"\n              ></app-spinner>\n              <small *ngIf=\"updaterStatus === UpdaterStatusEnum.DownloadingUpdate\" class=\"ml-2\">\n                Downloading: {{ updateDownloadProgress }}%\n              </small>\n            </div>\n            <button\n              *ngIf=\"updaterStatus === UpdaterStatusEnum.NoUpdateAvailable\"\n              class=\"btn btn-primary\"\n              id=\"check-update-btn\"\n              (click)=\"checkForUpdate()\"\n            >\n              Check For Update\n            </button>\n            <button\n              *ngIf=\"updaterStatus === UpdaterStatusEnum.UpdateAvailable\"\n              class=\"btn btn-primary\"\n              id=\"install-update-btn\"\n              (click)=\"installUpdate()\"\n            >\n              Install Update\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/settings-page/settings-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/settings-page/settings-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzLXBhZ2Uvc2V0dGluZ3MtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/settings-page/settings-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/settings-page/settings-page.component.ts ***!
  \**********************************************************/
/*! exports provided: SettingsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageComponent", function() { return SettingsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _request_tracking_services_request_tracking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request-tracking/services/request-tracking.service */ "./src/app/request-tracking/services/request-tracking.service.ts");
/* harmony import */ var _infrastructure_subscription_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../infrastructure/subscription-component */ "./src/app/infrastructure/subscription-component.ts");
/* harmony import */ var _aws_s3_services_s3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../aws-s3/services/s3.service */ "./src/app/aws-s3/services/s3.service.ts");
/* harmony import */ var _histories_services_histories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../histories/services/histories.service */ "./src/app/histories/services/histories.service.ts");
/* harmony import */ var _aws_s3_services_request_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../aws-s3/services/request-upload.service */ "./src/app/aws-s3/services/request-upload.service.ts");
/* harmony import */ var _infrastructure_services_updater_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../infrastructure/services/updater.service */ "./src/app/infrastructure/services/updater.service.ts");
/* harmony import */ var _infrastructure_services_analytics_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../infrastructure/services/analytics.service */ "./src/app/infrastructure/services/analytics.service.ts");
/* harmony import */ var _infrastructure_services_electron_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../infrastructure/services/electron.service */ "./src/app/infrastructure/services/electron.service.ts");
/* harmony import */ var _infrastructure_analytics_tracked__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../infrastructure/analytics-tracked */ "./src/app/infrastructure/analytics-tracked.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SettingsPageComponent = /** @class */ (function (_super) {
    __extends(SettingsPageComponent, _super);
    function SettingsPageComponent(router, s3, requestTracking, histories, upload, updater, analytics, electron) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.s3 = s3;
        _this.requestTracking = requestTracking;
        _this.histories = histories;
        _this.upload = upload;
        _this.updater = updater;
        _this.analytics = analytics;
        _this.electron = electron;
        _this.promptUpload = true;
        _this.downloadPath = '';
        _this.updaterStatus = _infrastructure_services_updater_service__WEBPACK_IMPORTED_MODULE_7__["UpdaterStatus"].NoUpdateAvailable;
        _this.UpdaterStatusEnum = _infrastructure_services_updater_service__WEBPACK_IMPORTED_MODULE_7__["UpdaterStatus"];
        _this.updateVersion = '';
        _this.updateDownloadProgress = 0;
        _this.optInAnalytics = false;
        return _this;
    }
    SettingsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recordSubscription(this.requestTracking.RequestCounts.subscribe(function (_) {
            _this.requestCounts = _;
        }));
        this.recordSubscription(this.s3.DownloadPath.subscribe(function (d) {
            _this.downloadPath = d;
        }));
        this.recordSubscription(this.updater.updaterStatus.subscribe(function (_) {
            _this.updaterStatus = _;
        }));
        this.recordSubscription(this.updater.updateVersion.subscribe(function (_) {
            _this.updateVersion = _;
        }));
        this.recordSubscription(this.updater.updateDownloadProgress.subscribe(function (_) {
            _this.updateDownloadProgress = _;
        }));
        this.recordSubscription(this.analytics.enabled.subscribe(function (_) {
            _this.optInAnalytics = _ === true;
        }));
        this.promptUpload = this.upload.toPrompt;
    };
    SettingsPageComponent.prototype.goToHome = function () {
        this.router.navigateByUrl('/home');
    };
    SettingsPageComponent.prototype.resetRequests = function () {
        this.requestTracking.resetRequests();
    };
    SettingsPageComponent.prototype.resetDownloadPath = function () {
        this.s3.resetDownloadPath();
    };
    SettingsPageComponent.prototype.browseDownloadPath = function () {
        this.s3.browseDownloadPath();
    };
    SettingsPageComponent.prototype.clearHistories = function () {
        this.histories.clearHistory();
    };
    SettingsPageComponent.prototype.updatePrompt = function (val) {
        this.s3.changeUploadPromptSetting(val);
    };
    SettingsPageComponent.prototype.checkForUpdate = function () {
        this.updater.checkUpdate();
    };
    SettingsPageComponent.prototype.installUpdate = function () {
        this.updater.installUpdate();
    };
    SettingsPageComponent.prototype.changeAnalyticsOpt = function (optIn) {
        this.analytics.changeOpt(optIn);
    };
    SettingsPageComponent.prototype.openDataCollectionSupplement = function () {
        this.electron.send('Application-OpenSecondary', { address: 'data.html' });
    };
    SettingsPageComponent.prototype.openIssuesPage = function () {
        this.electron.send('Application-OpenExternal', { address: 'https://github.com/Yamazaki93/s3uploader' });
    };
    SettingsPageComponent.prototype.openBMC = function () {
        this.electron.send('Application-OpenExternal', { address: 'https://www.buymeacoffee.com/mjCsGWDTS' });
    };
    SettingsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings-page',
            template: __webpack_require__(/*! ./settings-page.component.html */ "./src/app/settings-page/settings-page.component.html"),
            styles: [__webpack_require__(/*! ../page.scss */ "./src/app/page.scss"), __webpack_require__(/*! ./settings-page.component.scss */ "./src/app/settings-page/settings-page.component.scss")]
        }),
        Object(_infrastructure_analytics_tracked__WEBPACK_IMPORTED_MODULE_10__["AnalyticsTracked"])('SettingsPageComponent'),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _aws_s3_services_s3_service__WEBPACK_IMPORTED_MODULE_4__["S3Service"],
            _request_tracking_services_request_tracking_service__WEBPACK_IMPORTED_MODULE_2__["RequestTrackingService"],
            _histories_services_histories_service__WEBPACK_IMPORTED_MODULE_5__["HistoriesService"],
            _aws_s3_services_request_upload_service__WEBPACK_IMPORTED_MODULE_6__["RequestUploadService"],
            _infrastructure_services_updater_service__WEBPACK_IMPORTED_MODULE_7__["UpdaterService"],
            _infrastructure_services_analytics_service__WEBPACK_IMPORTED_MODULE_8__["AnalyticsService"],
            _infrastructure_services_electron_service__WEBPACK_IMPORTED_MODULE_9__["ElectronService"]])
    ], SettingsPageComponent);
    return SettingsPageComponent;
}(_infrastructure_subscription_component__WEBPACK_IMPORTED_MODULE_3__["SubscriptionComponent"]));



/***/ }),

/***/ "./src/app/side-header/side-header.component.html":
/*!********************************************************!*\
  !*** ./src/app/side-header/side-header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-header-container\">\n  <div class=\"settings-icon\">\n    <i class=\"ion-ios-settings\"></i>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/side-header/side-header.component.scss":
/*!********************************************************!*\
  !*** ./src/app/side-header/side-header.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 48px; }\n\n.side-header-container {\n  width: 100%;\n  position: relative;\n  padding: 20px 30px;\n  display: flex;\n  justify-content: flex-end; }\n\n.side-header-container .settings-icon {\n    font-size: 32px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    cursor: pointer; }\n\n.side-header-container .settings-icon:hover {\n      background-color: var(--lighter); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9nYXBsbzkxNy9TM1dlYlVwbG9hZGVyL3NyYy9hcHAvc2lkZS1oZWFkZXIvc2lkZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVoQjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFMN0I7SUFPUSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFFbEIsZUFBZSxFQUFBOztBQWZ2QjtNQWlCWSxnQ0FBZ0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NpZGUtaGVhZGVyL3NpZGUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDhweDtcbn1cbi5zaWRlLWhlYWRlci1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgLnNldHRpbmdzLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXIpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/side-header/side-header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/side-header/side-header.component.ts ***!
  \******************************************************/
/*! exports provided: SideHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideHeaderComponent", function() { return SideHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideHeaderComponent = /** @class */ (function () {
    function SideHeaderComponent() {
    }
    SideHeaderComponent.prototype.ngOnInit = function () { };
    SideHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-header',
            template: __webpack_require__(/*! ./side-header.component.html */ "./src/app/side-header/side-header.component.html"),
            styles: [__webpack_require__(/*! ./side-header.component.scss */ "./src/app/side-header/side-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SideHeaderComponent);
    return SideHeaderComponent;
}());



/***/ }),

/***/ "./src/app/side-nav/side-nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/side-nav/side-nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-container d-flex flex-column\">\n  <div class=\"title-container d-flex\">\n    <div style=\"width: 100%;\">Upload Progress</div>\n    <div\n      class=\"action-icon\"\n      (click)=\"clearNotRunningJobs()\"\n      appTooltip\n      tooltipTitle=\"Remove all non-running jobs\"\n      tooltipPlacement=\"bottom\"\n    >\n      <i class=\"ion-ios-trash\"></i>\n    </div>\n  </div>\n  <div class=\"job-list\">\n    <app-job-list></app-job-list>\n  </div>\n  <div class=\"title-container d-flex\">\n    <div style=\"width: 100%;\">Accounts</div>\n    <div class=\"action-icon\" (click)=\"onCollapseAll()\">\n      <i class=\"ion-ios-arrow-up\"></i>\n    </div>\n    <div\n      class=\"action-icon\"\n      (click)=\"openAddAccount()\"\n      appTooltip\n      tooltipTitle=\"Add new AWS Account\"\n      tooltipPlacement=\"right\"\n    >\n      <i class=\"ion-ios-add\"></i>\n    </div>\n  </div>\n  <div class=\"account-list\">\n    <app-tree-view></app-tree-view>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/side-nav/side-nav.component.scss":
/*!**************************************************!*\
  !*** ./src/app/side-nav/side-nav.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%; }\n\n.nav-container {\n  height: 100%;\n  width: 100%;\n  background: #FFF;\n  overflow: hidden; }\n\n.title-container {\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);\n  padding: 3px 8px;\n  font-size: 15px;\n  background: #f8f9fe; }\n\n.action-icon {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 19px;\n  cursor: pointer; }\n\n.action-icon:hover {\n    background: rgba(0, 0, 0, 0.1); }\n\n.job-list {\n  max-height: 50%;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.account-list {\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  min-height: 0;\n  flex: 1;\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9nYXBsbzkxNy9TM1dlYlVwbG9hZGVyL3NyYy9hcHAvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLHNDQUFzQztFQUN0QyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQVRuQjtJQVdRLDhCQUE4QixFQUFBOztBQUl0QztFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLE9BQU87RUFDUCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm5hdi1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50aXRsZS1jb250YWluZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmU7XG59XG5cbi5hY3Rpb24taWNvbntcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIH1cbn1cblxuLmpvYi1saXN0IHtcbiAgICBtYXgtaGVpZ2h0OiA1MCU7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5hY2NvdW50LWxpc3Qge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAwO1xuICAgIGZsZXg6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/side-nav/side-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/side-nav/side-nav.component.ts ***!
  \************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _infrastructure_services_dom_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../infrastructure/services/dom.service */ "./src/app/infrastructure/services/dom.service.ts");
/* harmony import */ var _aws_accounts_add_account_add_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../aws-accounts/add-account/add-account.component */ "./src/app/aws-accounts/add-account/add-account.component.ts");
/* harmony import */ var _tree_view_services_selection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tree-view/services/selection.service */ "./src/app/tree-view/services/selection.service.ts");
/* harmony import */ var _job_view_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../job-view/job.service */ "./src/app/job-view/job.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(dom, sel, jobs) {
        this.dom = dom;
        this.sel = sel;
        this.jobs = jobs;
    }
    SideNavComponent.prototype.ngOnInit = function () { };
    SideNavComponent.prototype.openAddAccount = function () {
        var elem = this.dom.appendComponentToBody(_aws_accounts_add_account_add_account_component__WEBPACK_IMPORTED_MODULE_2__["AddAccountComponent"]);
        elem.instance.toClose.subscribe(function (_) {
            elem.destroy();
        });
    };
    SideNavComponent.prototype.onCollapseAll = function () {
        this.sel.CollapseAll.emit();
    };
    SideNavComponent.prototype.clearNotRunningJobs = function () {
        this.jobs.clearNotRunningJobs();
    };
    SideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/side-nav/side-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_infrastructure_services_dom_service__WEBPACK_IMPORTED_MODULE_1__["DomService"], _tree_view_services_selection_service__WEBPACK_IMPORTED_MODULE_3__["SelectionService"], _job_view_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/tree-view/services/selection.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/tree-view/services/selection.service.ts ***!
  \*********************************************************/
/*! exports provided: SelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionService", function() { return SelectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectionService = /** @class */ (function () {
    function SelectionService() {
        this.RequestSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.CollapseAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SelectionService.prototype.selectItem = function (path) {
        var paths = path.split('/');
        this.RequestSelect.emit({ path: paths });
    };
    SelectionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], SelectionService);
    return SelectionService;
}());



/***/ }),

/***/ "./src/app/tree-view/tree-item/tree-item.component.html":
/*!**************************************************************!*\
  !*** ./src/app/tree-view/tree-item/tree-item.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tree-item\" (click)=\"onClick($event)\">\n  <div\n    class=\"drop-target d-flex\"\n    style=\"position: relative;\"\n    [class.busy]=\"loading\"\n    (drop)=\"drop($event)\"\n    (dragenter)=\"dragEnter($event)\"\n    (dragleave)=\"dragLeave($event)\"\n  >\n    <div class=\"tree-icon ml-2 mr-2\">\n      <div style=\"min-width: 12px;\" (click)=\"onExpand($event)\">\n        <i\n          *ngIf=\"item && item.subItems\"\n          [class.ion-ios-arrow-down]=\"item && item.expand\"\n          [class.ion-ios-arrow-up]=\"item && !item.expand\"\n        ></i>\n      </div>\n    </div>\n    <div class=\"tree-icon mr-2\">\n      <i\n        [class.ion-ios-folder]=\"getNodeType() === 'f'\"\n        [class.ion-ios-cloud-download]=\"getNodeType() === 'fi'\"\n        [class.ion-ios-contact]=\"getNodeType() === 'a'\"\n        [class.ion-ios-archive]=\"getNodeType() === 'b'\"\n        [class.ion-ios-cube]=\"getNodeType() === 'c'\"\n        [class.blue]=\"getNodeType() === 'a'\"\n        (click)=\"getNodeType() === 'fi' ? onDblClick($event) : null\"\n      ></i>\n    </div>\n    <div class=\"tree-content\">\n      <span *ngIf=\"item\">{{ item.name }}</span>\n    </div>\n    <div class=\"tree-icon mr-2 ml-2\">\n      <app-spinner *ngIf=\"loading\" [size]=\"'16'\"></app-spinner>\n      <i class=\"drop-hint ion-ios-cloud-upload\" [class.dragged-over]=\"draggedOver\"></i>\n    </div>\n    <div class=\"ml-2 item-actions\" *ngIf=\"getNodeType() !== 'c' && getNodeType() !== 'fi'\">\n      <div class=\"action-button\" (click)=\"onRefresh($event)\">\n        <i class=\"ion-ios-refresh\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"sub-items smooth\" *ngIf=\"item && item.subItems && item.expand\" [class.toggled]=\"item && item.expand\">\n    <app-tree-item *ngFor=\"let node of item.subItems\" [item]=\"node\" [loading]=\"node.busy\"></app-tree-item>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tree-view/tree-item/tree-item.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/tree-view/tree-item/tree-item.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  position: relative; }\n\n.tree-item {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  position: relative; }\n\n.tree-item .drop-target:hover {\n    background-color: rgba(0, 0, 0, 0.05); }\n\n.tree-item .ion-ios-cloud-download:hover {\n    color: orange; }\n\n.tree-item .tree-icon {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n\n.tree-item .tree-icon i {\n      font-size: 16px; }\n\n.tree-item .item-actions {\n    position: absolute;\n    right: -15px; }\n\n.tree-item .item-actions .action-button:hover i {\n      color: var(--light); }\n\n.tree-item .tree-content {\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    font-size: 14px;\n    text-overflow: ellipsis;\n    line-height: 24px; }\n\n.tree-item .sub-items {\n    max-height: 0;\n    width: 100%;\n    padding-left: 10px;\n    overflow: hidden; }\n\n.tree-item .sub-items.toggled {\n      max-height: inherit !important; }\n\n.tree-item:hover > div:not(.busy):hover > .item-actions {\n    right: 10px; }\n\n.tree-item .drop-hint {\n    display: none; }\n\n.tree-item .drop-hint.dragged-over {\n      display: block; }\n\n.blue {\n  color: var(--blue); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9nYXBsbzkxNy9TM1dlYlVwbG9hZGVyL3NyYy9hcHAvdHJlZS12aWV3L3RyZWUtaXRlbS90cmVlLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUx0QjtJQU9NLHFDQUFxQyxFQUFBOztBQVAzQztJQVdRLGFBQWEsRUFBQTs7QUFYckI7SUFlUSxjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBQTs7QUFsQi9CO01Bb0JZLGVBQWUsRUFBQTs7QUFwQjNCO0lBd0JRLGtCQUFrQjtJQUNsQixZQUFZLEVBQUE7O0FBekJwQjtNQTRCZ0IsbUJBQW1CLEVBQUE7O0FBNUJuQztJQWlDUSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGlCQUFpQixFQUFBOztBQXRDekI7SUF5Q1EsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7O0FBNUN4QjtNQThDWSw4QkFBOEIsRUFBQTs7QUE5QzFDO0lBbURZLFdBQVcsRUFBQTs7QUFuRHZCO0lBdURRLGFBQWEsRUFBQTs7QUF2RHJCO01BeURZLGNBQWMsRUFBQTs7QUFLMUI7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RyZWUtdmlldy90cmVlLWl0ZW0vdHJlZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRyZWUtaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmRyb3AtdGFyZ2V0OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgfVxuICAgIC5pb24taW9zLWNsb3VkLWRvd25sb2FkIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogb3JhbmdlO1xuICAgICAgfVxuICAgIH1cbiAgICAudHJlZS1pY29uIHtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaXRlbS1hY3Rpb25zIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogLTE1cHg7XG4gICAgICAgIC5hY3Rpb24tYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRyZWUtY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICB9XG4gICAgLnN1Yi1pdGVtcyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICYudG9nZ2xlZCB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJjpob3ZlciA+IGRpdjpub3QoLmJ1c3kpOmhvdmVyIHtcbiAgICAgICAgJiA+Lml0ZW0tYWN0aW9ucyB7XG4gICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZHJvcC1oaW50IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgJi5kcmFnZ2VkLW92ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ibHVlIHtcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/tree-view/tree-item/tree-item.component.ts":
/*!************************************************************!*\
  !*** ./src/app/tree-view/tree-item/tree-item.component.ts ***!
  \************************************************************/
/*! exports provided: TreeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeItemComponent", function() { return TreeItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tree_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tree-node */ "./src/app/tree-view/tree-node.ts");
/* harmony import */ var src_app_aws_s3_services_s3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/aws-s3/services/s3.service */ "./src/app/aws-s3/services/s3.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_aws_s3_services_request_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/aws-s3/services/request-upload.service */ "./src/app/aws-s3/services/request-upload.service.ts");
/* harmony import */ var src_app_collectfiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/collectfiles */ "./src/app/collectfiles.ts");
/* harmony import */ var src_app_infrastructure_subscription_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/infrastructure/subscription-component */ "./src/app/infrastructure/subscription-component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TreeItemComponent = /** @class */ (function (_super) {
    __extends(TreeItemComponent, _super);
    function TreeItemComponent(s3, upload, router) {
        var _this = _super.call(this) || this;
        _this.s3 = s3;
        _this.upload = upload;
        _this.router = router;
        _this.loading = false;
        _this.draggedOver = false;
        _this._nodetype = '';
        _this.dragCount = 0;
        return _this;
    }
    TreeItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recordSubscription(this.s3.RefreshingObjects.subscribe(function (res) {
            if (_this.item && res.parents.join('/') === _this.item.path) {
                _this.item.busy = true;
            }
        }));
    };
    TreeItemComponent.prototype.onRefresh = function (event) {
        if (this.item) {
            this.item.subItems = [];
            this.item.refresh(this.s3);
        }
        event.stopPropagation();
    };
    TreeItemComponent.prototype.onDblClick = function (event) {
        event.stopPropagation();
        if (this.item) {
            ;
            this.item.action(this.s3);
        }
    };
    TreeItemComponent.prototype.onClick = function (event) {
        if (this.item instanceof _tree_node__WEBPACK_IMPORTED_MODULE_1__["BucketNode"] || this.item instanceof _tree_node__WEBPACK_IMPORTED_MODULE_1__["FolderNode"]) {
            var node = this.item;
            node.expand = true;
            if (node && !node.enumerated) {
                node.refresh(this.s3);
                node.enumerated = true;
            }
            this.router.navigateByUrl("/browse/" + node.path);
        }
        event.stopPropagation();
    };
    TreeItemComponent.prototype.onExpand = function (event) {
        if (this.item) {
            this.item.expand = !this.item.expand;
            var node = this.item;
            if (node && !node.enumerated) {
                node.refresh(this.s3);
                node.enumerated = true;
            }
        }
        event.stopPropagation();
    };
    TreeItemComponent.prototype.getNodeType = function () {
        if (this.item && this.item.type !== undefined) {
            if (this.item.type === _tree_node__WEBPACK_IMPORTED_MODULE_1__["TreeNodeType"].Account) {
                return 'a';
            }
            else if (this.item.type === _tree_node__WEBPACK_IMPORTED_MODULE_1__["TreeNodeType"].Bucket) {
                return 'b';
            }
            else if (this.item.type === _tree_node__WEBPACK_IMPORTED_MODULE_1__["TreeNodeType"].Folder) {
                return 'f';
            }
            else {
                return 'fi';
            }
        }
        else {
            return 'c';
        }
    };
    TreeItemComponent.prototype.drop = function (event) {
        var _this = this;
        if (this.isDroppable()) {
            this.dragCount = 0;
            this.draggedOver = false;
            if (event.dataTransfer) {
                var node_1 = this.item;
                var promises = [];
                for (var _i = 0, _a = event.dataTransfer.items; _i < _a.length; _i++) {
                    var f = _a[_i];
                    var item = f.webkitGetAsEntry();
                    if (item) {
                        promises.push(Object(src_app_collectfiles__WEBPACK_IMPORTED_MODULE_5__["collectFiles"])(item, '', []));
                    }
                }
                Promise.all(promises).then(function (results) {
                    var items = [];
                    results.forEach(function (r) {
                        items = items.concat(r);
                    });
                    node_1.dropAction(_this.upload, items);
                });
            }
        }
        event.preventDefault();
        return false;
    };
    TreeItemComponent.prototype.dragEnter = function (event) {
        if (this.isDroppable()) {
            this.draggedOver = true;
            this.dragCount += 1;
        }
        event.preventDefault();
        return false;
    };
    TreeItemComponent.prototype.dragLeave = function (event) {
        if (this.isDroppable()) {
            this.dragCount -= 1;
            if (this.dragCount <= 0) {
                this.draggedOver = false;
                this.dragCount = 0;
            }
        }
        event.preventDefault();
        return false;
    };
    TreeItemComponent.prototype.isDroppable = function () {
        return this.item && (this.item.type === _tree_node__WEBPACK_IMPORTED_MODULE_1__["TreeNodeType"].Bucket || this.item.type === _tree_node__WEBPACK_IMPORTED_MODULE_1__["TreeNodeType"].Folder);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TreeItemComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TreeItemComponent.prototype, "loading", void 0);
    TreeItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tree-item',
            template: __webpack_require__(/*! ./tree-item.component.html */ "./src/app/tree-view/tree-item/tree-item.component.html"),
            styles: [__webpack_require__(/*! ./tree-item.component.scss */ "./src/app/tree-view/tree-item/tree-item.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_aws_s3_services_s3_service__WEBPACK_IMPORTED_MODULE_2__["S3Service"], src_app_aws_s3_services_request_upload_service__WEBPACK_IMPORTED_MODULE_4__["RequestUploadService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TreeItemComponent);
    return TreeItemComponent;
}(src_app_infrastructure_subscription_component__WEBPACK_IMPORTED_MODULE_6__["SubscriptionComponent"]));



/***/ }),

/***/ "./src/app/tree-view/tree-node.ts":
/*!****************************************!*\
  !*** ./src/app/tree-view/tree-node.ts ***!
  \****************************************/
/*! exports provided: TreeNodeType, S3ActionNode, AccountNode, BucketNode, FolderNode, FileNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeType", function() { return TreeNodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S3ActionNode", function() { return S3ActionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountNode", function() { return AccountNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BucketNode", function() { return BucketNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderNode", function() { return FolderNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileNode", function() { return FileNode; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TreeNodeType;
(function (TreeNodeType) {
    TreeNodeType[TreeNodeType["Account"] = 0] = "Account";
    TreeNodeType[TreeNodeType["Bucket"] = 1] = "Bucket";
    TreeNodeType[TreeNodeType["Folder"] = 2] = "Folder";
    TreeNodeType[TreeNodeType["File"] = 3] = "File";
})(TreeNodeType || (TreeNodeType = {}));
var S3ActionNode = /** @class */ (function () {
    function S3ActionNode(n, t) {
        this.subItems = [];
        this.busy = false;
        this.expand = false;
        this.name = n;
        this.type = t;
    }
    Object.defineProperty(S3ActionNode.prototype, "path", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    S3ActionNode.prototype.refresh = function (service) { };
    S3ActionNode.prototype.action = function (service) { };
    S3ActionNode.prototype.dropAction = function (service, files) { };
    return S3ActionNode;
}());

var AccountNode = /** @class */ (function (_super) {
    __extends(AccountNode, _super);
    function AccountNode(acc) {
        var _this = _super.call(this, acc.id, TreeNodeType.Account) || this;
        _this.acc = acc;
        _this.enumerated = true;
        _this.url = acc.url;
        return _this;
    }
    Object.defineProperty(AccountNode.prototype, "path", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    AccountNode.prototype.refresh = function (service) {
        if (service) {
            this.busy = true;
            service.listBuckets(this.acc);
        }
    };
    return AccountNode;
}(S3ActionNode));

var BucketNode = /** @class */ (function (_super) {
    __extends(BucketNode, _super);
    function BucketNode(parent, n) {
        var _this = _super.call(this, n, TreeNodeType.Bucket) || this;
        _this.enumerated = false;
        _this.account = parent;
        return _this;
    }
    Object.defineProperty(BucketNode.prototype, "path", {
        get: function () {
            return this.account.id + "/" + this.name;
        },
        enumerable: true,
        configurable: true
    });
    BucketNode.prototype.dropAction = function (service, files) {
        if (service) {
            service.requestUpload(this.account, this.name, '', files);
        }
    };
    BucketNode.prototype.refresh = function (service) {
        if (service) {
            this.busy = true;
            service.listObjects(this.account, this.name, '');
        }
    };
    return BucketNode;
}(S3ActionNode));

var FolderNode = /** @class */ (function (_super) {
    __extends(FolderNode, _super);
    function FolderNode(account, bucket, prefix, n) {
        var _this = _super.call(this, n, TreeNodeType.Folder) || this;
        _this.prefix = '';
        _this.bucket = '';
        _this.enumerated = false;
        _this.prefix = prefix;
        _this.account = account;
        _this.bucket = bucket;
        return _this;
    }
    Object.defineProperty(FolderNode.prototype, "path", {
        get: function () {
            if (this.prefix) {
                return this.account.id + "/" + this.bucket + "/" + this.prefix + "/" + this.name;
            }
            return this.account.id + "/" + this.bucket + "/" + this.name;
        },
        enumerable: true,
        configurable: true
    });
    FolderNode.prototype.dropAction = function (service, files) {
        if (service) {
            var prefixes = this.prefix ? this.prefix + '/' : '';
            service.requestUpload(this.account, this.bucket, prefixes + this.name + '/', files);
        }
    };
    FolderNode.prototype.refresh = function (service) {
        if (service) {
            this.busy = true;
            var prefixes = this.prefix ? this.prefix + '/' : '';
            service.listObjects(this.account, this.bucket, prefixes + this.name + '/');
        }
    };
    return FolderNode;
}(S3ActionNode));

var FileNode = /** @class */ (function (_super) {
    __extends(FileNode, _super);
    function FileNode(account, bucket, key, name) {
        var _this = _super.call(this, name, TreeNodeType.File) || this;
        _this.bucket = '';
        _this.key = '';
        _this.key = key;
        _this.account = account;
        _this.bucket = bucket;
        _this.subItems = undefined;
        return _this;
    }
    FileNode.prototype.action = function (service) {
        if (service) {
            service.requestDownload(this.account, this.bucket, this.key);
        }
    };
    return FileNode;
}(S3ActionNode));



/***/ }),

/***/ "./src/app/tree-view/tree-view.module.ts":
/*!***********************************************!*\
  !*** ./src/app/tree-view/tree-view.module.ts ***!
  \***********************************************/
/*! exports provided: TreeViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeViewModule", function() { return TreeViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tree_view_tree_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree-view/tree-view.component */ "./src/app/tree-view/tree-view/tree-view.component.ts");
/* harmony import */ var _tree_item_tree_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree-item/tree-item.component */ "./src/app/tree-view/tree-item/tree-item.component.ts");
/* harmony import */ var _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../infrastructure/infrastructure.module */ "./src/app/infrastructure/infrastructure.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TreeViewModule = /** @class */ (function () {
    function TreeViewModule() {
    }
    TreeViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _infrastructure_infrastructure_module__WEBPACK_IMPORTED_MODULE_4__["InfrastructureModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
            declarations: [_tree_view_tree_view_component__WEBPACK_IMPORTED_MODULE_2__["TreeViewComponent"], _tree_item_tree_item_component__WEBPACK_IMPORTED_MODULE_3__["TreeItemComponent"]],
            exports: [_tree_view_tree_view_component__WEBPACK_IMPORTED_MODULE_2__["TreeViewComponent"]],
        })
    ], TreeViewModule);
    return TreeViewModule;
}());



/***/ }),

/***/ "./src/app/tree-view/tree-view/tree-view.component.html":
/*!**************************************************************!*\
  !*** ./src/app/tree-view/tree-view/tree-view.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tree-container\">\n  <app-tree-item [item]=\"node\" *ngFor=\"let node of rootNodes\" [loading]=\"node.busy\"></app-tree-item>\n</div>\n<app-busy-screen *ngIf=\"loading\"></app-busy-screen>\n"

/***/ }),

/***/ "./src/app/tree-view/tree-view/tree-view.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/tree-view/tree-view/tree-view.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%; }\n\n.tree-container {\n  width: 100%;\n  height: 100%;\n  padding-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9nYXBsbzkxNy9TM1dlYlVwbG9hZGVyL3NyYy9hcHAvdHJlZS12aWV3L3RyZWUtdmlldy90cmVlLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90cmVlLXZpZXcvdHJlZS12aWV3L3RyZWUtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnRyZWUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tree-view/tree-view/tree-view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/tree-view/tree-view/tree-view.component.ts ***!
  \************************************************************/
/*! exports provided: TreeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeViewComponent", function() { return TreeViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tree_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tree-node */ "./src/app/tree-view/tree-node.ts");
/* harmony import */ var src_app_aws_accounts_services_accounts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/aws-accounts/services/accounts.service */ "./src/app/aws-accounts/services/accounts.service.ts");
/* harmony import */ var src_app_infrastructure_subscription_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/infrastructure/subscription-component */ "./src/app/infrastructure/subscription-component.ts");
/* harmony import */ var src_app_aws_s3_services_s3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/aws-s3/services/s3.service */ "./src/app/aws-s3/services/s3.service.ts");
/* harmony import */ var _services_selection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/selection.service */ "./src/app/tree-view/services/selection.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TreeViewComponent = /** @class */ (function (_super) {
    __extends(TreeViewComponent, _super);
    function TreeViewComponent(awsAccounts, s3Service, selection) {
        var _this = _super.call(this) || this;
        _this.awsAccounts = awsAccounts;
        _this.s3Service = s3Service;
        _this.selection = selection;
        _this.rootNodes = [];
        _this.loading = true;
        return _this;
    }
    TreeViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recordSubscription(this.awsAccounts.Accounts.subscribe(function (accs) {
            accs.forEach(function (a) {
                if (_this.rootNodes.filter(function (_) { return _.name === a.id; }).length === 0) {
                    _this.addAccount(a);
                }
            });
            _this.loading = false;
        }));
        this.recordSubscription(this.awsAccounts.InitializingAccount.subscribe(function (_) {
            _this.loading = true;
        }));
        this.recordSubscription(this.s3Service.ItemsEnumerated.subscribe(function (result) {
            var parent = _this.getNode({ subItems: _this.rootNodes }, result.parents.slice());
            if (parent) {
                var node = parent.node;
                node.busy = false;
                node.subItems = [];
                node.subItems = result.items.map(function (_) {
                    return _this.convertS3ItemToTreeNode(result.account, result.parents, _);
                });
                if (node.subItems.length) {
                    _this.sortNodes(node.subItems);
                    node.expand = true;
                }
            }
        }));
        this.recordSubscription(this.s3Service.ItemAdded.subscribe(function (result) {
            var parent = _this.getNode({ subItems: _this.rootNodes }, result.parents.slice()).node;
            if (parent) {
                var existing = parent.subItems;
                var newNode_1 = _this.convertS3ItemToTreeNode(result.account, result.parents, result.item);
                if (existing && existing.filter(function (_) { return _.name === newNode_1.name; }).length === 0) {
                    parent.subItems.push(newNode_1);
                    _this.sortNodes(parent.subItems);
                }
                else if (!existing) {
                    parent.subItems = [newNode_1];
                }
            }
        }));
        this.recordSubscription(this.selection.RequestSelect.subscribe(function (result) {
            var nodes = _this.getNode({ subItems: _this.rootNodes }, result.path.slice());
            var node = nodes.node;
            var parents = nodes.parents;
            if (node) {
                parents.forEach(function (n) {
                    n.expand = true;
                });
                node.expand = true;
                if (!node.enumerated) {
                    node.refresh(_this.s3Service);
                    node.enumerated = true;
                }
            }
        }));
        this.recordSubscription(this.selection.CollapseAll.subscribe(function () {
            _this.rootNodes.forEach(function (rn) {
                _this.collapseAll(rn);
            });
        }));
    };
    TreeViewComponent.prototype.collapseAll = function (node) {
        var _this = this;
        if (node.subItems) {
            node.subItems.forEach(function (n) {
                _this.collapseAll(n);
            });
        }
        node.expand = false;
    };
    TreeViewComponent.prototype.convertS3ItemToTreeNode = function (account, parents, item) {
        var node = {
            name: item.name,
            type: undefined,
        };
        if (item.type === 'bucket') {
            return new _tree_node__WEBPACK_IMPORTED_MODULE_1__["BucketNode"](account, item.name);
        }
        else if (item.type === 'folder') {
            var prefixes = parents.slice();
            prefixes.splice(0, 2);
            return new _tree_node__WEBPACK_IMPORTED_MODULE_1__["FolderNode"](account, parents[1], prefixes.join('/'), item.name);
        }
        else if (item.type === 'file') {
            var prefixes = parents.slice();
            prefixes.splice(0, 2);
            prefixes.push(item.name);
            return new _tree_node__WEBPACK_IMPORTED_MODULE_1__["FileNode"](account, parents[1], prefixes.join('/'), item.name);
        }
        return node;
    };
    TreeViewComponent.prototype.addAccount = function (a) {
        var node = new _tree_node__WEBPACK_IMPORTED_MODULE_1__["AccountNode"](a);
        this.rootNodes.push(node);
        node.refresh(this.s3Service);
    };
    TreeViewComponent.prototype.listAccountBuckets = function (a) {
        this.s3Service.listBuckets(a);
    };
    TreeViewComponent.prototype.getNode = function (start, path, parents) {
        if (parents === void 0) { parents = []; }
        if (!path.length) {
            return { node: start, parents: parents };
        }
        else {
            var itemName = path.shift();
            if (!itemName) {
                return { node: start, parents: parents };
            }
            else if (!start.subItems) {
                return null;
            }
            else {
                var nextItem = void 0;
                for (var i = 0; i < start.subItems.length; i++) {
                    if (start.subItems[i].name && start.subItems[i].name === itemName) {
                        nextItem = start.subItems[i];
                        break;
                    }
                }
                if (!nextItem) {
                    return null;
                }
                else {
                    parents.push(nextItem);
                    return this.getNode(nextItem, path, parents);
                }
            }
        }
    };
    TreeViewComponent.prototype.sortNodes = function (nodes) {
        nodes.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            else if (a.name < b.name) {
                return -1;
            }
            else {
                return 0;
            }
        });
    };
    TreeViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tree-view',
            template: __webpack_require__(/*! ./tree-view.component.html */ "./src/app/tree-view/tree-view/tree-view.component.html"),
            styles: [__webpack_require__(/*! ./tree-view.component.scss */ "./src/app/tree-view/tree-view/tree-view.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_aws_accounts_services_accounts_service__WEBPACK_IMPORTED_MODULE_2__["AccountsService"], src_app_aws_s3_services_s3_service__WEBPACK_IMPORTED_MODULE_4__["S3Service"], _services_selection_service__WEBPACK_IMPORTED_MODULE_5__["SelectionService"]])
    ], TreeViewComponent);
    return TreeViewComponent;
}(src_app_infrastructure_subscription_component__WEBPACK_IMPORTED_MODULE_3__["SubscriptionComponent"]));



/***/ }),

/***/ "./src/app/welcome-page/welcome-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/welcome-page/welcome-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n  <div class=\"page-header-overlay bg-gradient-primary\"></div>\n  <div class=\"side-header-container\">\n    <!--<div class=\"settings-icon\" id=\"settings-btn\" (click)=\"goToSettings()\">-->\n    <!--  <i class=\"ion-ios-settings\"></i>-->\n    <!--  <div class=\"badge bg-info\" *ngIf=\"updateAvailable\">-->\n    <!--    <i class=\"ion-ios-information\"></i>-->\n    <!--  </div>-->\n    <!--</div>-->\n  </div>\n  <div class=\"page-contents container-fluid pt-5\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card card-stats mb-4 mb-xl-0\">\n          <div class=\"card-body text-left\">\n            <h1>S3 Web Uploader</h1>\n            <h2>Getting Start</h2>\n            <ul>\n              <li>\n                <p>\n                  Click\n                  <i class=\"ion-ios-add\" style=\"font-size: 1.5em; line-height: 1.5em\"></i>\n                  to add S3-compatible service.\n                </p>\n              </li>\n              <li><p>Drag a file/folder into the tree/browser to upload.</p></li>\n              <li>\n                <p>\n                  Click\n                  <i class=\"ion-ios-cloud-download\"></i>\n                  to download.\n                </p>\n              </li>\n            </ul>\n            <div class=\"welcome-contents\">\n              <div class=\"histories text-left\">\n                <h2>History</h2>\n                <app-history-list></app-history-list>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/welcome-page/welcome-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/welcome-page/welcome-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center-align {\n  display: flex;\n  justify-content: center; }\n\n.welcome-contents {\n  display: flex;\n  position: relative; }\n\n.welcome-contents .actions {\n    width: 40%;\n    position: relative; }\n\n.welcome-contents .actions .action {\n      display: flex;\n      align-items: center;\n      width: 100%;\n      margin-bottom: 20px; }\n\n.welcome-contents .actions .action .action-icon {\n        flex-shrink: 0;\n        width: 48px;\n        height: 48px;\n        display: flex;\n        box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n        border-radius: 50%;\n        align-items: center;\n        justify-content: center;\n        font-size: 24px; }\n\n.welcome-contents .actions .action .action-text {\n        width: 100%;\n        text-align: left; }\n\n.welcome-contents .histories {\n    padding: 20px;\n    position: relative;\n    min-width: 0; }\n\n.pluses {\n  padding: 20px;\n  width: 250px;\n  float: left;\n  border: 1.5px solid;\n  border-top: 0;\n  border-bottom: 0;\n  border-left: 0;\n  -o-border-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, var(--lighter) 48%, rgba(255, 255, 255, 0) 100%);\n     border-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, var(--lighter) 48%, rgba(255, 255, 255, 0) 100%);\n  border-image-slice: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9nYXBsbzkxNy9TM1dlYlVwbG9hZGVyL3NyYy9hcHAvd2VsY29tZS1wYWdlL3dlbGNvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBRnRCO0lBSVEsVUFBVTtJQUNWLGtCQUFrQixFQUFBOztBQUwxQjtNQU9ZLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsV0FBVztNQUNYLG1CQUFtQixFQUFBOztBQVYvQjtRQVlnQixjQUFjO1FBQ2QsV0FBVztRQUNYLFlBQVk7UUFDWixhQUFhO1FBQ2Isc0NBQXNDO1FBQ3RDLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLGVBQWUsRUFBQTs7QUFwQi9CO1FBdUJnQixXQUFXO1FBQ1gsZ0JBQWdCLEVBQUE7O0FBeEJoQztJQTZCUSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsdUhBQW9IO0tBQXBILG9IQUFvSDtFQUNwSCxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUtcGFnZS93ZWxjb21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyLWFsaWduIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud2VsY29tZS1jb250ZW50cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmFjdGlvbnMge1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC5hY3Rpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAuYWN0aW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hY3Rpb24tdGV4dCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuaGlzdG9yaWVzIHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgfVxufVxuXG4ucGx1c2VzIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICBib3JkZXItbGVmdDogMDtcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHZhcigtLWxpZ2h0ZXIpIDQ4JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG59Il19 */"

/***/ }),

/***/ "./src/app/welcome-page/welcome-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/welcome-page/welcome-page.component.ts ***!
  \********************************************************/
/*! exports provided: WelcomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageComponent", function() { return WelcomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aws_accounts_services_accounts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../aws-accounts/services/accounts.service */ "./src/app/aws-accounts/services/accounts.service.ts");
/* harmony import */ var _infrastructure_services_dom_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../infrastructure/services/dom.service */ "./src/app/infrastructure/services/dom.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _infrastructure_services_updater_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../infrastructure/services/updater.service */ "./src/app/infrastructure/services/updater.service.ts");
/* harmony import */ var _infrastructure_subscription_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../infrastructure/subscription-component */ "./src/app/infrastructure/subscription-component.ts");
/* harmony import */ var _infrastructure_services_analytics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../infrastructure/services/analytics.service */ "./src/app/infrastructure/services/analytics.service.ts");
/* harmony import */ var _infrastructure_analytics_consent_analytics_consent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../infrastructure/analytics-consent/analytics-consent.component */ "./src/app/infrastructure/analytics-consent/analytics-consent.component.ts");
/* harmony import */ var _infrastructure_analytics_tracked__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../infrastructure/analytics-tracked */ "./src/app/infrastructure/analytics-tracked.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var WelcomePageComponent = /** @class */ (function (_super) {
    __extends(WelcomePageComponent, _super);
    function WelcomePageComponent(accounts, dom, router, updater, analytics) {
        var _this = _super.call(this) || this;
        _this.accounts = accounts;
        _this.dom = dom;
        _this.router = router;
        _this.updater = updater;
        _this.analytics = analytics;
        _this.updateAvailable = false;
        return _this;
    }
    WelcomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recordSubscription(this.updater.updaterStatus.subscribe(function (s) {
            _this.updateAvailable = s === _infrastructure_services_updater_service__WEBPACK_IMPORTED_MODULE_4__["UpdaterStatus"].UpdateAvailable;
        }));
        this.recordSubscription(this.analytics.enabled.subscribe(function (en) {
            if (en === null) {
                var comp_1 = _this.dom.appendComponentToBody(_infrastructure_analytics_consent_analytics_consent_component__WEBPACK_IMPORTED_MODULE_7__["AnalyticsConsentComponent"]);
                comp_1.instance.toClose.subscribe(function (s) {
                    comp_1.destroy();
                });
            }
        }));
    };
    WelcomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome-page',
            template: __webpack_require__(/*! ./welcome-page.component.html */ "./src/app/welcome-page/welcome-page.component.html"),
            styles: [__webpack_require__(/*! ../page.scss */ "./src/app/page.scss"), __webpack_require__(/*! ./welcome-page.component.scss */ "./src/app/welcome-page/welcome-page.component.scss")]
        }),
        Object(_infrastructure_analytics_tracked__WEBPACK_IMPORTED_MODULE_8__["AnalyticsTracked"])('WelcomePageComponent'),
        __metadata("design:paramtypes", [_aws_accounts_services_accounts_service__WEBPACK_IMPORTED_MODULE_1__["AccountsService"],
            _infrastructure_services_dom_service__WEBPACK_IMPORTED_MODULE_2__["DomService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _infrastructure_services_updater_service__WEBPACK_IMPORTED_MODULE_4__["UpdaterService"],
            _infrastructure_services_analytics_service__WEBPACK_IMPORTED_MODULE_6__["AnalyticsService"]])
    ], WelcomePageComponent);
    return WelcomePageComponent;
}(_infrastructure_subscription_component__WEBPACK_IMPORTED_MODULE_5__["SubscriptionComponent"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/gaplo917/S3WebUploader/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map