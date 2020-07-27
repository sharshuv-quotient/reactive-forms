import { __spread, __extends, __decorate } from 'tslib';
import {
  FormArray as FormArray$1,
  FormControl as FormControl$1,
  FormGroup as FormGroup$1,
  FormBuilder as FormBuilder$1
} from '@angular/forms';
import { merge, defer, of, Subject, isObservable } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { ɵɵdefineInjectable, Injectable } from '@angular/core';

function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}
function isFunction(x) {
  return typeof x === 'function';
}
function isNil(v) {
  return v === null || v === undefined;
}

function getControlValue(control) {
  if (control.getRawValue) {
    return control.getRawValue();
  }
  return control.value;
}
function compareErrors(a, b) {
  if (isNil(a) || isNil(b)) {
    return a === b;
  }
  return JSON.stringify(a) === JSON.stringify(b);
}
function controlValueChanges$(control) {
  return merge(
    defer(function() {
      return of(getControlValue(control));
    }),
    control.valueChanges.pipe(
      map(function() {
        return getControlValue(control);
      })
    )
  );
}
function controlDisabled$(control) {
  return merge(
    defer(function() {
      return of(control.disabled);
    }),
    control.statusChanges.pipe(
      map(function() {
        return control.disabled;
      }),
      distinctUntilChanged()
    )
  );
}
function controlEnabled$(control) {
  return merge(
    defer(function() {
      return of(control.enabled);
    }),
    control.statusChanges.pipe(
      map(function() {
        return control.enabled;
      }),
      distinctUntilChanged()
    )
  );
}
function controlStatusChanges$(control) {
  return merge(
    defer(function() {
      return of(control.status);
    }),
    control.statusChanges.pipe(
      map(function() {
        return control.status;
      }),
      distinctUntilChanged()
    )
  );
}
function controlErrorChanges$(control) {
  return merge(
    defer(function() {
      return of(control.errors);
    }),
    control.valueChanges.pipe(
      map(function() {
        return control.errors;
      }),
      distinctUntilChanged(function(a, b) {
        return compareErrors(a, b);
      })
    )
  );
}
function enableControl(control, enabled, opts) {
  if (enabled) {
    control.enable(opts);
  } else {
    control.disable(opts);
  }
}
function disableControl(control, disabled, opts) {
  enableControl(control, !disabled, opts);
}
function controlDisabledWhile(control, observable, opts) {
  return observable.subscribe(function(isDisabled) {
    return disableControl(control, isDisabled, opts);
  });
}
function controlEnabledWhile(control, observable, opts) {
  return observable.subscribe(function(isEnabled) {
    return enableControl(control, isEnabled, opts);
  });
}
function mergeControlValidators(control, validators) {
  control.setValidators(__spread([control.validator], coerceArray(validators)));
  control.updateValueAndValidity();
}
function validateControlOn(control, validation) {
  return validation.subscribe(function(maybeError) {
    control.setErrors(maybeError);
  });
}
function hasErrorAndTouched(control, error, path) {
  var hasError = control.hasError(error, !path || path.length === 0 ? undefined : path);
  return hasError && control.touched;
}
function hasErrorAndDirty(control, error, path) {
  var hasError = control.hasError(error, !path || path.length === 0 ? undefined : path);
  return hasError && control.dirty;
}
function markAllDirty(control) {
  control.markAsDirty({ onlySelf: true });
  control._forEachChild(function(control) {
    return control.markAllAsDirty();
  });
}
function selectControlValue$(control, mapFn) {
  return control.value$.pipe(map(mapFn), distinctUntilChanged());
}

