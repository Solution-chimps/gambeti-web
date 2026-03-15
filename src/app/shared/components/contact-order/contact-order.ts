import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { SERVICES_OPTIONS } from '../../../core/constants/services.constants';
import { GbValidators } from '../../../core/validators/validators';
import { Input } from '../input/input';
import { Select } from '../select/select';

@Component({
  selector: 'gb-contact-order',
  imports: [Input, Select, ReactiveFormsModule],
  templateUrl: './contact-order.html',
  styleUrl: './contact-order.scss',
  host: {
    id: 'contato-orcamento'
  }
})
export class ContactOrder implements OnInit {

  public readonly form = new FormBuilder().group({
    name: ['', [Validators.required, Validators.maxLength(120)]],
    company: [''],
    email: ['', [Validators.required, Validators.email]],
    contact: ['', [Validators.required, GbValidators.ddd, Validators.pattern(/^[0-9]{2}[0-9]{8,9}$/)]],
    service: ['', Validators.required],
    message: ['', Validators.maxLength(500)]
  });

  public readonly contactMask = signal('(00) 0000-00009')
  private readonly destroyRef = inject(DestroyRef);

  public readonly serviceOptions = signal(SERVICES_OPTIONS);

  public ngOnInit(): void {
    this.form.get('contact')?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((contact) => {
      if (contact && contact.length > 10) {
        this.contactMask.set('(00) 00000-0000');
        return;
      }
      this.contactMask.set('(00) 0000-00009');
    })
  }

  public handleSubmit(): void {
    console.log(this.form.getRawValue())
    this.form.markAllAsTouched()
  }

}
