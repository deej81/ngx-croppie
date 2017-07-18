import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { NgxCroppieComponent } from './ngx-croppie.component';


@NgModule({
    imports: [CommonModule],
    declarations: [
        NgxCroppieComponent
    ],
    providers: [],
    exports: [
        NgxCroppieComponent
    ]
})
export class NgxCroppieModule {
    
}
