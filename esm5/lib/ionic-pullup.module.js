/**
 * @fileoverview added by tsickle
 * Generated from: lib/ionic-pullup.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injectable } from '@angular/core';
import { IonicPullupComponent } from './ionic-pullup.component';
import { IonicPullupComponentTabComponent } from './ionic-pullup-tab.component';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
var MyHammerConfig = /** @class */ (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            pan: { direction: Hammer.DIRECTION_VERTICAL },
        };
        return _this;
    }
    MyHammerConfig.decorators = [
        { type: Injectable }
    ];
    return MyHammerConfig;
}(HammerGestureConfig));
export { MyHammerConfig };
if (false) {
    /** @type {?} */
    MyHammerConfig.prototype.overrides;
}
var IonicPullupModule = /** @class */ (function () {
    function IonicPullupModule() {
    }
    IonicPullupModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IonicPullupComponent, IonicPullupComponentTabComponent],
                    imports: [],
                    exports: [IonicPullupComponent, IonicPullupComponentTabComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    providers: [
                        {
                            provide: HAMMER_GESTURE_CONFIG,
                            useClass: MyHammerConfig,
                        },
                    ]
                },] }
    ];
    return IonicPullupModule;
}());
export { IonicPullupModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtcHVsbHVwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXB1bGx1cC8iLCJzb3VyY2VzIjpbImxpYi9pb25pYy1wdWxsdXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hGLE9BQU8sS0FBSyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXZGO0lBQ29DLGtDQUFtQjtJQUR2RDtRQUFBLHFFQUtDO1FBSEMsZUFBUyxHQUFHO1lBQ1YsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRTtTQUM5QyxDQUFDOztJQUNKLENBQUM7O2dCQUxBLFVBQVU7O0lBS1gscUJBQUM7Q0FBQSxBQUxELENBQ29DLG1CQUFtQixHQUl0RDtTQUpZLGNBQWM7OztJQUN6QixtQ0FFRTs7QUFHSjtJQUFBO0lBYWlDLENBQUM7O2dCQWJqQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUUsb0JBQW9CLEVBQUUsZ0NBQWdDLENBQUU7b0JBQ3hFLE9BQU8sRUFBRSxFQUNSO29CQUNELE9BQU8sRUFBRSxDQUFFLG9CQUFvQixFQUFFLGdDQUFnQyxDQUFFO29CQUNuRSxPQUFPLEVBQUUsQ0FBRSxzQkFBc0IsQ0FBRTtvQkFDbkMsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxxQkFBcUI7NEJBQzlCLFFBQVEsRUFBRSxjQUFjO3lCQUN6QjtxQkFDRjtpQkFDRjs7SUFDZ0Msd0JBQUM7Q0FBQSxBQWJsQyxJQWFrQztTQUFyQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW9uaWNQdWxsdXBDb21wb25lbnQgfSBmcm9tICcuL2lvbmljLXB1bGx1cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW9uaWNQdWxsdXBDb21wb25lbnRUYWJDb21wb25lbnQgfSBmcm9tICcuL2lvbmljLXB1bGx1cC10YWIuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XG5pbXBvcnQgeyBIYW1tZXJHZXN0dXJlQ29uZmlnLCBIQU1NRVJfR0VTVFVSRV9DT05GSUcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE15SGFtbWVyQ29uZmlnIGV4dGVuZHMgSGFtbWVyR2VzdHVyZUNvbmZpZyB7XG4gIG92ZXJyaWRlcyA9IHtcbiAgICBwYW46IHsgZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX1ZFUlRJQ0FMIH0sXG4gIH07XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogWyBJb25pY1B1bGx1cENvbXBvbmVudCwgSW9uaWNQdWxsdXBDb21wb25lbnRUYWJDb21wb25lbnQgXSxcbiAgaW1wb3J0czogW1xuICBdLFxuICBleHBvcnRzOiBbIElvbmljUHVsbHVwQ29tcG9uZW50LCBJb25pY1B1bGx1cENvbXBvbmVudFRhYkNvbXBvbmVudCBdLFxuICBzY2hlbWFzOiBbIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogSEFNTUVSX0dFU1RVUkVfQ09ORklHLFxuICAgICAgdXNlQ2xhc3M6IE15SGFtbWVyQ29uZmlnLFxuICAgIH0sXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW9uaWNQdWxsdXBNb2R1bGUgeyB9XG4iXX0=