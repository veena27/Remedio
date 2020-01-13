import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthSupplementsComponent } from './health-supplements.component';

describe('HealthSupplementsComponent', () => {
  let component: HealthSupplementsComponent;
  let fixture: ComponentFixture<HealthSupplementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthSupplementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthSupplementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
