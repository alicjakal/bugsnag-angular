import { ErrorHandler } from "@angular/core";
import { Bugsnag } from "bugsnag-js";
export declare class BugsnagErrorHandler extends ErrorHandler {
    bugsnagClient: Bugsnag.Client;
    constructor(bugsnagClient: Bugsnag.Client);
    handleError(error: any): void;
}
export default BugsnagErrorHandler;
