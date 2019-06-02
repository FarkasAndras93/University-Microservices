import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from '../../model/backend/recipe/recipe';
import { GlobalUtils } from '../../utils/global-utils';
import { StorageProvider } from '../tehnical/storage/storage.provider';
import { AppConfig, APP_CONFIG_TOKEN } from '../../app/app.config';



@Injectable()
export class RecipeProvider {

  constructor(public http: HttpClient, private storage: StorageProvider, @Inject(APP_CONFIG_TOKEN) private config: AppConfig) {
    console.log('Hello Recipe Provider');
  }

  /**
   * Get all recipe for user.
   *
   * @param {number} userId
   * @returns {Promise<Recipe[]>}
   * @memberof RecipeProvider
   */
  async getRecipeList(userId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.get(this.config.basePath + "/recipe/list/" + this.storage.getLoggedUser().id, { headers: headers }).subscribe((recipeList: Recipe[]) => {
        recipeList.forEach(recipe => {
          if (GlobalUtils.isUndefinedOrNull(recipe.notes)) {
            recipe.notes = [];
          }
          if (GlobalUtils.isUndefinedOrNull(recipe.products)) {
            recipe.products = [];
          }
        })
        return resolve(recipeList);
      }, error => {
        console.error("Error while getting recipe list", error);
        return reject(error);
      });
    });
  }

  /**
   * Create recipe for user.
   *
   * @param {Recipe} recipe
   * @returns {Promise<boolean>}
   * @memberof RecipeProvider
   */
  createRecipe(recipe: Recipe): Promise<Recipe> {
    return new Promise((resolve, reject) => {

      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.put(this.config.basePath + "/recipe/add", recipe).subscribe((newRecipe: Recipe) => {
        return resolve(newRecipe);
      }, error => {
        console.error("Error while creating my product", error);
        return reject(error);
      });
    });
  }

  /**
   * Method to update existent recipe.
   *
   * @param {Recipe} recipe
   * @returns {Promise<Recipe>}
   * @memberof RecipeProvider
   */
  updateRecipe(recipe: Recipe): Promise<Recipe> {
    return new Promise((resolve, reject) => {

      this.http.put(this.config.basePath + "/recipe/edit", recipe).subscribe((newRecipe: Recipe) => {
        if (GlobalUtils.isUndefinedOrNull(newRecipe)) {
          reject("Null");
        } else {
          return resolve(newRecipe);
        }
      }, error => {
        console.error("Error while creating my product", error);
        return reject(error);
      });
    });
  }

  /**
   * Method to delete recipe.
   *
   * @param {Recipe} recipe
   * @returns {Promise<Recipe>}
   * @memberof RecipeProvider
   */
  deleteRecipe(recipe: Recipe): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.delete(this.config.basePath + "/recipe/delete/" + recipe.id, { headers: headers }).subscribe((result: boolean) => {
        return resolve(result);
      }, error => {
        console.error("Error while deleting recipe", error);
        return reject(error);
      });
    })
  }

  /**
   * Get random recipe for user.
   *
   * @param {number} userId
   * @returns {Promise<Recipe[]>}
   * @memberof RecipeProvider
   */
  async getRandomRecipe(userId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.get(this.config.basePath + "/recipe/random/" + this.storage.getLoggedUser().id, { headers: headers }).subscribe((recipe: Recipe) => {
        if (GlobalUtils.isUndefinedOrNull(recipe.notes)) {
          recipe.notes = [];
        }
        if (GlobalUtils.isUndefinedOrNull(recipe.products)) {
          recipe.products = [];
        }
        return resolve(recipe);
      }, error => {
        console.error("Error while getting recipe list", error);
        return reject(error);
      });
    });
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
