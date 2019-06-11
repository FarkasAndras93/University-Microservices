import { LoginPage } from './../pages/login/login.page';
import { UserProvider } from './../providers/user/user.provider';
import { LanguageModel } from './../model/frontend/common/LanguageModel';
import { Component, ViewChild, Inject } from '@angular/core';
import { Platform, Nav, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { APP_CONFIG_TOKEN, AppConfig } from './app.config';
import { StorageProvider } from '../providers/tehnical/storage/storage.provider';
import { TranslateService } from '@ngx-translate/core';


/**
 * Side Menu Type
 */
type SideMenuItem = { title: MENU_TITLE, component: any, icon?: string, badgeRight?: boolean, badgeValue?: number, badgeColor?: string };

/**
 * Enums for menu titles.
 *
 * @export
 * @enum {number}
 */
export enum MENU_TITLE {
  LOGIN = "LOGIN",
  HOME = "HOME",
  BOOK_A_TIME = "BOOK_A_TIME",
  BOOKED_TIMES = "BOOKED_TIMES",
  ABOUT_US = "ABOUT_US",
  CONTACT = "CONTACT",
  MESSAGES = "MESSAGES",
  LOGOUT = "LOGOUT"
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  /**
   * Navigation
   *
   *
   * @type {Nav}
   * @memberof MyApp
   */
  @ViewChild(Nav) nav: Nav;

  /**
   * Root page
   *
   * @type {*}
   * @memberof MyApp
   */
  rootPage: any = 'LoginPage';

  /**
  * List of pages in logged in state
  *
  * @private
  * @type {Array<SideMenuItem>}
  * @memberof MyApp
  */
  private userPages: Array<SideMenuItem> = [
    { title: MENU_TITLE.LOGIN, component: 'LoginPage', icon: 'log-in' },
    { title: MENU_TITLE.CONTACT, component: 'ContactPage', icon: 'phone-portrait' }
  ]

  /**
    * List of pages in logged in state
    *
    * @private
    * @type {Array<SideMenuItem>}
    * @memberof MyApp
    */
  private adminPages: Array<SideMenuItem> = [
    { title: MENU_TITLE.MESSAGES, component: 'MessagesPage', icon: 'mail'},
    { title: MENU_TITLE.HOME, component: 'HomePage', icon: 'home'},
    { title: MENU_TITLE.LOGOUT, component: 'LoginPage', icon: 'log-out' }
  ]


  /**
   * Current pages in the side menu
   *
   * @type {Array<SideMenuItem>}
   * @memberof MyApp
   */
  pages: Array<SideMenuItem>;

  /**
   * Possible languages to select.
   *
   * @type {[LanguageModel]}
   * @memberof MyApp
   */
  public languages: LanguageModel[] = [];

  /**
   * Selected language.
   *
   * @type {LanguageModel}
   * @memberof MyApp
   */
  public selectedLanguage: LanguageModel;

  /**
   * State of pharmacy select dropdown.
   *
   * @type {boolean}
   * @memberof MyApp
   */
  public dropdownOpened:  boolean = false;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private event: Events,
    @Inject(APP_CONFIG_TOKEN) private config: AppConfig, private storage: StorageProvider, private userProvider: UserProvider,
    private translate: TranslateService) {

    translate.setDefaultLang('en');
    this.selectedLanguage = { key: 'en', name: 'English' };
    this.languages.push(this.selectedLanguage);

    platform.ready().then(() => {
      this.pages = this.userPages;
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //Subscribing to login and logout events
      this.event.subscribe(this.config.loginConfig.logoutEventKey, this.logoutEventComplete);
      this.event.subscribe(this.config.loginConfig.loggedInCompleteEventKey, this.loginEventComplete);
    });
  }

    /**
   * Lifecycle Event ngAfterViewInit used to subscribe to view changes in the navigation.
   * This is used to react on a possible logout caused by a page refresh (F5) in the browser.
   * On every view reload we check if we are still logged in, if not we proceed to the login page
   * to start fresh. If AutoLogin was enabled then the user will automatically be logged in.
   */
  ngAfterViewInit() {
    this.nav.viewDidLoad.subscribe(async (view) => {
        let hasLoggedIn: boolean = await this.storage.getLocal(this.config.loginConfig.hasLoggedIn);
        if (hasLoggedIn) {
          if (this.userProvider.isLoggedIn()) {
            // no need to do anything
          } else {
            // something has gone wrong, we should be logged in, but due to page refresh or similar
            // a logout has taken place => Go to LoginPage for login or perform autologin
            this.storage.saveLocal(this.config.loginConfig.hasLoggedIn, false);
            // Only need to react if we are not on the login page anyway
            if (!(view.instance instanceof LoginPage)) {
              this.nav.setRoot('LoginPage');
            }
          }
        } else {
          // We have not officially logged in, but gone to one of the pages in the url
          // this means we need to be redirected to the login page
          // if (!(view.instance instanceof LoginPage || view.instance instanceof ConfigurationPage || view.instance instanceof ContactPage)) {
          //   // we are not allowed to be here, so go to login page, if the systemkey is empty then go to configuration page (this happens automatically)
          //   this.nav.setRoot('LoginPage');
          // }
        }
    });
  }


  /**
   *  Visibilitychange event is removed on destroy.
   *
   * @memberof ChatPage
   */
  ngOnDestroy() {
    //Unsubscribing to login and logout events
    this.event.unsubscribe(this.config.loginConfig.logoutEventKey, this.logoutEventComplete);
    this.event.unsubscribe(this.config.loginConfig.loggedInCompleteEventKey, this.loginEventComplete);
  }

  /**
   * Methods after login was completed.
   *
   * @private
   * @memberof MyApp
   */
  private loginEventComplete = () => {
    this.pages = this.adminPages.map(x => Object.assign({}, x));

    // if (this.storage.getLoggedUser().admin) {
    // this.pages.pop();
    // this.pages.push(this.adminPages[0]);
    // this.pages.push(this.loggedInPages[this.loggedInPages.length - 1]);
    // }
  }

  /**
   * Methods after logout was completed.
   *
   * @private
   * @memberof MyApp
   */
  private logoutEventComplete = () => {
    this.nav.setRoot("LoginPage");
    this.pages = this.userPages;
    this.storage.saveLocal(this.config.loginConfig.hasLoggedIn, false);
    this.storage.clearConfig(this.config.loginConfig.loggedInUser);
  }

  /**
   * Opens a page as root page
   *
   * @param {any} page
   * @memberof MyApp
   */
  openPage(page) {
    if (page.component != this.nav.getActive().name) {
      console.log('open page ', page)

      if (page.title == MENU_TITLE.LOGOUT) {
        this.event.publish(this.config.loginConfig.logoutEventKey);
      } else {
        this.nav.setRoot(page.component);
      }
    }
  }

  /**
   * Method to use selected language.
   *
   * @param {*} language
   * @memberof MyApp
   */
  public useLanguage(language) {
    this.translate.use(language.key);
    this.selectedLanguage = language;
    this.dropdownOpened = false;
  }
}

