import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlujoFor } from './flujo-for';

describe('FlujoFor', () => {
  let component: FlujoFor;
  let fixture: ComponentFixture<FlujoFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlujoFor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlujoFor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
