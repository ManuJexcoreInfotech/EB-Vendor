import { Component } from '@angular/core';
import { NavController, IonicPage,LoadingController } from 'ionic-angular';
import { Service } from '../../../providers/service/service';
import { Functions } from '../../../providers/service/functions';
import { Values } from '../../../providers/service/values';
import { Home } from '../../home/home';



@IonicPage()
@Component({
    templateUrl: 'login.html'
})
export class AccountLogin {
    loginData: any;
    loadLogin: any;
    status: any;
    error: any;
    nonce: any;
    loading: any;
    public disableSubmit: boolean = false;
    LogIn: any;
    gres: any;
    fres: any;
    
    constructor(public nav: NavController, public service: Service, public functions: Functions,public Loading: LoadingController, public values: Values) {
        this.loginData = [];
        this.LogIn = "LogIn";
        this.service.getNonce()
            .then((results) => this.nonce = results);
    }
    login(a) {
		
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.LogIn = "Logging In";
            this.service.login(a, this.nonce.checkout_login)
                .then((results) => this.handleResults(results));
        }
		
    }
    validateForm() {
        if (this.loginData.username == undefined || this.loginData.username == "") {
            return false
        }
        if (this.loginData.password == undefined || this.loginData.password == "") {
            return false
        }
        else {
            return true
        }
    }
    handleResults(results) {
        this.disableSubmit = false;
        this.LogIn = "LogIn";
		console.log(results);
           
        if (!results.errors) {
			if(!this.values.isVendor){
				this.functions.showAlert('error', 'only vendor user can allow to login here.');
				this.service.logout();
				this.loading = this.Loading.create();
				this.loading.present();
				setTimeout(() => {
					this.loading.dismiss();
					this.nav.setRoot("AccountLogin");
				}, 2000);
				 
			}
            this.functions.showAlert('success', 'You have successfully logged in');
            this.nav.setRoot(Home);
        }
        else if (results.errors) {
            this.functions.showAlert('error', 'invalid username/password');
        }
    }
    forgotten(loginData) {
        this.nav.push('AccountForgotten');
    }
    signup(){
        this.nav.push('AccountRegister');
    }


    /* #C72D46Login() {
     
        this.fb.login(['email']).then((response) => {
            this.fres = response;
            console.log(response.authResponse.accessToken);
            //this.functions.showAlert('token', response.authResponse.accessToken);
            this.service.sendToken(response.authResponse.accessToken).then((results) => {
                

                this.nav.setRoot('Home');
                
                this.functions.showAlert('success', 'Logged in successfully');
                this.nav.pop();
                 this.nav.setRoot(Home);
                //if (this.values.setNavigation) {
                 //   this.nav.setRoot(Home);
                //}
            });
        }).catch((error) => {
            console.log(error)

            this.functions.showAlert('Error', error);
        });
    }
    gmailLogin() {

        this.googlePlus.login({
            'scopes': 'https://www.googleapis.com/auth/plus.login',
            'webClientId': '929662214811-p3fmo7gk14elub2tlaetd48jntss7kud.apps.googleusercontent.com',
            'offline': true
        }).then((res) => {
            
                this.gres = res;
            this.values.avatar = res.imageUrl;
            
            this.service.googleLogin(res).then((results) => {
                this.functions.showAlert('success', 'Logged in success');
                this.nav.setRoot('Home');
            });
        }).catch((err) => {
			 console.log("ERRROOOORRRR");
			console.log(err)
            this.error = err;
            console.error(err);
        });
    } */
    
}