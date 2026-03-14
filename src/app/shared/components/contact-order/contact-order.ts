import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { Input } from '../input/input';

@Component({
  selector: 'gb-contact-order',
  imports: [Input, ReactiveFormsModule],
  templateUrl: './contact-order.html',
  styleUrl: './contact-order.scss',
  host: {
    id: 'contato-orcamento'
  }
})
export class ContactOrder {

  public readonly form = new FormBuilder().group({
    name: ['', [Validators.required]],
    company: [''],
    email: ['', [Validators.required, Validators.email]],
    contact: ['', [Validators.required, Validators.pattern(/^\(\d{2}\)\d{4,5}\d{4}$/)]],
    service: [''], // opcional, select
    message: [''] // opcional
  })

}
