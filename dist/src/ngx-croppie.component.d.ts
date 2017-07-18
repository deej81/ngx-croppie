import { EventEmitter, OnInit, ElementRef } from '@angular/core';
import { CroppieOptions } from 'croppie';
export declare class NgxCroppieComponent implements OnInit {
    imageEdit: ElementRef;
    croppieOptions: CroppieOptions;
    imageUrl: string;
    bind: () => void;
    result: EventEmitter<string>;
    private _croppie;
    ngOnInit(): void;
    newResult(): void;
}
