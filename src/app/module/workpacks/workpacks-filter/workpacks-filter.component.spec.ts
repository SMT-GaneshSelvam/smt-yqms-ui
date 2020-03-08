import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpacksFilterComponent } from './workpacks-filter.component';

describe('WorkpacksFilterComponent', () => {
  let component: WorkpacksFilterComponent;
  let fixture: ComponentFixture<WorkpacksFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpacksFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpacksFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
