import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoSstNr16 } from './gestao-sst-nr-16';

describe('GestaoSstNr16', () => {
  let component: GestaoSstNr16;
  let fixture: ComponentFixture<GestaoSstNr16>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoSstNr16]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoSstNr16);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
