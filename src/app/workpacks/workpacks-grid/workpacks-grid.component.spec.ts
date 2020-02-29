import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpacksGridComponent } from './workpacks-grid.component';

describe('WorkpacksGridComponent', () => {
  let component: WorkpacksGridComponent;
  let fixture: ComponentFixture<WorkpacksGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpacksGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpacksGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
