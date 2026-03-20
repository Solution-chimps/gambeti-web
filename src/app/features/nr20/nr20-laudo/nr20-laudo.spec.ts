import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr20Laudo } from './nr20-laudo';

describe('Nr20Laudo', () => {
  let component: Nr20Laudo;
  let fixture: ComponentFixture<Nr20Laudo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr20Laudo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr20Laudo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
