import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltinComponent } from './builtin.component';

describe('BuiltinComponent', () => {
  let component: BuiltinComponent;
  let fixture: ComponentFixture<BuiltinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuiltinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
