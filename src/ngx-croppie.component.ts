import { NgxCroppieModule } from './ngx-croppie';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, OnInit, ViewChild, ElementRef } from '@angular/core';
import Croppie from 'croppie';
import {CroppieOptions} from 'croppie';

@Component({
    selector: 'ngx-croppie',
    template: `<div #imageEdit style="background-color:red" (update)="newResult($event)"></div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class NgxCroppieComponent implements OnInit {
    @ViewChild('imageEdit') imageEdit: ElementRef;
    @Input() croppieOptions: CroppieOptions;
    @Input() imageUrl: string;
    @Output() result: EventEmitter<string> = new EventEmitter<string>();

    private _croppie: Croppie;
    ngOnInit(): void {
        this._croppie = new Croppie(this.imageEdit.nativeElement,this.croppieOptions);

        this._croppie.bind({
            url: this.imageUrl
        });
    }

    newResult() {
        this._croppie.result({type: 'base64'}).then((res) => {
            console.log(res);
            this.result.emit(res);
        });
    }
}