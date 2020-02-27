import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheetsheetsFilterComponent } from './cheetsheets-filter.component';

describe('CheetsheetsFilterComponent', () => {
  let component: CheetsheetsFilterComponent;
  let fixture: ComponentFixture<CheetsheetsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheetsheetsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheetsheetsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
