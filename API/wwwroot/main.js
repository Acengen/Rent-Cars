(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/tw2":
/*!*****************************************************!*\
  !*** ./src/app/customers/store/customer.actions.ts ***!
  \*****************************************************/
/*! exports provided: GET_CUSTOMERS_START, GET_CUSTOMERS_SUCCESS, CREATE_CUSTOMERS_START, CREATE_CUSTOMERS_SUCCESS, EDIT_CUSTOMERS_START, EDIT_CUSTOMERS_SUCCESS, DELETE_CUSTOMERS_START, DELETE_CUSTOMERS_SUCCESS, GetCustomerStart, GetCustomerSuccess, CreateCustomerStart, CreateCustomerSuccess, EditCustomerStart, EditCustomerSuccess, DeleteCustomerStart, DeleteCustomerSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CUSTOMERS_START", function() { return GET_CUSTOMERS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CUSTOMERS_SUCCESS", function() { return GET_CUSTOMERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_CUSTOMERS_START", function() { return CREATE_CUSTOMERS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_CUSTOMERS_SUCCESS", function() { return CREATE_CUSTOMERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_CUSTOMERS_START", function() { return EDIT_CUSTOMERS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_CUSTOMERS_SUCCESS", function() { return EDIT_CUSTOMERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_CUSTOMERS_START", function() { return DELETE_CUSTOMERS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_CUSTOMERS_SUCCESS", function() { return DELETE_CUSTOMERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCustomerStart", function() { return GetCustomerStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCustomerSuccess", function() { return GetCustomerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomerStart", function() { return CreateCustomerStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomerSuccess", function() { return CreateCustomerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCustomerStart", function() { return EditCustomerStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCustomerSuccess", function() { return EditCustomerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCustomerStart", function() { return DeleteCustomerStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCustomerSuccess", function() { return DeleteCustomerSuccess; });
const GET_CUSTOMERS_START = 'GET_CUSTOMERS_START';
const GET_CUSTOMERS_SUCCESS = 'GET_CUSTOMERS_SUCCESS';
const CREATE_CUSTOMERS_START = 'CREATE_CUSTOMERS_START';
const CREATE_CUSTOMERS_SUCCESS = 'CREATE_CUSTOMERS_SUCCESS';
const EDIT_CUSTOMERS_START = 'EDIT_CUSTOMERS_START';
const EDIT_CUSTOMERS_SUCCESS = 'EDIT_CUSTOMERS_SUCCESS';
const DELETE_CUSTOMERS_START = 'DELETE_CUSTOMERS_START';
const DELETE_CUSTOMERS_SUCCESS = 'DELETE_CUSTOMERS_SUCCESS';
class GetCustomerStart {
    constructor() {
        this.type = GET_CUSTOMERS_START;
    }
}
class GetCustomerSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_CUSTOMERS_SUCCESS;
    }
}
class CreateCustomerStart {
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_CUSTOMERS_START;
    }
}
class CreateCustomerSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_CUSTOMERS_SUCCESS;
    }
}
class EditCustomerStart {
    constructor(payload) {
        this.payload = payload;
        this.type = EDIT_CUSTOMERS_START;
    }
}
class EditCustomerSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = EDIT_CUSTOMERS_SUCCESS;
    }
}
class DeleteCustomerStart {
    constructor(payload) {
        this.payload = payload;
        this.type = DELETE_CUSTOMERS_START;
    }
}
class DeleteCustomerSuccess {
    constructor() {
        this.type = DELETE_CUSTOMERS_SUCCESS;
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\38160\Desktop\rentcopy\rentacar\src\main.ts */"zUnb");


/***/ }),

/***/ "4yXv":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.reducer */ "a318");
/* harmony import */ var _store_customer_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/customer.actions */ "/tw2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _customerItem_customerItem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customerItem/customerItem.component */ "g2q6");








function CustomersComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CustomersComponent_div_7_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.addCustomer(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Create Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r2.valid);
} }
function CustomersComponent_app_customerItem_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-customerItem", 13);
} if (rf & 2) {
    const customer_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("customer", customer_r5);
} }
class CustomersComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(new _store_customer_actions__WEBPACK_IMPORTED_MODULE_1__["GetCustomerStart"]());
        this.customers = this.store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_0__["getCustomers"]);
    }
    addCustomer(f) {
        this.store.dispatch(new _store_customer_actions__WEBPACK_IMPORTED_MODULE_1__["CreateCustomerStart"](f.value));
    }
}
CustomersComponent.ɵfac = function CustomersComponent_Factory(t) { return new (t || CustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
CustomersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CustomersComponent, selectors: [["app-customers"]], decls: 11, vars: 4, consts: [[1, "customers"], [1, "customers_header"], [1, "customers_btns"], [1, "btn", "btn-sm", "btn-success", 3, "click"], ["class", "customer_add", 4, "ngIf"], [3, "customer", 4, "ngFor", "ngForOf"], [1, "customer_add"], [3, "ngSubmit"], ["f", "ngForm"], ["type", "text", "name", "fullName", "placeholder", "full name", "ngModel", "", "required", "", 1, "form-control"], ["type", "text", "name", "emailAddress", "placeholder", "email address", "ngModel", "", "required", "", 1, "form-control"], ["type", "number", "name", "phoneNumber", "placeholder", "phone number", "ngModel", "", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success", "my-3", 3, "disabled"], [3, "customer"]], template: function CustomersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "List of customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomersComponent_Template_button_click_5_listener() { return ctx.isActive = !ctx.isActive; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "+ add new");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CustomersComponent_div_7_Template, 10, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CustomersComponent_app_customerItem_8_Template, 1, 1, "app-customerItem", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 2, ctx.customers));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _customerItem_customerItem_component__WEBPACK_IMPORTED_MODULE_7__["CustomerItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".customers_header[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.customers_header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 1.2em;\n}\n.customers_btns[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n.customer_add[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 0 auto;\n}\n.customer_add[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGN1c3RvbWVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQUVBO0VBQ0ksWUFBQTtBQUNKO0FBR0k7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFBUjtBQUNRO0VBQ0ksZUFBQTtBQUNaIiwiZmlsZSI6ImN1c3RvbWVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21lcnNfaGVhZGVye1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIH1cclxufVxyXG5cclxuLmN1c3RvbWVyc19idG5zIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLmN1c3RvbWVyX2FkZCB7XHJcbiAgICBmb3JtIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICBcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "5JTV":
/*!***************************************************************!*\
  !*** ./src/app/vehicles/vehicleitem/vehicleitem.component.ts ***!
  \***************************************************************/
/*! exports provided: VehicleitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleitemComponent", function() { return VehicleitemComponent; });
/* harmony import */ var _store_vehicle_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/vehicle.actions */ "hugR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function (a1) { return ["/home", a1]; };
class VehicleitemComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
    }
    deleteCar(id) {
        this.store.dispatch(new _store_vehicle_actions__WEBPACK_IMPORTED_MODULE_0__["DeleteVehicleStart"](id));
    }
}
VehicleitemComponent.ɵfac = function VehicleitemComponent_Factory(t) { return new (t || VehicleitemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
VehicleitemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VehicleitemComponent, selectors: [["app-vehicleitem"]], inputs: { vehicle: "vehicle" }, decls: 30, vars: 11, consts: [[1, "card"], [1, "count"], [1, "card-header"], [1, "img_text"], [1, "card-body"], ["alt", "v_image", 3, "src"], [1, "btn", "btn-sm", "btn-primary", 3, "routerLink"], [1, "btn", "btn-sm", "btn-danger", 3, "click"]], template: function VehicleitemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "seats");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VehicleitemComponent_Template_button_click_28_listener() { return ctx.deleteCar(ctx.vehicle.vehicleId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.vehicle.count, "-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.vehicle.model, " ", ctx.vehicle.brand, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.vehicle.picture, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](": ", ctx.vehicle.vType, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](": ", ctx.vehicle.constructionYear, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](": ", ctx.vehicle.numberOfSeats, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](": ", ctx.vehicle.pricePerDay, "$/day");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.vehicle.vehicleId));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".card[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: 10px;\n  position: relative;\n}\n.card[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 10px;\n  text-decoration: underline;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  font-weight: bold;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n@media (max-width: 990px) {\n  .card[_ngcontent-%COMP%] {\n    width: 200px;\n    font-size: 11px;\n  }\n  .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n}\n@media (max-width: 480px) {\n  .card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .card[_ngcontent-%COMP%]   .img_text[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .card[_ngcontent-%COMP%]   .img_text[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2ZWhpY2xlaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQUVKO0FBQ0k7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0FBQ047QUFJSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBRk47QUFJSTtFQUNFLGlCQUFBO0FBRk47QUFNQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGVBQUE7RUFIRjtFQUtJO0lBQ0UsYUFBQTtFQUhOO0FBQ0Y7QUFPQTtFQUNFO0lBQ0UsV0FBQTtFQUxGO0VBT0U7SUFDSSxhQUFBO0VBTE47RUFPVTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VBTGQ7QUFDRiIsImZpbGUiOiJ2ZWhpY2xlaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAuY291bnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbiAgLmNhcmQtaGVhZGVyIHtcclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2FyZC1ib2R5IHtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkwcHgpIHtcclxuICAuY2FyZCB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICAuaW1nX3RleHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: "http://localhost:5000/user"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Dr0q":
/*!***************************************************!*\
  !*** ./src/app/vehicles/store/vehicle.effects.ts ***!
  \***************************************************/
/*! exports provided: VehicleEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleEffects", function() { return VehicleEffects; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ "AytR");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _vehicle_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicle.actions */ "hugR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");









class VehicleEffects {
    constructor(actions$, http, store) {
        this.actions$ = actions$;
        this.http = http;
        this.store = store;
        this.getVehicles$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_vehicle_actions__WEBPACK_IMPORTED_MODULE_4__["GET_VEHICLE_START"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
                return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
                    return new _vehicle_actions__WEBPACK_IMPORTED_MODULE_4__["GetVehicleSuccess"](res);
                }));
            }));
        });
        this.createVehicle = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_vehicle_actions__WEBPACK_IMPORTED_MODULE_4__["CREATE_VEHICLE_START"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((resData) => {
                return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + "/createVehicle", resData.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
                    return new _vehicle_actions__WEBPACK_IMPORTED_MODULE_4__["CreateVehicleSuccess"](res);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _vehicle_actions__WEBPACK_IMPORTED_MODULE_4__["CreateVehicleFail"](error.error.errors));
                }));
            }));
        });
        this.editVehicle = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_vehicle_actions__WEBPACK_IMPORTED_MODULE_4__["EDIT_VEHICLE_START"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((resData) => {
                return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + "/vehicle/edit/" + resData.payload.id, resData.payload.vehicle).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
                    return new _vehicle_actions__WEBPACK_IMPORTED_MODULE_4__["EditVehicleSuccess"](res);
                }));
            }));
        });
        this.createRental = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_vehicle_actions__WEBPACK_IMPORTED_MODULE_4__["CREATE_RENTAL_START"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((resData) => {
                return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + "/rentalEvent/" + resData.payload.customerName + "/" + resData.payload.vehicleName, resData.payload.rentalEvent).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
                    return new _vehicle_actions__WEBPACK_IMPORTED_MODULE_4__["CreateRentalSuccess"]({ rent: res, successMsg: "Success" });
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _vehicle_actions__WEBPACK_IMPORTED_MODULE_4__["CreateRentalFail"](error.error));
                }));
            }));
        });
        this.getRental = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_vehicle_actions__WEBPACK_IMPORTED_MODULE_4__["GET_RENTAL_START"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
                return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + "/rentalEvent").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
                    return new _vehicle_actions__WEBPACK_IMPORTED_MODULE_4__["GetRentalSuccess"](res);
                }));
            }));
        });
        this.deleteRental = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_vehicle_actions__WEBPACK_IMPORTED_MODULE_4__["DELETE_RENTAL_START"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((resData) => {
                return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + "/rentalEvent/" + resData.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
                    return new _vehicle_actions__WEBPACK_IMPORTED_MODULE_4__["DeleteRentalSuccess"]();
                }));
            }));
        });
        this.deleteVehicle = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_vehicle_actions__WEBPACK_IMPORTED_MODULE_4__["DELETE_VEHICLE_START"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((resData) => {
                return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + "/vehicle/" + resData.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
                    return new _vehicle_actions__WEBPACK_IMPORTED_MODULE_4__["DeleteVehicleSuccess"]();
                }));
            }));
        });
    }
}
VehicleEffects.ɵfac = function VehicleEffects_Factory(t) { return new (t || VehicleEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"])); };
VehicleEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: VehicleEffects, factory: VehicleEffects.ɵfac });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'RentACar';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 0, consts: [[1, "container-fluid"], [1, "navbar-my"], ["routerLink", "/home"], ["routerLink", "/customers"], ["routerLink", "/rented"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "CUSTOMERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "RENTED DATA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.navbar-my[_ngcontent-%COMP%] {\n  padding: 20px 0px;\n}\n\n.navbar-my[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #0a56ad;\n  margin-right: 10px;\n  transition: 0.3s ease-in-out;\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n.navbar-my[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n\n@media (max-width: 413px) {\n  .navbar-my[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0FBRUY7O0FBREU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQUdKOztBQURJO0VBQ0UsWUFBQTtBQUdOOztBQURJO0VBWEY7SUFZRSxjQUFBO0VBSUY7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4ubmF2YmFyLW15IHtcclxuICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiByZ2IoMTAsIDg2LCAxNzMpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6NDEzcHgpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Tm8F":
/*!******************************************************************!*\
  !*** ./src/app/customers/customerEdit/customerEdit.component.ts ***!
  \******************************************************************/
/*! exports provided: CustomerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditComponent", function() { return CustomerEditComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_customer_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/customer.actions */ "/tw2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function CustomerEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CustomerEditComponent_div_0_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.editCustomer(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Edit Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Full name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerEditComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.customer.fullName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerEditComponent_div_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.customer.emailAddress = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Phone number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerEditComponent_div_0_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.customer.phoneNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.customer.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.customer.emailAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.customer.phoneNumber);
} }
class CustomerEditComponent {
    constructor(store, router, route) {
        this.store = store;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.router.params.subscribe((param) => {
            this.customerId = +param['id'];
            this.store.select('customerList').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resdata => {
                return resdata.customer.find((v, index) => {
                    return v.customerId === this.customerId;
                });
            })).subscribe(res => {
                if (!res) {
                    this.route.navigate(['/customers']);
                }
                this.customer = JSON.parse(JSON.stringify(res));
            });
        });
    }
    editCustomer(f) {
        this.store.dispatch(new _store_customer_actions__WEBPACK_IMPORTED_MODULE_1__["EditCustomerStart"]({ id: this.customerId, customer: f.value }));
    }
}
CustomerEditComponent.ɵfac = function CustomerEditComponent_Factory(t) { return new (t || CustomerEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
CustomerEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CustomerEditComponent, selectors: [["app-customerEdit"]], decls: 1, vars: 1, consts: [["class", "overlay", 4, "ngIf"], [1, "overlay"], [3, "ngSubmit"], ["f", "ngForm"], ["routerLink", "/customers"], ["type", "text", "name", "fullName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "emailAddress", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "phoneNumber", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-dark"]], template: function CustomerEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CustomerEditComponent_div_0_Template, 18, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.customer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"]], styles: [".overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n  background-color: rgba(0, 0, 0, 0.726);\n}\n.overlay[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  padding: 20px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 400px;\n  border-radius: 10px;\n}\n.overlay[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.overlay[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.overlay[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: crimson;\n  color: white;\n  padding: 10px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjdXN0b21lckVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtBQUNKO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUNRO0VBQ0ksZUFBQTtBQUNaO0FBRVE7RUFDSSxXQUFBO0FBQVo7QUFHUTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQURaIiwiZmlsZSI6ImN1c3RvbWVyRWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MjYpO1xyXG5cclxuICAgIGZvcm0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Wbpv":
/*!************************************************!*\
  !*** ./src/app/vehicles/vehicles.component.ts ***!
  \************************************************/
/*! exports provided: VehiclesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesComponent", function() { return VehiclesComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_vehicle_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/vehicle.actions */ "hugR");
/* harmony import */ var _customers_store_customer_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customers/store/customer.actions */ "/tw2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _rentalEvent_rentalEvent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rentalEvent/rentalEvent.component */ "hEng");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _vehicleitem_vehicleitem_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vehicleitem/vehicleitem.component */ "5JTV");










function VehiclesComponent_app_rentalEvent_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-rentalEvent", 11);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("vehicles", ctx_r0.vehicles);
} }
function VehiclesComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.rentalError);
} }
function VehiclesComponent_div_13_legend_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VehiclesComponent_div_13_legend_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VehiclesComponent_div_13_legend_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VehiclesComponent_div_13_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vTp_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", vTp_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](vTp_r20);
} }
function VehiclesComponent_div_13_legend_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VehiclesComponent_div_13_legend_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*1 number is req");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VehiclesComponent_div_13_legend_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*1 number is req");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VehiclesComponent_div_13_legend_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*1 number is req");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VehiclesComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function VehiclesComponent_div_13_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.addNewCar(_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VehiclesComponent_div_13_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r23.isActive = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Create Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, VehiclesComponent_div_13_legend_9_Template, 2, 0, "legend", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, VehiclesComponent_div_13_legend_12_Template, 2, 0, "legend", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, VehiclesComponent_div_13_legend_15_Template, 2, 0, "legend", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function VehiclesComponent_div_13_Template_select_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r24.defaultType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, VehiclesComponent_div_13_option_17_Template, 2, 2, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, VehiclesComponent_div_13_legend_20_Template, 2, 0, "legend", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, VehiclesComponent_div_13_legend_23_Template, 2, 0, "legend", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, VehiclesComponent_div_13_legend_26_Template, 2, 0, "legend", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, VehiclesComponent_div_13_legend_29_Template, 2, 0, "legend", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](22);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](25);
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](28);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r5.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r7.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r9.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.defaultType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.vType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r12.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r14.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r16.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r18.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r4.valid);
} }
function VehiclesComponent_app_vehicleitem_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-vehicleitem", 36);
} if (rf & 2) {
    const vehicle_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("vehicle", vehicle_r25);
} }
class VehiclesComponent {
    constructor(store) {
        this.store = store;
        this.vehicles = [];
        this.vType = ["economy", "luxury", "estate", "SUV", "cargo"];
        this.defaultType = "economy";
        this.isActive = false;
        this.isRented = false;
    }
    ngOnInit() {
        this.store.dispatch(new _store_vehicle_actions__WEBPACK_IMPORTED_MODULE_1__["GetVehicleStart"]());
        this.store.dispatch(new _customers_store_customer_actions__WEBPACK_IMPORTED_MODULE_2__["GetCustomerStart"]());
        this.store.select('vehicleList').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res)).subscribe(res => {
            this.vehicles = res.vehicle;
        });
    }
    addNewCar(f) {
        this.store.dispatch(new _store_vehicle_actions__WEBPACK_IMPORTED_MODULE_1__["CreateVehicleStart"](f.value));
    }
}
VehiclesComponent.ɵfac = function VehiclesComponent_Factory(t) { return new (t || VehiclesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
VehiclesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VehiclesComponent, selectors: [["app-vehicles"]], decls: 18, vars: 4, consts: [[1, "vehicles"], [1, "btn", "btn-success", "rental_event_btn", 3, "click"], [1, "vehicles_header"], [3, "vehicles", 4, "ngIf"], ["class", "rentalError", 4, "ngIf"], [1, "add_btns"], [1, "btn", "btn-sm", "btn-success", 3, "click"], ["class", "overlay", 4, "ngIf"], [1, "vehicle"], [3, "vehicle", 4, "ngFor", "ngForOf"], [1, "vehicle-edit"], [3, "vehicles"], [1, "rentalError"], [1, "overlay"], [3, "ngSubmit"], ["f", "ngForm"], [3, "click"], ["type", "text", "name", "brand", "placeholder", "car brand", "ngModel", "", "required", "", 1, "form-control"], ["brand", "ngModel"], [4, "ngIf"], ["type", "text", "name", "constructionYear", "placeholder", "year of construction", "ngModel", "", "required", "", 1, "form-control"], ["constructionYear", "ngModel"], ["type", "text", "name", "model", "placeholder", "model", "ngModel", "", "required", "", 1, "form-control"], ["model", "ngModel"], ["name", "vType", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "name", "picture", "placeholder", "picture(..copy url)", "ngModel", "", "required", "", 1, "form-control"], ["picture", "ngModel"], ["type", "number", "name", "count", "placeholder", "how in storage?", "ngModel", "", "required", "", 1, "form-control"], ["count", "ngModel"], ["type", "number", "name", "numberOfSeats", "placeholder", "number of seats", "ngModel", "", "required", "", 1, "form-control"], ["numberOfSeats", "ngModel"], ["type", "number", "name", "pricePerDay", "placeholder", "Price/Day", "ngModel", "", "required", "", 1, "form-control"], ["pricePerDay", "ngModel"], ["type", "submit", 1, "btn", "btn-dark", 3, "disabled"], [3, "value"], [3, "vehicle"]], template: function VehiclesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VehiclesComponent_Template_button_click_1_listener() { return ctx.isRented = !ctx.isRented; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Rent a car");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Rent A Car");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\"Rent it!\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, VehiclesComponent_app_rentalEvent_8_Template, 1, 1, "app-rentalEvent", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, VehiclesComponent_p_9_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VehiclesComponent_Template_button_click_11_listener() { return ctx.isActive = !ctx.isActive; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "+ add new");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, VehiclesComponent_div_13_Template, 32, 10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, VehiclesComponent_app_vehicleitem_15_Template, 1, 1, "app-vehicleitem", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isRented);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.rentalError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.vehicles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _rentalEvent_rentalEvent_component__WEBPACK_IMPORTED_MODULE_7__["RentalEventComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _vehicleitem_vehicleitem_component__WEBPACK_IMPORTED_MODULE_9__["VehicleitemComponent"]], styles: [".vehicle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n@media (max-width: 1008px) {\n  .vehicle[_ngcontent-%COMP%] {\n    justify-content: space-evenly;\n  }\n}\n@media (max-width: 470px) {\n  .vehicle[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.vehicles[_ngcontent-%COMP%]   .rentalError[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  background-color: #ac7208;\n  color: white;\n  padding: 20px;\n}\n.vehicles[_ngcontent-%COMP%]   .rental_event_btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 10px;\n}\n.vehicles[_ngcontent-%COMP%]   .vehicles_header[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-image: url(\"https://rentacarubeogradu.rs/wp-content/uploads/2019/07/rent-a-car-beograd.png\");\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n.vehicles[_ngcontent-%COMP%]   .vehicles_header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.vehicles[_ngcontent-%COMP%]   .vehicles_header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  color: gray;\n  font-style: italic;\n  text-align: center;\n}\n.vehicles[_ngcontent-%COMP%]   .add_btns[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n}\n.vehicles[_ngcontent-%COMP%]   .add_btns[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.548);\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 999;\n}\n.vehicles[_ngcontent-%COMP%]   .add_btns[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 500px;\n  background-color: white;\n  padding: 20px;\n  border-radius: 10px;\n}\n.vehicles[_ngcontent-%COMP%]   .add_btns[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .vehicles[_ngcontent-%COMP%]   .add_btns[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.vehicles[_ngcontent-%COMP%]   .add_btns[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.vehicles[_ngcontent-%COMP%]   .add_btns[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: crimson;\n  color: white;\n  padding: 10px;\n  cursor: pointer;\n}\n.vehicles[_ngcontent-%COMP%]   .add_btns[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-transform: uppercase;\n  color: rgba(220, 20, 60, 0.863);\n}\n@media (max-width: 570px) {\n  .vehicles[_ngcontent-%COMP%]   .add_btns[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n}\n@media (max-width: 435px) {\n  .vehicles[_ngcontent-%COMP%]   .add_btns[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHZlaGljbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFDSjtBQUNJO0VBSko7SUFLUSw2QkFBQTtFQUVOO0FBQ0Y7QUFBSTtFQVJKO0lBU1Esc0JBQUE7RUFHTjtBQUNGO0FBRUk7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNSO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQUNSO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsdUdBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0FBQ1I7QUFFUTtFQUNJLGtCQUFBO0FBQVo7QUFFUTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBWjtBQUdJO0VBQ0ksa0JBQUE7QUFEUjtBQUdRO0VBQ0ksc0NBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFEWjtBQUVZO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQWhCO0FBQ2dCO0VBQ0ksZ0JBQUE7QUFDcEI7QUFDZ0I7RUFDSSxnQkFBQTtBQUNwQjtBQUNnQjtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNwQjtBQUVnQjtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0FBQXBCO0FBR2dCO0VBL0JKO0lBZ0NRLFlBQUE7RUFBbEI7QUFDRjtBQUNnQjtFQWxDSjtJQW1DUSxZQUFBO0VBRWxCO0FBQ0YiLCJmaWxlIjoidmVoaWNsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVoaWNsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6MTAwOHB4KSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOjQ3MHB4KSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgXHJcbn1cclxuXHJcbi52ZWhpY2xlcyB7XHJcbiAgICAucmVudGFsRXJyb3Ige1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MiwgMTE0LCA4KTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuICAgIC5yZW50YWxfZXZlbnRfYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgIH1cclxuICAgIC52ZWhpY2xlc19oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3JlbnRhY2FydWJlb2dyYWR1LnJzL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA3L3JlbnQtYS1jYXItYmVvZ3JhZC5wbmcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWRkX2J0bnMge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuXHJcbiAgICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQ4KTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgaW5wdXQsc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZWdlbmQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDIyMCwgMjAsIDYwLCAwLjg2Myk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDo1NzBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NDM1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _customers_store_customer_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers/store/customer.effects */ "vEaz");
/* harmony import */ var _customers_customerItem_customerItem_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers/customerItem/customerItem.component */ "g2q6");
/* harmony import */ var _customers_customerEdit_customerEdit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers/customerEdit/customerEdit.component */ "Tm8F");
/* harmony import */ var _vehicles_vehicleEdit_vehicleEdit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicles/vehicleEdit/vehicleEdit.component */ "dPgI");
/* harmony import */ var _vehicles_vehicleitem_vehicleitem_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicles/vehicleitem/vehicleitem.component */ "5JTV");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customers/customers.component */ "4yXv");
/* harmony import */ var _vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vehicles/vehicles.component */ "Wbpv");
/* harmony import */ var _rentalEvent_rentalEvent_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rentalEvent/rentalEvent.component */ "hEng");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.reducer */ "a318");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _vehicles_store_vehicle_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./vehicles/store/vehicle.effects */ "Dr0q");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _renteddata_renteddata_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./renteddata/renteddata.component */ "pqQf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");

























