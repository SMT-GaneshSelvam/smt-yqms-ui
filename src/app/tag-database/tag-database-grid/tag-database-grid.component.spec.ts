import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagDatabaseGridComponent } from './tag-database-grid.component';

describe('TagDatabaseGridComponent', () => {
  let component: TagDatabaseGridComponent;
  let fixture: ComponentFixture<TagDatabaseGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagDatabaseGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagDatabaseGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
