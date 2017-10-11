import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import Croppie from 'croppie';
var NgxCroppieComponent = /** @class */ (function () {
    function NgxCroppieComponent() {
        this.outputFormatOptions = { type: 'base64', size: 'viewport' };
        this.result = new EventEmitter();
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
        this._croppie.result(this.outputFormatOptions).then(function (res) {
            _this.result.emit(res);
        });
    };
    NgxCroppieComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-croppie',
                    template: "<div #imageEdit (update)=\"newResult()\"></div>"
                },] },
    ];
    /** @nocollapse */
    NgxCroppieComponent.ctorParameters = function () { return []; };
    NgxCroppieComponent.propDecorators = {
        'imageEdit': [{ type: ViewChild, args: ['imageEdit',] },],
        'croppieOptions': [{ type: Input },],
        'imageUrl': [{ type: Input },],
        'bind': [{ type: Input },],
        'outputFormatOptions': [{ type: Input },],
        'result': [{ type: Output },],
    };
    return NgxCroppieComponent;
}());
export { NgxCroppieComponent };
//# sourceMappingURL=ngx-croppie.component.js.map