const routes = [
    { path: "", redirectTo: "/home", pathMatch: 'full' },
    { path: "customers", component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_8__["CustomersComponent"], children: [
            { path: "edit/:id", component: _customers_customerEdit_customerEdit_component__WEBPACK_IMPORTED_MODULE_2__["CustomerEditComponent"] }
        ] },
    { path: "home", component: _vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_9__["VehiclesComponent"], children: [
            { path: ":id", component: _vehicles_vehicleEdit_vehicleEdit_component__WEBPACK_IMPORTED_MODULE_3__["VehicleEditComponent"] }
        ] },
    { path: "rented", component: _renteddata_renteddata_component__WEBPACK_IMPORTED_MODULE_19__["RenteddataComponent"] }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreModule"].forRoot(_app_reducer__WEBPACK_IMPORTED_MODULE_13__["appreducers"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__["EffectsModule"].forRoot([_vehicles_store_vehicle_effects__WEBPACK_IMPORTED_MODULE_15__["VehicleEffects"], _customers_store_customer_effects__WEBPACK_IMPORTED_MODULE_0__["CustomerEffects"]]),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["BsDatepickerModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _customers_customers_component__WEBPACK_IMPORTED_MODULE_8__["CustomersComponent"],
        _vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_9__["VehiclesComponent"],
        _rentalEvent_rentalEvent_component__WEBPACK_IMPORTED_MODULE_10__["RentalEventComponent"],
        _vehicles_vehicleitem_vehicleitem_component__WEBPACK_IMPORTED_MODULE_4__["VehicleitemComponent"],
        _vehicles_vehicleEdit_vehicleEdit_component__WEBPACK_IMPORTED_MODULE_3__["VehicleEditComponent"],
        _customers_customerEdit_customerEdit_component__WEBPACK_IMPORTED_MODULE_2__["CustomerEditComponent"],
        _customers_customerItem_customerItem_component__WEBPACK_IMPORTED_MODULE_1__["CustomerItemComponent"],
        _renteddata_renteddata_component__WEBPACK_IMPORTED_MODULE_19__["RenteddataComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__["EffectsRootModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["BsDatepickerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "a318":
/*!********************************!*\
  !*** ./src/app/app.reducer.ts ***!
  \********************************/
/*! exports provided: appreducers, customerState, vehicleState, getCustomers, getVehicle, getMsgForRentalSuccess, getRentalError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appreducers", function() { return appreducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerState", function() { return customerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vehicleState", function() { return vehicleState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomers", function() { return getCustomers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVehicle", function() { return getVehicle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMsgForRentalSuccess", function() { return getMsgForRentalSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRentalError", function() { return getRentalError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _vehicles_store_vehicle_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicles/store/vehicle.reducer */ "cJew");
/* harmony import */ var _customers_store_customer_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers/store/customer.reducer */ "walf");



const appreducers = {
    vehicleList: _vehicles_store_vehicle_reducer__WEBPACK_IMPORTED_MODULE_1__["VehicleReducer"],
    customerList: _customers_store_customer_reducer__WEBPACK_IMPORTED_MODULE_2__["CustomerReducer"]
};
const customerState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('customerList');
const vehicleState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('vehicleList');
const getCustomers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(customerState, _customers_store_customer_reducer__WEBPACK_IMPORTED_MODULE_2__["getCustomerState"]);
const getVehicle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(vehicleState, _vehicles_store_vehicle_reducer__WEBPACK_IMPORTED_MODULE_1__["getVehicles"]);
const getMsgForRentalSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(vehicleState, _vehicles_store_vehicle_reducer__WEBPACK_IMPORTED_MODULE_1__["getloading"]);
const getRentalError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(vehicleState, _vehicles_store_vehicle_reducer__WEBPACK_IMPORTED_MODULE_1__["getError"]);


/***/ }),

