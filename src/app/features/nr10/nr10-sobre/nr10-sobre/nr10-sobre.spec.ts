import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr10Sobre } from './nr10-sobre';

describe('Nr10Sobre', () => {
  let component: Nr10Sobre;
  let fixture: ComponentFixture<Nr10Sobre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr10Sobre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr10Sobre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
