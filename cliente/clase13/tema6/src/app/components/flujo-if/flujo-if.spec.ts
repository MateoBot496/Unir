import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlujoIf } from './flujo-if';

describe('FlujoIf', () => {
  let component: FlujoIf;
  let fixture: ComponentFixture<FlujoIf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlujoIf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlujoIf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