/***/ "cJew":
/*!***************************************************!*\
  !*** ./src/app/vehicles/store/vehicle.reducer.ts ***!
  \***************************************************/
/*! exports provided: VehicleReducer, getVehicles, getloading, getError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleReducer", function() { return VehicleReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVehicles", function() { return getVehicles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getloading", function() { return getloading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony import */ var _vehicle_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle.actions */ "hugR");

const initialState = {
    vehicle: [],
    rental: [],
    createUserFail: [],
    rentalSuccess: null,
    rentalError: null,
    loading: false
};
function VehicleReducer(state = initialState, action) {
    switch (action.type) {
        case _vehicle_actions__WEBPACK_IMPORTED_MODULE_0__["GET_VEHICLE_START"]:
            return Object.assign({}, state);
        case _vehicle_actions__WEBPACK_IMPORTED_MODULE_0__["GET_VEHICLE_SUCCESS"]:
            return Object.assign(Object.assign({}, state), { vehicle: action.payload });
        case _vehicle_actions__WEBPACK_IMPORTED_MODULE_0__["CREATE_VEHICLE_START"]:
            return Object.assign({}, state);
        case _vehicle_actions__WEBPACK_IMPORTED_MODULE_0__["CREATE_VEHICLE_SUCCESS"]:
            return Object.assign(Object.assign({}, state), { vehicle: [...state.vehicle, action.payload], createUserFail: [] });
        case _vehicle_actions__WEBPACK_IMPORTED_MODULE_0__["CREATE_VEHICLE_FAIL"]:
            return Object.assign(Object.assign({}, state), { createUserFail: action.payload });
        case _vehicle_actions__WEBPACK_IMPORTED_MODULE_0__["EDIT_VEHICLE_START"]:
            return Object.assign({}, state);
        case _vehicle_actions__WEBPACK_IMPORTED_MODULE_0__["EDIT_VEHICLE_SUCCESS"]:
            let index = state.vehicle.findIndex(i => i.vehicleId === action.payload.vehicleId);
            let vehicle = [...state.vehicle];
            const vehicleUpdate = Object.assign({}, action.payload);
            vehicle[index] = vehicleUpdate;
            return Object.assign(Object.assign({}, state), { vehicle: vehicle });
        case _vehicle_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_VEHICLE_START"]:
            return Object.assign(Object.assign({}, state), { vehicle: state.vehicle.filter((v, index) => {
                    return v.vehicleId !== action.payload;
                }) });
        case _vehicle_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_VEHICLE_SUCCESS"]:
            return Object.assign({}, state);
        case _vehicle_actions__WEBPACK_IMPORTED_MODULE_0__["CREATE_RENTAL_START"]:
            return Object.assign(Object.assign({}, state), { rentalError: null, loading: true, rentalSuccess: null });
        case _vehicle_actions__WEBPACK_IMPORTED_MODULE_0__["CREATE_RENTAL_SUCCESS"]:
            let id = state.vehicle.findIndex(v => v.vehicleId === action.payload.rent.vehiclerepo.vehicleId);
            let v = [...state.vehicle];
            let vupdate = Object.assign({}, action.payload.rent.vehiclerepo);
            v[id] = vupdate;
            return Object.assign(Object.assign({}, state), { rentalSuccess: action.payload.successMsg, rentalError: null, rental: [...state.rental, action.payload], vehicle: v, loading: false });
        case _vehicle_actions__WEBPACK_IMPORTED_MODULE_0__["CREATE_RENTAL_FAIL"]:
            return Object.assign(Object.assign({}, state), { loading: false, rentalError: action.payload, rentalSuccess: null, rental: [] });
        case _vehicle_actions__WEBPACK_IMPORTED_MODULE_0__["GET_RENTAL_START"]:
            return Object.assign({}, state);
        case _vehicle_actions__WEBPACK_IMPORTED_MODULE_0__["GET_RENTAL_SUCCESS"]:
            return Object.assign(Object.assign({}, state), { rental: action.payload });
        case _vehicle_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_RENTAL_START"]:
            return Object.assign(Object.assign({}, state), { rental: state.rental.filter(v => {
                    return v.rentalId !== action.payload;
                }) });
        case _vehicle_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_RENTAL_SUCCESS"]:
            return Object.assign({}, state);
        default:
            return state;
    }
}
const getVehicles = (state) => state.vehicle;
const getloading = (state) => state.loading;
const getError = (state) => state.rentalError;


