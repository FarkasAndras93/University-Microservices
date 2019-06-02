import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Product } from '../../model/backend/product/product';
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

  login(username: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.post(this.config.basePath + "/login",
        { "username": username, "password": password }, { headers: headers }
      ).subscribe((loggedUser: any) => {
        this.event.publish(this.config.loginConfig.loggedInCompleteEventKey);
        this.storage.saveLocal(this.config.loginConfig.hasLoggedIn, true);
        this.storage.saveLocal(this.config.loginConfig.loggedInUser, loggedUser);
        return resolve(loggedUser);
      }, error => {
        console.error("Error while loggin in application", error);
        return reject(error);
      });
    });
  }

  register(username: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.post(this.config.basePath + "/register",
        { "username": username, "password": password }, { headers: headers }
      ).subscribe((loggedUser: any) => {
        this.event.publish(this.config.loginConfig.loggedInCompleteEventKey);
        this.storage.saveLocal(this.config.loginConfig.hasLoggedIn, true);
        this.storage.saveLocal(this.config.loginConfig.loggedInUser, loggedUser);
        return resolve(loggedUser);
      }, error => {
        console.error("Error while loggin in application", error);
        return reject(error);
      });
    });
  }

  /**
   * Get all recipe for user.
   *
   * @param {number} userId
   * @returns {Promise<Recipe[]>}
   * @memberof RecipeProvider
   */
  async getFromBackend2(): Promise<any> {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      headers.append("responseType", "text");

      // this.http.get("http://localhost:8081/app2/wellcome", { headers: headers }).subscribe((result: String) => {
      this.http.get("http://ec2-3-14-66-141.us-east-2.compute.amazonaws.com:8081/app2/wellcome", { headers: headers }).subscribe((result: String) => {
        return resolve(result);
      }, error => {
        console.error("Error while getting recipe list", error);
        return reject(error);
      });
    });
  }


  getProductWeightOnSensor(): Promise<number> {
    // return this.http.get(this.apiUrl + "sensor/product").toPromise();

    return Promise.resolve(GlobalUtils.getRandomNumberBetween(0, 2));
  }

  getAllProducts(): Promise<Product[]> {
    // return this.http.get(this.apiUrl + "sensor/product").toPromise();

    let products: Product[] = [];
    //   new Product(1, "Salami", PRODUCT_TYPES.MEATS),
    //   new Product(2, "Milk", PRODUCT_TYPES.DAIRY_PRODUCT),
    //   new Product(3, "Butter", PRODUCT_TYPES.DAIRY_PRODUCT),
    //   new Product(4, "Bread", PRODUCT_TYPES.GRAIN_PARTIES)
    // ]
    // products[0].id = 1;
    // products[1].id = 2;
    // products[2].id = 3;
    // products[3].id = 4;
    return Promise.resolve(products);
  }

}
