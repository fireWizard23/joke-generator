(self["webpackChunkjoke_maker"] = self["webpackChunkjoke_maker"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);



class AppComponent {
    constructor() {
        this.title = 'joke-maker';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_reusable_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/reusable/dropdown/dropdown.component */ 1677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent,
        _components_reusable_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.DropdownComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule] }); })();


/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _misc_joke_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../misc/joke.model */ 1748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_joke_http_service_joke_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/joke-http-service/joke-http.service */ 5264);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);




function HomeComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.joke.category, " ");
} }
class HomeComponent {
    constructor(httpService) {
        this.httpService = httpService;
    }
    ngOnDestroy() {
        this.jokeSuscription.unsubscribe();
    }
    ngOnInit() {
        this.getNewJoke();
    }
    getNewJoke() {
        this.jokeString = null;
        let joke;
        let random = Math.random();
        if (random > 0.5) {
            joke = this.httpService.getSingleJoke();
        }
        else {
            joke = this.httpService.getTwoPartJoke();
        }
        this.jokeSuscription = joke.subscribe((val) => {
            this.jokeString = (0,_misc_joke_model__WEBPACK_IMPORTED_MODULE_0__.getJokeString)(val) || 'Error';
            this.joke = val;
            console.log(val);
        });
    }
    handleClick() {
        this.getNewJoke();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_joke_http_service_joke_http_service__WEBPACK_IMPORTED_MODULE_1__.JokeHttpService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 3, consts: [[1, "joke-form-container"], [1, "joke-container"], [1, "joke-text", 2, "white-space", "pre-line"], ["class", "joke-category", 4, "ngIf"], [1, "joke-button", 3, "click"], [1, "joke-category"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HomeComponent_span_4_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_5_listener() { return ctx.handleClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.jokeString || "Loading...", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.jokeString !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.joke === undefined ? "Get" : "Another", " Joke ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".joke-form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.joke-container[_ngcontent-%COMP%] {\n  width: 90vw;\n  font-size: 1.5em;\n  box-sizing: border-box;\n  margin: 1rem 0;\n  padding: 0.5rem 1rem;\n  border: 3px solid var(--brand-color);\n  background-color: #ebe9e9;\n  border-radius: 0.7em;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.joke-text[_ngcontent-%COMP%] {\n  margin: 1.5rem 0;\n  font-size: 1.5em;\n  text-overflow: clip;\n}\n.joke-category[_ngcontent-%COMP%] {\n  background-color: var(--brand-color);\n  font-size: 1.2rem;\n  color: var(--white-text);\n  text-overflow: clip;\n  width: 10%;\n  max-width: 10rem;\n  min-width: 7em;\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  box-sizing: border-box;\n  border-bottom: 3px solid var(--brand-color-darker);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.joke-button[_ngcontent-%COMP%] {\n  width: 10em;\n  height: 3em;\n  font-size: 2em;\n  padding: 0;\n  cursor: pointer;\n}\n@media (max-width: 500px) {\n  .joke-text[_ngcontent-%COMP%] {\n    font-size: 1.3em;\n  }\n}\n@media (max-width: 350px) {\n  .joke-text[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQURSO0FBSUk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUVBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBSlI7QUFRSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU5SO0FBVUk7RUFDSSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtEQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFUUjtBQWNJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFaUjtBQXNCQTtFQUVJO0lBQ0ksZ0JBQUE7RUFwQk47QUFDRjtBQXdCQTtFQUVJO0lBQ0ksY0FBQTtFQXZCTjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuam9rZXtcclxuXHJcbiAgICAmLWZvcm0tY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDkwdnc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG5cclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1icmFuZC1jb2xvcik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjMzLCAyMzMpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuN2VtO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgICAgICBcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgICYtdGV4dHtcclxuICAgICAgICBtYXJnaW46IDEuNXJlbSAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogY2xpcDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgJi1jYXRlZ29yeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmQtY29sb3IpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZS10ZXh0KTtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xyXG4gICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMHJlbTtcclxuICAgICAgICBtaW4td2lkdGg6IDdlbTtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWJyYW5kLWNvbG9yLWRhcmtlcik7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgICYtYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTBlbTtcclxuICAgICAgICBoZWlnaHQ6IDNlbTtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNTAwcHgpIHtcclxuXHJcbiAgICAuam9rZS10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogMzUwcHgpIHtcclxuXHJcbiAgICAuam9rZS10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 3252:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class NavbarComponent {
    constructor() { }
    onResize() {
        this.innerWidth = window.innerWidth;
    }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function NavbarComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 4, vars: 1, consts: [[1, "navbar"], [1, "navbar-container"], [1, "navbar-brand"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.innerWidth > 500 ? "Joke Generator" : "JokeG");
    } }, styles: [".navbar[_ngcontent-%COMP%] {\n  height: 10vh;\n  margin: 0;\n  padding: 0;\n  background-color: var(--brand-color);\n}\n.navbar-container[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 100%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  padding: 0 1em;\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n  color: var(--white-text);\n  padding: 0.1em 0.5em;\n  background: linear-gradient(30deg, #275006, #004116);\n  border-radius: 0.1em;\n}\n@media (max-width: 800px) {\n  .navbar-brand[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n}\n@media (max-width: 600px) {\n  .navbar-brand[_ngcontent-%COMP%] {\n    font-size: 1.3em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQVBjO0FBS2xCO0FBSUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSFI7QUFNSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFFQSxvREFBQTtFQUNBLG9CQUFBO0FBTFI7QUFXQTtFQUVRO0lBQ0ksZ0JBQUE7RUFUVjtBQUNGO0FBZUE7RUFFUTtJQUNJLGdCQUFBO0VBZFY7QUFDRiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFja2dyb3VuZENvbG9yOiB2YXIoLS1icmFuZC1jb2xvcik7XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIFxyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kQ29sb3I7XHJcblxyXG4gICAgJi1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMCAxZW07XHJcbiAgICB9XHJcblxyXG4gICAgJi1icmFuZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlLXRleHQpO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMWVtIDAuNWVtO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzBkZWcsIHJnYigzOSwgODAsIDYpLCByZ2IoMCwgNjUsIDIyKSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4xZW07XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDgwMHB4ICkge1xyXG4gICAgLm5hdmJhciB7XHJcbiAgICAgICAgJi1icmFuZCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA2MDBweCApIHtcclxuICAgIC5uYXZiYXIge1xyXG4gICAgICAgICYtYnJhbmQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 1677:
/*!********************************************************************!*\
  !*** ./src/app/components/reusable/dropdown/dropdown.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownComponent": () => (/* binding */ DropdownComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);



const _c0 = function (a0, a1) { return { "first": a0, "last": a1 }; };
function DropdownComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r1 = ctx.$implicit;
    const last_r3 = ctx.last;
    const first_r4 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, first_r4, last_r3))("id", opt_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", opt_r1.value, " ");
} }
const _c1 = function (a0) { return { "full": a0 }; };
class DropdownComponent {
    constructor() {
        this._dropdownIsOpen = false;
        this.ID_PREFIX = 'rm-dropdown-';
        this.onValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    get value() {
        return this._value;
    }
    set value(val) {
        if (val == undefined || val == null)
            debugger;
        this._value = val;
        this.onValueChange.emit(val);
    }
    ngOnInit() {
        if (this._options == undefined)
            throw new Error("No options given in the DropdownComponent.");
        this._value = this._options[this.defaultIndex || 0].value;
    }
    set option(option) {
        option.forEach((val, index) => {
            val.id = this.ID_PREFIX + index;
        });
        this._options = option;
    }
    get dropdownIsOpen() {
        return this._dropdownIsOpen;
    }
    click(e) {
        if (!this._dropdownIsOpen)
            return;
        let target = e.target;
        if (!target.id.includes(this.ID_PREFIX)) {
            this.toggleDropdown();
        }
    }
    ;
    toggleDropdown() {
        this._dropdownIsOpen = !this._dropdownIsOpen;
    }
    handleClick(e) {
        var _a;
        e.stopPropagation();
        e.preventDefault();
        if (this._options == undefined)
            return;
        let target = e.target;
        let text = target.id;
        const val = (_a = this._options.find((val) => val.id == text)) === null || _a === void 0 ? void 0 : _a.value;
        if (text !== this.ID_PREFIX + '-1' && val != null) {
            this.value = val;
        }
        setTimeout(() => {
            this.toggleDropdown();
        }, 100);
    }
}
DropdownComponent.ɵfac = function DropdownComponent_Factory(t) { return new (t || DropdownComponent)(); };
DropdownComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropdownComponent, selectors: [["rm-dropdown"]], hostBindings: function DropdownComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownComponent_click_HostBindingHandler($event) { return ctx.click($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { defaultIndex: "defaultIndex", option: "option" }, outputs: { onValueChange: "onValueChange" }, decls: 5, vars: 7, consts: [["href", "#", 1, "dropdown", 3, "click"], [1, "dropdown-label", 3, "id", "ngClass"], [1, "dropdown-options", 3, "hidden"], ["class", "dropdown-option", 3, "ngClass", "id", 4, "ngFor", "ngForOf"], [1, "dropdown-option", 3, "ngClass", "id"]], template: function DropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownComponent_Template_button_click_0_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DropdownComponent_button_4_Template, 2, 6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.ID_PREFIX + "-1")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, !ctx.dropdownIsOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.value || "Error", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.dropdownIsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._options);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\nli[_ngcontent-%COMP%] {\n  list-style-type: none;\n  text-align: left;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 0;\n  border: none;\n}\n\nbutton[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:focus {\n  border: none;\n  outline: none;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  text-align: left;\n  margin: 10em 1em;\n  cursor: pointer;\n  border-radius: 0.5em;\n  width: 20em;\n  border: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: transparent;\n  pointer-events: none;\n  position: relative;\n}\n\n.dropdown[_ngcontent-%COMP%]:focus    > .dropdown-label[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%]:hover    > .dropdown-label[_ngcontent-%COMP%] {\n  background-color: #39bb39;\n}\n\n.dropdown[_ngcontent-%COMP%]:focus    > .dropdown-label[_ngcontent-%COMP%] {\n  border-bottom: 3px solid blue;\n}\n\n.dropdown-label[_ngcontent-%COMP%] {\n  pointer-events: all;\n  background-color: #007700;\n  color: var(--white-text);\n  height: 100%;\n  width: 100%;\n  padding: 0.2em 1em;\n  box-sizing: border-box;\n  border-top-left-radius: 0.3em;\n  border-top-right-radius: 0.3em;\n}\n\n.dropdown-label.full[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0.3em;\n  border-bottom-right-radius: 0.3em;\n}\n\n.dropdown-options[_ngcontent-%COMP%] {\n  pointer-events: all;\n  background-color: #e2dbdb;\n  width: 100%;\n  max-height: 50vh;\n  margin-top: 0.3em;\n  overflow-x: hidden;\n  --scroll-bar-color: black;\n  border-bottom-left-radius: 0.3em;\n  border-bottom-right-radius: 0.3em;\n  position: absolute;\n  top: 100%;\n}\n\n.dropdown-option[_ngcontent-%COMP%] {\n  font-size: 2em;\n  cursor: pointer;\n  width: 100%;\n  background-color: #e2dbdb;\n  height: 1em;\n  padding: 1em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n  \n  -webkit-user-drag: none;\n  \n  \n  \n  user-select: none;\n  \n  transition-duration: 0.1s;\n}\n\n.dropdown-option[_ngcontent-%COMP%]:hover, .dropdown-option[_ngcontent-%COMP%]:focus {\n  background-color: #39bb39;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFMSjs7QUFRQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFRQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUxKOztBQVFBO0VBQ0ksU0FBQTtFQUNBLFlBQUE7QUFMSjs7QUFPSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBTFI7O0FBV0E7RUFFSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFFQSxvQkFBQTtFQUVBLGtCQUFBO0FBWko7O0FBY0k7RUFDSSx5QkFqRFc7QUFxQ25COztBQWNJO0VBQ0ksNkJBQUE7QUFaUjs7QUFlSTtFQUNJLG1CQUFBO0VBRUEseUJBNURLO0VBNkRMLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBRUEsNkJBckVPO0VBc0VQLDhCQXRFTztBQXVEZjs7QUFpQlE7RUFDSSxnQ0F6RUc7RUEwRUgsaUNBMUVHO0FBMkRmOztBQW9CSTtFQUNJLG1CQUFBO0VBQ0EseUJBOUVNO0VBK0VOLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBRUEsa0JBQUE7RUFFQSx5QkFBQTtFQUNBLGdDQXpGTztFQTBGSCxpQ0ExRkc7RUE0RlAsa0JBQUE7RUFDQSxTQUFBO0FBckJSOztBQTJCSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBRUEsV0FBQTtFQUNBLHlCQXJHTTtFQXNHTixXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBSUEseUJBQUE7RUFBMkIsbUJBQUE7RUFDM0IsdUJBQUE7RUFDMEIsY0FBQTtFQUNGLFlBQUE7RUFDRCxPQUFBO0VBQ3ZCLGlCQUFBO0VBQW1CLFNBQUE7RUFFbkIseUJBQUE7QUExQlI7O0FBNEJRO0VBQ0kseUJBeEhPO0FBOEZuQiIsImZpbGUiOiJkcm9wZG93bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRib3JkZXJSYWRpdXM6IDAuM2VtO1xyXG5cclxuJGxhYmVsQ29sb3I6IHJnYigwLCAxMTksIDApO1xyXG4kb3B0aW9uQ29sb3I6IHJnYigyMjYsIDIxOSwgMjE5KTtcclxuJG9wdGlvbkhvdmVyQ29sb3I6IHJnYig1NywgMTg3LCA1Nyk7XHJcblxyXG51bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICY6aG92ZXIsICY6Zm9jdXN7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLmRyb3Bkb3duIHtcclxuICAgIFxyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW46IDEwZW0gMWVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgICB3aWR0aDogMjBlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOmZvY3VzID4gJi1sYWJlbCwgJjpob3ZlciA+ICYtbGFiZWwge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcHRpb25Ib3ZlckNvbG9yO1xyXG4gICAgfSBcclxuICAgICY6Zm9jdXMgPiAmLWxhYmVsIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAmLWxhYmVsIHtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGFiZWxDb2xvcjtcclxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUtdGV4dCk7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMmVtIDFlbTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkYm9yZGVyUmFkaXVzO1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkYm9yZGVyUmFkaXVzO1xyXG5cclxuICAgICAgICAmLmZ1bGwge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm9yZGVyUmFkaXVzO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvcmRlclJhZGl1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgICYtb3B0aW9ucyB7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3B0aW9uQ29sb3I7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTB2aDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjNlbTtcclxuXHJcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG5cclxuICAgICAgICAtLXNjcm9sbC1iYXItY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3JkZXJSYWRpdXM7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm9yZGVyUmFkaXVzO1xyXG5cclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICAmLW9wdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3B0aW9uQ29sb3I7XHJcbiAgICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgcGFkZGluZzogMWVtO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmksIENocm9tZSAqL1xyXG4gICAgICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xyXG4gICAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yICovXHJcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xyXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUgKi9cclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogQ1NTMyAqL1xyXG5cclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xyXG5cclxuICAgICAgICAmOmhvdmVyLCAmOmZvY3VzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9wdGlvbkhvdmVyQ29sb3I7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 1748:
/*!************************************!*\
  !*** ./src/app/misc/joke.model.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getJokeString": () => (/* binding */ getJokeString)
/* harmony export */ });
function getJokeString(joke) {
    if (joke.type === 'twopart') {
        let twopartJoke = joke;
        return `${twopartJoke.setup} \n${twopartJoke.delivery}`;
    }
    else if (joke.type == 'single') {
        let singleJoke = joke;
        return singleJoke.joke;
    }
    return null;
}


/***/ }),

