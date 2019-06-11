import { User } from './../../model/backend/user/user';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { GlobalUtils } from '../../utils/global-utils';
import { Events } from 'ionic-angular';
import { AppConfig, APP_CONFIG_TOKEN } from '../../app/app.config';
import { StorageProvider } from '../tehnical/storage/storage.provider';
import { Md5 } from 'ts-md5/dist/md5';
import { JwtHelperService } from "@auth0/angular-jwt";

export enum ACCESS_TOKEN_KEYS {
  USER_ID = "jti",
  EXPIRATION_TIME = "exp"
}

@Injectable()
export class UserProvider {

  private refreshUpdateStarted: boolean = false;

  private _accessToken: string;

  private refreshTokenUpdater;

  constructor(public http: HttpClient, private event: Events, @Inject(APP_CONFIG_TOKEN) private config: AppConfig,
    private storage: StorageProvider) {
    console.log('Hello RestProvider Provider');
    this.event.subscribe(this.config.loginConfig.logoutEventKey, this.logoutEventComplete);
  }

  //TODO - encode in md5 the password
  login(username: string, password: string): Promise<any> {
    // let hash = Md5.hashStr("password");
    // this.event.publish(this.config.loginConfig.loggedInCompleteEventKey);
    // this.event.publish(this.config.loginConfig.updatedTokensAvailableEventKey, { accessToken: "asd" });
    // return Promise.resolve(new User("Name1", "Username2", ""));

    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.post(this.config.basePath2 + "/login",
        { "username": username, "password": password }, { headers: headers }
      ).subscribe((token: any) => {
        this._accessToken = token.accessToken;
        this.refreshTokenBeforeExpire(token.accessToken);
        this.event.publish(this.config.loginConfig.loggedInCompleteEventKey);
        this.event.publish(this.config.loginConfig.updatedTokensAvailableEventKey, token);
        this.storage.saveLocal(this.config.loginConfig.hasLoggedIn, true);
        this.storage.saveLocal(this.config.loginConfig.refreshToken, token.refreshToken);
        // this.storage.saveLocal(this.config.loginConfig.loggedInUser, loggedUser);
        return resolve(token);
      }, error => {
        console.error("Error while loggin in application", error);
        return reject(error);
      });
    });
  }

  //TODO - encode in md5 the password
  register(name: string, username: string, password: string): Promise<boolean> {
    // let hash = Md5.hashStr("password");
    // return Promise.resolve(new User("Name1", "Username1", hash.toString()));

    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.put(this.config.basePath2 + "/register",
        { "name": name, "username": username, "password": password }, { headers: headers }
      ).subscribe((result: boolean) => {
        // this.event.publish(this.config.loginConfig.loggedInCompleteEventKey);
        // this.storage.saveLocal(this.config.loginConfig.hasLoggedIn, true);
        // this.storage.saveLocal(this.config.loginConfig.loggedInUser, loggedUser);
        return resolve(result);
      }, error => {
        console.error("Error while loggin in application", error);
        return reject(error);
      });
    });
  }

  /**
 * Method to return messages for logged user.
 * @returns {Promise<MyProduct[]>}
 * @memberof ProductProvider
 */
  async getAllUsers(): Promise<any> {
    // let users: User[] = [];
    // users.push(new User("Name1", undefined, undefined));
    // users.push(new User("Name2", undefined, undefined));
    // users.push(new User("Name3", undefined, undefined));
    // users.push(new User("Name4", undefined, undefined));
    // users.push(new User("Name5", undefined, undefined));
    // users[0].id = "1";
    // users[1].id = "2";
    // users[2].id = "3";
    // users[3].id = "4";
    // users[4].id = "5";
    // return Promise.resolve(users);

    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.get(this.config.basePath2 + "/users/get", { headers: headers }).subscribe((users: User[]) => {
        return resolve(users);
      }, error => {
        console.error("Error while getting users", error);
        return reject(error);
      });
    });
  }

  /**
   * Performs an auto login
   *
   * @returns {Promise<boolean>} Token response
   * @memberof LoginProvider
   */
  public async autoLogin(logout: boolean = true): Promise<boolean> {
    // this.event.publish(this.config.loginConfig.loggedInCompleteEventKey);
    // return Promise.resolve(true);

    return new Promise<boolean>((resolve, reject) => {
      let token: string = this.storage.getLocal(this.config.loginConfig.refreshToken);//.then(
      //  token => {
      console.log("refresher token stored", token);
      if (token != undefined && token != null && new Date(this.getValueFromToken(token, ACCESS_TOKEN_KEYS.EXPIRATION_TIME)) > new Date()) {
        console.log("Asking for new refresher token");
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        this.http.post(this.config.basePath2 + "/renew", token, { headers: headers }).subscribe((token: any) => {
          this.storage.saveLocal(this.config.loginConfig.accessToken, token.accessToken); //lazy loaded modules can't wait till next refresh event
          this.storage.saveLocal(this.config.loginConfig.hasLoggedIn, true);
          // this.storage.saveLocal(this.config.loginConfig.refreshToken, token.refreshToken);//.then(
          // () => {
          this.event.publish(
            this.config.loginConfig.updatedTokensAvailableEventKey,
            token
          );
          this._accessToken = token.accessToken;
          this.event.publish(this.config.loginConfig.loggedInCompleteEventKey);
          this.refreshTokenBeforeExpire(token.accessToken);
          resolve(true);
        },
          () => {
            reject(false);
          }
        );
        // },
        //   () => {
        //     reject();
        //   }
        // );
      } else {
        if (logout) {
          this.event.publish(this.config.loginConfig.logoutEventKey);
        }
      }
      //},
      // () => {
      //   reject();
      // }
      //);
    });
  }

  /**
   * Method to get values from access token based on parameter value
   *
   * @param {ACCESS_TOKEN_KEYS} key - property of access token
   * @returns {*}
   * @memberof LoginProvider
   */
  public getValueFromAccessToken(key: ACCESS_TOKEN_KEYS): any {
    if (!this._accessToken) {
      return null;
    }

    let helper: JwtHelperService = new JwtHelperService();
    let payload = helper.decodeToken(this._accessToken);
    if (key == ACCESS_TOKEN_KEYS.EXPIRATION_TIME) {
      return payload[key] * 1000;
    } else {
      return payload[key];
    }
  }

  /**
 * Method to get values from access token based on parameter value
 *
 * @param {ACCESS_TOKEN_KEYS} key - property of access token
 * @returns {*}
 * @memberof LoginProvider
 */
  private getValueFromToken(token: any, key: ACCESS_TOKEN_KEYS): any {
    if (!token) {
      return null;
    }

    let helper: JwtHelperService = new JwtHelperService();
    let payload = helper.decodeToken(token);
    if (key == ACCESS_TOKEN_KEYS.EXPIRATION_TIME) {
      return payload[key] * 1000;
    } else {
      return payload[key];
    }
    // return token.expiration;
  }

  private refreshTokenBeforeExpire(token) {
    let jwtHelper: JwtHelperService = new JwtHelperService();
    let expTime = jwtHelper.getTokenExpirationDate(token);
    // let expTime = new Date(token.expiration);
    let diff = expTime.getTime() - new Date().getTime() - 60 * 1000;
    console.log("Refresh starts in ", diff);
    if (!this.refreshUpdateStarted) {
      this.refreshUpdateStarted = true;
      this.refreshTokenUpdater = setTimeout(() => {
        this.refreshUpdateStarted = false;
        this.autoLogin().catch(error => {
          this.event.publish(this.config.loginConfig.logoutEventKey);
        });
      }, diff);
    }
  }

  /**
   * Tells if the user is logged in.
   *
   * @returns {boolean}
   *
   * @memberof LoginProvider
   */
  public isLoggedIn(): boolean {
    return this._accessToken != null;
  }

  /**
  * Methods after logout was completed.
  *
  * @private
  * @memberof MyApp
  */
  private logoutEventComplete = () => {
    this._accessToken = undefined;
    if (this.refreshTokenUpdater) {
      clearTimeout(this.refreshTokenUpdater);
    }
  }
}
