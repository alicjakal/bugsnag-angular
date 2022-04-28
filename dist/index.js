var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ErrorHandler, Injectable } from "@angular/core";
import { Bugsnag } from "bugsnag-js";
var BugsnagErrorHandler = (function (_super) {
    __extends(BugsnagErrorHandler, _super);
    function BugsnagErrorHandler(bugsnagClient) {
        var _this = _super.call(this) || this;
        _this.bugsnagClient = bugsnagClient;
        return _this;
    }
    BugsnagErrorHandler.prototype.handleError = function (error) {
        var handledState = {
            severity: "error",
            severityReason: { type: "unhandledException" },
            unhandled: true
        };
        var report = new this.bugsnagClient.BugsnagReport(error.name, error.message, this.bugsnagClient.BugsnagReport.getStacktrace(error), handledState);
        if (error.ngDebugContext) {
            report.updateMetaData("angular", {
                component: error.ngDebugContext.component,
                context: error.ngDebugContext.context
            });
        }
        this.bugsnagClient.notify(report);
        ErrorHandler.prototype.handleError.call(this, error);
    };
    return BugsnagErrorHandler;
}(ErrorHandler));
export { BugsnagErrorHandler };
BugsnagErrorHandler.decorators = [
    { type: Injectable },
];
/** @nocollapse */
BugsnagErrorHandler.ctorParameters = function () { return [
    { type: Bugsnag["default"] },
]; };
export default BugsnagErrorHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBQSxFQUFjLFVBQUEsRUFBVyxNQUFPLGVBQUEsQ0FBZ0I7QUFDekQsT0FBTyxFQUFFLE9BQUEsRUFBUSxNQUFPLFlBQUEsQ0FBYTtBQUdyQztJQUF5Qyx1Q0FBWTtJQUVuRCw2QkFBWSxhQUE2QjtRQUF6QyxZQUNFLGlCQUFPLFNBRVI7UUFEQyxLQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQzs7SUFDckMsQ0FBQztJQUVNLHlDQUFXLEdBQWxCLFVBQW1CLEtBQVU7UUFDM0IsSUFBTSxZQUFZLEdBQUc7WUFDbkIsUUFBUSxFQUFFLE9BQU87WUFDakIsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1lBQzlDLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUM7UUFFRixJQUFNLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUNqRCxLQUFLLENBQUMsSUFBSSxFQUNWLEtBQUssQ0FBQyxPQUFPLEVBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUNyRCxZQUFZLENBQ2IsQ0FBQztRQUVGLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFO2dCQUMvQixTQUFTLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTO2dCQUN6QyxPQUFPLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPO2FBQ3RDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxZQUFZLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFRSCwwQkFBQztBQUFELENBdENBLEFBc0NDLENBdEN3QyxZQUFZOztBQStCOUMsOEJBQVUsR0FBMEI7SUFDM0MsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0NBQ25CLENBQUM7QUFDRixrQkFBa0I7QUFDWCxrQ0FBYyxHQUFtRSxjQUFNLE9BQUE7SUFDOUYsRUFBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFNBQU8sQ0FBQSxFQUFHO0NBQ3hCLEVBRjZGLENBRTdGLENBQUM7QUFHRixlQVBlLG1CQUFBLENBQW9CIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6IkY6L3Bvd2Vyc2xpY2UvV09SS1NQQUNFL0dTRF9NT0JJTEUvYnVnc25hZy1hbmd1bGFyL3NyYy8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFcnJvckhhbmRsZXIsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQnVnc25hZyB9IGZyb20gXCJidWdzbmFnLWpzXCI7XG5cblxuZXhwb3J0IGNsYXNzIEJ1Z3NuYWdFcnJvckhhbmRsZXIgZXh0ZW5kcyBFcnJvckhhbmRsZXIge1xuICBwdWJsaWMgYnVnc25hZ0NsaWVudDogQnVnc25hZy5DbGllbnQ7XG4gIGNvbnN0cnVjdG9yKGJ1Z3NuYWdDbGllbnQ6IEJ1Z3NuYWcuQ2xpZW50KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmJ1Z3NuYWdDbGllbnQgPSBidWdzbmFnQ2xpZW50O1xuICB9XG5cbiAgcHVibGljIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBoYW5kbGVkU3RhdGUgPSB7XG4gICAgICBzZXZlcml0eTogXCJlcnJvclwiLFxuICAgICAgc2V2ZXJpdHlSZWFzb246IHsgdHlwZTogXCJ1bmhhbmRsZWRFeGNlcHRpb25cIiB9LFxuICAgICAgdW5oYW5kbGVkOiB0cnVlLFxuICAgIH07XG5cbiAgICBjb25zdCByZXBvcnQgPSBuZXcgdGhpcy5idWdzbmFnQ2xpZW50LkJ1Z3NuYWdSZXBvcnQoXG4gICAgICBlcnJvci5uYW1lLFxuICAgICAgZXJyb3IubWVzc2FnZSxcbiAgICAgIHRoaXMuYnVnc25hZ0NsaWVudC5CdWdzbmFnUmVwb3J0LmdldFN0YWNrdHJhY2UoZXJyb3IpLFxuICAgICAgaGFuZGxlZFN0YXRlLFxuICAgICk7XG5cbiAgICBpZiAoZXJyb3IubmdEZWJ1Z0NvbnRleHQpIHtcbiAgICAgIHJlcG9ydC51cGRhdGVNZXRhRGF0YShcImFuZ3VsYXJcIiwge1xuICAgICAgICBjb21wb25lbnQ6IGVycm9yLm5nRGVidWdDb250ZXh0LmNvbXBvbmVudCxcbiAgICAgICAgY29udGV4dDogZXJyb3IubmdEZWJ1Z0NvbnRleHQuY29udGV4dCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuYnVnc25hZ0NsaWVudC5ub3RpZnkocmVwb3J0KTtcbiAgICBFcnJvckhhbmRsZXIucHJvdG90eXBlLmhhbmRsZUVycm9yLmNhbGwodGhpcywgZXJyb3IpO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IEJ1Z3NuYWcuZGVmYXVsdCwgfSxcbl07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1Z3NuYWdFcnJvckhhbmRsZXI7XG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==