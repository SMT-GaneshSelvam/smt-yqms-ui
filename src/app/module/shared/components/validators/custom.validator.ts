import { AbstractControl } from '@angular/forms';


export class ValidatorHelper {
	static ValidateWhiteSpace(control: AbstractControl) {
		if(control.value){
			if (control.value.trim().length != control.value.length) {
			    return { whiteSpace: true };
			}
		}
	  
	  	return null;
	}
	static ValidateSpecialCharacters(control: AbstractControl){
		if(control.value){
			if (!(/^[A-Za-z0-9 ]+$/.test( control.value ))) {
			    return { specialCharac: true };
			}
		}
	  
	  	return null;
	}

	static ValidateNumber(control: AbstractControl){
		if(control.value){
			if (isNaN(control.value)) {
			    return { numberError: true };
			}
		}
	  
	  	return null;
	}
}
