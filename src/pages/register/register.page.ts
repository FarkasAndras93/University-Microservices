import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/backend/user/user';
import { HeaderModel, HEADER_COLORS } from '../../model/frontend/common/HeaderModel';
import { ToastProvider } from '../../providers/tehnical/toast/toast.provider';
import { GlobalUtils } from '../../utils/global-utils';
import { UserProvider } from '../../providers/user/user.provider';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.page.html',
})
export class RegisterPage {

  /**
   * User for register.
   *
   * @type {MyProduct[]}
   * @memberof RegisterPage
   */
  user: User;

  /**
   * Confirm password field.
   *
   * @type {string}
   * @memberof RegisterPage
   */
  confirmPassword: string;

  /**
   * Header model
   *
   * @type {HeaderModel}
   * @memberof RegisterPage
   */
  public headerModel: HeaderModel;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private toast: ToastProvider,
    private userProvider: UserProvider) {
    this.headerModel = new HeaderModel("Register page", HEADER_COLORS.BASE);
    this.user = new User("", "", "");
  }

  /**
   * Registers a new user
   *
   * @param {User} user
   * @memberof RegisterPage
   */
  public async register() {
    if (this.validate()) {
      try {
        this.userProvider.register(this.user.name, this.user.username, this.user.password);
        this.toast.showSuccessMessage("You have registered successfully!", undefined, false);
        this.navCtrl.popTo("LoginPage");
      } catch (e) {
        this.toast.showErrorMessage("Could not register!");
        console.error("Error in register", e);
      }
    }
  }

  /**
   * Method to validate register
   *
   * @returns {boolean}
   * @memberof RegisterPage
   */
  public validate(): boolean {
    let valid: boolean = false;

    if (GlobalUtils.isEmpty(this.user.name)) {
      this.toast.showErrorMessage("Name cannot be empty!");
    } else if (GlobalUtils.isEmpty(this.user.username)) {
      this.toast.showErrorMessage("Username cannot be empty!");
    } else if (GlobalUtils.isEmpty(this.user.password)) {
      this.toast.showErrorMessage("Password cannot be empty!");
    } else if (this.confirmPassword != this.user.password) {
      this.toast.showErrorMessage("Password and confirm password is not the same!");
    } else {
      valid = true;
    }

    return valid;
  }

}