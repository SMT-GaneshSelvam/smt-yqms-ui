import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagGroupAddComponent } from './tag-group-add.component';

describe('TagGroupAddComponent', () => {
  let component: TagGroupAddComponent;
  let fixture: ComponentFixture<TagGroupAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagGroupAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagGroupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
