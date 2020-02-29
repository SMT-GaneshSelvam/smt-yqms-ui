import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagDatabaseFilterComponent } from './tag-database-filter.component';

describe('TagDatabaseFilterComponent', () => {
  let component: TagDatabaseFilterComponent;
  let fixture: ComponentFixture<TagDatabaseFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagDatabaseFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagDatabaseFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
