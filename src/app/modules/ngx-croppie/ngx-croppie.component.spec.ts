import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCroppieComponent } from './ngx-croppie.component';

describe('NgxCroppieComponent', () => {
  let component: NgxCroppieComponent;
  let fixture: ComponentFixture<NgxCroppieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCroppieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCroppieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
