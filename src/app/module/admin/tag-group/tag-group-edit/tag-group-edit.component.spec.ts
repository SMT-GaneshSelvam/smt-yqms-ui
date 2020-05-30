import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagGroupEditComponent } from './tag-group-edit.component';

describe('TagGroupEditComponent', () => {
  let component: TagGroupEditComponent;
  let fixture: ComponentFixture<TagGroupEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagGroupEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagGroupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
