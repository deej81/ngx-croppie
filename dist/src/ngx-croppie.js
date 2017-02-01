import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCroppieComponent } from './ngx-croppie.component';
export var NgxCroppieModule = (function () {
    function NgxCroppieModule() {
    }
    NgxCroppieModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
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
//# sourceMappingURL=ngx-croppie.js.map