import { __extends, __read, __spread } from 'tslib';
import { FormArray as NgFormArray } from '@angular/forms';
import { isObservable, Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
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
  mergeControlValidators
} from './control-actions';
import { coerceArray } from './utils';
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
})(NgFormArray);
export { FormArray };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybUFycmF5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nbmVhdC9yZWFjdGl2ZS1mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9mb3JtQXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLElBQUksV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUQsT0FBTyxFQUNMLFlBQVksRUFFWixPQUFPLEVBRVIsTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLEdBQUcsRUFDSixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsb0JBQW9CLEVBQ3BCLGVBQWUsRUFDZixtQkFBbUIsRUFDbkIsb0JBQW9CLEVBQ3BCLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsY0FBYyxFQUNkLGFBQWEsRUFDYixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixzQkFBc0IsRUFDdkIsTUFBTSxtQkFBbUIsQ0FBQztBQWUzQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRXRDO0lBQWdFLDZCQUFXO0lBbUJ6RSxtQkFDUyxRQUFrQyxFQUN6QyxlQUFpQyxFQUNqQyxjQUErQjtRQUhqQyxZQUtFLGtCQUFNLFFBQVEsRUFBRSxlQUFlLEVBQUUsY0FBYyxDQUFDLFNBQ2pEO1FBTFEsY0FBUSxHQUFSLFFBQVEsQ0FBMEI7UUFibkMsa0JBQVksR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQ3RDLGtCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUVyQyxZQUFNLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLFlBQU0sR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENB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MUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtQXJyYXkgYXMgTmdGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBpc09ic2VydmFibGUsXG4gIE9ic2VydmFibGUsXG4gIFN1YmplY3QsXG4gIFN1YnNjcmlwdGlvblxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBtYXBcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgY29udHJvbERpc2FibGVkJCxcbiAgY29udHJvbERpc2FibGVkV2hpbGUsXG4gIGNvbnRyb2xFbmFibGVkJCxcbiAgY29udHJvbEVuYWJsZWRXaGlsZSxcbiAgY29udHJvbEVycm9yQ2hhbmdlcyQsXG4gIGNvbnRyb2xTdGF0dXNDaGFuZ2VzJCxcbiAgY29udHJvbFZhbHVlQ2hhbmdlcyQsXG4gIGRpc2FibGVDb250cm9sLFxuICBlbmFibGVDb250cm9sLFxuICBoYXNFcnJvckFuZERpcnR5LFxuICBoYXNFcnJvckFuZFRvdWNoZWQsXG4gIG1hcmtBbGxEaXJ0eSxcbiAgbWVyZ2VDb250cm9sVmFsaWRhdG9yc1xufSBmcm9tICcuL2NvbnRyb2wtYWN0aW9ucyc7XG5pbXBvcnQge1xuICBBc3luY1ZhbGlkYXRvcixcbiAgQ29udHJvbEV2ZW50T3B0aW9ucyxcbiAgQ29udHJvbE9wdGlvbnMsXG4gIENvbnRyb2xQYXRoLFxuICBDb250cm9sU3RhdGUsXG4gIEVtaXRFdmVudCxcbiAgRXh0cmFjdFN0cmluZ3MsXG4gIE9ubHlTZWxmLFxuICBWYWxpZGF0b3IsXG4gIFZhbGlkYXRvck9yT3B0cyxcbiAgQ29udHJvbFZhbHVlLFxuICBDb250cm9sT2ZWYWx1ZVxufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGNvZXJjZUFycmF5IH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBGb3JtQXJyYXk8VCA9IGFueSwgRSBleHRlbmRzIG9iamVjdCA9IGFueT4gZXh0ZW5kcyBOZ0Zvcm1BcnJheSB7XG4gIHJlYWRvbmx5IHZhbHVlOiBDb250cm9sVmFsdWU8VD5bXTtcbiAgcmVhZG9ubHkgdmFsdWVDaGFuZ2VzOiBPYnNlcnZhYmxlPENvbnRyb2xWYWx1ZTxUPltdPjtcbiAgcmVhZG9ubHkgc3RhdHVzOiBDb250cm9sU3RhdGU7XG4gIHJlYWRvbmx5IHN0YXR1c0NoYW5nZXM6IE9ic2VydmFibGU8Q29udHJvbFN0YXRlPjtcbiAgcmVhZG9ubHkgZXJyb3JzOiBFIHwgbnVsbDtcblxuICBwcml2YXRlIHRvdWNoQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgZGlydHlDaGFuZ2VzID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICByZWFkb25seSB0b3VjaCQgPSB0aGlzLnRvdWNoQ2hhbmdlcy5hc09ic2VydmFibGUoKS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICByZWFkb25seSBkaXJ0eSQgPSB0aGlzLmRpcnR5Q2hhbmdlcy5hc09ic2VydmFibGUoKS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuXG4gIHJlYWRvbmx5IHZhbHVlJCA9IGNvbnRyb2xWYWx1ZUNoYW5nZXMkPENvbnRyb2xWYWx1ZTxUPltdPih0aGlzKTtcbiAgcmVhZG9ubHkgZGlzYWJsZWQkID0gY29udHJvbERpc2FibGVkJCh0aGlzKTtcbiAgcmVhZG9ubHkgZW5hYmxlZCQgPSBjb250cm9sRW5hYmxlZCQodGhpcyk7XG4gIHJlYWRvbmx5IHN0YXR1cyQgPSBjb250cm9sU3RhdHVzQ2hhbmdlcyQodGhpcyk7XG4gIHJlYWRvbmx5IGVycm9ycyQgPSBjb250cm9sRXJyb3JDaGFuZ2VzJDxFPih0aGlzKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29udHJvbHM6IEFycmF5PENvbnRyb2xPZlZhbHVlPFQ+PixcbiAgICB2YWxpZGF0b3JPck9wdHM/OiBWYWxpZGF0b3JPck9wdHMsXG4gICAgYXN5bmNWYWxpZGF0b3I/OiBBc3luY1ZhbGlkYXRvclxuICApIHtcbiAgICBzdXBlcihjb250cm9scywgdmFsaWRhdG9yT3JPcHRzLCBhc3luY1ZhbGlkYXRvcik7XG4gIH1cblxuICBzZWxlY3Q8Uj4obWFwRm46IChzdGF0ZTogQ29udHJvbFZhbHVlPFQ+W10pID0+IFIpOiBPYnNlcnZhYmxlPFI+IHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSQucGlwZShtYXAobWFwRm4pLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgfVxuXG4gIGdldFJhd1ZhbHVlKCk6IENvbnRyb2xWYWx1ZTxUPltdIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0UmF3VmFsdWUoKTtcbiAgfVxuXG4gIGF0KGluZGV4OiBudW1iZXIpOiBDb250cm9sT2ZWYWx1ZTxUPiB7XG4gICAgcmV0dXJuIHN1cGVyLmF0KGluZGV4KSBhcyBDb250cm9sT2ZWYWx1ZTxUPjtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlT3JPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPENvbnRyb2xWYWx1ZTxUPltdPiwgb3B0aW9ucz86IENvbnRyb2xFdmVudE9wdGlvbnMpOiBTdWJzY3JpcHRpb247XG4gIHNldFZhbHVlKHZhbHVlT3JPYnNlcnZhYmxlOiBDb250cm9sVmFsdWU8VD5bXSwgb3B0aW9ucz86IENvbnRyb2xFdmVudE9wdGlvbnMpOiB2b2lkO1xuICBzZXRWYWx1ZSh2YWx1ZU9yT2JzZXJ2YWJsZTogQ29udHJvbFZhbHVlPFQ+W10gfCBPYnNlcnZhYmxlPENvbnRyb2xWYWx1ZTxUPltdPiwgb3B0aW9ucz86IENvbnRyb2xFdmVudE9wdGlvbnMpOiBTdWJzY3JpcHRpb24gfCB2b2lkIHtcbiAgICBpZiAoaXNPYnNlcnZhYmxlKHZhbHVlT3JPYnNlcnZhYmxlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlT3JPYnNlcnZhYmxlLnN1YnNjcmliZSh2YWx1ZSA9PiBzdXBlci5zZXRWYWx1ZSh2YWx1ZSwgb3B0aW9ucykpO1xuICAgIH1cblxuICAgIHN1cGVyLnNldFZhbHVlKHZhbHVlT3JPYnNlcnZhYmxlLCBvcHRpb25zKTtcbiAgfVxuXG4gIHBhdGNoVmFsdWUodmFsdWVPck9ic2VydmFibGU6IE9ic2VydmFibGU8UGFydGlhbDxDb250cm9sVmFsdWU8VD4+W10+LCBvcHRpb25zPzogQ29udHJvbEV2ZW50T3B0aW9ucyk6IFN1YnNjcmlwdGlvbjtcbiAgcGF0Y2hWYWx1ZSh2YWx1ZU9yT2JzZXJ2YWJsZTogUGFydGlhbDxDb250cm9sVmFsdWU8VD4+W10sIG9wdGlvbnM/OiBDb250cm9sRXZlbnRPcHRpb25zKTogdm9pZDtcbiAgcGF0Y2hWYWx1ZSh2YWx1ZU9yT2JzZXJ2YWJsZTogYW55LCBvcHRpb25zPzogQ29udHJvbEV2ZW50T3B0aW9ucyk6IFN1YnNjcmlwdGlvbiB8IHZvaWQge1xuICAgIGlmIChpc09ic2VydmFibGUodmFsdWVPck9ic2VydmFibGUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVPck9ic2VydmFibGUuc3Vic2NyaWJlKCh2YWx1ZTogVFtdKSA9PiBzdXBlci5wYXRjaFZhbHVlKHZhbHVlLCBvcHRpb25zKSk7XG4gICAgfVxuXG4gICAgc3VwZXIucGF0Y2hWYWx1ZSh2YWx1ZU9yT2JzZXJ2YWJsZSBhcyBUW10sIG9wdGlvbnMpO1xuICB9XG5cbiAgcHVzaChjb250cm9sOiBDb250cm9sT2ZWYWx1ZTxUPik6IHZvaWQge1xuICAgIHJldHVybiBzdXBlci5wdXNoKGNvbnRyb2wpO1xuICB9XG5cbiAgaW5zZXJ0KGluZGV4OiBudW1iZXIsIGNvbnRyb2w6IENvbnRyb2xPZlZhbHVlPFQ+KTogdm9pZCB7XG4gICAgcmV0dXJuIHN1cGVyLmluc2VydChpbmRleCwgY29udHJvbCk7XG4gIH1cblxuICBzZXRDb250cm9sKGluZGV4OiBudW1iZXIsIGNvbnRyb2w6IENvbnRyb2xPZlZhbHVlPFQ+KTogdm9pZCB7XG4gICAgcmV0dXJuIHN1cGVyLnNldENvbnRyb2woaW5kZXgsIGNvbnRyb2wpO1xuICB9XG5cbiAgZGlzYWJsZWRXaGlsZShvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGJvb2xlYW4+LCBvcHRpb25zPzogQ29udHJvbE9wdGlvbnMpIHtcbiAgICByZXR1cm4gY29udHJvbERpc2FibGVkV2hpbGUodGhpcywgb2JzZXJ2YWJsZSwgb3B0aW9ucyk7XG4gIH1cblxuICBlbmFibGVkV2hpbGUob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxib29sZWFuPiwgb3B0aW9ucz86IENvbnRyb2xPcHRpb25zKSB7XG4gICAgcmV0dXJuIGNvbnRyb2xFbmFibGVkV2hpbGUodGhpcywgb2JzZXJ2YWJsZSwgb3B0aW9ucyk7XG4gIH1cblxuICBtZXJnZVZhbGlkYXRvcnModmFsaWRhdG9yczogVmFsaWRhdG9yKSB7XG4gICAgbWVyZ2VDb250cm9sVmFsaWRhdG9ycyh0aGlzLCB2YWxpZGF0b3JzKTtcbiAgfVxuXG4gIG1lcmdlQXN5bmNWYWxpZGF0b3JzKHZhbGlkYXRvcnM6IEFzeW5jVmFsaWRhdG9yKSB7XG4gICAgdGhpcy5zZXRBc3luY1ZhbGlkYXRvcnMoW3RoaXMuYXN5bmNWYWxpZGF0b3IsIC4uLmNvZXJjZUFycmF5KHZhbGlkYXRvcnMpXSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gIH1cblxuICBtYXJrQXNUb3VjaGVkKG9wdHM/OiBPbmx5U2VsZik6IHZvaWQge1xuICAgIHN1cGVyLm1hcmtBc1RvdWNoZWQob3B0cyk7XG4gICAgdGhpcy50b3VjaENoYW5nZXMubmV4dCh0cnVlKTtcbiAgfVxuXG4gIG1hcmtBc1VudG91Y2hlZChvcHRzPzogT25seVNlbGYpOiB2b2lkIHtcbiAgICBzdXBlci5tYXJrQXNVbnRvdWNoZWQob3B0cyk7XG4gICAgdGhpcy50b3VjaENoYW5nZXMubmV4dChmYWxzZSk7XG4gIH1cblxuICBtYXJrQXNQcmlzdGluZShvcHRzPzogT25seVNlbGYpOiB2b2lkIHtcbiAgICBzdXBlci5tYXJrQXNQcmlzdGluZShvcHRzKTtcbiAgICB0aGlzLmRpcnR5Q2hhbmdlcy5uZXh0KGZhbHNlKTtcbiAgfVxuXG4gIG1hcmtBc0RpcnR5KG9wdHM/OiBPbmx5U2VsZik6IHZvaWQge1xuICAgIHN1cGVyLm1hcmtBc0RpcnR5KG9wdHMpO1xuICAgIHRoaXMuZGlydHlDaGFuZ2VzLm5leHQodHJ1ZSk7XG4gIH1cblxuICBtYXJrQWxsQXNEaXJ0eSgpOiB2b2lkIHtcbiAgICBtYXJrQWxsRGlydHkodGhpcyk7XG4gIH1cblxuICByZXNldCh2YWx1ZT86IENvbnRyb2xWYWx1ZTxUPltdLCBvcHRpb25zPzogQ29udHJvbEV2ZW50T3B0aW9ucyk6IHZvaWQge1xuICAgIHN1cGVyLnJlc2V0KHZhbHVlLCBvcHRpb25zKTtcbiAgfVxuXG4gIHNldFZhbGlkYXRvcnMobmV3VmFsaWRhdG9yOiBWYWxpZGF0b3IpOiB2b2lkIHtcbiAgICBzdXBlci5zZXRWYWxpZGF0b3JzKG5ld1ZhbGlkYXRvcik7XG4gICAgc3VwZXIudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICB9XG5cbiAgc2V0QXN5bmNWYWxpZGF0b3JzKG5ld1ZhbGlkYXRvcjogQXN5bmNWYWxpZGF0b3IpOiB2b2lkIHtcbiAgICBzdXBlci5zZXRBc3luY1ZhbGlkYXRvcnMobmV3VmFsaWRhdG9yKTtcbiAgICBzdXBlci51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gIH1cblxuICB2YWxpZGF0ZU9uKG9ic2VydmFibGVWYWxpZGF0aW9uOiBPYnNlcnZhYmxlPG51bGwgfCBvYmplY3Q+KSB7XG4gICAgcmV0dXJuIG9ic2VydmFibGVWYWxpZGF0aW9uLnN1YnNjcmliZShtYXliZUVycm9yID0+IHtcbiAgICAgIHRoaXMuc2V0RXJyb3JzKG1heWJlRXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgaGFzRXJyb3IoZXJyb3JDb2RlOiBFeHRyYWN0U3RyaW5nczxFPiwgcGF0aD86IENvbnRyb2xQYXRoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmhhc0Vycm9yKGVycm9yQ29kZSwgcGF0aCk7XG4gIH1cblxuICBzZXRFcnJvcnMoZXJyb3JzOiBQYXJ0aWFsPEU+IHwgbnVsbCwgb3B0czogRW1pdEV2ZW50ID0ge30pIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0RXJyb3JzKGVycm9ycywgb3B0cyk7XG4gIH1cblxuICBnZXRFcnJvcjxLIGV4dGVuZHMgRXh0cmFjdFN0cmluZ3M8RT4+KGVycm9yQ29kZTogSywgcGF0aD86IENvbnRyb2xQYXRoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldEVycm9yKGVycm9yQ29kZSwgcGF0aCkgYXMgRVtLXSB8IG51bGw7XG4gIH1cblxuICBoYXNFcnJvckFuZFRvdWNoZWQoZXJyb3JDb2RlOiBFeHRyYWN0U3RyaW5nczxFPiwgcGF0aD86IENvbnRyb2xQYXRoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGhhc0Vycm9yQW5kVG91Y2hlZCh0aGlzLCBlcnJvckNvZGUsIHBhdGgpO1xuICB9XG5cbiAgaGFzRXJyb3JBbmREaXJ0eShlcnJvckNvZGU6IEV4dHJhY3RTdHJpbmdzPEU+LCBwYXRoPzogQ29udHJvbFBhdGgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaGFzRXJyb3JBbmREaXJ0eSh0aGlzLCBlcnJvckNvZGUsIHBhdGgpO1xuICB9XG5cbiAgc2V0RW5hYmxlKGVuYWJsZSA9IHRydWUsIG9wdHM/OiBDb250cm9sRXZlbnRPcHRpb25zKSB7XG4gICAgZW5hYmxlQ29udHJvbCh0aGlzLCBlbmFibGUsIG9wdHMpO1xuICB9XG5cbiAgc2V0RGlzYWJsZShkaXNhYmxlID0gdHJ1ZSwgb3B0cz86IENvbnRyb2xFdmVudE9wdGlvbnMpIHtcbiAgICBkaXNhYmxlQ29udHJvbCh0aGlzLCBkaXNhYmxlLCBvcHRzKTtcbiAgfVxufVxuIl19
