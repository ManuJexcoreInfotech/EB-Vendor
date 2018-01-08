import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import {Service} from '../../providers/service/service';
import { Values } from '../../providers/service/values';


@IonicPage()
@Component({
    templateUrl: 'edit-product.html'
})
export class EditProductP {
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
    constructor(public nav: NavController, public service: Service,public params: NavParams, public values: Values) {
        this.Save = "Save";
		if(!this.values.productDiD){
			this.nav.setRoot('ProductsPage');
		}
		this.id = this.values.productDiD;
		console.log("product id =======>"+this.values.productDiD);
        //this.editAddress = params.data;
		this.service.load();
		 this.service.getProductDetail(this.id)
            .then((results) => this.handleProduct(results));
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
		this.editAddress.id = this.values.productDiD;
		this.editAddress.type = 'simple';
		console.log(this.editAddress); 
		
        this.service.editProduct(this.editAddress)
            .then((results) => this.handleSaveAddress(results));
    }
    handleProduct(results) { 
	
        this.editAddress['name']=results.name;
        this.editAddress['description']=results.description.replace(/<[^>]+>/gm, '');
		for(let data of results.categories) {
			this.editAddress['category'].push(data.id);
		}
		this.editAddress['regular_price']=results.regular_price;
        this.Save = "Saving";
        //this.nav.setRoot('ProductsPage');
    }
	
	handleSaveAddress(results) {
        this.disableSubmit = false;
        this.Save = "Saving";
        this.nav.setRoot('ProductsPage');
    }
}