var FormArray = /** @class */ (function(_super) {
  __extends(FormArray, _super);
  function FormArray(controls, validatorOrOpts, asyncValidator) {
    var _this = _super.call(this, controls, validatorOrOpts, asyncValidator) || this;
    _this.controls = controls;
    _this.touchChanges = new Subject();
    _this.dirtyChanges = new Subject();
    _this.touch$ = _this.touchChanges.asObservable().pipe(distinctUntilChanged());
    _this.dirty$ = _this.dirtyChanges.asObservable().pipe(distinctUntilChanged());
    _this.value$ = controlValueChanges$(_this);
    _this.disabled$ = controlDisabled$(_this);
    _this.enabled$ = controlEnabled$(_this);
    _this.status$ = controlStatusChanges$(_this);
    _this.errors$ = controlErrorChanges$(_this);
    return _this;
  }
  FormArray.prototype.select = function(mapFn) {
    return this.value$.pipe(map(mapFn), distinctUntilChanged());
  };
  FormArray.prototype.getRawValue = function() {
    return _super.prototype.getRawValue.call(this);
  };
  FormArray.prototype.at = function(index) {
    return _super.prototype.at.call(this, index);
  };
  FormArray.prototype.setValue = function(valueOrObservable, options) {
    var _this = this;
    if (isObservable(valueOrObservable)) {
      return valueOrObservable.subscribe(function(value) {
        return _super.prototype.setValue.call(_this, value, options);
      });
    }
    _super.prototype.setValue.call(this, valueOrObservable, options);
  };
  FormArray.prototype.patchValue = function(valueOrObservable, options) {
    var _this = this;
    if (isObservable(valueOrObservable)) {
      return valueOrObservable.subscribe(function(value) {
        return _super.prototype.patchValue.call(_this, value, options);
      });
    }
    _super.prototype.patchValue.call(this, valueOrObservable, options);
  };
  FormArray.prototype.push = function(control) {
    return _super.prototype.push.call(this, control);
  };
  FormArray.prototype.insert = function(index, control) {
    return _super.prototype.insert.call(this, index, control);
  };
  FormArray.prototype.setControl = function(index, control) {
    return _super.prototype.setControl.call(this, index, control);
  };
  FormArray.prototype.disabledWhile = function(observable, options) {
    return controlDisabledWhile(this, observable, options);
  };
  FormArray.prototype.enabledWhile = function(observable, options) {
    return controlEnabledWhile(this, observable, options);
  };
  FormArray.prototype.mergeValidators = function(validators) {
    mergeControlValidators(this, validators);
  };
  FormArray.prototype.mergeAsyncValidators = function(validators) {
    this.setAsyncValidators(__spread([this.asyncValidator], coerceArray(validators)));
    this.updateValueAndValidity();
  };
  FormArray.prototype.markAsTouched = function(opts) {
    _super.prototype.markAsTouched.call(this, opts);
    this.touchChanges.next(true);
  };
  FormArray.prototype.markAsUntouched = function(opts) {
    _super.prototype.markAsUntouched.call(this, opts);
    this.touchChanges.next(false);
  };
  FormArray.prototype.markAsPristine = function(opts) {
    _super.prototype.markAsPristine.call(this, opts);
    this.dirtyChanges.next(false);
  };
  FormArray.prototype.markAsDirty = function(opts) {
    _super.prototype.markAsDirty.call(this, opts);
    this.dirtyChanges.next(true);
  };
  FormArray.prototype.markAllAsDirty = function() {
    markAllDirty(this);
  };
  FormArray.prototype.reset = function(value, options) {
    _super.prototype.reset.call(this, value, options);
  };
  FormArray.prototype.setValidators = function(newValidator) {
    _super.prototype.setValidators.call(this, newValidator);
    _super.prototype.updateValueAndValidity.call(this);
  };
  FormArray.prototype.setAsyncValidators = function(newValidator) {
    _super.prototype.setAsyncValidators.call(this, newValidator);
    _super.prototype.updateValueAndValidity.call(this);
  };
  FormArray.prototype.validateOn = function(observableValidation) {
    var _this = this;
    return observableValidation.subscribe(function(maybeError) {
      _this.setErrors(maybeError);
    });
  };
  FormArray.prototype.hasError = function(errorCode, path) {
    return _super.prototype.hasError.call(this, errorCode, path);
  };
  FormArray.prototype.setErrors = function(errors, opts) {
    if (opts === void 0) {
      opts = {};
    }
    return _super.prototype.setErrors.call(this, errors, opts);
  };
  FormArray.prototype.getError = function(errorCode, path) {
    return _super.prototype.getError.call(this, errorCode, path);
  };
  FormArray.prototype.hasErrorAndTouched = function(errorCode, path) {
    return hasErrorAndTouched(this, errorCode, path);
  };
  FormArray.prototype.hasErrorAndDirty = function(errorCode, path) {
    return hasErrorAndDirty(this, errorCode, path);
  };
  FormArray.prototype.setEnable = function(enable, opts) {
    if (enable === void 0) {
      enable = true;
    }
    enableControl(this, enable, opts);
  };
  FormArray.prototype.setDisable = function(disable, opts) {
    if (disable === void 0) {
      disable = true;
    }
    disableControl(this, disable, opts);
  };
  return FormArray;
})(FormArray$1);

