import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalthreeComponent } from './localthree.component';

describe('LocalthreeComponent', () => {
  let component: LocalthreeComponent;
  let fixture: ComponentFixture<LocalthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
