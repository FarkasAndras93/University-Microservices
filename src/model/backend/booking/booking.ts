import { GlobalUtils } from "../../../utils/global-utils";

export class BookingModel {

    /**
     * Id of the grocery list.
     *
     * @type {string}
     * @memberof Message
     */
    public id: string;
    
    /**
     * First name of the person.
     *
     * @type {string}
     * @memberof Message
     */
    public firstName: string;

    /**
     * Last name of the person.
     *
     * @type {string}
     * @memberof Message
     */
    public lastName: string;

    /**
     * Phone number of the person.
     *
     * @type {string}
     * @memberof Message
     */
    public phone: string;

    /**
     * Plate number of the car.
     *
     * @type {string}
     * @memberof Message
     */
    public plateNumber: string;

    /**
     * Describe of the problem.
     *
     * @type {string}
     * @memberof Message
     */
    public description: string;

    //TODO - extra info?
    //TODO - tudjanak az adminok is elojegyezni, ha valaki telefonon hivta fel

    constructor(firstName: string, lastName: string, phone: string, plateNumber: string, description: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.plateNumber = plateNumber;
        this.description = description;
    }
}