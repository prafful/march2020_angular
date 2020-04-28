import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaloneComponent } from './localone.component';

describe('LocaloneComponent', () => {
  let component: LocaloneComponent;
  let fixture: ComponentFixture<LocaloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocaloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
