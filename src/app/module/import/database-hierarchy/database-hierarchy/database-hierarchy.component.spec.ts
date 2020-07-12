import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseHierarchyComponent } from './database-hierarchy.component';

describe('DatabaseHierarchyComponent', () => {
  let component: DatabaseHierarchyComponent;
  let fixture: ComponentFixture<DatabaseHierarchyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseHierarchyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
