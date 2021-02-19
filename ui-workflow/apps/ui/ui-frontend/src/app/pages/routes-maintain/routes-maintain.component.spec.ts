import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesMaintainComponent } from './routes-maintain.component';

describe('RoutesMaintainComponent', () => {
  let component: RoutesMaintainComponent;
  let fixture: ComponentFixture<RoutesMaintainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesMaintainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesMaintainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
