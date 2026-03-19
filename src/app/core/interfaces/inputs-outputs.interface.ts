import { EventEmitter, OutputEmitterRef } from '@angular/core';

export type InputsOf<T> = {
  [K in keyof T as T[K] extends Function ? never : K]?: T[K];
};

export type OutputsOf<T> = {
  [K in keyof T as
  T[K] extends EventEmitter<any> | OutputEmitterRef<any> ? K : never
  ]?: T[K] extends EventEmitter<infer U>
  ? (event: U) => void
  : T[K] extends OutputEmitterRef<infer U>
  ? (event: U) => void
  : never;
};
