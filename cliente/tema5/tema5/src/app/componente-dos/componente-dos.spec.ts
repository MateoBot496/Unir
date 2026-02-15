import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDos } from './componente-dos';

describe('ComponenteDos', () => {
  let component: ComponenteDos;
  let fixture: ComponentFixture<ComponenteDos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteDos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteDos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
