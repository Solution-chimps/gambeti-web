import { CommonModule } from '@angular/common';
import { Component, computed, HostBinding, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { take, timer } from 'rxjs';

import { AbstractControlValueAcessor } from '../../../core/abstracts/abstract-control-value-accessor.abstract';
import { SelectOption } from '../../../core/models/select-option.modal';

@Component({
  selector: 'gb-select',
  imports: [CommonModule, FormsModule],
  templateUrl: './select.html',
  styleUrl: './select.scss',
  host: {
    tabIndex: '-1'
  }
})
export class Select<T> extends AbstractControlValueAcessor<T> {
  public readonly label = input<string>();
  public readonly placeholder = input<string>('Selecione...');
  public readonly options = input<SelectOption<T>[]>([]);
  public readonly open = signal<boolean>(false);

  private readonly search = signal('');
  public searchValue = '';
  private openValueBackup = '';

  public readonly filtered = computed(() => {
    if (this.search()) {
      return this.options().filter(option => option.label?.toLocaleLowerCase().includes(this.search().toLocaleLowerCase()))
    }
    return this.options();
  });

  @HostBinding('class.required')
  public get required() {
    return this.isRequired();
  }

  public toggleDropdown() {
    if (!this.disabled()) {
      this.open.set(!this.open());
      if (this.open()) {
        this.openValueBackup = this.searchValue;
        this.searchValue = '';
        this.search.set(this.searchValue)
      }
    }
  }

  public handleSearch(): void {
    this.search.set(this.searchValue);
  }

  public selectOption(option: SelectOption<T>) {
    this.writeValue(option.value);
    this.open.set(false);
    const selected = this.options()?.find(o => o.value === this.value);
    this.searchValue = selected?.label || '';
    this.openValueBackup = this.searchValue;
  }

  public onFocusOut(): void {
    timer(200).pipe(take(1)).subscribe(() => {
      this.open.set(false);
      this.searchValue = this.openValueBackup;
      this.search.set(this.searchValue);
    })
  }
}
