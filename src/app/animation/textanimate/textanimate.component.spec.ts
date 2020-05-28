import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextanimateComponent } from './textanimate.component';

describe('TextanimateComponent', () => {
  let component: TextanimateComponent;
  let fixture: ComponentFixture<TextanimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextanimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextanimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
