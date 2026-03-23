import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoSstEsocial } from './gestao-sst-esocial';

describe('GestaoSstEsocial', () => {
  let component: GestaoSstEsocial;
  let fixture: ComponentFixture<GestaoSstEsocial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoSstEsocial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoSstEsocial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
