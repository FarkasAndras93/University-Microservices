

export class LanguageModel {

    /**
     * Key of the language.
     * 
     * @type {string}
     * @memberof ButtonModel
     */
    key: string;

    /**
     * Name of the language.
     * 
     * @type {string}
     * @memberof ButtonModel
     */
    name: string;

    constructor(key: string, name: string) {
        this.key = key;
        this.name = name;
    }
}