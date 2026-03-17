import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VasosTab } from './vasos-tab';

describe('VasosTab', () => {
  let component: VasosTab;
  let fixture: ComponentFixture<VasosTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VasosTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VasosTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
