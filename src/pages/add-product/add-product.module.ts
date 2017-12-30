import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddProduct } from './add-product';
import { TranslateModule } from '@ngx-translate/core';
import { KeysPipeModule } from '../../pipes/pipe.module'



@NgModule({
  declarations: [
    AddProduct,
  ],
  imports: [
    IonicPageModule.forChild(AddProduct),
     KeysPipeModule,
    TranslateModule.forChild()
  ],
  exports: [
    AddProduct
  ]
})
export class AddProductModule {}
