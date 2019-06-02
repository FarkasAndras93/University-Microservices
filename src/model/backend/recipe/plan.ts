import { User } from "../user/user";
import { Recipe } from "./recipe";

/**
 * Plan class
 *
 * @export
 * @class Plan
 */
export class Plan {

    /**
     * Id of the plan.
     *
     * @type {number}
     * @memberof Plan
     */
    public id: number;

    /**
     * Date of the plan.
     *
     * @type {string}
     * @memberof Plan
     */
    public date: string;

    /**
     * Id of the user to whom belong the plan.
     *
     * @type {User}
     * @memberof Plan
     */
    public user: User;


    /**
     * Plan recipe
     *
     * @type {Recipe}
     * @memberof Plan
     */
    public recipe: Recipe;


    constructor(id: number, date: string, recipe: Recipe, user: User) {
        this.id = id;
        this.date = date;
        this.recipe = recipe;
        this.user = user;

    }
}