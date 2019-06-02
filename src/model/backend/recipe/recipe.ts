import { RecipeNote } from "./recipe-note";
import { GlobalUtils } from "../../../utils/global-utils";
import { MyProduct } from "../product/my-product";
import { User } from "../user/user";

/**
 * Recipe class
 *
 * @export
 * @class Recipe
 */
export class Recipe {

    /**
     * Id of the recipe.
     *
     * @type {number}
     * @memberof Recipe
     */
    public id: number;

    /**
     * Name of the recipe.
     *
     * @type {string}
     * @memberof Recipe
     */
    public name: string;

    // /**
    //  * Key of the recipe.
    //  *
    //  * @type {number}
    //  * @memberof Recipe
    //  */
    // public key: string;

    /**
 * Description of the recipe
 *
 * @type {string}
 * @memberof Recipe
 */
    public description: string;

    /**
     * Id of the user to whom belong the recipe.
     *
     * @type {User}
     * @memberof Recipe
     */
    public user: User;


    /**
     * Products needed in the recipe.
     *
     * @type {Product[]}
     * @memberof Recipe
     */
    public products: MyProduct[];



    /**
     * Recipe notes.
     *
     * @type {RecipeNote}
     * @memberof Recipe
     */
    public notes: RecipeNote[];


    constructor(id: number, name: string, products: MyProduct[], description: string, notes: RecipeNote[], user: User) {
        this.id = id;
        this.name = name;
        // this.key = key;
        this.products = products;
        this.description = description;
        this.notes = GlobalUtils.isArrayNotNull(notes);
        this.user = user;

    }
}