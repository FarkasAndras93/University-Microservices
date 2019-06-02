import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../../model/backend/product/product';
import { GlobalUtils } from '../../utils/global-utils';
import { MyProduct, MYPRODUCT_TYPE } from '../../model/backend/product/my-product';
import { GroceryProduct } from '../../model/backend/product/grocery-product';
import { StorageProvider } from '../tehnical/storage/storage.provider';
// import { GroceryList } from '../../model/backend/grocery-list/message';
import { AppConfig, APP_CONFIG_TOKEN } from '../../app/app.config';

@Injectable()
export class ProductProvider {

  constructor(public http: HttpClient, private storage: StorageProvider, @Inject(APP_CONFIG_TOKEN) private config: AppConfig) {
  }

  /**
   * Method to return all product from the fridge.
   * @returns {Promise<MyProduct[]>}
   * @memberof ProductProvider
   */
  async getProductsInFrigider(): Promise<any> {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.get(this.config.basePath + "/myproducts/" + this.storage.getLoggedUser().id, { headers: headers }).subscribe((myProducts: MyProduct[]) => {
        return resolve(myProducts);
      }, error => {
        console.error("Error while getting my products", error);
        return reject(error);
      });
    });
  }

  /**
   * Method to get product for name.    
   *
   * @param {string} productName
   * @returns {Promise<Product>}
   * @memberof ProductProvider
   */
  async getProductForName(productName: string): Promise<Product> {
    // return this.http.get(this.apiUrl + "/name/product").toPromise();

    return undefined;
  }

  /**
   * Method to return product weight on sensor.
   *
   * @returns {Promise<number>}
   * @memberof ProductProvider
   */
  getProductWeightOnSensor(): Promise<number> {
    // return new Promise((resolve, reject) => {
    //   let url = this.storage.getConfig(this.appConfig.fridgeUrl);
    //   this.http.get(url + "/weight").subscribe((result: any) => {
    //     resolve(Math.round(result.weight));
    //   }, error => {
    //     console.error("Error while getting the value from sensor", error);
    //   });
    // });
    return Promise.resolve(5);
  }

  /**
   * Method to return all product from database.
   *
   * @returns {Promise<Product[]>}
   * @memberof ProductProvider
   */
  getAllProducts(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.get(this.config.basePath + "/products", { headers: headers }).subscribe((products: Product[]) => {
        return resolve(products);
      }, error => {
        console.error("Error while getting products", error);
        return reject(error);
      });
    });
  }

  /**
   * Method to remove product from the fridge.
   *
   * @param {number} id
   * @returns {Promise<boolean>}
   * @memberof ProductProvider
   */
  removeProductFromFridge(product: MyProduct): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.delete(this.config.basePath + "/myproduct/delete/" + product.id, { headers: headers }).subscribe((result: boolean) => {
        return resolve(result);
      }, error => {
        console.error("Error while deleting product", error);
        return reject(error);
      });
    })
  }

  /**
   * Method to edit product in the fridge.
   *
   * @param {number} id
   * @returns {Promise<boolean>}
   * @memberof ProductProvider
   */
  editProductInTheFridge(myProd: MyProduct, weight: number): Promise<boolean> {
    // return this.http.get(this.apiUrl + "edit/product").toPromise();

    return Promise.resolve(true);
  }

  /**
   * Method to check product in grocery list.
   *
   * @param {number} id
   * @param {boolean} state
   * @memberof ProductProvider
   */
  checkProductInGrocery(groceryList: any): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // let headers = new HttpHeaders();
      // headers.append('Content-Type', 'application/json');

      this.http.post(this.config.basePath + "/grocery/product/check", groceryList).subscribe((result: boolean) => {
        return resolve(result);
      }, error => {
        console.error("Error while checking product", error);
        return reject(error);
      });
    })
  }

  /**
   * Method to add product in fridge.
   *
   * @param {number} userId
   * @param {MyProduct} product
   * @memberof ProductProvider
   */
  addProductInFridge(product: MyProduct): Promise<MyProduct> {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.put(this.config.basePath + "/myproduct/add", product).subscribe((myProduct: MyProduct) => {
        return resolve(myProduct);
      }, error => {
        console.error("Error while creating my product", error);
        return reject(error);
      });
    });
  }

  /**
   * Method to create grocery products.
   *
   * @param {GroceryProduct[]} groceryProd
   * @returns {Promise<GroceryProduct[]>}
   * @memberof ProductProvider
   */
  createGroceryProducts(grocerylist: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.put(this.config.basePath + "/grocery/product/add", grocerylist).subscribe((editedGroceryList: any) => {
        return resolve(editedGroceryList);
      }, error => {
        console.error("Error while adding products in grocery list", error);
        return reject(error);
      });
    });
  }

  /**
   * Method to create product in database.
   *
   * @param {Product} groceryProd
   * @returns {Promise<Product>}
   * @memberof ProductProvider
   */
  createProductInDatabase(product: Product): Promise<Product> {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.put(this.config.basePath + "/product/add", product).subscribe((newProduct: Product) => {
        return resolve(newProduct);
      }, error => {
        console.error("Error while creating product", error);
        return reject(error);
      });
    });

    // return Promise.resolve(product);
  }

  /**
   * Remove product from database.
   *
   * @param {Product} groceryProd
   * @returns {Promise<boolean>}
   * @memberof ProductProvider
   */
  removeProductFromDatabase(product: Product): Promise<boolean> {

    return Promise.resolve(true);
  }

}
