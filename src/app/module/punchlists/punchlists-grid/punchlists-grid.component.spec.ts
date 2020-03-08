import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchlistsGridComponent } from './punchlists-grid.component';

describe('PunchlistsGridComponent', () => {
  let component: PunchlistsGridComponent;
  let fixture: ComponentFixture<PunchlistsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunchlistsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunchlistsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
