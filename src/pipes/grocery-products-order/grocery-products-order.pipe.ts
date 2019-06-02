import { Pipe, PipeTransform } from '@angular/core';
import { GroceryProduct } from '../../model/backend/product/grocery-product';
import { GlobalUtils } from '../../utils/global-utils';

@Pipe({
  name: 'groceryProductsOrder',
  pure: false
})
export class GroceryProductsOrderPipe implements PipeTransform {

  /**
   * Orders grocery products by their check state.
   * 
   * @param {*} value 
   * @param {GroceryProduct[]} [args] 
   * @returns {GroceryProduct[]} 
   * @memberof GroceryProductsOrderPipe
   */
  transform(groceryList: Array<GroceryProduct>, args?: any[]): GroceryProduct[] {
    if (!GlobalUtils.isUndefinedOrNull(groceryList)) {
      groceryList.sort((grocery1: GroceryProduct, grocery2: GroceryProduct) => {
        if (grocery1.checked && !grocery2.checked) {
          return 1;
        } else if (!grocery1.checked && grocery2.checked) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    return groceryList;
  }
}
