import { MyProduct } from "../../backend/product/my-product";
import { PRODUCT_TYPES } from "../../backend/product/product";
import { MYPRODUCT_TYPE } from "../../backend/product/my-product"

/**
 * Recipe products add.
 *
 * @export
 * @class RecipeProduct
 * @extends {MyProduct}
 */
export class RecipeProduct {

    /**
     * Product of recipe
     *
     * @type {MyProduct}
     * @memberof RecipeProduct
     */
    public myProduct: MyProduct;

    /**
     * Type of the product.
     *
     * @type {boolean}
     * @memberof GroceryProduct
     */
    public checked: boolean;

    constructor(checked: boolean, myProduct: MyProduct) {
        this.checked = checked;
        this.myProduct = myProduct;
    }
}