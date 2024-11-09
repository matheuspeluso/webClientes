import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoClientesComponent } from './edicao-clientes.component';

describe('EdicaoClientesComponent', () => {
  let component: EdicaoClientesComponent;
  let fixture: ComponentFixture<EdicaoClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdicaoClientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicaoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
