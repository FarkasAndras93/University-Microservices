import { BookingModel } from './../../model/backend/booking/booking';
import { MENU_TITLE } from '../../app/app.component';
import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, AlertController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product.provider';
import { HeaderModel, HEADER_COLORS } from '../../model/frontend/common/HeaderModel';
import { ButtonModel } from '../../model/frontend/common/ButtonModel';
import { HEADER_BUTTON_TYPE } from '../../components/simple-app-header/simple-app-header.component';
import { ToastProvider } from '../../providers/tehnical/toast/toast.provider';
import { StorageProvider } from '../../providers/tehnical/storage/storage.provider';

@IonicPage()
@Component({
  selector: 'book-a-time',
  templateUrl: 'book-a-time.page.html'
})
export class BookATimePage {

  /**
   * Header model
   *
   * @type {HeaderModel}
   * @memberof AFinderPage
   */
  public headerModel: HeaderModel;

  /**
   * Model for the booking.
   *
   * @type {BookingModel}
   * @memberof BookATimePage
   */
  public booking: BookingModel;


  constructor(public navCtrl: NavController, public productProvider: ProductProvider, public modalCtrl: ModalController, private toast: ToastProvider, private alertCtrl: AlertController,
    private storage: StorageProvider) {
    this.headerModel = new HeaderModel(MENU_TITLE.BOOK_A_TIME, HEADER_COLORS.BASE, true, new ButtonModel(undefined, undefined, undefined, undefined, HEADER_BUTTON_TYPE.MENU_TOGGLE.toString()));
    this.booking = new BookingModel("", "", "", "", "");
  }

  ionViewDidLoad() {

  }

  /**
   * Method to add product in my fridge.
   *
   * @memberof MyFridgePage
   */
  public addBooking() {
    // let modal = this.modalCtrl.create('ProductNewPage');
    // modal.present();
    // modal.onDidDismiss(result => {
    //   if (!GlobalUtils.isUndefinedOrNull(result)) {
    //     if (result instanceof MyProduct) {
    //       this.productProvider.addProductInFridge(result).then(newProduct => {
    //         this.myProducts.push(result);
    //         this.toast.showSuccessMessage("Product added with success.");
    //       }).catch(err => {
    //         console.error("Failed to add new product in my fridge!", err);
    //         this.toast.showErrorMessage("Add product failed!");
    //       })
    //     } else {
    //       this.toast.showErrorMessage("Add product failed!");
    //     }
    //   }
    // });
  }

}
