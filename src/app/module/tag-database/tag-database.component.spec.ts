import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagDatabaseComponent } from './tag-database.component';

describe('TagDatabaseComponent', () => {
  let component: TagDatabaseComponent;
  let fixture: ComponentFixture<TagDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
