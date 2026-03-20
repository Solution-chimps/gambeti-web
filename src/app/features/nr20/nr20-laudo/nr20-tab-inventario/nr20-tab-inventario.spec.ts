import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr20TabInventario } from './nr20-tab-inventario';

describe('Nr20TabInventario', () => {
  let component: Nr20TabInventario;
  let fixture: ComponentFixture<Nr20TabInventario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr20TabInventario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr20TabInventario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
