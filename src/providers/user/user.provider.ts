import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { GlobalUtils } from '../../utils/global-utils';
import { User } from '../../model/backend/user/user';
import { Events } from 'ionic-angular';
import { AppConfig, APP_CONFIG_TOKEN } from '../../app/app.config';
import { StorageProvider } from '../tehnical/storage/storage.provider';

@Injectable()
export class UserProvider {

  constructor(public http: HttpClient, private event: Events, @Inject(APP_CONFIG_TOKEN) private config: AppConfig,
    private storage: StorageProvider) {
    console.log('Hello RestProvider Provider');
  }

  //TODO - encode in md5 the password
  login(username: string, password: string): Promise<User> {
    this.event.publish(this.config.loginConfig.loggedInCompleteEventKey);
    return Promise.resolve(new User("Name1", "Username2", ""));

    // return new Promise((resolve, reject) => {
    //   let headers = new HttpHeaders();
    //   headers.append('Content-Type', 'application/json');

    //   this.http.post(this.config.basePath2 + "/login",
    //     { "username": username, "password": password }, { headers: headers }
    //   ).subscribe((loggedUser: any) => {
    //     this.event.publish(this.config.loginConfig.loggedInCompleteEventKey);
    //     this.storage.saveLocal(this.config.loginConfig.hasLoggedIn, true);
    //     this.storage.saveLocal(this.config.loginConfig.loggedInUser, loggedUser);
    //     return resolve(loggedUser);
    //   }, error => {
    //     console.error("Error while loggin in application", error);
    //     return reject(error);
    //   });
    // });
  }

  //TODO - encode in md5 the password
  register(name: string, username: string, password: string): Promise<User> {
    return Promise.resolve(new User("Name1", "Username1", "Password1"));

    // return new Promise((resolve, reject) => {
    //   let headers = new HttpHeaders();
    //   headers.append('Content-Type', 'application/json');

    //   this.http.post(this.config.basePath2 + "/register",
    //     { "name": name, "username": username, "password": password }, { headers: headers }
    //   ).subscribe((loggedUser: any) => {
    //     this.event.publish(this.config.loginConfig.loggedInCompleteEventKey);
    //     this.storage.saveLocal(this.config.loginConfig.hasLoggedIn, true);
    //     this.storage.saveLocal(this.config.loginConfig.loggedInUser, loggedUser);
    //     return resolve(loggedUser);
    //   }, error => {
    //     console.error("Error while loggin in application", error);
    //     return reject(error);
    //   });
    // });
  }

    /**
   * Method to return messages for logged user.
   * @returns {Promise<MyProduct[]>}
   * @memberof ProductProvider
   */
  async getAllUsers(): Promise<any> {
    let users: User[] = [];
    users.push(new User("Name1", undefined, undefined));
    users.push(new User("Name2", undefined, undefined));
    users.push(new User("Name3", undefined, undefined));
    users.push(new User("Name4", undefined, undefined));
    users.push(new User("Name5", undefined, undefined));
    users[0].id = "1";
    users[1].id = "2";
    users[2].id = "3";
    users[3].id = "4";
    users[4].id = "5";
    return Promise.resolve(users);

    // return new Promise((resolve, reject) => {
    //   let headers = new HttpHeaders();
    //   headers.append('Content-Type', 'application/json');

    //   this.http.get(this.config.basePath2 + "/users/get", { headers: headers }).subscribe((messages: MessageModel[]) => {
    //     return resolve(messages);
    //   }, error => {
    //     console.error("Error while getting my messages", error);
    //     return reject(error);
    //   });
    // });
  }

  // /**
  //  * Get all recipe for user.
  //  *
  //  * @param {number} userId
  //  * @returns {Promise<Recipe[]>}
  //  * @memberof RecipeProvider
  //  */
  // async getFromBackend2(): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     let headers = new HttpHeaders();
  //     headers.append('Content-Type', 'application/json');
  //     headers.append("responseType", "text");

  //     // this.http.get("http://localhost:8081/app2/wellcome", { headers: headers }).subscribe((result: String) => {
  //     this.http.get("http://ec2-3-14-66-141.us-east-2.compute.amazonaws.com:8081/app2/wellcome", { headers: headers }).subscribe((result: String) => {
  //       return resolve(result);
  //     }, error => {
  //       console.error("Error while getting recipe list", error);
  //       return reject(error);
  //     });
  //   });
  // }

}
