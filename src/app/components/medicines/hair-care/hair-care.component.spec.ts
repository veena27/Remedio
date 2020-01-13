import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HairCareComponent } from './hair-care.component';

describe('HairCareComponent', () => {
  let component: HairCareComponent;
  let fixture: ComponentFixture<HairCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
