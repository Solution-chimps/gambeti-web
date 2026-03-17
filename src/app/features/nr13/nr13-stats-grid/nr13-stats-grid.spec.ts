import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr13StatsGrid } from './nr13-stats-grid';

describe('Nr13StatsGrid', () => {
  let component: Nr13StatsGrid;
  let fixture: ComponentFixture<Nr13StatsGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr13StatsGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr13StatsGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
