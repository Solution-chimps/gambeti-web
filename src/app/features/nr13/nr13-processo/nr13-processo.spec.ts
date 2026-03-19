import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr13Processo } from './nr13-processo';

describe('Nr13Processo', () => {
  let component: Nr13Processo;
  let fixture: ComponentFixture<Nr13Processo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr13Processo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr13Processo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
