(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('croppie'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('ngx-croppie', ['exports', '@angular/core', 'croppie', '@angular/common'], factory) :
	(factory((global['ngx-croppie'] = {}),global.ng.core,global.croppie,global.ng.common));
}(this, (function (exports,core,croppie,common) { 'use strict';

var NgxCroppieComponent = /** @class */ (function () {
    function NgxCroppieComponent() {
        this.outputFormatOptions = { type: 'base64', size: 'viewport' };
        this.result = new core.EventEmitter();
    }
    NgxCroppieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._croppie = new croppie.Croppie(this.imageEdit.nativeElement, this.croppieOptions);
        this._croppie.bind({
            url: this.imageUrl
        });
        this.bind = function (img) {
            _this._croppie.bind({ url: _this.imageUrl });
        };
    };
    NgxCroppieComponent.prototype.newResult = function () {
        var _this = this;
        this._croppie.result(this.outputFormatOptions).then(function (res) {
            _this.result.emit(res);
        });
    };
    return NgxCroppieComponent;
}());
NgxCroppieComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ngx-croppie',
                template: "<div #imageEdit (update)=\"newResult()\"></div>"
            },] },
];
NgxCroppieComponent.propDecorators = {
    "imageEdit": [{ type: core.ViewChild, args: ['imageEdit',] },],
    "croppieOptions": [{ type: core.Input },],
    "imageUrl": [{ type: core.Input },],
    "bind": [{ type: core.Input },],
    "outputFormatOptions": [{ type: core.Input },],
    "result": [{ type: core.Output },],
};
var NgxCroppieModule = /** @class */ (function () {
    function NgxCroppieModule() {
    }
    return NgxCroppieModule;
}());
NgxCroppieModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [NgxCroppieComponent],
                exports: [
                    NgxCroppieComponent
                ]
            },] },
];

exports.NgxCroppieComponent = NgxCroppieComponent;
exports.NgxCroppieModule = NgxCroppieModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-croppie.umd.js.map
