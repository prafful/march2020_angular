import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumehttpComponent } from './consumehttp.component';

describe('ConsumehttpComponent', () => {
  let component: ConsumehttpComponent;
  let fixture: ComponentFixture<ConsumehttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumehttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumehttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
