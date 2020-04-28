import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeallComponent } from './consumeall.component';

describe('ConsumeallComponent', () => {
  let component: ConsumeallComponent;
  let fixture: ComponentFixture<ConsumeallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
