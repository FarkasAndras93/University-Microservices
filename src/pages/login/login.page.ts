import { GlobalUtils } from './../../utils/global-utils';
import { Component, Inject } from '@angular/core';
import { NavController, IonicPage, Events } from 'ionic-angular';
import { User } from '../../model/backend/user/user';
import { HeaderModel, HEADER_COLORS } from '../../model/frontend/common/HeaderModel';
import { ButtonModel } from '../../model/frontend/common/ButtonModel';
import { HEADER_BUTTON_TYPE } from '../../components/simple-app-header/simple-app-header.component';
import { ToastProvider } from '../../providers/tehnical/toast/toast.provider';
import { UserProvider } from '../../providers/user/user.provider';
import { StorageProvider } from '../../providers/tehnical/storage/storage.provider';
import { AppConfig, APP_CONFIG_TOKEN } from '../../app/app.config';

@IonicPage()
@Component({
  selector: 'login',
  templateUrl: 'login.page.html'
})
export class LoginPage {

  /**
   * User for login.
   *
   * @type {MyProduct[]}
   * @memberof LoginPage
   */
  user: User;

  /**
   * Header model
   *
   * @type {HeaderModel}
   * @memberof LoginPage
   */
  public headerModel: HeaderModel;

  /**
   * Boolean variable for autologin
   *
   * @type {boolean}
   * @memberof LoginPage
   */
  public autologin: boolean;


  constructor(public navCtrl: NavController, private toast: ToastProvider, private userProvider: UserProvider,
    private event: Events, private storage: StorageProvider, @Inject(APP_CONFIG_TOKEN) private config: AppConfig) {
    this.headerModel = new HeaderModel("Login page", HEADER_COLORS.BASE, true, new ButtonModel(undefined, undefined, undefined, undefined, HEADER_BUTTON_TYPE.MENU_TOGGLE.toString()));
    this.user = new User("", "", "");
  }

  /**
   * On Enter action
   *
   * @memberof LoginPage
   */
  ionViewDidEnter() {
    if(!GlobalUtils.isEmpty(this.storage.getLocal(this.config.loginConfig.refreshToken))) {
      this.autologin = true;
      this.userProvider.autoLogin(false).then(() => {
        console.log("autologin successful");
        this.navCtrl.setRoot("MessagesPage");
      }, () => {
        console.log("Autologin failed");
      });
    };
  }

  /**
   * Performs a login
   *
   * @returns {Promise<LoginResponseDTO>}
   * @memberof LoginPage
   */
  public login() {
    return this.userProvider.login(this.user.username, this.user.password)
      .then(response => {
        this.navCtrl.setRoot("MessagesPage");
        return response;
      }, error => {
        console.log("Error on login: " + error);
        if (error.status === 401) {
          this.toast.showErrorMessage("Login data is not valid!");
        } else {
          this.toast.showErrorMessage("Unkown error on login!");
        }
        return error;
      })
  }

  /**
   * Load register page.
   *
   * @memberof LoginPage
   */
  public register() {
    this.navCtrl.push("RegisterPage");
  }

}
