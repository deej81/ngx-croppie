import { EventEmitter, OnInit, ElementRef } from '@angular/core';
import { CroppieOptions, ResultOptions } from 'croppie';
export declare type Type = 'canvas' | 'base64' | 'html' | 'blob' | 'rawcanvas';
export interface TempResultOptions extends ResultOptions {
    type?: Type;
}
export declare class NgxCroppieComponent implements OnInit {
    imageEdit: ElementRef;
    croppieOptions: CroppieOptions;
    imageUrl: string;
    bind: (img: string) => void;
    outputFormatOptions: TempResultOptions;
    result: EventEmitter<string | HTMLElement | Blob | HTMLCanvasElement>;
    private _croppie;
    ngOnInit(): void;
    newResult(): void;
}
