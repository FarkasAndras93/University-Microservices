import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, ViewController } from 'ionic-angular';
import { HeaderModel } from '../../../model/frontend/common/HeaderModel';
import { ButtonModel } from '../../../model/frontend/common/ButtonModel';
import { HEADER_BUTTON_TYPE } from '../../../components/simple-app-header/simple-app-header.component';
import { ToastProvider } from '../../../providers/tehnical/toast/toast.provider';
import { StorageProvider } from '../../../providers/tehnical/storage/storage.provider';
import { Plan } from '../../../model/backend/recipe/plan';
import { PlanProvider } from '../../../providers/plan/plan.provider';
import { RecipeProvider } from '../../../providers/recipe/recipe.provider';
// import { format } from 'date-fns';

@IonicPage()
@Component({
  selector: 'plan-new',
  templateUrl: 'plan-new.page.html'
})
export class PlanNewPage {

  /**
   * Header model
   *
   * @type {HeaderModel}
   * @memberof PlanNewPage
   */
  public headerModel: HeaderModel;

  /**
   * New plan
   *
   * @type {Plan[]}
   * @memberof PlanNewPage
   */
  public plan: Plan;


  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public planProvider: PlanProvider, private toast: ToastProvider,
    private storage: StorageProvider, public recipeProvider: RecipeProvider, public viewCtrl: ViewController) {
    this.headerModel = new HeaderModel("New Plan", undefined, true, undefined,
      new ButtonModel(undefined, undefined, undefined, undefined, HEADER_BUTTON_TYPE.CLOSE.toString()));
  }

  ngOnInit() {
    this.recipeProvider.getRandomRecipe(this.storage.getLoggedUser().id).then(recipe => {
      // this.plan = new Plan(undefined, format(new Date(), "YYYY-MM-DD"), recipe, this.storage.getLoggedUser());
    });
  }

  /**
   * Get new random recipe
   *
   * @memberof PlanNewPage
   */
  public newRandomRecipe() {
    this.recipeProvider.getRandomRecipe(this.storage.getLoggedUser().id).then(recipe => {
      this.plan.recipe = recipe;
    });
  }

  /**
   * Method to save plan.
   *
   * @memberof PlanNewPage
   */
  public savePlan() {
    this.viewCtrl.dismiss(this.plan);
  }

  /**
   * Method to dismiss modal.
   *
   * @memberof TaskQuestionPage
   */
  public dismissModal() {
    this.viewCtrl.dismiss();
  }
}
