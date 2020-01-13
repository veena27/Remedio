import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreathEasyComponent } from './breath-easy.component';

describe('BreathEasyComponent', () => {
  let component: BreathEasyComponent;
  let fixture: ComponentFixture<BreathEasyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreathEasyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreathEasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
