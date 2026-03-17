import { Type } from '@angular/core';

export interface Tab<T = unknown> {
  active?: boolean,
  title: string;
  icon: string;
  component?: Type<T>;

}
