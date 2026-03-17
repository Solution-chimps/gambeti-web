import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaldeirasTab } from './caldeiras-tab';

describe('CaldeirasTab', () => {
  let component: CaldeirasTab;
  let fixture: ComponentFixture<CaldeirasTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaldeirasTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaldeirasTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
