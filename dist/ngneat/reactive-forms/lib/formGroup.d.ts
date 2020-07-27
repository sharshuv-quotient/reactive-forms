import { FormGroup as NgFormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import {
  AbstractControl,
  AsyncValidator,
  ControlEventOptions,
  ControlOptions,
  ControlState,
  EmitEvent,
  ExtractStrings,
  Obj,
  OnlySelf,
  Validator,
  ValidatorOrOpts,
  ControlsValue,
  ControlsOfValue
} from './types';
import { FormArray } from './formArray';
export declare class FormGroup<T extends Obj = any, E extends object = any> extends NgFormGroup {
  controls: ControlsOfValue<T>;
  readonly value: ControlsValue<T>;
  readonly errors: E | null;
  readonly valueChanges: Observable<ControlsValue<T>>;
  readonly status: ControlState;
  readonly statusChanges: Observable<ControlState>;
  private touchChanges;
  private dirtyChanges;
  touch$: Observable<boolean>;
  dirty$: Observable<boolean>;
  readonly value$: Observable<ControlsValue<T>>;
  readonly disabled$: Observable<boolean>;
  readonly enabled$: Observable<boolean>;
  readonly status$: Observable<ControlState>;
  readonly errors$: Observable<E>;
  constructor(controls: ControlsOfValue<T>, validatorOrOpts?: ValidatorOrOpts, asyncValidator?: AsyncValidator);
  select<R>(mapFn: (state: ControlsValue<T>) => R): Observable<R>;
  getRawValue(): ControlsValue<T>;
  get<K1 extends keyof ControlsValue<T>>(path?: [K1]): ControlsOfValue<T>[K1];
  get<
    K1 extends keyof ControlsValue<T>,
    K2 extends ControlsOfValue<T>[K1] extends FormGroup | FormArray ? keyof ControlsOfValue<T>[K1]['controls'] : never
  >(
    path?: [K1, K2]
  ): ControlsOfValue<T>[K1] extends FormGroup | FormArray ? ControlsOfValue<T>[K1]['controls'][K2] : never;
  get<K1 extends keyof ControlsValue<T>, K2 extends keyof ControlsValue<T>[K1]>(
    path?: [K1, K2]
  ): AbstractControl<ControlsValue<T>[K1][K2]>;
  get<
    K1 extends keyof ControlsValue<T>,
    K2 extends keyof ControlsValue<T>[K1],
    K3 extends keyof ControlsValue<T>[K1][K2]
  >(path?: [K1, K2, K3]): AbstractControl<ControlsValue<T>[K1][K2][K3]>;
  get(path?: Array<string | number> | string): AbstractControl;
  getControl<P1 extends keyof ControlsValue<T>>(path?: P1): ControlsOfValue<T>[P1];
  getControl<
    P1 extends keyof ControlsValue<T>,
    P2 extends ControlsOfValue<T>[P1] extends FormGroup | FormArray ? keyof ControlsOfValue<T>[P1]['controls'] : never
  >(
    prop1: P1,
    prop2: P2
  ): ControlsOfValue<T>[P1] extends FormGroup | FormArray ? ControlsOfValue<T>[P1]['controls'][P2] : never;
  getControl<P1 extends keyof ControlsValue<T>, P2 extends keyof ControlsValue<T>[P1]>(
    prop1: P1,
    prop2: P2
  ): AbstractControl<ControlsValue<T>[P1][P2]>;
  getControl<
    P1 extends keyof ControlsValue<T>,
    P2 extends keyof ControlsValue<T>[P1],
    P3 extends keyof ControlsValue<T>[P1][P2]
  >(prop1: P1, prop2: P2, prop3: P3): AbstractControl<ControlsValue<T>[P1][P2][P3]>;
  getControl(path?: string): AbstractControl;
  addControl<K extends ExtractStrings<T>>(name: K, control: ControlsOfValue<T>[K]): void;
  removeControl(name: ExtractStrings<T>): void;
  contains(controlName: ExtractStrings<T>): boolean;
  setControl<K extends ExtractStrings<T>>(name: K, control: ControlsOfValue<T>[K]): void;
  setValue(valueOrObservable: Observable<ControlsValue<T>>, options?: ControlEventOptions): Subscription;
  setValue(valueOrObservable: ControlsValue<T>, options?: ControlEventOptions): void;
  patchValue(valueOrObservable: Observable<Partial<ControlsValue<T>>>, options?: ControlEventOptions): Subscription;
  patchValue(valueOrObservable: Partial<ControlsValue<T>>, options?: ControlEventOptions): void;
  disabledWhile(observable: Observable<boolean>, options?: ControlOptions): Subscription;
  enabledWhile(observable: Observable<boolean>, options?: ControlOptions): Subscription;
  mergeValidators(validators: Validator): void;
  mergeAsyncValidators(validators: AsyncValidator): void;
  markAsTouched(opts?: OnlySelf): void;
  markAsUntouched(opts?: OnlySelf): void;
  markAsPristine(opts?: OnlySelf): void;
  markAsDirty(opts?: OnlySelf): void;
  markAllAsDirty(): void;
  reset(formState?: Partial<ControlsValue<T>>, options?: ControlEventOptions): void;
  setValidators(newValidator: Validator): void;
  setAsyncValidators(newValidator: AsyncValidator): void;
  validateOn(observableValidation: Observable<null | object>): Subscription;
  hasError<K1 extends keyof ControlsValue<T>>(errorCode: ExtractStrings<E>, path?: [K1]): boolean;
  hasError<K1 extends keyof ControlsValue<T>, K2 extends keyof ControlsValue<T>[K1]>(
    errorCode: ExtractStrings<E>,
    path?: [K1, K2]
  ): boolean;
  hasError<
    K1 extends keyof ControlsValue<T>,
    K2 extends keyof ControlsValue<T>[K1],
    K3 extends keyof ControlsValue<T>[K1][K2]
  >(errorCode: ExtractStrings<E>, path?: [K1, K2, K3]): boolean;
  hasError(errorCode: ExtractStrings<E>, path?: string): boolean;
  setErrors(errors: Partial<E> | null, opts?: EmitEvent): void;
  getError<K extends keyof E, K1 extends keyof ControlsValue<T>>(errorCode: K, path?: [K1]): E[K] | null;
  getError<K extends keyof E, K1 extends keyof ControlsValue<T>, K2 extends keyof ControlsValue<T>[K1]>(
    errorCode: K,
    path?: [K1, K2]
  ): E[K] | null;
  getError<
    K extends keyof E,
    K1 extends keyof ControlsValue<T>,
    K2 extends keyof ControlsValue<T>[K1],
    K3 extends keyof ControlsValue<T>[K1][K2]
  >(errorCode: K, path?: [K1, K2, K3]): E[K] | null;
  getError<K extends keyof E>(errorCode: K, path?: string): E[K] | null;
  hasErrorAndTouched<P1 extends keyof ControlsValue<T>>(error: ExtractStrings<E>, prop1?: P1): boolean;
  hasErrorAndTouched<P1 extends keyof ControlsValue<T>, P2 extends keyof ControlsValue<T>[P1]>(
    error: ExtractStrings<E>,
    prop1?: P1,
    prop2?: P2
  ): boolean;
  hasErrorAndTouched<
    P1 extends keyof ControlsValue<T>,
    P2 extends keyof ControlsValue<T>[P1],
    P3 extends keyof ControlsValue<T>[P1][P2]
  >(error: ExtractStrings<E>, prop1?: P1, prop2?: P2, prop3?: P3): boolean;
  hasErrorAndTouched<
    P1 extends keyof ControlsValue<T>,
    P2 extends keyof ControlsValue<T>[P1],
    P3 extends keyof ControlsValue<T>[P1][P2],
    P4 extends keyof ControlsValue<T>[P1][P2][P3]
  >(error: ExtractStrings<E>, prop1?: P1, prop2?: P2, prop3?: P3, prop4?: P4): boolean;
  hasErrorAndDirty<P1 extends keyof ControlsValue<T>>(error: ExtractStrings<E>, prop1?: P1): boolean;
  hasErrorAndDirty<P1 extends keyof ControlsValue<T>, P2 extends keyof ControlsValue<T>[P1]>(
    error: ExtractStrings<E>,
    prop1?: P1,
    prop2?: P2
  ): boolean;
  hasErrorAndDirty<
    P1 extends keyof ControlsValue<T>,
    P2 extends keyof ControlsValue<T>[P1],
    P3 extends keyof ControlsValue<T>[P1][P2]
  >(error: ExtractStrings<E>, prop1?: P1, prop2?: P2, prop3?: P3): boolean;
  hasErrorAndDirty<
    P1 extends keyof ControlsValue<T>,
    P2 extends keyof ControlsValue<T>[P1],
    P3 extends keyof ControlsValue<T>[P1][P2],
    P4 extends keyof ControlsValue<T>[P1][P2][P3]
  >(error: ExtractStrings<E>, prop1?: P1, prop2?: P2, prop3?: P3, prop4?: P4): boolean;
  setEnable(enable?: boolean, opts?: ControlEventOptions): void;
  setDisable(disable?: boolean, opts?: ControlEventOptions): void;
}
