import { GlobalUtils } from "../../../utils/global-utils";

export class User {

    /**
     * Id of the user.
     *
     * @type {string}
     * @memberof User
     */
    public id: string;

    /**
     * Name of the firma.
     *
     * @type {string}
     * @memberof User
     */
    public name: string;

    /**
     * User name.
     *
     * @type {string}
     * @memberof User
     */
    public username: string;

    /**
     * Password of the user.
     *
     * @type {string}
     * @memberof User
     */
    public password: string;

    
    constructor(name: string, username: string, password: string) {
        this.name = name;
        this.username = username;
        this.password = password;
    }
}