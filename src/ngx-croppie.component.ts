import { NgxCroppieModule } from './ngx-croppie';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, OnInit, ViewChild, ElementRef } from '@angular/core';
import Croppie from 'croppie';
import { CroppieOptions, ResultOptions } from 'croppie';

export type Type = 'canvas' | 'base64' | 'html' | 'blob' | 'rawcanvas';

export interface TempResultOptions extends ResultOptions {
    type?: Type;
}

@Component({
    selector: 'ngx-croppie',
    template: `<div #imageEdit (update)="newResult()"></div>`
})
export class NgxCroppieComponent implements OnInit {
    @ViewChild('imageEdit') imageEdit: ElementRef;
    @Input() croppieOptions: CroppieOptions;
    @Input() imageUrl: string;
    @Input() bind: (img: string) => void;
    @Input() outputFormatOptions: TempResultOptions = { type: 'base64', size: 'viewport' };
    @Output() result: EventEmitter<string | HTMLElement | Blob | HTMLCanvasElement> = new EventEmitter<string | HTMLElement | Blob | HTMLCanvasElement>();

    private _croppie: Croppie;
    ngOnInit(): void {
        this._croppie = new Croppie(this.imageEdit.nativeElement, this.croppieOptions);

        this._croppie.bind({
            url: this.imageUrl
        });
        this.bind = (img: string) => {
            this._croppie.bind({ url: this.imageUrl });
        }
    }

    newResult() {
        this._croppie.result(this.outputFormatOptions).then((res) => {
            this.result.emit(res);
        });
    }
}