import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagGroupListComponent } from './tag-group-list.component';

describe('TagGroupListComponent', () => {
  let component: TagGroupListComponent;
  let fixture: ComponentFixture<TagGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
