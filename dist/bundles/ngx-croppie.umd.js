(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global.ngx = global.ngx || {}, global.ngx.croppie = global.ngx.croppie || {}),global.ng.core,global.ng.common));
}(this, (function (exports,_angular_core,_angular_common) { 'use strict';

var NgxCroppieComponent = (function () {
    function NgxCroppieComponent() {
    }
    NgxCroppieComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ngx-croppie',
                    template: '<h1>TESTING!</h1>',
                    styles: [],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                    encapsulation: _angular_core.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    NgxCroppieComponent.ctorParameters = function () { return []; };
    return NgxCroppieComponent;
}());

var NgxCroppieModule = (function () {
    function NgxCroppieModule() {
    }
    NgxCroppieModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [_angular_common.CommonModule],
                    declarations: [
                        NgxCroppieComponent
                    ],
                    providers: [],
                    exports: [
                        NgxCroppieComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    NgxCroppieModule.ctorParameters = function () { return []; };
    return NgxCroppieModule;
}());

/**
 * @module
 * @description
 * Entry point for all public APIs
 */

exports.NgxCroppieModule = NgxCroppieModule;
exports.NgxCroppieComponent = NgxCroppieComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
