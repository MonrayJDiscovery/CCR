import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolsQueryComponent } from './pools-query.component';

describe('PoolsQueryComponent', () => {
  let component: PoolsQueryComponent;
  let fixture: ComponentFixture<PoolsQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolsQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolsQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
