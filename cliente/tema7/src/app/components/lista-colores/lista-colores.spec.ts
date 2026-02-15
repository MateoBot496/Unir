import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaColores } from './lista-colores';

describe('ListaColores', () => {
  let component: ListaColores;
  let fixture: ComponentFixture<ListaColores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaColores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaColores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
