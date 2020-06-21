import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateMenuComponent } from './dialog-update-menu.component';

describe('DialogUpdateMenuComponent', () => {
  let component: DialogUpdateMenuComponent;
  let fixture: ComponentFixture<DialogUpdateMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUpdateMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
