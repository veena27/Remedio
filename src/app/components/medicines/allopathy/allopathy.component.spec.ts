import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllopathyComponent } from './allopathy.component';

describe('AllopathyComponent', () => {
  let component: AllopathyComponent;
  let fixture: ComponentFixture<AllopathyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllopathyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllopathyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
