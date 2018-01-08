import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import {Service} from '../../providers/service/service';
import { Values } from '../../providers/service/values';


@IonicPage()
@Component({
    templateUrl: 'add-product.html'
})
export class AddProduct {
    status: any;
    form: any;
    categories: any;	
    editAddress: any = [];
    regions: any = [];
    address: any;
    id: any;
    country: any;
    billing_states: any;
    shipping_states: any;
    public disableSubmit: boolean = false;
    Save: any;
    constructor(public nav: NavController, public service: Service, params: NavParams, public values: Values) {
        this.Save = "Save";
        this.editAddress = params.data;
		this.service.load();
		setTimeout(()=>{    
			this.categories = this.service.mainCategories;
			console.log(this.categories); 
		},2500);
	}   
    saveAddress() {
		
        this.Save = "Save";
        this.disableSubmit = true;
		console.log(this.editAddress); 
		var cat;
		// for(let data of this.editAddress.category) {
		
			// this.regions.push({'id':data});
		
		// }
		this.editAddress.type = 'simple';
		//this.editAddress.category = this.regions;
		console.log(this.editAddress); 
       /*  if (this.editAddress.shipping_true) {
            this.editAddress.shipping.first_name = this.editAddress.billing.first_name;
            this.editAddress.shipping.last_name = this.editAddress.billing.last_name;
            this.editAddress.shipping.company = this.editAddress.billing.company;
            this.editAddress.shipping.address_1 = this.editAddress.billing.address_1;
            this.editAddress.shipping.address_2 = this.editAddress.billing.address_2;
            this.editAddress.shipping.city = this.editAddress.billing.city;
            this.editAddress.shipping.country = this.editAddress.billing.country;
            this.editAddress.shipping.state = this.editAddress.billing.state;
            this.editAddress.shipping.postcode = this.editAddress.billing.postcode;
        } */
		
        this.service.addProduct(this.editAddress)
            .then((results) => this.handleSaveAddress(results));
    }
    handleSaveAddress(results) {
        this.disableSubmit = false;
        this.Save = "Saving";
        this.nav.setRoot('ProductsPage');
    }
}