var FormControl = /** @class */ (function(_super) {
  __extends(FormControl, _super);
  function FormControl(formState, validatorOrOpts, asyncValidator) {
    var _this = _super.call(this, formState, validatorOrOpts, asyncValidator) || this;
    _this.touchChanges = new Subject();
    _this.dirtyChanges = new Subject();
    _this.touch$ = _this.touchChanges.asObservable().pipe(distinctUntilChanged());
    _this.dirty$ = _this.dirtyChanges.asObservable().pipe(distinctUntilChanged());
    _this.value$ = controlValueChanges$(_this);
    _this.disabled$ = controlDisabled$(_this);
    _this.enabled$ = controlEnabled$(_this);
    _this.status$ = controlStatusChanges$(_this);
    _this.errors$ = controlErrorChanges$(_this);
    return _this;
  }
  FormControl.prototype.setValue = function(valueOrObservable, options) {
    var _this = this;
    if (isObservable(valueOrObservable)) {
      return valueOrObservable.subscribe(function(value) {
        return _super.prototype.setValue.call(_this, value, options);
      });
    }
    _super.prototype.setValue.call(this, valueOrObservable, options);
  };
  FormControl.prototype.patchValue = function(valueOrObservable, options) {
    var _this = this;
    if (isObservable(valueOrObservable)) {
      return valueOrObservable.subscribe(function(value) {
        return _super.prototype.patchValue.call(_this, value, options);
      });
    }
    _super.prototype.patchValue.call(this, valueOrObservable, options);
  };
  FormControl.prototype.disabledWhile = function(observable, options) {
    return controlDisabledWhile(this, observable, options);
  };
  FormControl.prototype.enabledWhile = function(observable, options) {
    return controlEnabledWhile(this, observable, options);
  };
  FormControl.prototype.mergeValidators = function(validators) {
    mergeControlValidators(this, validators);
  };
  FormControl.prototype.mergeAsyncValidators = function(validators) {
    this.setAsyncValidators(__spread([this.asyncValidator], coerceArray(validators)));
    this.updateValueAndValidity();
  };
  FormControl.prototype.markAsTouched = function(opts) {
    _super.prototype.markAsTouched.call(this, opts);
    this.touchChanges.next(true);
  };
  FormControl.prototype.markAsUntouched = function(opts) {
    _super.prototype.markAsUntouched.call(this, opts);
    this.touchChanges.next(false);
  };
  FormControl.prototype.markAsPristine = function(opts) {
    _super.prototype.markAsPristine.call(this, opts);
    this.dirtyChanges.next(false);
  };
  FormControl.prototype.markAsDirty = function(opts) {
    _super.prototype.markAsDirty.call(this, opts);
    this.dirtyChanges.next(true);
  };
  FormControl.prototype.markAllAsDirty = function() {
    this.markAsDirty({ onlySelf: true });
  };
  FormControl.prototype.reset = function(formState, options) {
    _super.prototype.reset.call(this, formState, options);
  };
  FormControl.prototype.setValidators = function(newValidator) {
    _super.prototype.setValidators.call(this, newValidator);
    _super.prototype.updateValueAndValidity.call(this);
  };
  FormControl.prototype.setAsyncValidators = function(newValidator) {
    _super.prototype.setAsyncValidators.call(this, newValidator);
    _super.prototype.updateValueAndValidity.call(this);
  };
  FormControl.prototype.validateOn = function(observableValidation) {
    return validateControlOn(this, observableValidation);
  };
  FormControl.prototype.getError = function(errorCode) {
    return _super.prototype.getError.call(this, errorCode);
  };
  FormControl.prototype.hasError = function(errorCode) {
    return _super.prototype.hasError.call(this, errorCode);
  };
  FormControl.prototype.setErrors = function(errors, opts) {
    if (opts === void 0) {
      opts = {};
    }
    return _super.prototype.setErrors.call(this, errors, opts);
  };
  FormControl.prototype.hasErrorAndTouched = function(error) {
    return hasErrorAndTouched(this, error);
  };
  FormControl.prototype.hasErrorAndDirty = function(error) {
    return hasErrorAndDirty(this, error);
  };
  FormControl.prototype.setEnable = function(enable, opts) {
    if (enable === void 0) {
      enable = true;
    }
    enableControl(this, enable, opts);
  };
  FormControl.prototype.setDisable = function(disable, opts) {
    if (disable === void 0) {
      disable = true;
    }
    disableControl(this, disable, opts);
  };
  return FormControl;
})(FormControl$1);