/***/ 2559:
/*!***************************************************************!*\
  !*** ./src/app/services/http-service/http-service.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3882);



class HttpService {
    constructor(http) {
        this.http = http;
    }
    /**
     * @param  {string} url - the relative path to the url
     */
    getByUrl(url) {
        // let params = new HttpParams().set('type', 'single');
        return this.http.get(this.combineUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.JOKE_URL, url));
    }
    combineUrl(url1, url2) {
        const slash = '/';
        const firstUrlEndsWithSlash = url1.endsWith(slash);
        const secondUrlStartsWithSlash = url2.startsWith(slash);
        if (!firstUrlEndsWithSlash && !secondUrlStartsWithSlash)
            url1 += slash;
        return url1 + url2;
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
HttpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5264:
/*!*****************************************************************!*\
  !*** ./src/app/services/joke-http-service/joke-http.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JokeHttpService": () => (/* binding */ JokeHttpService)
/* harmony export */ });
/* harmony import */ var _http_service_http_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http-service/http-service.service */ 2559);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




class JokeHttpService extends _http_service_http_service_service__WEBPACK_IMPORTED_MODULE_0__.HttpService {
    getSingleJoke(category = 'any') {
        return this.getJoke('single', category);
    }
    getTwoPartJoke(category = 'any') {
        return this.getJoke('twopart', category);
    }
    getJoke(type, category) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('type', type);
        let url = this.combineUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.JOKE_URL, category);
        return this.http.get(url, {
            params
        });
    }
}
JokeHttpService.ɵfac = /*@__PURE__*/ function () { let ɵJokeHttpService_BaseFactory; return function JokeHttpService_Factory(t) { return (ɵJokeHttpService_BaseFactory || (ɵJokeHttpService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](JokeHttpService)))(t || JokeHttpService); }; }();
JokeHttpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: JokeHttpService, factory: JokeHttpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
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
    production: false,
    JOKE_URL: 'https://v2.jokeapi.dev/joke/'
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map