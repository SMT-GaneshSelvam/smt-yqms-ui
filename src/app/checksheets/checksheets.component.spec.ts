import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecksheetsComponent } from './checksheets.component';

describe('ChecksheetsComponent', () => {
  let component: ChecksheetsComponent;
  let fixture: ComponentFixture<ChecksheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecksheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecksheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
