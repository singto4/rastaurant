import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNullComponent } from './dialog-null.component';

describe('DialogNullComponent', () => {
  let component: DialogNullComponent;
  let fixture: ComponentFixture<DialogNullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogNullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
