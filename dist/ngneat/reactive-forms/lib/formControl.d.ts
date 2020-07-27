import { FormControl as NgFormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import {
  AsyncValidator,
  AsyncValidatorFn,
  ControlEventOptions,
  ControlOptions,
  ControlState,
  EmitEvent,
  ExtractStrings,
  OnlySelf,
  OrBoxedValue,
  Validator,
  ValidatorOrOpts
} from './types';
export declare class FormControl<T = any, E extends object = any> extends NgFormControl {
  readonly value: T;
  readonly errors: E | null;
  readonly asyncValidator: AsyncValidatorFn<T>;
  readonly valueChanges: Observable<T>;
  readonly status: ControlState;
  readonly statusChanges: Observable<ControlState>;
  private touchChanges;
  private dirtyChanges;
  readonly touch$: Observable<boolean>;
  readonly dirty$: Observable<boolean>;
  readonly value$: Observable<T>;
  readonly disabled$: Observable<boolean>;
  readonly enabled$: Observable<boolean>;
  readonly status$: Observable<ControlState>;
  readonly errors$: Observable<E>;
  constructor(formState?: OrBoxedValue<T>, validatorOrOpts?: ValidatorOrOpts, asyncValidator?: AsyncValidator);
  setValue(valueOrObservable: Observable<T>, options?: ControlOptions): Subscription;
  setValue(valueOrObservable: T, options?: ControlOptions): void;
  patchValue(valueOrObservable: Observable<T>, options?: ControlOptions): Subscription;
  patchValue(valueOrObservable: T, options?: ControlOptions): void;
  disabledWhile(observable: Observable<boolean>, options?: ControlOptions): Subscription;
  enabledWhile(observable: Observable<boolean>, options?: ControlOptions): Subscription;
  mergeValidators(validators: Validator): void;
  mergeAsyncValidators(validators: AsyncValidator): void;
  markAsTouched(opts?: OnlySelf): void;
  markAsUntouched(opts?: OnlySelf): void;
  markAsPristine(opts?: OnlySelf): void;
  markAsDirty(opts?: OnlySelf): void;
  markAllAsDirty(): void;
  reset(formState?: OrBoxedValue<T>, options?: ControlEventOptions): void;
  setValidators(newValidator: Validator): void;
  setAsyncValidators(newValidator: AsyncValidator): void;
  validateOn(observableValidation: Observable<null | object>): Subscription;
  getError<K extends ExtractStrings<E>>(errorCode: K): E[K] | null;
  hasError<K extends ExtractStrings<E>>(errorCode: K): boolean;
  setErrors(errors: Partial<E> | null, opts?: EmitEvent): void;
  hasErrorAndTouched(error: ExtractStrings<E>): boolean;
  hasErrorAndDirty(error: ExtractStrings<E>): boolean;
  setEnable(enable?: boolean, opts?: ControlEventOptions): void;
  setDisable(disable?: boolean, opts?: ControlEventOptions): void;
}
