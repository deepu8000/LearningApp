import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonuiComponent } from './commonui.component';

describe('CommonuiComponent', () => {
  let component: CommonuiComponent;
  let fixture: ComponentFixture<CommonuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
