import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyNutritionComponent } from './family-nutrition.component';

describe('FamilyNutritionComponent', () => {
  let component: FamilyNutritionComponent;
  let fixture: ComponentFixture<FamilyNutritionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyNutritionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
