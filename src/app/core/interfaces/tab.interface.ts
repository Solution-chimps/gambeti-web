import { Type } from '@angular/core';

import { InputsOf, OutputsOf } from './inputs-outputs.interface';

export interface Tab<T = unknown> {
  active?: boolean,
  title: string;
  icon: string;
  component?: Type<T>;
  data?: {
    inputs?: Partial<InputsOf<T>>;
    outputs?: Partial<OutputsOf<T>>;
  };

}
