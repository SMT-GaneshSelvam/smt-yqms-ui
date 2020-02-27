import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheetsheetsGridComponent } from './cheetsheets-grid.component';

describe('CheetsheetsGridComponent', () => {
  let component: CheetsheetsGridComponent;
  let fixture: ComponentFixture<CheetsheetsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheetsheetsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheetsheetsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
