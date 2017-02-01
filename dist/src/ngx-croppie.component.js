import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, ViewChild } from '@angular/core';
import Croppie from 'croppie';
export var NgxCroppieComponent = (function () {
    function NgxCroppieComponent() {
        this.result = new EventEmitter();
    }
    NgxCroppieComponent.prototype.ngOnInit = function () {
        console.log('reference', this.imageEdit.nativeElement);
        this._croppie = new Croppie(this.imageEdit.nativeElement, this.croppieOptions);
        this._croppie.bind({
            url: this.imageUrl
        });
    };
    NgxCroppieComponent.prototype.newResult = function () {
        var _this = this;
        console.log('onchange event');
        this._croppie.result({ type: 'base64' }).then(function (res) {
            console.log(res);
            _this.result.emit(res);
        });
    };
    NgxCroppieComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-croppie',
                    template: "<div #imageEdit style=\"background-color:red\" (update)=\"newResult($event)\"></div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    NgxCroppieComponent.ctorParameters = function () { return []; };
    NgxCroppieComponent.propDecorators = {
        'imageEdit': [{ type: ViewChild, args: ['imageEdit',] },],
        'croppieOptions': [{ type: Input },],
        'imageUrl': [{ type: Input },],
        'result': [{ type: Output },],
    };
    return NgxCroppieComponent;
}());
//# sourceMappingURL=ngx-croppie.component.js.map