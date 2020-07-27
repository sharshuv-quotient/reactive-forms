import { FormArray as NgFormArray } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import {
  AsyncValidator,
  ControlEventOptions,
  ControlOptions,
  ControlPath,
  ControlState,
  EmitEvent,
  ExtractStrings,
  OnlySelf,
  Validator,
  ValidatorOrOpts,
  ControlValue,
  ControlOfValue
} from './types';
export declare class FormArray<T = any, E extends object = any> extends NgFormArray {
  controls: Array<ControlOfValue<T>>;
  readonly value: ControlValue<T>[];
  readonly valueChanges: Observable<ControlValue<T>[]>;
  readonly status: ControlState;
  readonly statusChanges: Observable<ControlState>;
  readonly errors: E | null;
  private touchChanges;
  private dirtyChanges;
  readonly touch$: Observable<boolean>;
  readonly dirty$: Observable<boolean>;
  readonly value$: Observable<ControlValue<T>[]>;
  readonly disabled$: Observable<boolean>;
  readonly enabled$: Observable<boolean>;
  readonly status$: Observable<ControlState>;
  readonly errors$: Observable<E>;
  constructor(controls: Array<ControlOfValue<T>>, validatorOrOpts?: ValidatorOrOpts, asyncValidator?: AsyncValidator);
  select<R>(mapFn: (state: ControlValue<T>[]) => R): Observable<R>;
  getRawValue(): ControlValue<T>[];
  at(index: number): ControlOfValue<T>;
  setValue(valueOrObservable: Observable<ControlValue<T>[]>, options?: ControlEventOptions): Subscription;
  setValue(valueOrObservable: ControlValue<T>[], options?: ControlEventOptions): void;
  patchValue(valueOrObservable: Observable<Partial<ControlValue<T>>[]>, options?: ControlEventOptions): Subscription;
  patchValue(valueOrObservable: Partial<ControlValue<T>>[], options?: ControlEventOptions): void;
  push(control: ControlOfValue<T>): void;
  insert(index: number, control: ControlOfValue<T>): void;
  setControl(index: number, control: ControlOfValue<T>): void;
  disabledWhile(observable: Observable<boolean>, options?: ControlOptions): Subscription;
  enabledWhile(observable: Observable<boolean>, options?: ControlOptions): Subscription;
  mergeValidators(validators: Validator): void;
  mergeAsyncValidators(validators: AsyncValidator): void;
  markAsTouched(opts?: OnlySelf): void;
  markAsUntouched(opts?: OnlySelf): void;
  markAsPristine(opts?: OnlySelf): void;
  markAsDirty(opts?: OnlySelf): void;
  markAllAsDirty(): void;
  reset(value?: ControlValue<T>[], options?: ControlEventOptions): void;
  setValidators(newValidator: Validator): void;
  setAsyncValidators(newValidator: AsyncValidator): void;
  validateOn(observableValidation: Observable<null | object>): Subscription;
  hasError(errorCode: ExtractStrings<E>, path?: ControlPath): boolean;
  setErrors(errors: Partial<E> | null, opts?: EmitEvent): void;
  getError<K extends ExtractStrings<E>>(errorCode: K, path?: ControlPath): E[K];
  hasErrorAndTouched(errorCode: ExtractStrings<E>, path?: ControlPath): boolean;
  hasErrorAndDirty(errorCode: ExtractStrings<E>, path?: ControlPath): boolean;
  setEnable(enable?: boolean, opts?: ControlEventOptions): void;
  setDisable(disable?: boolean, opts?: ControlEventOptions): void;
}
