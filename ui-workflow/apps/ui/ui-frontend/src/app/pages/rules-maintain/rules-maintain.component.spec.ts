import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesMaintainComponent } from './rules-maintain.component';

describe('RulesMaintainComponent', () => {
  let component: RulesMaintainComponent;
  let fixture: ComponentFixture<RulesMaintainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesMaintainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesMaintainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
