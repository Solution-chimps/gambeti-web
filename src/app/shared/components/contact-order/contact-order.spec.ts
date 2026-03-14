import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactOrder } from './contact-order';

describe('ContactOrder', () => {
  let component: ContactOrder;
  let fixture: ComponentFixture<ContactOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactOrder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
