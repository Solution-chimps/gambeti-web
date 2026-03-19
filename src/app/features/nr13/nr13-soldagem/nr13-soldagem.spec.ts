import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr13Soldagem } from './nr13-soldagem';

describe('Nr13Soldagem', () => {
  let component: Nr13Soldagem;
  let fixture: ComponentFixture<Nr13Soldagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr13Soldagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr13Soldagem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
