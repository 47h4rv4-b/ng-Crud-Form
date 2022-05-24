import { NgForm, FormGroup,FormControl,Validators,FormBuilder } from "@angular/forms";

export class Api{
    Apiname:string ="";
    Apiurl:string="";


    /**Forms validaton usinf formGroup Object */
    /** Form group -> formControl ->FormValidation */
    formGroup: FormGroup ;
    constructor() {
        var _builder = new FormBuilder();
        this.formGroup= _builder.group({}); /**1. Form group */

        this.formGroup.addControl("apiNameControl", new FormControl('',Validators.required));


        // Url validation(stackoverflow)
        var validation=[];
        validation.push(Validators.required);
        validation.push(Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'));
        this.formGroup.addControl("apiUrlControl", new FormControl('',Validators.compose(validation)));
       
}
}
