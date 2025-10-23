import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCiclo } from './control-ciclo';

describe('ControlCiclo', () => {
  let component: ControlCiclo;
  let fixture: ComponentFixture<ControlCiclo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlCiclo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlCiclo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
