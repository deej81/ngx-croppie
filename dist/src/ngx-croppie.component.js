import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import Croppie from 'croppie';
export var NgxCroppieComponent = (function () {
    function NgxCroppieComponent() {
        this.result = new EventEmitter();
    }
    NgxCroppieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._croppie = new Croppie(this.imageEdit.nativeElement, this.croppieOptions);
        this._croppie.bind({
            url: this.imageUrl
        });
        this.bind = function () {
            console.log('binding');
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
        { type: Component, args: [{
                    selector: 'ngx-croppie',
                    template: "<div #imageEdit (update)=\"newResult($event)\"></div>"
                },] },
    ];
    /** @nocollapse */
    NgxCroppieComponent.ctorParameters = function () { return []; };
    NgxCroppieComponent.propDecorators = {
        'imageEdit': [{ type: ViewChild, args: ['imageEdit',] },],
        'croppieOptions': [{ type: Input },],
        'imageUrl': [{ type: Input },],
        'bind': [{ type: Input },],
        'result': [{ type: Output },],
    };
    return NgxCroppieComponent;
}());
//# sourceMappingURL=ngx-croppie.component.js.map