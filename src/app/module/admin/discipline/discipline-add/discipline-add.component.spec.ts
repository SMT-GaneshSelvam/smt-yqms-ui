import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplineAddComponent } from './discipline-add.component';

describe('DisciplineAddComponent', () => {
  let component: DisciplineAddComponent;
  let fixture: ComponentFixture<DisciplineAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplineAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplineAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
