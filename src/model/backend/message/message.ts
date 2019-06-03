import { User } from './../user/user';
import { GlobalUtils } from "../../../utils/global-utils";

export class MessageModel {

    /**
     * Id of the grocery list.
     *
     * @type {string}
     * @memberof Message
     */
    public id: string;
    
    /**
     * Name of the person.
     *
     * @type {string}
     * @memberof Message
     */
    public name: string;

    /**
     * Email of the person.
     *
     * @type {string}
     * @memberof Message
     */
    public email: string;

    /**
     * Phone number of the person.
     *
     * @type {string}
     * @memberof Message
     */
    public phone: string;

    /**
     * Subject of the message.
     *
     * @type {string}
     * @memberof Message
     */
    public subject: string;

    /**
     * Content of the message.
     *
     * @type {string}
     * @memberof Message
     */
    public message: string;

    public userId: string;

    constructor(name: string, phone: string, subject: string, message: string, email?: string, userId?: string) {
        this.name = name;
        this.phone = phone;
        this.subject = subject;
        this.message = message;
        if (!GlobalUtils.isUndefinedOrNull(email)){
            this.email = email;
        }
        if (!GlobalUtils.isUndefinedOrNull(userId)) {
            this.userId = userId;
        }
    }
}