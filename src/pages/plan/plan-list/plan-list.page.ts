import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController } from 'ionic-angular';
import { HeaderModel, HEADER_COLORS } from '../../../model/frontend/common/HeaderModel';
import { ButtonModel } from '../../../model/frontend/common/ButtonModel';
import { HEADER_BUTTON_TYPE } from '../../../components/simple-app-header/simple-app-header.component';
import { ToastProvider } from '../../../providers/tehnical/toast/toast.provider';
import { GlobalUtils } from '../../../utils/global-utils';
import { StorageProvider } from '../../../providers/tehnical/storage/storage.provider';
import { Plan } from '../../../model/backend/recipe/plan';
import { PlanProvider } from '../../../providers/plan/plan.provider';
import { DatePipe } from '@angular/common';
// import { format } from 'date-fns';
import { GlobalConstants } from '../../../utils/global-constants';

@IonicPage()
@Component({
  selector: 'plan-list',
  templateUrl: 'plan-list.page.html'
})
export class PlanListPage {

  /**
   * Header model
   *
   * @type {HeaderModel}
   * @memberof PlanListPage
   */
  public headerModel: HeaderModel;

  /**
   * Grocery lists
   *
   * @type {Plan[]}
   * @memberof PlanListPage
   */
  public planList: Plan[];

  /**
   * Start date filter.
   *
   * @type {string}
   * @memberof PlanListPage
   */
  public startDate: string;

  /**
   * End date filter.
   *
   * @type {string}
   * @memberof PlanListPage
   */
  public endDate: string;


  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public planProvider: PlanProvider, private toast: ToastProvider,
    private storage: StorageProvider) {
    this.headerModel = new HeaderModel("Plan List", HEADER_COLORS.BASE, true, new ButtonModel(undefined, undefined, undefined, undefined, HEADER_BUTTON_TYPE.MENU_TOGGLE.toString()));
    this.planList = [];
    // this.startDate = format(new Date(), GlobalConstants.dateFormatPattern);
    // this.endDate = format(new Date().setDate(new Date().getDate() + 7), GlobalConstants.dateFormatPattern);
  }

  ngOnInit() {
    this.filterPlans();
  }

  public filterPlans() {
    this.planProvider.getPlans(this.startDate, this.endDate).then(plans => {
      this.planList = plans;
    }).catch(error => {
      console.error("Error while geting plans from backend!");
      this.toast.showErrorMessage("Error while geting plans from backend!");
    });
  }

  /**
   * Method to open grocery list.
   *
   * @memberof GroceryListPage
   */
  public openPlan(plan: Plan) {
    this.navCtrl.push("RecipeDetailPage", { "recipe": plan.recipe });
  }

  /**
   * Method to create a new grocery list.
   *
   * @memberof GroceryListPage
   */
  public createPlan() {
    let modal = this.modalCtrl.create('PlanNewPage');
    modal.present();
    modal.onDidDismiss(result => {
      if (!GlobalUtils.isUndefinedOrNull(result)) {
        this.planProvider.createPlan(result).then(newPlan => {
          // if (this.startDate <= format(new Date(newPlan.date), GlobalConstants.dateFormatPattern) &&
          //   this.endDate >= format(new Date(newPlan.date), GlobalConstants.dateFormatPattern)) {
          //   this.planList.push(newPlan);
          // }
          this.toast.showSuccessMessage("Plan was created.", undefined, false);
        }).catch(error => {
          this.toast.showErrorMessage("Failed to create plan.", undefined, false);
        })
      }
    });
  }

  /**
   * Method to delete grocery list.
   *
   * @param {Plan} plan
   * @memberof PlanListPage
   */
  public deletePlan(event: any, plan: Plan) {
    event.stopPropagation();
    this.planProvider.deletePlan(plan.id).then((value) => {
      if (value) {
        this.planList.splice(this.planList.indexOf(plan), 1);
      } else {
        this.toast.showErrorMessage("Failed to delete plan!");
      }
    }).catch(error => {
      console.log("Error while deleting plan!");
      this.toast.showErrorMessage("Error while deleting plan!");
    })
  }

}
