import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr20TabProcedimentos } from './nr20-tab-procedimentos';

describe('Nr20TabProcedimentos', () => {
  let component: Nr20TabProcedimentos;
  let fixture: ComponentFixture<Nr20TabProcedimentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr20TabProcedimentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr20TabProcedimentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
