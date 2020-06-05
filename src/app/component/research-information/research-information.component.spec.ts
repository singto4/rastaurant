import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchInformationComponent } from './research-information.component';

describe('ResearchInformationComponent', () => {
  let component: ResearchInformationComponent;
  let fixture: ComponentFixture<ResearchInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
