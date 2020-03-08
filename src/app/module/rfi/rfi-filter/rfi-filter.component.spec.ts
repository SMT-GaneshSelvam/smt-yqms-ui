import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfiFilterComponent } from './rfi-filter.component';

describe('RfiFilterComponent', () => {
  let component: RfiFilterComponent;
  let fixture: ComponentFixture<RfiFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfiFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfiFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
