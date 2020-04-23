import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpipesComponent } from './allpipes.component';

describe('AllpipesComponent', () => {
  let component: AllpipesComponent;
  let fixture: ComponentFixture<AllpipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllpipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
