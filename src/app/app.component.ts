import { Component, ViewChild, OnInit } from '@angular/core';
import { CroppieOptions } from 'croppie';
import { NgxCroppieComponent } from './modules/ngx-croppie/ngx-croppie.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ngx-Croppie';
  @ViewChild('ngxCroppie') ngxCroppie: NgxCroppieComponent;

  widthPx = '200';
  heightPx = '200';
  currentImage: string;
  croppieImage: string;
  fileName: string;

  public get imageToDisplay() {
    if (this.currentImage) { return this.currentImage; }
    return `https://placehold.it/${this.widthPx}x${this.heightPx}`;
  }

  public get croppieOptions(): CroppieOptions {
    const opts: CroppieOptions = {};
    opts.viewport = {
      width: parseInt(this.widthPx, 10),
      height: parseInt(this.heightPx, 10),
      type: 'circle'
    };
    opts.boundary = {
      width: parseInt(this.widthPx, 10),
      height: parseInt(this.heightPx, 10)
    };
    opts.enforceBoundary = true;
    opts.enableOrientation = true;
    opts.showZoomer = false;
    return opts;
  }

  ngOnInit() {
  }

  newImageResultFromCroppie(img: string) {
    this.croppieImage = img;
  }

  saveImageFromCroppie() {
    this.currentImage = this.croppieImage;
    this.croppieImage = null;
  }

  removeImage() {
    this.currentImage = null;
  }

  cancelCroppieEdit() {
    this.croppieImage = null;
  }

  rotateDir(dir: string) { // dir: direction = {'l', 'r'}
    if (!this.croppieImage) { return; }
    const rotateLeft = 90;
    const rotateRight = -90;
    if (dir === 'l') {
      this.ngxCroppie.rotate(rotateLeft);
      return;
    }
    this.ngxCroppie.rotate(rotateRight);
  }

  imageUploadEvent(evt: any) {
    if (!evt.target) { return; }
    if (!evt.target.files) { return; }
    if (evt.target.files.length !== 1) { return; }
    const file = evt.target.files[0];
    this.fileName = file.name;
    if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') { return; }
    const fr = new FileReader();
    fr.onloadend = (loadEvent: any) => {
      this.croppieImage = loadEvent.target.result;
    };
    fr.readAsDataURL(file);
  }

  getCropPoints() {
    if (this.ngxCroppie) {
      alert('Crop points: ' + this.ngxCroppie.get().points);
    }
  }

}
