import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMenuNullComponent } from './dialog-menu-null.component';

describe('DialogMenuNullComponent', () => {
  let component: DialogMenuNullComponent;
  let fixture: ComponentFixture<DialogMenuNullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogMenuNullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMenuNullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
