import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderyCareComponent } from './eldery-care.component';

describe('ElderyCareComponent', () => {
  let component: ElderyCareComponent;
  let fixture: ComponentFixture<ElderyCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElderyCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElderyCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
