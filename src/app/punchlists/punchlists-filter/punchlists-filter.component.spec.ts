import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchlistsFilterComponent } from './punchlists-filter.component';

describe('PunchlistsFilterComponent', () => {
  let component: PunchlistsFilterComponent;
  let fixture: ComponentFixture<PunchlistsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunchlistsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunchlistsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
