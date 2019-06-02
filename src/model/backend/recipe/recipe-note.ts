import { Recipe } from "./recipe";

/**
 * Note for the recipe.
 *
 * @export
 * @class RecipeNote
 */
export class RecipeNote {

    /**
     * Id of the recipe.
     *
     * @type {number}
     * @memberof RecipeNote
     */
    public id: number;

    /**
     * Text of the note.
     *
     * @type {string}
     * @memberof RecipeNotes
     */
    public text: string;

    /**
     * Description of the recipe
     *
     * @type {string}
     * @memberof RecipeNotes
     */
    public createdTime: string;

    constructor(id: number, text: string, createdTime: string) {
        this.text = text;
        this.createdTime = createdTime;
        this.id = id;
    }
}