/***/ }),

/***/ "dPgI":
/*!***************************************************************!*\
  !*** ./src/app/vehicles/vehicleEdit/vehicleEdit.component.ts ***!
  \***************************************************************/
/*! exports provided: VehicleEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleEditComponent", function() { return VehicleEditComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _store_vehicle_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/vehicle.actions */ "hugR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function VehicleEditComponent_form_1_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vTp_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", vTp_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](vTp_r3);
} }
function VehicleEditComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function VehicleEditComponent_form_1_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.editCar(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Car Brand ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function VehicleEditComponent_form_1_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.vehicle.brand = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Construction year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function VehicleEditComponent_form_1_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.vehicle.constructionYear = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Vehicle Model ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function VehicleEditComponent_form_1_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.vehicle.model = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Vehicle Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function VehicleEditComponent_form_1_Template_select_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.defaultType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, VehicleEditComponent_form_1_option_16_Template, 2, 2, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Vehicle URL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function VehicleEditComponent_form_1_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.vehicle.picture = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Vehicles in a store ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function VehicleEditComponent_form_1_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.vehicle.count = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Vehicle seats ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function VehicleEditComponent_form_1_Template_input_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.vehicle.numberOfSeats = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Vehicle price/day ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function VehicleEditComponent_form_1_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.vehicle.pricePerDay = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.vehicle.brand);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.vehicle.constructionYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.vehicle.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.defaultType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.vType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.vehicle.picture);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.vehicle.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.vehicle.numberOfSeats);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.vehicle.pricePerDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r1.valid);
} }
class VehicleEditComponent {
    constructor(route, router, store) {
        this.route = route;
        this.router = router;
        this.store = store;
        this.vType = ["economy", "luxury", "estate", "SUV", "cargo"];
        this.defaultType = "economy";
    }
    ngOnInit() {
        this.route.params.subscribe((param) => {
            this.vehicleId = +param['id'];
            this.store.select('vehicleList').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resdata => {
                return resdata.vehicle.find((v, index) => {
                    return v.vehicleId === this.vehicleId;
                });
            })).subscribe(res => {
                if (!res) {
                    this.router.navigate(['/']);
                }
                this.vehicle = res;
            });
        });
    }
    editCar(f) {
        this.store.dispatch(new _store_vehicle_actions__WEBPACK_IMPORTED_MODULE_1__["EditVehicleStart"]({ id: this.vehicleId, vehicle: f.value }));
    }
}
VehicleEditComponent.ɵfac = function VehicleEditComponent_Factory(t) { return new (t || VehicleEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
VehicleEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VehicleEditComponent, selectors: [["app-vehicleEdit"]], decls: 2, vars: 1, consts: [[1, "overlay"], [3, "ngSubmit", 4, "ngIf"], [3, "ngSubmit"], ["f", "ngForm"], ["routerLink", "/"], ["type", "text", "name", "brand", "placeholder", "car brand", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "constructionYear", "placeholder", "year of construction", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "model", "placeholder", "model", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "vType", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "name", "picture", "placeholder", "picture(..copy url)", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "count", "placeholder", "count", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "numberOfSeats", "placeholder", "number of seats", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "pricePerDay", "placeholder", "Price/Day", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-dark", 3, "disabled"], [3, "value"]], template: function VehicleEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VehicleEditComponent_form_1_Template, 31, 10, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.vehicle);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]], styles: [".overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.548);\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 999;\n}\n.overlay[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 500px;\n  background-color: white;\n  padding: 20px;\n  border-radius: 10px;\n}\n.overlay[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .overlay[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.overlay[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.overlay[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: crimson;\n  color: white;\n  padding: 10px;\n  cursor: pointer;\n}\n@media (max-width: 570px) {\n  .overlay[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n}\n@media (max-width: 435px) {\n  .overlay[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    max-width: 350px;\n  }\n  .overlay[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: contents;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2ZWhpY2xlRWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxnQkFBQTtBQUdaO0FBRFE7RUFDSSxnQkFBQTtBQUdaO0FBRFE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFHWjtBQUNRO0VBMUJKO0lBMkJRLFlBQUE7RUFFVjtBQUNGO0FBRFE7RUE3Qko7SUE4Qk8sZ0JBQUE7RUFJVDtFQUhTO0lBQ0ksaUJBQUE7RUFLYjtBQUNGIiwiZmlsZSI6InZlaGljbGVFZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJsYXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0OCk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBmb3JtIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBpbnB1dCxzZWxlY3Qge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NTcwcHgpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOjQzNXB4KSB7XHJcbiAgICAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "g2q6":
/*!******************************************************************!*\
  !*** ./src/app/customers/customerItem/customerItem.component.ts ***!
  \******************************************************************/
/*! exports provided: CustomerItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerItemComponent", function() { return CustomerItemComponent; });
/* harmony import */ var _store_customer_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/customer.actions */ "/tw2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function CustomerItemComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Vip");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["edit", a1]; };
class CustomerItemComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
    }
    deleteCustomer(id) {
        if (confirm("Are you sure?")) {
            this.store.dispatch(new _store_customer_actions__WEBPACK_IMPORTED_MODULE_0__["DeleteCustomerStart"](id));
        }
    }
}
CustomerItemComponent.ɵfac = function CustomerItemComponent_Factory(t) { return new (t || CustomerItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
CustomerItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomerItemComponent, selectors: [["app-customerItem"]], inputs: { customer: "customer" }, decls: 17, vars: 7, consts: [[1, "card"], [1, "card-body"], [4, "ngIf"], [1, "btn", "btn-sm", "btn-dark", 3, "routerLink"], [1, "btn", "btn-sm", "btn-dark", "mx-2", 3, "click"]], template: function CustomerItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CustomerItemComponent_span_4_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerItemComponent_Template_button_click_15_listener() { return ctx.deleteCustomer(ctx.customer.customerId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.customer.fullName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.customer.vip === "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.customer.emailAddress, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.customer.phoneNumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx.customer.customerId));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".card[_ngcontent-%COMP%] {\n  width: 100%;\n  border-top: none !important;\n  border-left: none !important;\n  border-right: none !important;\n  margin-bottom: 10px;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: crimson;\n  padding: 10px;\n  color: white;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjdXN0b21lckl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBRUEsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUlZO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRmhCIiwiZmlsZSI6ImN1c3RvbWVySXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "hEng":
/*!******************************************************!*\
  !*** ./src/app/rentalEvent/rentalEvent.component.ts ***!
  \******************************************************/
/*! exports provided: RentalEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalEventComponent", function() { return RentalEventComponent; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.reducer */ "a318");
/* harmony import */ var _vehicles_store_vehicle_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vehicles/store/vehicle.actions */ "hugR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function RentalEventComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RentalEventComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.rentedError);
} }
function RentalEventComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.rentalSuccessMSg);
} }
function RentalEventComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RentalEventComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RentalEventComponent_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cust_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", cust_r14.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cust_r14.fullName);
} }
function RentalEventComponent_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RentalEventComponent_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const veh_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", veh_r15.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", veh_r15.model, " ", veh_r15.brand, "");
} }
function RentalEventComponent_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "*Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class RentalEventComponent {
    constructor(store, http, actions$) {
        this.store = store;
        this.http = http;
        this.actions$ = actions$;
        this.defaultValue = "Z4";
        this.rentalSuccessMSg = '';
        this.rentedError = '';
    }
    ngOnInit() {
        console.log(this.rentalSuccessMSg);
        this.store.select('customerList').subscribe(res => this.customers = res.customer);
        this.store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_1__["getMsgForRentalSuccess"]).subscribe(res => {
            this.loading = res;
        });
        this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])('[Rental] Create rental fail')).subscribe((action) => {
            console.log(action);
            this.rentedError = action.payload;
            setTimeout(() => {
                this.rentedError = '';
            }, 2000);
        });
        this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])('[Rental] Create rental success')).subscribe((res) => {
            this.rentalSuccessMSg = res.payload.successMsg;
            setTimeout(() => {
                this.rentalSuccessMSg = '';
            }, 2000);
        });
    }
    rentIt(f) {
        this.store.dispatch(new _vehicles_store_vehicle_actions__WEBPACK_IMPORTED_MODULE_2__["CreateRentalStart"]({ customerName: f.value.customerName, vehicleName: f.value.vehicleName, rentalEvent: f.value }));
        setTimeout(() => {
            f.reset();
        }, 700);
    }
    ngOnDestroy() {
    }
}
RentalEventComponent.ɵfac = function RentalEventComponent_Factory(t) { return new (t || RentalEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"])); };
RentalEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RentalEventComponent, selectors: [["app-rentalEvent"]], inputs: { vehicles: "vehicles" }, decls: 32, vars: 10, consts: [["class", "loading bg-success text-center text-white", 4, "ngIf"], ["class", "rentalError text-white bg-danger text-center p-3", 4, "ngIf"], ["class", "rentalSuccess text-white bg-success text-center p-3", 4, "ngIf"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-row"], [1, "form-group", "col-md-6"], ["type", "date", "name", "startDate", "ngModel", "", "required", "", 1, "form-control"], ["startDate", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["type", "date", "name", "endDate", "ngModel", "", "required", "", 1, "form-control"], ["endDate", "ngModel"], ["name", "customerName", "ngModel", "", "required", "", 1, "form-control"], ["customerName", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "vehicleName", "ngModel", "", "required", "", 1, "form-control"], ["vehicleName", "ngModel"], ["type", "submit", 1, "btn", "btn-dark", "my-2", 3, "disabled"], [1, "loading", "bg-success", "text-center", "text-white"], [1, "rentalError", "text-white", "bg-danger", "text-center", "p-3"], [1, "rentalSuccess", "text-white", "bg-success", "text-center", "p-3"], [1, "text-danger"], [3, "value"]], template: function RentalEventComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, RentalEventComponent_p_0_Template, 2, 0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RentalEventComponent_p_1_Template, 2, 1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RentalEventComponent_p_2_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RentalEventComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4); return ctx.rentIt(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Start ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, RentalEventComponent_p_11_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "End ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, RentalEventComponent_p_17_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Customers:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "select", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, RentalEventComponent_option_22_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, RentalEventComponent_p_23_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Vehicle:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "select", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, RentalEventComponent_option_28_Template, 2, 3, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, RentalEventComponent_p_29_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](16);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](21);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.rentedError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.rentalSuccessMSg);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r4.valid && _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r6.valid && _r6.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.customers);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r8.valid && _r8.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.vehicles);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r11.valid && _r11.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r3.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"]], styles: ["form[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 10px auto;\n  background-color: white;\n  padding: 10px;\n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100%;\n  text-transform: uppercase;\n  font-size: 15px;\n  font-weight: bold;\n}\n.loading[_ngcontent-%COMP%] {\n  width: 200px;\n  margin: auto;\n  font-size: 25px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.rentalError[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: 10px auto;\n  border-radius: 3px;\n  box-shadow: 2px 2px 10px darkgrey;\n}\n.rentalSuccess[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: 10px auto;\n  border-radius: 3px;\n  box-shadow: 2px 2px 10px darkgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlbnRhbEV2ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQURKO0FBR0k7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQU1BO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBSEo7QUFNQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUFISjtBQUtBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUZKIiwiZmlsZSI6InJlbnRhbEV2ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5mb3JtIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46MTBweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIFxyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgXHJcbn1cclxuLmxvYWRpbmcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG59XHJcblxyXG4ucmVudGFsRXJyb3Ige1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggZGFya2dyZXk7XHJcbn1cclxuLnJlbnRhbFN1Y2Nlc3Mge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggZGFya2dyZXk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "hugR":
/*!***************************************************!*\
  !*** ./src/app/vehicles/store/vehicle.actions.ts ***!
  \***************************************************/
/*! exports provided: GET_VEHICLE_START, GET_VEHICLE_SUCCESS, CREATE_VEHICLE_START, CREATE_VEHICLE_SUCCESS, CREATE_VEHICLE_FAIL, EDIT_VEHICLE_START, EDIT_VEHICLE_SUCCESS, DELETE_VEHICLE_START, DELETE_VEHICLE_SUCCESS, CREATE_RENTAL_START, CREATE_RENTAL_SUCCESS, CREATE_RENTAL_FAIL, GET_RENTAL_START, GET_RENTAL_SUCCESS, DELETE_RENTAL_START, DELETE_RENTAL_SUCCESS, GetVehicleStart, GetVehicleSuccess, CreateVehicleStart, CreateVehicleSuccess, CreateVehicleFail, EditVehicleStart, EditVehicleSuccess, DeleteVehicleStart, DeleteVehicleSuccess, CreateRentalStart, CreateRentalSuccess, CreateRentalFail, GetRentalStart, GetRentalSuccess, DeleteRentalStart, DeleteRentalSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_VEHICLE_START", function() { return GET_VEHICLE_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_VEHICLE_SUCCESS", function() { return GET_VEHICLE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_VEHICLE_START", function() { return CREATE_VEHICLE_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_VEHICLE_SUCCESS", function() { return CREATE_VEHICLE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_VEHICLE_FAIL", function() { return CREATE_VEHICLE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_VEHICLE_START", function() { return EDIT_VEHICLE_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_VEHICLE_SUCCESS", function() { return EDIT_VEHICLE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_VEHICLE_START", function() { return DELETE_VEHICLE_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_VEHICLE_SUCCESS", function() { return DELETE_VEHICLE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_RENTAL_START", function() { return CREATE_RENTAL_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_RENTAL_SUCCESS", function() { return CREATE_RENTAL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_RENTAL_FAIL", function() { return CREATE_RENTAL_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RENTAL_START", function() { return GET_RENTAL_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RENTAL_SUCCESS", function() { return GET_RENTAL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_RENTAL_START", function() { return DELETE_RENTAL_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_RENTAL_SUCCESS", function() { return DELETE_RENTAL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetVehicleStart", function() { return GetVehicleStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetVehicleSuccess", function() { return GetVehicleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVehicleStart", function() { return CreateVehicleStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVehicleSuccess", function() { return CreateVehicleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVehicleFail", function() { return CreateVehicleFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVehicleStart", function() { return EditVehicleStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVehicleSuccess", function() { return EditVehicleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteVehicleStart", function() { return DeleteVehicleStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteVehicleSuccess", function() { return DeleteVehicleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRentalStart", function() { return CreateRentalStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRentalSuccess", function() { return CreateRentalSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRentalFail", function() { return CreateRentalFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRentalStart", function() { return GetRentalStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRentalSuccess", function() { return GetRentalSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRentalStart", function() { return DeleteRentalStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRentalSuccess", function() { return DeleteRentalSuccess; });
const GET_VEHICLE_START = 'GET_VEHICLE_START';
const GET_VEHICLE_SUCCESS = 'GET_VEHICLE_SUCCESS';
const CREATE_VEHICLE_START = 'CREATE_VEHICLE_START';
const CREATE_VEHICLE_SUCCESS = 'CREATE_VEHICLE_SUCCESS';
const CREATE_VEHICLE_FAIL = 'CREATE_VEHICLE_FAIL';
const EDIT_VEHICLE_START = 'EDIT_VEHICLE_START';
const EDIT_VEHICLE_SUCCESS = 'EDIT_VEHICLE_SUCCESS';
const DELETE_VEHICLE_START = 'DELETE_VEHICLE_START';
const DELETE_VEHICLE_SUCCESS = 'DELETE_VEHICLE_SUCCESS';
const CREATE_RENTAL_START = '[Rental] Create rental start';
const CREATE_RENTAL_SUCCESS = '[Rental] Create rental success';
const CREATE_RENTAL_FAIL = '[Rental] Create rental fail';
const GET_RENTAL_START = 'GET_RENTAL_START';
const GET_RENTAL_SUCCESS = 'GET_RENTAL_SUCCESS';
const DELETE_RENTAL_START = 'DELETE_RENTAL_START';
const DELETE_RENTAL_SUCCESS = 'DELETE_RENTAL_SUCCESS';
class GetVehicleStart {
    constructor() {
        this.type = GET_VEHICLE_START;
    }
}
class GetVehicleSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_VEHICLE_SUCCESS;
    }
}
class CreateVehicleStart {
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_VEHICLE_START;
    }
}
class CreateVehicleSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_VEHICLE_SUCCESS;
    }
}
//fail to create vehicle
class CreateVehicleFail {
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_VEHICLE_FAIL;
    }
}
class EditVehicleStart {
    constructor(payload) {
        this.payload = payload;
        this.type = EDIT_VEHICLE_START;
    }
}
class EditVehicleSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = EDIT_VEHICLE_SUCCESS;
    }
}
class DeleteVehicleStart {
    constructor(payload) {
        this.payload = payload;
        this.type = DELETE_VEHICLE_START;
    }
}
class DeleteVehicleSuccess {
    constructor() {
        this.type = DELETE_VEHICLE_SUCCESS;
    }
}
class CreateRentalStart {
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_RENTAL_START;
    }
}
class CreateRentalSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_RENTAL_SUCCESS;
    }
}
class CreateRentalFail {
    constructor(payload) {
        this.payload = payload;
        this.type = CREATE_RENTAL_FAIL;
    }
}
class GetRentalStart {
    constructor() {
        this.type = GET_RENTAL_START;
    }
}
class GetRentalSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_RENTAL_SUCCESS;
    }
}
class DeleteRentalStart {
    constructor(payload) {
        this.payload = payload;
        this.type = DELETE_RENTAL_START;
    }
}
class DeleteRentalSuccess {
    constructor() {
        this.type = DELETE_RENTAL_SUCCESS;
    }
}


/***/ }),

