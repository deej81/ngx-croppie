import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

import * as Croppie from 'croppie';
import { CroppieOptions, ResultOptions, CropData } from 'croppie';

export type Type = 'canvas' | 'base64' | 'html' | 'blob' | 'rawcanvas';

@Component({
	// tslint:disable-next-line:component-selector
	selector: 'ngx-croppie',
	template: `<div #imageEdit (update)="newResult()"></div>`
})
export class NgxCroppieComponent implements OnInit {
	@ViewChild('imageEdit') imageEdit: ElementRef;
	@Input() croppieOptions: CroppieOptions;
	@Input() points: number[];
	@Input() outputFormatOptions: ResultOptions = { type: 'base64', size: 'viewport' };
	@Input() defaultZoom = 0;
	@Output() result: EventEmitter<string | HTMLElement | Blob | HTMLCanvasElement>
		= new EventEmitter<string | HTMLElement | Blob | HTMLCanvasElement>();
	private _croppie: Croppie;
	private imgUrl: string;
	get imageUrl(): string {
		return this.imgUrl;
	}
	@Input() set imageUrl(url: string) {
		if(this.imgUrl === url) { return; }
		this.imgUrl = url;
		if (this._croppie) {
			this.bindToCroppie(this.imageUrl, this.points, this.defaultZoom);
		}
	}

	ngOnInit(): void {
		this._croppie = new Croppie(this.imageEdit.nativeElement, this.croppieOptions);
		this.bindToCroppie(this.imageUrl, this.points, this.defaultZoom);
	}

	private bindToCroppie(url: string, points: number[], zoom: number){
		this._croppie.bind({ url, points, zoom });
	}

	newResult() {
		this._croppie.result(this.outputFormatOptions).then((res) => {
			this.result.emit(res);
		});
	}

	rotate(degrees: 90 | 180 | 270 | -90 | -180 | -270) {
		this._croppie.rotate(degrees);
	}

	get(): CropData {
		return this._croppie.get();
	}

}
