import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSessionTimeoutComponent } from './dialog-session-timeout.component';

describe('DialogSessionTimeoutComponent', () => {
  let component: DialogSessionTimeoutComponent;
  let fixture: ComponentFixture<DialogSessionTimeoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSessionTimeoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSessionTimeoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
