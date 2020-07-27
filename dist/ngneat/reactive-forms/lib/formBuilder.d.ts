import { FormBuilder as NgFormBuilder } from '@angular/forms';
import { FormArray } from './formArray';
import { FormControl } from './formControl';
import { FormGroup } from './formGroup';
import { AbstractControlOptions, AsyncValidatorFn, AbstractControl, OrBoxedValue, ValidatorFn } from './types';
export declare type FbControlConfig<T = any> =
  | AbstractControl<T>
  | [OrBoxedValue<T>, ValidatorFn | ValidatorFn[] | null, AsyncValidatorFn | AsyncValidatorFn[] | null]
  | [OrBoxedValue<T>, ValidatorFn | ValidatorFn[] | AbstractControlOptions | null]
  | [T | OrBoxedValue<T>]
  | OrBoxedValue<T>
  | T;
export declare type FbGroupConfig<T = any> = {
  [key in keyof T]: FbControlConfig<T[key]>;
};
export declare class FormBuilder extends NgFormBuilder {
  group<T extends object, E extends object = any, GroupConfig extends FbGroupConfig<T> = FbGroupConfig<T>>(
    controlsConfig: GroupConfig,
    options?:
      | AbstractControlOptions<T>
      | {
          validator?: ValidatorFn | ValidatorFn[];
          asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[];
        }
      | null
  ): FormGroup<T, E>;
  control<T, E extends object = any>(
    formState: OrBoxedValue<T>,
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ): FormControl<T, E>;
  array<T, E extends object = any>(
    controlsConfig: FbControlConfig<T>[],
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ): FormArray<T, E>;
}
