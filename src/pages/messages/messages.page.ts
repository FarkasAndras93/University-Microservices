import { UserProvider } from '../../providers/user/user.provider';
import { MessageProvider } from '../../providers/message/message.provider';
import { MENU_TITLE } from '../../app/app.component';
import { MessageModel } from '../../model/backend/message/message';
import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, AlertController } from 'ionic-angular';
import { HeaderModel, HEADER_COLORS } from '../../model/frontend/common/HeaderModel';
import { ButtonModel } from '../../model/frontend/common/ButtonModel';
import { HEADER_BUTTON_TYPE } from '../../components/simple-app-header/simple-app-header.component';
import { ToastProvider } from '../../providers/tehnical/toast/toast.provider';
import { StorageProvider } from '../../providers/tehnical/storage/storage.provider';
import { User } from '../../model/backend/user/user';

@IonicPage()
@Component({
  selector: 'messages',
  templateUrl: 'messages.page.html'
})
export class MessagesPage {

  /**
   * Header model
   *
   * @type {HeaderModel}
   * @memberof AFinderPage
   */
  public headerModel: HeaderModel;

  /**
   * Message model
   *
   * @type {MessageModel}
   * @memberof ContactPage
   */
  public messages: MessageModel[] = [];


  constructor(public navCtrl: NavController, public messageProvider: MessageProvider, public modalCtrl: ModalController, private toast: ToastProvider, private alertCtrl: AlertController,
    private storage: StorageProvider) {
    this.headerModel = new HeaderModel(MENU_TITLE.MESSAGES, HEADER_COLORS.BASE, true, new ButtonModel(undefined, undefined, undefined, undefined, HEADER_BUTTON_TYPE.MENU_TOGGLE.toString()));
  }

  ionViewDidLoad() {
    this.messageProvider.getMessagesForUser().then(message => {
      this.messages = message;
    }).catch(error => {
      console.error(error);
      this.toast.showErrorMessage("Error while geting messages for the logged user.");
    })
  }

}
