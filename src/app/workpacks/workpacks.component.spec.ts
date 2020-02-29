import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpacksComponent } from './workpacks.component';

describe('WorkpacksComponent', () => {
  let component: WorkpacksComponent;
  let fixture: ComponentFixture<WorkpacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
