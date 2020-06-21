import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddMenuComponent } from './dialog-add-menu.component';

describe('DialogAddMenuComponent', () => {
  let component: DialogAddMenuComponent;
  let fixture: ComponentFixture<DialogAddMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
