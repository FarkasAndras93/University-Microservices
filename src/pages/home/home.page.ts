import { MessageProvider } from '../../providers/message/message.provider';
import { MENU_TITLE } from '../../app/app.component';
import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, AlertController } from 'ionic-angular';
import { HeaderModel, HEADER_COLORS } from '../../model/frontend/common/HeaderModel';
import { ButtonModel } from '../../model/frontend/common/ButtonModel';
import { HEADER_BUTTON_TYPE } from '../../components/simple-app-header/simple-app-header.component';
import { ToastProvider } from '../../providers/tehnical/toast/toast.provider';
import { StorageProvider } from '../../providers/tehnical/storage/storage.provider';

@IonicPage()
@Component({
  selector: 'home',
  templateUrl: 'home.page.html'
})
export class HomePage {

  /**
   * Header model
   *
   * @type {HeaderModel}
   * @memberof AFinderPage
   */
  public headerModel: HeaderModel;


  constructor(public navCtrl: NavController, public messageProvider: MessageProvider, public modalCtrl: ModalController, private toast: ToastProvider, private alertCtrl: AlertController,
    private storage: StorageProvider) {
    this.headerModel = new HeaderModel(MENU_TITLE.HOME, HEADER_COLORS.BASE, true, new ButtonModel(undefined, undefined, undefined, undefined, HEADER_BUTTON_TYPE.MENU_TOGGLE.toString()));
  }

  ionViewDidLoad() {

  }

}
