import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[customMin][formControlName],[customMin][formControl],[customMin][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomMinDirective, multi: true}]
})
export class CustomMinDirective implements Validator {
  @Input()
  customMin: number;
  
  validate(c: FormControl): {[key: string]: any} {
    //   let v = c.value;
    //   return ( v < this.customMin)? {"customMin": true} : null;

    let v = c.value;
    let value = parseFloat(v);

    if (isNaN(value)) {
        return null;
    }

    let customMinValue = parseFloat(this.customMin.toString());

    if (isNaN(customMinValue)) {
        throw new Error("Custom Min is not a number");
    }

    return (value < customMinValue) ? { "customMin": true } : null;
  }
} 