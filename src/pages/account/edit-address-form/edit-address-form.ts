import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import {Service} from '../../../providers/service/service';
import { Values } from '../../../providers/service/values';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@IonicPage()
@Component({
    templateUrl: 'edit-address-form.html'
})
export class EditAddressForm {
    status: any;
    form: any;
    myForm: any;
    editAddress: any;
    regions: any = [];
    address: any;
    id: any;
    country: any;
    billing_states: any;
    shipping_states: any;
    public disableSubmit: boolean = false;
    Save: any;
    constructor(public nav: NavController, public service: Service, params: NavParams, public values: Values, public formBuilder: FormBuilder) {
        this.Save = "Save";
        this.editAddress = params.data;
        this.editAddress.shipping_true = true;
		
		this.service.getUserProfile()
            .then((results) => this.handleProfile(results));
		
		this.myForm = formBuilder.group({
			firstName: [null,Validators.required],
			lastName: [null, Validators.required],			
			email: [null, [Validators.required]]
		});
		setTimeout(()=>{
			this.editAddress.first_name = this.values.customerFName;
            this.editAddress.last_name = this.values.customerLName;
            this.editAddress.email = this.values.customerEmail;   
		},2000);
		
       
    }   
    updateProfile() {
        this.Save = "Save";
        this.disableSubmit = true;
        if (this.editAddress) {
            this.editAddress.first_name = this.editAddress.first_name;
            this.editAddress.last_name = this.editAddress.last_name;
            this.editAddress.email = this.editAddress.email;          
        }
        this.service.updateProfile(this.editAddress)
            .then((results) => this.handleSaveAddress(results));
    }
    handleProfile(results) {
		console.log(results);
		
	}
    handleSaveAddress(results) {
        this.disableSubmit = false;
        this.Save = "Saving";
        this.nav.setRoot('Address');
    }
	
	onSubmit() {
		console.log('submitting form');
	}

	isValid(field: string) {
		let formField = this.myForm.find(field);
		return formField.valid || formField.pristine;
	}

	
}