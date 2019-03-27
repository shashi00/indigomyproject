import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialaComponent } from './speciala.component';

describe('SpecialaComponent', () => {
  let component: SpecialaComponent;
  let fixture: ComponentFixture<SpecialaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
