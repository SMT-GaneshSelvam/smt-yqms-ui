import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfiGridComponent } from './rfi-grid.component';

describe('RfiGridComponent', () => {
  let component: RfiGridComponent;
  let fixture: ComponentFixture<RfiGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfiGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfiGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
