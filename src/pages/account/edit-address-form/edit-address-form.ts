import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage,LoadingController } from 'ionic-angular';
import {Service} from '../../../providers/service/service';
import { Values } from '../../../providers/service/values';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Functions } from '../../../providers/service/functions';


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
	loading: any;
    country: any;
    billing_states: any;
    shipping_states: any;
    public disableSubmit: boolean = false;
    Save: any;
    constructor(public nav: NavController,public Loading: LoadingController, public functions: Functions,public service: Service, params: NavParams, public values: Values, public formBuilder: FormBuilder) {
        this.Save = "Save";
        this.editAddress = params.data;
        this.editAddress.shipping_true = true;
		
		this.service.getUserData()
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
		this.editAddress.first_name =results[0].first_name;
		this.editAddress.last_name = results[0].last_name;
		this.editAddress.email = results[0].user_email;   
	}
    handleSaveAddress(results) {
        this.disableSubmit = false;
        this.Save = "Saving";
		this.loading = this.Loading.create();
		this.loading.present();
        
		setTimeout(()=>{    
			this.loading.dismiss();
			this.functions.showAlert("SUCCESS", "Profile Updated Successfully!");
			this.nav.setRoot('EditAddressForm');
		},3000);
        //this.nav.setRoot('Address');
    }
	
	onSubmit() {
		console.log('submitting form');
	}

	isValid(field: string) {
		let formField = this.myForm.find(field);
		return formField.valid || formField.pristine;
	}

	
}