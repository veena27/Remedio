import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HFDComponent } from './hfd.component';

describe('HFDComponent', () => {
  let component: HFDComponent;
  let fixture: ComponentFixture<HFDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HFDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HFDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
