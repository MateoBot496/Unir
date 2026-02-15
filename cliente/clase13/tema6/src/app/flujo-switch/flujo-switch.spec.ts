import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlujoSwitch } from './flujo-switch';

describe('FlujoSwitch', () => {
  let component: FlujoSwitch;
  let fixture: ComponentFixture<FlujoSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlujoSwitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlujoSwitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