var FormGroup = /** @class */ (function(_super) {
  __extends(FormGroup, _super);
  function FormGroup(controls, validatorOrOpts, asyncValidator) {
    var _this = _super.call(this, controls, validatorOrOpts, asyncValidator) || this;
    _this.controls = controls;
    _this.touchChanges = new Subject();
    _this.dirtyChanges = new Subject();
    _this.touch$ = _this.touchChanges.asObservable().pipe(distinctUntilChanged());
    _this.dirty$ = _this.dirtyChanges.asObservable().pipe(distinctUntilChanged());
    _this.value$ = controlValueChanges$(_this);
    _this.disabled$ = controlDisabled$(_this);
    _this.enabled$ = controlEnabled$(_this);
    _this.status$ = controlStatusChanges$(_this);
    _this.errors$ = controlErrorChanges$(_this);
    return _this;
  }
  FormGroup.prototype.select = function(mapFn) {
    return selectControlValue$(this, mapFn);
  };
  FormGroup.prototype.getRawValue = function() {
    return _super.prototype.getRawValue.call(this);
  };
  FormGroup.prototype.get = function(path) {
    return _super.prototype.get.call(this, path);
  };
  FormGroup.prototype.getControl = function() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      names[_i] = arguments[_i];
    }
    return this.get(names);
  };
  FormGroup.prototype.addControl = function(name, control) {
    _super.prototype.addControl.call(this, name, control);
  };
  FormGroup.prototype.removeControl = function(name) {
    _super.prototype.removeControl.call(this, name);
  };
  FormGroup.prototype.contains = function(controlName) {
    return _super.prototype.contains.call(this, controlName);
  };
  FormGroup.prototype.setControl = function(name, control) {
    _super.prototype.setControl.call(this, name, control);
  };
  FormGroup.prototype.setValue = function(valueOrObservable, options) {
    var _this = this;
    if (isObservable(valueOrObservable)) {
      return valueOrObservable.subscribe(function(value) {
        return _super.prototype.setValue.call(_this, value, options);
      });
    }
    _super.prototype.setValue.call(this, valueOrObservable, options);
  };
  FormGroup.prototype.patchValue = function(valueOrObservable, options) {
    var _this = this;
    if (isObservable(valueOrObservable)) {
      return valueOrObservable.subscribe(function(value) {
        return _super.prototype.patchValue.call(_this, value, options);
      });
    }
    _super.prototype.patchValue.call(this, valueOrObservable, options);
  };
  FormGroup.prototype.disabledWhile = function(observable, options) {
    return controlDisabledWhile(this, observable, options);
  };
  FormGroup.prototype.enabledWhile = function(observable, options) {
    return controlEnabledWhile(this, observable, options);
  };
  FormGroup.prototype.mergeValidators = function(validators) {
    mergeControlValidators(this, validators);
  };
  FormGroup.prototype.mergeAsyncValidators = function(validators) {
    this.setAsyncValidators(__spread([this.asyncValidator], coerceArray(validators)));
    this.updateValueAndValidity();
  };
  FormGroup.prototype.markAsTouched = function(opts) {
    _super.prototype.markAsTouched.call(this, opts);
    this.touchChanges.next(true);
  };
  FormGroup.prototype.markAsUntouched = function(opts) {
    _super.prototype.markAsUntouched.call(this, opts);
    this.touchChanges.next(false);
  };
  FormGroup.prototype.markAsPristine = function(opts) {
    _super.prototype.markAsPristine.call(this, opts);
    this.dirtyChanges.next(false);
  };
  FormGroup.prototype.markAsDirty = function(opts) {
    _super.prototype.markAsDirty.call(this, opts);
    this.dirtyChanges.next(true);
  };
  FormGroup.prototype.markAllAsDirty = function() {
    markAllDirty(this);
  };
  FormGroup.prototype.reset = function(formState, options) {
    _super.prototype.reset.call(this, formState, options);
  };
  FormGroup.prototype.setValidators = function(newValidator) {
    _super.prototype.setValidators.call(this, newValidator);
    _super.prototype.updateValueAndValidity.call(this);
  };
  FormGroup.prototype.setAsyncValidators = function(newValidator) {
    _super.prototype.setAsyncValidators.call(this, newValidator);
    _super.prototype.updateValueAndValidity.call(this);
  };
  FormGroup.prototype.validateOn = function(observableValidation) {
    return validateControlOn(this, observableValidation);
  };
  FormGroup.prototype.hasError = function(errorCode, path) {
    return _super.prototype.hasError.call(this, errorCode, path);
  };
  FormGroup.prototype.setErrors = function(errors, opts) {
    if (opts === void 0) {
      opts = {};
    }
    return _super.prototype.setErrors.call(this, errors, opts);
  };
  FormGroup.prototype.getError = function(errorCode, path) {
    return _super.prototype.getError.call(this, errorCode, path);
  };
  FormGroup.prototype.hasErrorAndTouched = function(error) {
    var path = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      path[_i - 1] = arguments[_i];
    }
    return hasErrorAndTouched.apply(void 0, __spread([this, error], path));
  };
  FormGroup.prototype.hasErrorAndDirty = function(error) {
    var path = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      path[_i - 1] = arguments[_i];
    }
    return hasErrorAndDirty.apply(void 0, __spread([this, error], path));
  };
  FormGroup.prototype.setEnable = function(enable, opts) {
    if (enable === void 0) {
      enable = true;
    }
    enableControl(this, enable, opts);
  };
  FormGroup.prototype.setDisable = function(disable, opts) {
    if (disable === void 0) {
      disable = true;
    }
    disableControl(this, disable, opts);
  };
  return FormGroup;
})(FormGroup$1);

