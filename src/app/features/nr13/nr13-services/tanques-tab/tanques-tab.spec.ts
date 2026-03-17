import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanquesTab } from './tanques-tab';

describe('TanquesTab', () => {
  let component: TanquesTab;
  let fixture: ComponentFixture<TanquesTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TanquesTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TanquesTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
