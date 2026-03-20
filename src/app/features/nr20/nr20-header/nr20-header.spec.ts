import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr20Header } from './nr20-header';

describe('Nr20Header', () => {
  let component: Nr20Header;
  let fixture: ComponentFixture<Nr20Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr20Header]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr20Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
