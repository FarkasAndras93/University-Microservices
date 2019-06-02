/**
 * Global Constants contains constants for the whole aplication
 *
 * @export
 * @class GlobalConstants
 */
export class GlobalConstants {

    /**
     * Custom string which can be used to delimitate combined string data
     *
     * @static
     * @type {string}
     * @memberof GlobalConstants
     */
    public static delimiter: string = "[delimiter]";

    /**
     * Custom String to identify a File URL in the chat
     */
    public static fileUrlIdentifier: string = "[file-url]";

    /**
     * Pettern to format dates
     *
     * @static
     * @type {string}
     * @memberof GlobalConstants
     */
    public static dateFormatPattern: string = "YYYY-MM-DD";

    /**
     * Date with seoncds format used by moment.js and date-fns
     *
     * @static
     * @type {string}
     * @memberof GlobalConstants
     */
    public static dateWithSecondsFormat: string = "YYYY-MM-DDTHH:mm:ss";

    /**
     * Task dates format pattern
     *
     * @static
     * @type {string}
     * @memberof GlobalConstants
     */
    public static taskDateFormat: string = "yyyy-MM-ddTHH:mm:ss";

    /**
     * Date format with time but without seconds
     *
     * @static
     * @type {string}
     * @memberof GlobalConstants
     */
    public static dateWithoutSecondsFormat: string = "YYYY-MM-DDTHH:mm";
}
