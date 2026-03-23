import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoSstFaq } from './gestao-sst-faq';

describe('GestaoSstFaq', () => {
  let component: GestaoSstFaq;
  let fixture: ComponentFixture<GestaoSstFaq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoSstFaq]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoSstFaq);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
