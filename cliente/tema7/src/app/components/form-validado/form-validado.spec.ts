import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidado } from './form-validado';

describe('FormValidado', () => {
  let component: FormValidado;
  let fixture: ComponentFixture<FormValidado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormValidado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValidado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