/***/ "pqQf":
/*!****************************************************!*\
  !*** ./src/app/renteddata/renteddata.component.ts ***!
  \****************************************************/
/*! exports provided: RenteddataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenteddataComponent", function() { return RenteddataComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _vehicles_store_vehicle_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vehicles/store/vehicle.actions */ "hugR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function RenteddataComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No files.. X(");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RenteddataComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RenteddataComponent_div_2_Template_p_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const rent_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.deleteRental(rent_r2.rentalId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "CUSTOMER");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "VEHICLE MODEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rent_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 4, rent_r2.startDate), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 6, rent_r2.endDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", rent_r2.customerName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", rent_r2.vehicleName, "");
} }
class RenteddataComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(new _vehicles_store_vehicle_actions__WEBPACK_IMPORTED_MODULE_1__["GetRentalStart"]());
        this.store
            .select('vehicleList')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => data.rental))
            .subscribe((res) => {
            this.rented = res;
        });
    }
    deleteRental(id) {
        this.store.dispatch(new _vehicles_store_vehicle_actions__WEBPACK_IMPORTED_MODULE_1__["DeleteRentalStart"](id));
    }
}
RenteddataComponent.ɵfac = function RenteddataComponent_Factory(t) { return new (t || RenteddataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
RenteddataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RenteddataComponent, selectors: [["app-renteddata"]], decls: 3, vars: 2, consts: [[1, "rented"], ["class", "msg_no_files", 4, "ngIf"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "msg_no_files"], [1, "card"], [1, "close", 3, "click"], [1, "card-body"], [1, "customername"], [1, "vehiclename"]], template: function RenteddataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RenteddataComponent_p_1_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RenteddataComponent_div_2_Template, 17, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.rented.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.rented);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".card[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 10px;\n}\n.card[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 10px;\n  color: white;\n  cursor: pointer;\n  background-color: rgba(201, 16, 16, 0.582);\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: gray;\n  text-decoration: underline;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .customername[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .vehiclename[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.msg_no_files[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlbnRlZGRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0FBRVI7QUFDUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFDWjtBQUNRO0VBQ0ksaUJBQUE7QUFDWjtBQUlBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQURKIiwiZmlsZSI6InJlbnRlZGRhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAuY2xvc2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAxLCAxNiwgMTYsIDAuNTgyKTtcclxuICAgIH1cclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmN1c3RvbWVybmFtZSwudmVoaWNsZW5hbWUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tc2dfbm9fZmlsZXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "vEaz":
/*!*****************************************************!*\
  !*** ./src/app/customers/store/customer.effects.ts ***!
  \*****************************************************/
/*! exports provided: CustomerEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEffects", function() { return CustomerEffects; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ "AytR");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _customer_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.actions */ "/tw2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class CustomerEffects {
    constructor(action$, http) {
        this.action$ = action$;
        this.http = http;
        this.getCustomers$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_customer_actions__WEBPACK_IMPORTED_MODULE_3__["GET_CUSTOMERS_START"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => {
                return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + "/customers").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
                    return new _customer_actions__WEBPACK_IMPORTED_MODULE_3__["GetCustomerSuccess"](res);
                }));
            }));
        });
        this.createCustomer$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_customer_actions__WEBPACK_IMPORTED_MODULE_3__["CREATE_CUSTOMERS_START"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((resData) => {
                return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + "/createCustomer", resData.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
                    return new _customer_actions__WEBPACK_IMPORTED_MODULE_3__["CreateCustomerSuccess"](res);
                }));
            }));
        });
        this.editCustomer$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_customer_actions__WEBPACK_IMPORTED_MODULE_3__["EDIT_CUSTOMERS_START"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((resdata) => {
                return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + "/customer/edit/" + resdata.payload.id, resdata.payload.customer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
                    return new _customer_actions__WEBPACK_IMPORTED_MODULE_3__["EditCustomerSuccess"](res);
                }));
            }));
        });
        this.deleteCustomer$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_customer_actions__WEBPACK_IMPORTED_MODULE_3__["DELETE_CUSTOMERS_START"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((resdata) => {
                return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl + "/customer/" + resdata.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
                    return new _customer_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteCustomerSuccess"]();
                }));
            }));
        });
    }
}
CustomerEffects.ɵfac = function CustomerEffects_Factory(t) { return new (t || CustomerEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
CustomerEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CustomerEffects, factory: CustomerEffects.ɵfac });


