import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyYqmsComponent } from './my-yqms.component';

describe('MyYqmsComponent', () => {
  let component: MyYqmsComponent;
  let fixture: ComponentFixture<MyYqmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyYqmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyYqmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
