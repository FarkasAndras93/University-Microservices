import { Product } from "./product";
import { MyProduct } from "./my-product";

/**
 * Product checked.
 *
 * @export
 * @class GroceryProduct
 */
export class GroceryProduct {

    /**
     * Id of the product check.
     *
     * @type {number}
     * @memberof GroceryProduct
     */
    public id: number;

    /**
     * Product for buy.
     *
     * @type {MyProduct}
     * @memberof GroceryProduct
     */
    public myProduct: MyProduct;

    /**
     * Type of the product.
     *
     * @type {boolean}
     * @memberof GroceryProduct
     */
    public checked: boolean;

    constructor(id: number, product: MyProduct, checked: boolean) {
        this.id= id;
        this.myProduct = product;
        this.checked = checked;
    }
}