/***/ }),

/***/ "walf":
/*!*****************************************************!*\
  !*** ./src/app/customers/store/customer.reducer.ts ***!
  \*****************************************************/
/*! exports provided: CustomerReducer, getCustomerState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerReducer", function() { return CustomerReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomerState", function() { return getCustomerState; });
/* harmony import */ var _customer_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer.actions */ "/tw2");

const initialState = {
    customer: [],
};
function CustomerReducer(state = initialState, action) {
    switch (action.type) {
        case _customer_actions__WEBPACK_IMPORTED_MODULE_0__["GET_CUSTOMERS_START"]:
            return Object.assign({}, state);
        case _customer_actions__WEBPACK_IMPORTED_MODULE_0__["GET_CUSTOMERS_SUCCESS"]:
            return Object.assign(Object.assign({}, state), { customer: action.payload });
        case _customer_actions__WEBPACK_IMPORTED_MODULE_0__["CREATE_CUSTOMERS_START"]:
            return Object.assign({}, state);
        case _customer_actions__WEBPACK_IMPORTED_MODULE_0__["CREATE_CUSTOMERS_SUCCESS"]:
            return Object.assign(Object.assign({}, state), { customer: [...state.customer, action.payload] });
        case _customer_actions__WEBPACK_IMPORTED_MODULE_0__["EDIT_CUSTOMERS_START"]:
            return Object.assign({}, state);
        case _customer_actions__WEBPACK_IMPORTED_MODULE_0__["EDIT_CUSTOMERS_SUCCESS"]:
            let id = state.customer.findIndex(v => {
                return v.customerId === action.payload.customerId;
            });
            let customerUpdate = [...state.customer];
            let customer = Object.assign({}, action.payload);
            customerUpdate[id] = customer;
            return Object.assign(Object.assign({}, state), { customer: customerUpdate });
        case _customer_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_CUSTOMERS_START"]:
            return Object.assign(Object.assign({}, state), { customer: state.customer.filter(v => {
                    return v.customerId !== action.payload;
                }) });
        case _customer_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_CUSTOMERS_SUCCESS"]:
            return Object.assign({}, state);
        default:
            return state;
    }
}
const getCustomerState = (state) => state.customer;


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map