import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProductP } from './edit-product';
import { TranslateModule } from '@ngx-translate/core';
import { KeysPipeModule } from '../../pipes/pipe.module'



@NgModule({
  declarations: [
    EditProductP,
  ],
  imports: [
    IonicPageModule.forChild(EditProductP),
    
    TranslateModule.forChild()
  ],
  exports: [
		EditProductP
  ]
})
export class EditProductModule {}
