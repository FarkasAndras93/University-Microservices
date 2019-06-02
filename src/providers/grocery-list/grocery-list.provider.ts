// import { Injectable, Inject } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { GlobalUtils } from '../../utils/global-utils';
// import { GroceryList } from '../../model/backend/grocery-list/message';
// import { GroceryProduct } from '../../model/backend/product/grocery-product';
// import { MyProduct } from '../../model/backend/product/my-product';
// import { StorageProvider } from '../tehnical/storage/storage.provider';
// import { ProductProvider } from '../product/product.provider';
// import { AppConfig, APP_CONFIG_TOKEN } from '../../app/app.config';

// @Injectable()
// export class GroceryListProvider {

//   private apiUrl = 'https://restcountries.eu/rest/v2/all';

//   constructor(public http: HttpClient, private storage: StorageProvider, private productProvider: ProductProvider,
//     @Inject(APP_CONFIG_TOKEN) private config: AppConfig) {
//     console.log('Hello Grocery List Provider');
//   }

//   /**
//    * Method to get all grocery list from database for user.
//    *
//    * @returns {Promise<GroceryList[]>}
//    * @memberof GroceryListProvider
//    */
//   async getGroceryLists(): Promise<any> {
//     return new Promise((resolve, reject) => {
//       let headers = new HttpHeaders();
//       headers.append('Content-Type', 'application/json');

//       this.http.get(this.config.basePath + "/grocery/list/" + this.storage.getLoggedUser().id, { headers: headers }).subscribe((groceryLists: GroceryList[]) => {
//         groceryLists.forEach(groceryList => {
//           if(GlobalUtils.isUndefinedOrNull(groceryList.groceryProducts)) {
//             groceryList.groceryProducts = [];
//           }
//         })
//         return resolve(groceryLists);
//       }, error => {
//         console.error("Error while getting all grocery lists", error);
//         return reject(error);
//       });
//     });
//   }

//   /**
//    * Method to create grocery list for user.
//    *
//    * @param {GroceryList} groceryList
//    * @returns {Promise<GroceryList>}
//    * @memberof GroceryListProvider
//    */
//   createGroceryList(groceryList: GroceryList): Promise<GroceryList> {
//     return new Promise((resolve, reject) => {

//       //TODO - momentan removed
//       delete groceryList.date;

//       let headers = new HttpHeaders();
//       headers.append('Content-Type', 'application/json');

//       this.http.put(this.config.basePath + "/grocery/list/add", groceryList).subscribe((newGroceryList: GroceryList) => {
//         return resolve(newGroceryList);
//       }, error => {
//         console.error("Error while creating my product", error);
//         return reject(error);
//       });
//     });
//   }

//   /**
//    * Method to delete grocery list.
//    *
//    * @param {number} id
//    * @returns {Promise<boolean>}
//    * @memberof ProductProvider
//    */
//   removeGroceryList(groceryList: GroceryList): Promise<boolean> {
//     return new Promise((resolve, reject) => {
//       let headers = new HttpHeaders();
//       headers.append('Content-Type', 'application/json');

//       this.http.delete(this.config.basePath + "/grocery/delete/" + groceryList.id, { headers: headers }).subscribe((result: boolean) => {
//         return resolve(result);
//       }, error => {
//         console.error("Error while deleting grocery", error);
//         return reject(error);
//       });
//     })
//   }

//   /**
//    * Method to update grocery list accepted by property in database.
//    *
//    * @param {GroceryList} groceryList
//    * @returns {Promise<boolean>}
//    * @memberof GroceryListProvider
//    */
//   acceptGroceryList(groceryList: GroceryList): Promise<boolean> {
//     return new Promise((resolve, reject) => {
//       let headers = new HttpHeaders();
//       headers.append('Content-Type', 'application/json');

//       this.http.put(this.config.basePath + "/grocery/edit/", groceryList).subscribe((result: boolean) => {
//         if (GlobalUtils.isUndefinedOrNull(result)) {
//           return resolve(false);
//         } else {
//           return resolve(true);
//         }
//       }, error => {
//         console.error("Error while deleting grocery", error);
//         return reject(error);
//       });
//     })
//   }

// }
