import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolsMaintainComponent } from './pools-maintain.component';

describe('PoolsMaintainComponent', () => {
  let component: PoolsMaintainComponent;
  let fixture: ComponentFixture<PoolsMaintainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolsMaintainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolsMaintainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