function isAbstractControlOptions(options) {
  return options.asyncValidators !== undefined || options.validators !== undefined || options.updateOn !== undefined;
}
var FormBuilder = /** @class */ (function(_super) {
  __extends(FormBuilder, _super);
  function FormBuilder() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  FormBuilder.prototype.group = function(controlsConfig, options) {
    var controls = this._reduceControls(controlsConfig);
    var validators = null;
    var asyncValidators = null;
    var updateOn;
    if (options != null) {
      if (isAbstractControlOptions(options)) {
        validators = options.validators != null ? options.validators : null;
        asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
        updateOn = options.updateOn != null ? options.updateOn : undefined;
      } else {
        // `options` are legacy form group options
        validators = options['validator'] != null ? options['validator'] : null;
        asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
      }
    }
    return new FormGroup(controls, { asyncValidators: asyncValidators, updateOn: updateOn, validators: validators });
  };
  FormBuilder.prototype.control = function(formState, validatorOrOpts, asyncValidator) {
    return new FormControl(formState, validatorOrOpts, asyncValidator);
  };
  FormBuilder.prototype.array = function(controlsConfig, validatorOrOpts, asyncValidator) {
    var _this = this;
    var controls = controlsConfig.map(function(c) {
      return _this._createControl(c);
    });
    return new FormArray(controls, validatorOrOpts, asyncValidator);
  };
  FormBuilder.ɵprov = ɵɵdefineInjectable({
    factory: function FormBuilder_Factory() {
      return new FormBuilder();
    },
    token: FormBuilder,
    providedIn: 'root'
  });
  FormBuilder = __decorate([Injectable({ providedIn: 'root' })], FormBuilder);
  return FormBuilder;
})(FormBuilder$1);

var ControlValueAccessor = /** @class */ (function() {
  function ControlValueAccessor() {
    this.onChange = function(value) {};
    this.onTouched = function() {};
  }
  ControlValueAccessor.prototype.registerOnChange = function(fn) {
    this.onChange = fn;
  };
  ControlValueAccessor.prototype.registerOnTouched = function(fn) {
    this.onTouched = fn;
  };
  return ControlValueAccessor;
})();

/**
 * Generated bundle index. Do not edit.
 */

export { ControlValueAccessor, FormArray, FormBuilder, FormControl, FormGroup };
//# sourceMappingURL=ngneat-reactive-forms.js.map
