import { ControlValueAccessor as NgControlValueAccessor } from '@angular/forms';
export declare abstract class ControlValueAccessor<T = any> implements NgControlValueAccessor {
  abstract writeValue(value: T): void;
  onChange?: (value: T) => void;
  onTouched?: () => void;
  registerOnChange(fn: (value: T | null) => void): void;
  registerOnTouched(fn: () => void): void;
}
