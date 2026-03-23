import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoSstHeader } from './gestao-sst-header';

describe('GestaoSstHeader', () => {
  let component: GestaoSstHeader;
  let fixture: ComponentFixture<GestaoSstHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoSstHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoSstHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
