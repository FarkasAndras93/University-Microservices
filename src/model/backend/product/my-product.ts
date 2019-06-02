import { Product, PRODUCT_TYPES } from "./product";
import { User } from "../user/user";

export enum MYPRODUCT_TYPE {
    FRIDGE = "FRIDGE",
    GROCERY = "GROCERY",
    RECIPE = "RECIPE"
}

/**
 * My products.
 *
 * @export
 * @class MyProduct
 * @extends {Product}
 */
export class MyProduct {

    /**
     * Id of my product
     *
     * @type {number}
     * @memberof MyProduct
     */
    public id: number;

    /**
     * Product reference
     *
     * @type {Product}
     * @memberof MyProduct
     */
    public product: Product;

    /**
     * User to whom belong the product.
     *
     * @type {User}
     * @memberof Recipe
     */
    public user: User;

    /**
     * Id of the user to whom belong the product.
     *
     * @type {number}
     * @memberof Recipe
     */
    public recipeId: number;

    /**
     * Weight of the product.
     *
     * @type {number}
     * @memberof MyProduct
     */
    public weight: number;

    /**
     * Type of the product.
     *
     * @type {PRODUCT_TYPES}
     * @memberof MyProduct
     */
    public myProductType: MYPRODUCT_TYPE;

    constructor(id: number, product: Product, user: User, recipeId: number, weight: number, myProductType: MYPRODUCT_TYPE) {
        this.id = id;
        this.product = product;
        this.weight = weight;
        this.user = user;
        this.myProductType = myProductType;
        this.recipeId = recipeId;
    }
}