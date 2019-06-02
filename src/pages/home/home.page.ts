import { GlobalUtils } from './../../utils/global-utils';
import { Component } from '@angular/core';
import { NavController, IonicPage, ToastController, Toast } from 'ionic-angular';
import { HeaderModel, HEADER_COLORS } from '../../model/frontend/common/HeaderModel';
import { ButtonModel } from '../../model/frontend/common/ButtonModel';
import { HEADER_BUTTON_TYPE } from '../../components/simple-app-header/simple-app-header.component';
import { IconedMenuItem } from '../../model/frontend/common/IconedMenuItem';
import { MENU_TITLE } from '../../app/app.component';
import { StorageProvider } from '../../providers/tehnical/storage/storage.provider';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html'
})
export class HomePage {

  /**
   * Header model
   *
   * @type {HeaderModel}
   * @memberof BasePage
   */
  public headerModel: HeaderModel;

  /**
   * Home menu items
   *
   * @type {Array<IconedMenuItem>}
   * @memberof HomePage
   */
  menuItems: Array<IconedMenuItem>;


  constructor(public navCtrl: NavController, private storage: StorageProvider) {
    this.headerModel = new HeaderModel(MENU_TITLE.HOME, HEADER_COLORS.BASE, true, new ButtonModel(undefined, undefined, undefined, undefined, HEADER_BUTTON_TYPE.MENU_TOGGLE.toString()));

    this.menuItems = new Array<IconedMenuItem>();
    if (!GlobalUtils.isUndefinedOrNull(storage.getLoggedUser())) {
      this.menuItems.push(new IconedMenuItem(MENU_TITLE.BOOKED_TIMES, "BookedTimesPage", "home-product-editor.png"));
    } else {
      this.menuItems.push(new IconedMenuItem(MENU_TITLE.BOOK_A_TIME, "BookATimePage", "home-fridge.png"));
    }
    this.menuItems.push(new IconedMenuItem(MENU_TITLE.ABOUT_US, "AboutUsPage", "home-grocery-list.png"));
    if (!GlobalUtils.isUndefinedOrNull(storage.getLoggedUser())) {
      this.menuItems.push(new IconedMenuItem(MENU_TITLE.MESSAGES, "MessagesPage", "home-product-editor.png"));
    } else {
      this.menuItems.push(new IconedMenuItem(MENU_TITLE.CONTACT, "ContactPage", "home-recipe.png"));
    }
  }

  /**
   * Navigate to page
   *
   * @param {IconedMenuItem} page
   * @memberof HomePage
   */
  goToPage(page: IconedMenuItem) {
    console.log("Go to page: ", page.pageToOpen);

    if (page.pageToOpen != this.navCtrl.getActive().name) {
      this.navCtrl.setRoot(page.pageToOpen);
    }
  }

}
