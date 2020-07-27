import { Observable, Subscription } from 'rxjs';
import { FormArray } from './formArray';
import { FormControl } from './formControl';
import { FormGroup } from './formGroup';
import { AbstractControl, ControlOptions, ControlState, ValidatorFn, ControlPath } from './types';
export declare function controlValueChanges$<T>(control: AbstractControl<T>): Observable<T>;
export declare function controlDisabled$<T>(control: AbstractControl<T>): Observable<boolean>;
export declare function controlEnabled$<T>(control: AbstractControl<T>): Observable<boolean>;
export declare function controlStatusChanges$<T>(control: AbstractControl<T>): Observable<ControlState>;
export declare function controlErrorChanges$<E>(control: AbstractControl): Observable<E | null>;
export declare function enableControl<T>(control: AbstractControl<T>, enabled: boolean, opts?: ControlOptions): void;
export declare function disableControl<T>(control: AbstractControl<T>, disabled: boolean, opts?: ControlOptions): void;
export declare function controlDisabledWhile<T>(
  control: AbstractControl<T>,
  observable: Observable<boolean>,
  opts?: ControlOptions
): Subscription;
export declare function controlEnabledWhile<T>(
  control: AbstractControl<T>,
  observable: Observable<boolean>,
  opts?: ControlOptions
): Subscription;
export declare function mergeControlValidators<T, Control extends AbstractControl<T>>(
  control: Control,
  validators: ValidatorFn<T> | ValidatorFn<T>[]
): void;
export declare function validateControlOn<T>(
  control: AbstractControl<T>,
  validation: Observable<null | object>
): Subscription;
export declare function hasErrorAndTouched<T>(control: AbstractControl<T>, error: string, path?: ControlPath): boolean;
export declare function hasErrorAndDirty<T>(control: AbstractControl<T>, error: string, path?: ControlPath): boolean;
export declare function markAllDirty<T>(control: FormArray<T> | FormGroup<T>): void;
export declare function selectControlValue$<T, R>(
  control: FormGroup<T> | FormArray<T> | FormControl<T>,
  mapFn: (state: T | T[]) => R
): Observable<R>;
