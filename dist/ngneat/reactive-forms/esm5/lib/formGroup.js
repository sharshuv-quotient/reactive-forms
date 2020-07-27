import { __extends, __read, __spread } from 'tslib';
import { FormGroup as NgFormGroup } from '@angular/forms';
import { isObservable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import {
  controlDisabled$,
  controlDisabledWhile,
  controlEnabled$,
  controlEnabledWhile,
  controlErrorChanges$,
  controlStatusChanges$,
  controlValueChanges$,
  disableControl,
  enableControl,
  hasErrorAndDirty,
  hasErrorAndTouched,
  markAllDirty,
  mergeControlValidators,
  selectControlValue$,
  validateControlOn
} from './control-actions';
import { coerceArray } from './utils';
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
})(NgFormGroup);
export { FormGroup };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybUdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nbmVhdC9yZWFjdGl2ZS1mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9mb3JtR3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLElBQUksV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUQsT0FBTyxFQUNMLFlBQVksRUFFWixPQUFPLEVBRVIsTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLG9CQUFvQixFQUNwQixlQUFlLEVBQ2YsbUJBQW1CLEVBQ25CLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLGNBQWMsRUFDZCxhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osc0JBQXNCLEVBQ3RCLG1CQUFtQixFQUNuQixpQkFBaUIsRUFDbEIsTUFBTSxtQkFBbUIsQ0FBQztBQWtCM0IsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUd0QztJQUNrQyw2QkFBVztJQW1CM0MsbUJBQW1CLFFBQTRCLEVBQUUsZUFBaUMsRUFBRSxjQUErQjtRQUFuSCxZQUNFLGtCQUFNLFFBQVEsRUFBRSxlQUFlLEVBQUUsY0FBYyxDQUFDLFNBQ2pEO1FBRmtCLGNBQVEsR0FBUixRQUFRLENBQW9CO1FBWnZDLGtCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUN0QyxrQkFBWSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFFOUMsWUFBTSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztRQUN2RSxZQUFNLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBRTlELFlBQU0sR0FBRyxvQkFBb0IsQ0FBbUIsS0FBSSxDQUFDLENBQUM7UUFDdEQsZUFBUyxHQUFHLGdCQUFnQixDQUFtQixLQUFJLENBQUMsQ0FBQztRQUNyRCxjQUFRLEdBQUcsZUFBZSxDQUFtQixLQUFJLENBQUMsQ0FBQztRQUNuRCxhQUFPLEdBQUcscUJBQXFCLENBQW1CLEtBQUksQ0FBQyxDQUFDO1FBQ3hELGFBQU8sR0FBRyxvQkFBb0IsQ0FBSSxLQUFJLENBQUMsQ0FBQzs7SUFJakQsQ0FBQztJQUVELDBCQUFNLEdBQU4sVUFBVSxLQUFxQztRQUM3QyxPQUFPLG1CQUFtQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUNFLE9BQU8saUJBQU0sV0FBVyxXQUFFLENBQUM7SUFDN0IsQ0FBQztJQWNELHVCQUFHLEdBQUgsVUFBSSxJQUFxQztRQUN2QyxPQUFPLGlCQUFNLEdBQUcsWUFBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBd0JELDhCQUFVLEdBQVY7UUFBVyxlQUFnQzthQUFoQyxVQUFnQyxFQUFoQyxxQkFBZ0MsRUFBaEMsSUFBZ0M7WUFBaEMsMEJBQWdDOztRQUN6QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELDhCQUFVLEdBQVYsVUFBd0MsSUFBTyxFQUFFLE9BQThCO1FBQzdFLGlCQUFNLFVBQVUsWUFBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELGlDQUFhLEdBQWIsVUFBYyxJQUF1QjtRQUNuQyxpQkFBTSxhQUFhLFlBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELDRCQUFRLEdBQVIsVUFBUyxXQUE4QjtRQUNyQyxPQUFPLGlCQUFNLFFBQVEsWUFBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsOEJBQVUsR0FBVixVQUF3QyxJQUFPLEVBQUUsT0FBOEI7UUFDN0UsaUJBQU0sVUFBVSxZQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBSUQsNEJBQVEsR0FBUixVQUFTLGlCQUFzQixFQUFFLE9BQTZCO1FBQTlELGlCQU1DO1FBTEMsSUFBSSxZQUFZLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUNuQyxPQUFPLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLGlCQUFNLFFBQVEsYUFBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztTQUM3RTtRQUVELGlCQUFNLFFBQVEsWUFBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBSUQsOEJBQVUsR0FBVixVQUFXLGlCQUFzQixFQUFFLE9BQTZCO1FBQWhFLGlCQU1DO1FBTEMsSUFBSSxZQUFZLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUNuQyxPQUFPLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLGlCQUFNLFVBQVUsYUFBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQztTQUMvRTtRQUVELGlCQUFNLFVBQVUsWUFBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsaUNBQWEsR0FBYixVQUFjLFVBQStCLEVBQUUsT0FBd0I7UUFDckUsT0FBTyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxnQ0FBWSxHQUFaLFVBQWEsVUFBK0IsRUFBRSxPQUF3QjtRQUNwRSxPQUFPLG1CQUFtQixDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELG1DQUFlLEdBQWYsVUFBZ0IsVUFBcUI7UUFDbkMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCx3Q0FBb0IsR0FBcEIsVUFBcUIsVUFBMEI7UUFDN0MsSUFBSSxDQUFDLGtCQUFrQixXQUFFLElBQUksQ0FBQyxjQUFjLEdBQUssV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFDM0UsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELGlDQUFhLEdBQWIsVUFBYyxJQUFlO1FBQzNCLGlCQUFNLGFBQWEsWUFBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsbUNBQWUsR0FBZixVQUFnQixJQUFlO1FBQzdCLGlCQUFNLGVBQWUsWUFBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsa0NBQWMsR0FBZCxVQUFlLElBQWU7UUFDNUIsaUJBQU0sY0FBYyxZQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCwrQkFBVyxHQUFYLFVBQVksSUFBZTtRQUN6QixpQkFBTSxXQUFXLFlBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGtDQUFjLEdBQWQ7UUFDRSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELHlCQUFLLEdBQUwsVUFBTSxTQUFxQyxFQUFFLE9BQTZCO1FBQ3hFLGlCQUFNLEtBQUssWUFBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELGlDQUFhLEdBQWIsVUFBYyxZQUF1QjtRQUNuQyxpQkFBTSxhQUFhLFlBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEMsaUJBQU0sc0JBQXNCLFdBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsc0NBQWtCLEdBQWxCLFVBQW1CLFlBQTRCO1FBQzdDLGlCQUFNLGtCQUFrQixZQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLGlCQUFNLHNCQUFzQixXQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELDhCQUFVLEdBQVYsVUFBVyxvQkFBK0M7UUFDeEQsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBV0QsNEJBQVEsR0FBUixVQUFTLFNBQTRCLEVBQUUsSUFBVTtRQUMvQyxPQUFPLGlCQUFNLFFBQVEsWUFBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELDZCQUFTLEdBQVQsVUFBVSxNQUF5QixFQUFFLElBQW9CO1FBQXBCLHFCQUFBLEVBQUEsU0FBb0I7UUFDdkQsT0FBTyxpQkFBTSxTQUFTLFlBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFZRCw0QkFBUSxHQUFSLFVBQTRCLFNBQVksRUFBRSxJQUFVO1FBQ2xELE9BQU8saUJBQU0sUUFBUSxZQUFDLFNBQWdCLEVBQUUsSUFBSSxDQUFnQixDQUFDO0lBQy9ELENBQUM7SUFlRCxzQ0FBa0IsR0FBbEIsVUFBbUIsS0FBVTtRQUFFLGNBQVk7YUFBWixVQUFZLEVBQVoscUJBQVksRUFBWixJQUFZO1lBQVosNkJBQVk7O1FBQ3pDLE9BQU8sa0JBQWtCLHlCQUFDLElBQUksRUFBRSxLQUFLLEdBQUssSUFBSSxHQUFFO0lBQ2xELENBQUM7SUFlRCxvQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBVTtRQUFFLGNBQVk7YUFBWixVQUFZLEVBQVoscUJBQVksRUFBWixJQUFZO1lBQVosNkJBQVk7O1FBQ3ZDLE9BQU8sZ0JBQWdCLHlCQUFDLElBQUksRUFBRSxLQUFLLEdBQUssSUFBSSxHQUFFO0lBQ2hELENBQUM7SUFFRCw2QkFBUyxHQUFULFVBQVUsTUFBYSxFQUFFLElBQTBCO1FBQXpDLHVCQUFBLEVBQUEsYUFBYTtRQUNyQixhQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsOEJBQVUsR0FBVixVQUFXLE9BQWMsRUFBRSxJQUEwQjtRQUExQyx3QkFBQSxFQUFBLGNBQWM7UUFDdkIsY0FBYyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQWpQRCxDQUNrQyxXQUFXLEdBZ1A1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Hcm91cCBhcyBOZ0Zvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIGlzT2JzZXJ2YWJsZSxcbiAgT2JzZXJ2YWJsZSxcbiAgU3ViamVjdCxcbiAgU3Vic2NyaXB0aW9uXG59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBjb250cm9sRGlzYWJsZWQkLFxuICBjb250cm9sRGlzYWJsZWRXaGlsZSxcbiAgY29udHJvbEVuYWJsZWQkLFxuICBjb250cm9sRW5hYmxlZFdoaWxlLFxuICBjb250cm9sRXJyb3JDaGFuZ2VzJCxcbiAgY29udHJvbFN0YXR1c0NoYW5nZXMkLFxuICBjb250cm9sVmFsdWVDaGFuZ2VzJCxcbiAgZGlzYWJsZUNvbnRyb2wsXG4gIGVuYWJsZUNvbnRyb2wsXG4gIGhhc0Vycm9yQW5kRGlydHksXG4gIGhhc0Vycm9yQW5kVG91Y2hlZCxcbiAgbWFya0FsbERpcnR5LFxuICBtZXJnZUNvbnRyb2xWYWxpZGF0b3JzLFxuICBzZWxlY3RDb250cm9sVmFsdWUkLFxuICB2YWxpZGF0ZUNvbnRyb2xPblxufSBmcm9tICcuL2NvbnRyb2wtYWN0aW9ucyc7XG5pbXBvcnQge1xuICBBYnN0cmFjdENvbnRyb2wsXG4gIEFzeW5jVmFsaWRhdG9yLFxuICBDb250cm9sRXZlbnRPcHRpb25zLFxuICBDb250cm9sT3B0aW9ucyxcbiAgQ29udHJvbFN0YXRlLFxuICBFbWl0RXZlbnQsXG4gIEV4dHJhY3RBYnN0cmFjdENvbnRyb2wsXG4gIEV4dHJhY3RTdHJpbmdzLFxuICBLZXlWYWx1ZUNvbnRyb2xzLFxuICBPYmosXG4gIE9ubHlTZWxmLFxuICBWYWxpZGF0b3IsXG4gIFZhbGlkYXRvck9yT3B0cyxcbiAgQ29udHJvbHNWYWx1ZSxcbiAgQ29udHJvbHNPZlZhbHVlXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgY29lcmNlQXJyYXkgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IEZvcm1BcnJheSB9IGZyb20gJy4vZm9ybUFycmF5JztcblxuZXhwb3J0IGNsYXNzIEZvcm1Hcm91cDxUIGV4dGVuZHMgT2JqID0gYW55LFxuICBFIGV4dGVuZHMgb2JqZWN0ID0gYW55PiBleHRlbmRzIE5nRm9ybUdyb3VwIHtcbiAgcmVhZG9ubHkgdmFsdWU6IENvbnRyb2xzVmFsdWU8VD47XG4gIHJlYWRvbmx5IGVycm9yczogRSB8IG51bGw7XG4gIHJlYWRvbmx5IHZhbHVlQ2hhbmdlczogT2JzZXJ2YWJsZTxDb250cm9sc1ZhbHVlPFQ+PjtcbiAgcmVhZG9ubHkgc3RhdHVzOiBDb250cm9sU3RhdGU7XG4gIHJlYWRvbmx5IHN0YXR1c0NoYW5nZXM6IE9ic2VydmFibGU8Q29udHJvbFN0YXRlPjtcblxuICBwcml2YXRlIHRvdWNoQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgZGlydHlDaGFuZ2VzID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICB0b3VjaCQgPSB0aGlzLnRvdWNoQ2hhbmdlcy5hc09ic2VydmFibGUoKS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICBkaXJ0eSQgPSB0aGlzLmRpcnR5Q2hhbmdlcy5hc09ic2VydmFibGUoKS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuXG4gIHJlYWRvbmx5IHZhbHVlJCA9IGNvbnRyb2xWYWx1ZUNoYW5nZXMkPENvbnRyb2xzVmFsdWU8VD4+KHRoaXMpO1xuICByZWFkb25seSBkaXNhYmxlZCQgPSBjb250cm9sRGlzYWJsZWQkPENvbnRyb2xzVmFsdWU8VD4+KHRoaXMpO1xuICByZWFkb25seSBlbmFibGVkJCA9IGNvbnRyb2xFbmFibGVkJDxDb250cm9sc1ZhbHVlPFQ+Pih0aGlzKTtcbiAgcmVhZG9ubHkgc3RhdHVzJCA9IGNvbnRyb2xTdGF0dXNDaGFuZ2VzJDxDb250cm9sc1ZhbHVlPFQ+Pih0aGlzKTtcbiAgcmVhZG9ubHkgZXJyb3JzJCA9IGNvbnRyb2xFcnJvckNoYW5nZXMkPEU+KHRoaXMpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb250cm9sczogQ29udHJvbHNPZlZhbHVlPFQ+LCB2YWxpZGF0b3JPck9wdHM/OiBWYWxpZGF0b3JPck9wdHMsIGFzeW5jVmFsaWRhdG9yPzogQXN5bmNWYWxpZGF0b3IpIHtcbiAgICBzdXBlcihjb250cm9scywgdmFsaWRhdG9yT3JPcHRzLCBhc3luY1ZhbGlkYXRvcik7XG4gIH1cblxuICBzZWxlY3Q8Uj4obWFwRm46IChzdGF0ZTogQ29udHJvbHNWYWx1ZTxUPikgPT4gUik6IE9ic2VydmFibGU8Uj4ge1xuICAgIHJldHVybiBzZWxlY3RDb250cm9sVmFsdWUkKHRoaXMsIG1hcEZuKTtcbiAgfVxuXG4gIGdldFJhd1ZhbHVlKCk6IENvbnRyb2xzVmFsdWU8VD4ge1xuICAgIHJldHVybiBzdXBlci5nZXRSYXdWYWx1ZSgpO1xuICB9XG5cbiAgZ2V0PEsxIGV4dGVuZHMga2V5b2YgQ29udHJvbHNWYWx1ZTxUPj4ocGF0aD86IFtLMV0pOiBDb250cm9sc09mVmFsdWU8VD5bSzFdO1xuICBnZXQ8SzEgZXh0ZW5kcyBrZXlvZiBDb250cm9sc1ZhbHVlPFQ+LFxuICAgIEsyIGV4dGVuZHMgKENvbnRyb2xzT2ZWYWx1ZTxUPltLMV0gZXh0ZW5kcyBGb3JtR3JvdXAgfCBGb3JtQXJyYXkgPyBrZXlvZiBDb250cm9sc09mVmFsdWU8VD5bSzFdWydjb250cm9scyddIDogbmV2ZXIpPihwYXRoPzogW0sxLCBLMl0pOiBDb250cm9sc09mVmFsdWU8VD5bSzFdIGV4dGVuZHMgRm9ybUdyb3VwIHwgRm9ybUFycmF5XG4gICAgPyBDb250cm9sc09mVmFsdWU8VD5bSzFdWydjb250cm9scyddW0syXVxuICAgIDogbmV2ZXI7XG4gIGdldDxLMSBleHRlbmRzIGtleW9mIENvbnRyb2xzVmFsdWU8VD4sXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBDb250cm9sc1ZhbHVlPFQ+W0sxXT4ocGF0aD86IFtLMSwgSzJdKTogQWJzdHJhY3RDb250cm9sPENvbnRyb2xzVmFsdWU8VD5bSzFdW0syXT47XG4gIGdldDxLMSBleHRlbmRzIGtleW9mIENvbnRyb2xzVmFsdWU8VD4sXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBDb250cm9sc1ZhbHVlPFQ+W0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIENvbnRyb2xzVmFsdWU8VD5bSzFdW0syXSxcbiAgICA+KHBhdGg/OiBbSzEsIEsyLCBLM10pOiBBYnN0cmFjdENvbnRyb2w8Q29udHJvbHNWYWx1ZTxUPltLMV1bSzJdW0szXT47XG4gIGdldChwYXRoPzogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPiB8IHN0cmluZyk6IEFic3RyYWN0Q29udHJvbDtcbiAgZ2V0KHBhdGg6IEFycmF5PHN0cmluZyB8IG51bWJlcj4gfCBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0KHBhdGgpO1xuICB9XG5cbiAgZ2V0Q29udHJvbDxQMSBleHRlbmRzIGtleW9mIENvbnRyb2xzVmFsdWU8VD4+KHBhdGg/OiBQMSk6IENvbnRyb2xzT2ZWYWx1ZTxUPltQMV07XG4gIGdldENvbnRyb2w8UDEgZXh0ZW5kcyBrZXlvZiBDb250cm9sc1ZhbHVlPFQ+LFxuICAgIFAyIGV4dGVuZHMgKENvbnRyb2xzT2ZWYWx1ZTxUPltQMV0gZXh0ZW5kcyBGb3JtR3JvdXAgfCBGb3JtQXJyYXkgPyBrZXlvZiBDb250cm9sc09mVmFsdWU8VD5bUDFdWydjb250cm9scyddIDogbmV2ZXIpPihcbiAgICBwcm9wMTogUDEsXG4gICAgcHJvcDI6IFAyLFxuICApOiBDb250cm9sc09mVmFsdWU8VD5bUDFdIGV4dGVuZHMgRm9ybUdyb3VwIHwgRm9ybUFycmF5XG4gICAgPyBDb250cm9sc09mVmFsdWU8VD5bUDFdWydjb250cm9scyddW1AyXVxuICAgIDogbmV2ZXI7XG4gIGdldENvbnRyb2w8UDEgZXh0ZW5kcyBrZXlvZiBDb250cm9sc1ZhbHVlPFQ+LFxuICAgIFAyIGV4dGVuZHMga2V5b2YgQ29udHJvbHNWYWx1ZTxUPltQMV0+KFxuICAgIHByb3AxOiBQMSxcbiAgICBwcm9wMjogUDIsXG4gICk6IEFic3RyYWN0Q29udHJvbDxDb250cm9sc1ZhbHVlPFQ+W1AxXVtQMl0+O1xuICBnZXRDb250cm9sPFAxIGV4dGVuZHMga2V5b2YgQ29udHJvbHNWYWx1ZTxUPixcbiAgICBQMiBleHRlbmRzIGtleW9mIENvbnRyb2xzVmFsdWU8VD5bUDFdLFxuICAgIFAzIGV4dGVuZHMga2V5b2YgQ29udHJvbHNWYWx1ZTxUPltQMV1bUDJdLFxuICAgID4oXG4gICAgcHJvcDE6IFAxLFxuICAgIHByb3AyOiBQMixcbiAgICBwcm9wMzogUDMsXG4gICk6IEFic3RyYWN0Q29udHJvbDxDb250cm9sc1ZhbHVlPFQ+W1AxXVtQMl1bUDNdPjtcbiAgZ2V0Q29udHJvbChwYXRoPzogc3RyaW5nKTogQWJzdHJhY3RDb250cm9sO1xuICBnZXRDb250cm9sKC4uLm5hbWVzOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+KTogQWJzdHJhY3RDb250cm9sPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmdldChuYW1lcyk7XG4gIH1cblxuICBhZGRDb250cm9sPEsgZXh0ZW5kcyBFeHRyYWN0U3RyaW5nczxUPj4obmFtZTogSywgY29udHJvbDogQ29udHJvbHNPZlZhbHVlPFQ+W0tdKTogdm9pZCB7XG4gICAgc3VwZXIuYWRkQ29udHJvbChuYW1lLCBjb250cm9sKTtcbiAgfVxuXG4gIHJlbW92ZUNvbnRyb2wobmFtZTogRXh0cmFjdFN0cmluZ3M8VD4pOiB2b2lkIHtcbiAgICBzdXBlci5yZW1vdmVDb250cm9sKG5hbWUpO1xuICB9XG5cbiAgY29udGFpbnMoY29udHJvbE5hbWU6IEV4dHJhY3RTdHJpbmdzPFQ+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHN1cGVyLmNvbnRhaW5zKGNvbnRyb2xOYW1lKTtcbiAgfVxuXG4gIHNldENvbnRyb2w8SyBleHRlbmRzIEV4dHJhY3RTdHJpbmdzPFQ+PihuYW1lOiBLLCBjb250cm9sOiBDb250cm9sc09mVmFsdWU8VD5bS10pOiB2b2lkIHtcbiAgICBzdXBlci5zZXRDb250cm9sKG5hbWUsIGNvbnRyb2wpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWVPck9ic2VydmFibGU6IE9ic2VydmFibGU8Q29udHJvbHNWYWx1ZTxUPj4sIG9wdGlvbnM/OiBDb250cm9sRXZlbnRPcHRpb25zKTogU3Vic2NyaXB0aW9uO1xuICBzZXRWYWx1ZSh2YWx1ZU9yT2JzZXJ2YWJsZTogQ29udHJvbHNWYWx1ZTxUPiwgb3B0aW9ucz86IENvbnRyb2xFdmVudE9wdGlvbnMpOiB2b2lkO1xuICBzZXRWYWx1ZSh2YWx1ZU9yT2JzZXJ2YWJsZTogYW55LCBvcHRpb25zPzogQ29udHJvbEV2ZW50T3B0aW9ucyk6IGFueSB7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZSh2YWx1ZU9yT2JzZXJ2YWJsZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZU9yT2JzZXJ2YWJsZS5zdWJzY3JpYmUodmFsdWUgPT4gc3VwZXIuc2V0VmFsdWUodmFsdWUsIG9wdGlvbnMpKTtcbiAgICB9XG5cbiAgICBzdXBlci5zZXRWYWx1ZSh2YWx1ZU9yT2JzZXJ2YWJsZSwgb3B0aW9ucyk7XG4gIH1cblxuICBwYXRjaFZhbHVlKHZhbHVlT3JPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFBhcnRpYWw8Q29udHJvbHNWYWx1ZTxUPj4+LCBvcHRpb25zPzogQ29udHJvbEV2ZW50T3B0aW9ucyk6IFN1YnNjcmlwdGlvbjtcbiAgcGF0Y2hWYWx1ZSh2YWx1ZU9yT2JzZXJ2YWJsZTogUGFydGlhbDxDb250cm9sc1ZhbHVlPFQ+Piwgb3B0aW9ucz86IENvbnRyb2xFdmVudE9wdGlvbnMpOiB2b2lkO1xuICBwYXRjaFZhbHVlKHZhbHVlT3JPYnNlcnZhYmxlOiBhbnksIG9wdGlvbnM/OiBDb250cm9sRXZlbnRPcHRpb25zKTogU3Vic2NyaXB0aW9uIHwgdm9pZCB7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZSh2YWx1ZU9yT2JzZXJ2YWJsZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZU9yT2JzZXJ2YWJsZS5zdWJzY3JpYmUodmFsdWUgPT4gc3VwZXIucGF0Y2hWYWx1ZSh2YWx1ZSwgb3B0aW9ucykpO1xuICAgIH1cblxuICAgIHN1cGVyLnBhdGNoVmFsdWUodmFsdWVPck9ic2VydmFibGUsIG9wdGlvbnMpO1xuICB9XG5cbiAgZGlzYWJsZWRXaGlsZShvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGJvb2xlYW4+LCBvcHRpb25zPzogQ29udHJvbE9wdGlvbnMpIHtcbiAgICByZXR1cm4gY29udHJvbERpc2FibGVkV2hpbGUodGhpcywgb2JzZXJ2YWJsZSwgb3B0aW9ucyk7XG4gIH1cblxuICBlbmFibGVkV2hpbGUob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxib29sZWFuPiwgb3B0aW9ucz86IENvbnRyb2xPcHRpb25zKSB7XG4gICAgcmV0dXJuIGNvbnRyb2xFbmFibGVkV2hpbGUodGhpcywgb2JzZXJ2YWJsZSwgb3B0aW9ucyk7XG4gIH1cblxuICBtZXJnZVZhbGlkYXRvcnModmFsaWRhdG9yczogVmFsaWRhdG9yKSB7XG4gICAgbWVyZ2VDb250cm9sVmFsaWRhdG9ycyh0aGlzLCB2YWxpZGF0b3JzKTtcbiAgfVxuXG4gIG1lcmdlQXN5bmNWYWxpZGF0b3JzKHZhbGlkYXRvcnM6IEFzeW5jVmFsaWRhdG9yKSB7XG4gICAgdGhpcy5zZXRBc3luY1ZhbGlkYXRvcnMoW3RoaXMuYXN5bmNWYWxpZGF0b3IsIC4uLmNvZXJjZUFycmF5KHZhbGlkYXRvcnMpXSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gIH1cblxuICBtYXJrQXNUb3VjaGVkKG9wdHM/OiBPbmx5U2VsZik6IHZvaWQge1xuICAgIHN1cGVyLm1hcmtBc1RvdWNoZWQob3B0cyk7XG4gICAgdGhpcy50b3VjaENoYW5nZXMubmV4dCh0cnVlKTtcbiAgfVxuXG4gIG1hcmtBc1VudG91Y2hlZChvcHRzPzogT25seVNlbGYpOiB2b2lkIHtcbiAgICBzdXBlci5tYXJrQXNVbnRvdWNoZWQob3B0cyk7XG4gICAgdGhpcy50b3VjaENoYW5nZXMubmV4dChmYWxzZSk7XG4gIH1cblxuICBtYXJrQXNQcmlzdGluZShvcHRzPzogT25seVNlbGYpOiB2b2lkIHtcbiAgICBzdXBlci5tYXJrQXNQcmlzdGluZShvcHRzKTtcbiAgICB0aGlzLmRpcnR5Q2hhbmdlcy5uZXh0KGZhbHNlKTtcbiAgfVxuXG4gIG1hcmtBc0RpcnR5KG9wdHM/OiBPbmx5U2VsZik6IHZvaWQge1xuICAgIHN1cGVyLm1hcmtBc0RpcnR5KG9wdHMpO1xuICAgIHRoaXMuZGlydHlDaGFuZ2VzLm5leHQodHJ1ZSk7XG4gIH1cblxuICBtYXJrQWxsQXNEaXJ0eSgpOiB2b2lkIHtcbiAgICBtYXJrQWxsRGlydHkodGhpcyk7XG4gIH1cblxuICByZXNldChmb3JtU3RhdGU/OiBQYXJ0aWFsPENvbnRyb2xzVmFsdWU8VD4+LCBvcHRpb25zPzogQ29udHJvbEV2ZW50T3B0aW9ucyk6IHZvaWQge1xuICAgIHN1cGVyLnJlc2V0KGZvcm1TdGF0ZSwgb3B0aW9ucyk7XG4gIH1cblxuICBzZXRWYWxpZGF0b3JzKG5ld1ZhbGlkYXRvcjogVmFsaWRhdG9yKTogdm9pZCB7XG4gICAgc3VwZXIuc2V0VmFsaWRhdG9ycyhuZXdWYWxpZGF0b3IpO1xuICAgIHN1cGVyLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgfVxuXG4gIHNldEFzeW5jVmFsaWRhdG9ycyhuZXdWYWxpZGF0b3I6IEFzeW5jVmFsaWRhdG9yKTogdm9pZCB7XG4gICAgc3VwZXIuc2V0QXN5bmNWYWxpZGF0b3JzKG5ld1ZhbGlkYXRvcik7XG4gICAgc3VwZXIudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICB9XG5cbiAgdmFsaWRhdGVPbihvYnNlcnZhYmxlVmFsaWRhdGlvbjogT2JzZXJ2YWJsZTxudWxsIHwgb2JqZWN0Pikge1xuICAgIHJldHVybiB2YWxpZGF0ZUNvbnRyb2xPbih0aGlzLCBvYnNlcnZhYmxlVmFsaWRhdGlvbik7XG4gIH1cblxuICBoYXNFcnJvcjxLMSBleHRlbmRzIGtleW9mIENvbnRyb2xzVmFsdWU8VD4+KGVycm9yQ29kZTogRXh0cmFjdFN0cmluZ3M8RT4sIHBhdGg/OiBbSzFdKTogYm9vbGVhbjtcbiAgaGFzRXJyb3I8SzEgZXh0ZW5kcyBrZXlvZiBDb250cm9sc1ZhbHVlPFQ+LCBLMiBleHRlbmRzIGtleW9mIENvbnRyb2xzVmFsdWU8VD5bSzFdPihcbiAgICBlcnJvckNvZGU6IEV4dHJhY3RTdHJpbmdzPEU+LFxuICAgIHBhdGg/OiBbSzEsIEsyXVxuICApOiBib29sZWFuO1xuICBoYXNFcnJvcjxLMSBleHRlbmRzIGtleW9mIENvbnRyb2xzVmFsdWU8VD4sXG4gICAgSzIgZXh0ZW5kcyBrZXlvZiBDb250cm9sc1ZhbHVlPFQ+W0sxXSxcbiAgICBLMyBleHRlbmRzIGtleW9mIENvbnRyb2xzVmFsdWU8VD5bSzFdW0syXT4oZXJyb3JDb2RlOiBFeHRyYWN0U3RyaW5nczxFPiwgcGF0aD86IFtLMSwgSzIsIEszXSk6IGJvb2xlYW47XG4gIGhhc0Vycm9yKGVycm9yQ29kZTogRXh0cmFjdFN0cmluZ3M8RT4sIHBhdGg/OiBzdHJpbmcpOiBib29sZWFuO1xuICBoYXNFcnJvcihlcnJvckNvZGU6IEV4dHJhY3RTdHJpbmdzPEU+LCBwYXRoPzogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHN1cGVyLmhhc0Vycm9yKGVycm9yQ29kZSwgcGF0aCk7XG4gIH1cblxuICBzZXRFcnJvcnMoZXJyb3JzOiBQYXJ0aWFsPEU+IHwgbnVsbCwgb3B0czogRW1pdEV2ZW50ID0ge30pIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0RXJyb3JzKGVycm9ycywgb3B0cyk7XG4gIH1cblxuICBnZXRFcnJvcjxLIGV4dGVuZHMga2V5b2YgRSwgSzEgZXh0ZW5kcyBrZXlvZiBDb250cm9sc1ZhbHVlPFQ+PihlcnJvckNvZGU6IEssIHBhdGg/OiBbSzFdKTogRVtLXSB8IG51bGw7XG4gIGdldEVycm9yPEsgZXh0ZW5kcyBrZXlvZiBFLCBLMSBleHRlbmRzIGtleW9mIENvbnRyb2xzVmFsdWU8VD4sIEsyIGV4dGVuZHMga2V5b2YgQ29udHJvbHNWYWx1ZTxUPltLMV0+KFxuICAgIGVycm9yQ29kZTogSyxcbiAgICBwYXRoPzogW0sxLCBLMl1cbiAgKTogRVtLXSB8IG51bGw7XG4gIGdldEVycm9yPEsgZXh0ZW5kcyBrZXlvZiBFLFxuICAgIEsxIGV4dGVuZHMga2V5b2YgQ29udHJvbHNWYWx1ZTxUPixcbiAgICBLMiBleHRlbmRzIGtleW9mIENvbnRyb2xzVmFsdWU8VD5bSzFdLFxuICAgIEszIGV4dGVuZHMga2V5b2YgQ29udHJvbHNWYWx1ZTxUPltLMV1bSzJdPihlcnJvckNvZGU6IEssIHBhdGg/OiBbSzEsIEsyLCBLM10pOiBFW0tdIHwgbnVsbDtcbiAgZ2V0RXJyb3I8SyBleHRlbmRzIGtleW9mIEU+KGVycm9yQ29kZTogSywgcGF0aD86IHN0cmluZyk6IEVbS10gfCBudWxsO1xuICBnZXRFcnJvcjxLIGV4dGVuZHMga2V5b2YgRT4oZXJyb3JDb2RlOiBLLCBwYXRoPzogYW55KTogRVtLXSB8IG51bGwge1xuICAgIHJldHVybiBzdXBlci5nZXRFcnJvcihlcnJvckNvZGUgYXMgYW55LCBwYXRoKSBhcyBFW0tdIHwgbnVsbDtcbiAgfVxuXG4gIGhhc0Vycm9yQW5kVG91Y2hlZDxQMSBleHRlbmRzIGtleW9mIENvbnRyb2xzVmFsdWU8VD4+KGVycm9yOiBFeHRyYWN0U3RyaW5nczxFPiwgcHJvcDE/OiBQMSk6IGJvb2xlYW47XG4gIGhhc0Vycm9yQW5kVG91Y2hlZDxQMSBleHRlbmRzIGtleW9mIENvbnRyb2xzVmFsdWU8VD4sIFAyIGV4dGVuZHMga2V5b2YgQ29udHJvbHNWYWx1ZTxUPltQMV0+KFxuICAgIGVycm9yOiBFeHRyYWN0U3RyaW5nczxFPixcbiAgICBwcm9wMT86IFAxLFxuICAgIHByb3AyPzogUDJcbiAgKTogYm9vbGVhbjtcbiAgaGFzRXJyb3JBbmRUb3VjaGVkPFAxIGV4dGVuZHMga2V5b2YgQ29udHJvbHNWYWx1ZTxUPixcbiAgICBQMiBleHRlbmRzIGtleW9mIENvbnRyb2xzVmFsdWU8VD5bUDFdLFxuICAgIFAzIGV4dGVuZHMga2V5b2YgQ29udHJvbHNWYWx1ZTxUPltQMV1bUDJdPihlcnJvcjogRXh0cmFjdFN0cmluZ3M8RT4sIHByb3AxPzogUDEsIHByb3AyPzogUDIsIHByb3AzPzogUDMpOiBib29sZWFuO1xuICBoYXNFcnJvckFuZFRvdWNoZWQ8UDEgZXh0ZW5kcyBrZXlvZiBDb250cm9sc1ZhbHVlPFQ+LFxuICAgIFAyIGV4dGVuZHMga2V5b2YgQ29udHJvbHNWYWx1ZTxUPltQMV0sXG4gICAgUDMgZXh0ZW5kcyBrZXlvZiBDb250cm9sc1ZhbHVlPFQ+W1AxXVtQMl0sXG4gICAgUDQgZXh0ZW5kcyBrZXlvZiBDb250cm9sc1ZhbHVlPFQ+W1AxXVtQMl1bUDNdPihlcnJvcjogRXh0cmFjdFN0cmluZ3M8RT4sIHByb3AxPzogUDEsIHByb3AyPzogUDIsIHByb3AzPzogUDMsIHByb3A0PzogUDQpOiBib29sZWFuO1xuICBoYXNFcnJvckFuZFRvdWNoZWQoZXJyb3I6IGFueSwgLi4ucGF0aDogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGhhc0Vycm9yQW5kVG91Y2hlZCh0aGlzLCBlcnJvciwgLi4ucGF0aCk7XG4gIH1cblxuICBoYXNFcnJvckFuZERpcnR5PFAxIGV4dGVuZHMga2V5b2YgQ29udHJvbHNWYWx1ZTxUPj4oZXJyb3I6IEV4dHJhY3RTdHJpbmdzPEU+LCBwcm9wMT86IFAxKTogYm9vbGVhbjtcbiAgaGFzRXJyb3JBbmREaXJ0eTxQMSBleHRlbmRzIGtleW9mIENvbnRyb2xzVmFsdWU8VD4sIFAyIGV4dGVuZHMga2V5b2YgQ29udHJvbHNWYWx1ZTxUPltQMV0+KFxuICAgIGVycm9yOiBFeHRyYWN0U3RyaW5nczxFPixcbiAgICBwcm9wMT86IFAxLFxuICAgIHByb3AyPzogUDJcbiAgKTogYm9vbGVhbjtcbiAgaGFzRXJyb3JBbmREaXJ0eTxQMSBleHRlbmRzIGtleW9mIENvbnRyb2xzVmFsdWU8VD4sXG4gICAgUDIgZXh0ZW5kcyBrZXlvZiBDb250cm9sc1ZhbHVlPFQ+W1AxXSxcbiAgICBQMyBleHRlbmRzIGtleW9mIENvbnRyb2xzVmFsdWU8VD5bUDFdW1AyXT4oZXJyb3I6IEV4dHJhY3RTdHJpbmdzPEU+LCBwcm9wMT86IFAxLCBwcm9wMj86IFAyLCBwcm9wMz86IFAzKTogYm9vbGVhbjtcbiAgaGFzRXJyb3JBbmREaXJ0eTxQMSBleHRlbmRzIGtleW9mIENvbnRyb2xzVmFsdWU8VD4sXG4gICAgUDIgZXh0ZW5kcyBrZXlvZiBDb250cm9sc1ZhbHVlPFQ+W1AxXSxcbiAgICBQMyBleHRlbmRzIGtleW9mIENvbnRyb2xzVmFsdWU8VD5bUDFdW1AyXSxcbiAgICBQNCBleHRlbmRzIGtleW9mIENvbnRyb2xzVmFsdWU8VD5bUDFdW1AyXVtQM10+KGVycm9yOiBFeHRyYWN0U3RyaW5nczxFPiwgcHJvcDE/OiBQMSwgcHJvcDI/OiBQMiwgcHJvcDM/OiBQMywgcHJvcDQ/OiBQNCk6IGJvb2xlYW47XG4gIGhhc0Vycm9yQW5kRGlydHkoZXJyb3I6IGFueSwgLi4ucGF0aDogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGhhc0Vycm9yQW5kRGlydHkodGhpcywgZXJyb3IsIC4uLnBhdGgpO1xuICB9XG5cbiAgc2V0RW5hYmxlKGVuYWJsZSA9IHRydWUsIG9wdHM/OiBDb250cm9sRXZlbnRPcHRpb25zKSB7XG4gICAgZW5hYmxlQ29udHJvbCh0aGlzLCBlbmFibGUsIG9wdHMpO1xuICB9XG5cbiAgc2V0RGlzYWJsZShkaXNhYmxlID0gdHJ1ZSwgb3B0cz86IENvbnRyb2xFdmVudE9wdGlvbnMpIHtcbiAgICBkaXNhYmxlQ29udHJvbCh0aGlzLCBkaXNhYmxlLCBvcHRzKTtcbiAgfVxufVxuIl19
