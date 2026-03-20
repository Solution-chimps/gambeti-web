import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr20Sobre } from './nr20-sobre';

describe('Nr20Sobre', () => {
  let component: Nr20Sobre;
  let fixture: ComponentFixture<Nr20Sobre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nr20Sobre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nr20Sobre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
