import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageProvider } from '../tehnical/storage/storage.provider';
import { AppConfig, APP_CONFIG_TOKEN } from '../../app/app.config';
import { Plan } from '../../model/backend/recipe/plan';



@Injectable()
export class PlanProvider {

  constructor(public http: HttpClient, private storage: StorageProvider, @Inject(APP_CONFIG_TOKEN) private config: AppConfig) {
    console.log('Hello Plan Provider');
  }

  /**
   * Get plans.
   *
   * @param {string} startDate
   * @param {string} endDate
   * @returns {Promise<Recipe[]>}
   * @memberof PlanProvider
   */
  async getPlans(startDate: string, endDate: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.get(this.config.basePath + "/plan/" + this.storage.getLoggedUser().id + "/" + 
      startDate + "/" + endDate, { headers: headers }).subscribe((planList: Plan[]) => {
        return resolve(planList);
      }, error => {
        console.error("Error while getting plan list", error);
        return reject(error);
      });
    });
  }

  /**
   * Create plan for user.
   *
   * @param {Plan} recipe
   * @returns {Promise<Plan>}
   * @memberof RecipeProvider
   */
  createPlan(plan: Plan): Promise<Plan> {
    return new Promise((resolve, reject) => {

      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.put(this.config.basePath + "/plan/add", plan).subscribe((newPlan: Plan) => {
        return resolve(newPlan);
      }, error => {
        console.error("Error while creating plan", error);
        return reject(error);
      });
    });
  }

  // /**
  //  * Method to update existent recipe.
  //  *
  //  * @param {Recipe} recipe
  //  * @returns {Promise<Recipe>}
  //  * @memberof RecipeProvider
  //  */
  // updateRecipe(recipe: Recipe): Promise<Recipe> {
  //   return new Promise((resolve, reject) => {

  //     this.http.put(this.config.basePath + "/recipe/edit", recipe).subscribe((newRecipe: Recipe) => {
  //       if (GlobalUtils.isUndefinedOrNull(newRecipe)) {
  //         reject("Null");
  //       } else {
  //         return resolve(newRecipe);
  //       }
  //     }, error => {
  //       console.error("Error while creating my product", error);
  //       return reject(error);
  //     });
  //   });
  // }

  /**
   * Method to delete recipe.
   *
   * @param {id} planId
   * @returns {Promise<boolean>}
   * @memberof PlanProvider
   */
  deletePlan(planId: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.delete(this.config.basePath + "/plan/delete/" + planId, { headers: headers }).subscribe((result: boolean) => {
        return resolve(result);
      }, error => {
        console.error("Error while deleting recipe", error);
        return reject(error);
      });
    })
  }

  // /**
  //  * Method to create recipe note.
  //  *
  //  * @param {Recipe} recipeId
  //  * @param {RecipeNote} note
  //  * @memberof RecipeProvider
  //  */
  // createNote(recipe: Recipe): Promise<Recipe> {

  // }

}
