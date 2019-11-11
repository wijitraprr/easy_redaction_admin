import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[customMax][formControlName],[customMax][formControl],[customMax][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomMaxDirective, multi: true}]
})
export class CustomMaxDirective implements Validator {
  @Input()
  customMax: number;
  
  validate(c: FormControl): {[key: string]: any} {
    //   let v = c.value;
    //   return ( v > this.customMax)? {"customMax": true} : null;
    let v = c.value;
    let value = parseFloat(v);

    if (isNaN(value)) {
        return null;
    }

    let customMaxValue = parseFloat(this.customMax.toString());

    if (isNaN(customMaxValue)) {
        throw new Error("Custom Max is not a number");
    }

    return (value > customMaxValue) ? { "customMax": true } : null;
  }
} 