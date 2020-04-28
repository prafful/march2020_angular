import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaltwoComponent } from './localtwo.component';

describe('LocaltwoComponent', () => {
  let component: LocaltwoComponent;
  let fixture: ComponentFixture<LocaltwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocaltwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaltwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
