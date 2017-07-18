(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('croppie')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'croppie'], factory) :
    (factory((global.ngx = global.ngx || {}, global.ngx.croppie = global.ngx.croppie || {}),global.ng.core,global.ng.common,global.croppie));
}(this, (function (exports,_angular_core,_angular_common,Croppie) { 'use strict';

Croppie = 'default' in Croppie ? Croppie['default'] : Croppie;

var NgxCroppieComponent = (function () {
    function NgxCroppieComponent() {
        this.result = new _angular_core.EventEmitter();
    }
    NgxCroppieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._croppie = new Croppie(this.imageEdit.nativeElement, this.croppieOptions);
        this._croppie.bind({
            url: this.imageUrl
        });
        this.bind = function (img) {
            _this._croppie.bind({ url: _this.imageUrl });
        };
    };
    NgxCroppieComponent.prototype.newResult = function () {
        var _this = this;
        this._croppie.result({ type: 'base64', size: 'viewport' }).then(function (res) {
            _this.result.emit(res);
        });
    };
    NgxCroppieComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ngx-croppie',
                    template: "<div #imageEdit (update)=\"newResult($event)\"></div>"
                },] },
    ];
    /** @nocollapse */
    NgxCroppieComponent.ctorParameters = function () { return []; };
    NgxCroppieComponent.propDecorators = {
        'imageEdit': [{ type: _angular_core.ViewChild, args: ['imageEdit',] },],
        'croppieOptions': [{ type: _angular_core.Input },],
        'imageUrl': [{ type: _angular_core.Input },],
        'bind': [{ type: _angular_core.Input },],
        'result': [{ type: _angular_core.Output },],
    };
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
