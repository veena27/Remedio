import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgicalAccessoriesComponent } from './surgical-accessories.component';

describe('SurgicalAccessoriesComponent', () => {
  let component: SurgicalAccessoriesComponent;
  let fixture: ComponentFixture<SurgicalAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurgicalAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgicalAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
