import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactivo } from './form-reactivo';

describe('FormReactivo', () => {
  let component: FormReactivo;
  let fixture: ComponentFixture<FormReactivo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormReactivo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReactivo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
