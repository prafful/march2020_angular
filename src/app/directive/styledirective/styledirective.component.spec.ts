import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledirectiveComponent } from './styledirective.component';

describe('StyledirectiveComponent', () => {
  let component: StyledirectiveComponent;
  let fixture: ComponentFixture<StyledirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyledirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
