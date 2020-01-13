import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyurvedicComponent } from './ayurvedic.component';

describe('AyurvedicComponent', () => {
  let component: AyurvedicComponent;
  let fixture: ComponentFixture<AyurvedicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyurvedicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyurvedicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
