import { SharedModule } from '../../app/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WishlistPage } from './wishlist';

@NgModule({
  declarations: [
    WishlistPage,
  ],
  imports: [
    IonicPageModule.forChild(WishlistPage),
    SharedModule
  ],
})
export class WishlistPageModule {}
