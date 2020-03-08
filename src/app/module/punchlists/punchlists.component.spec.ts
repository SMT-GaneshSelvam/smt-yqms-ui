import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchlistsComponent } from './punchlists.component';

describe('PunchlistsComponent', () => {
  let component: PunchlistsComponent;
  let fixture: ComponentFixture<PunchlistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunchlistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunchlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
