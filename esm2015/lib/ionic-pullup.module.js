/**
 * @fileoverview added by tsickle
 * Generated from: lib/ionic-pullup.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injectable } from '@angular/core';
import { IonicPullupComponent } from './ionic-pullup.component';
import { IonicPullupComponentTabComponent } from './ionic-pullup-tab.component';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
export class MyHammerConfig extends HammerGestureConfig {
    constructor() {
        super(...arguments);
        this.overrides = {
            pan: { direction: Hammer.DIRECTION_VERTICAL },
        };
    }
}
MyHammerConfig.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    MyHammerConfig.prototype.overrides;
}
export class IonicPullupModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtcHVsbHVwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXB1bGx1cC8iLCJzb3VyY2VzIjpbImxpYi9pb25pYy1wdWxsdXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEYsT0FBTyxLQUFLLE1BQU0sTUFBTSxVQUFVLENBQUM7QUFDbkMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHdkYsTUFBTSxPQUFPLGNBQWUsU0FBUSxtQkFBbUI7SUFEdkQ7O1FBRUUsY0FBUyxHQUFHO1lBQ1YsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRTtTQUM5QyxDQUFDO0lBQ0osQ0FBQzs7O1lBTEEsVUFBVTs7OztJQUVULG1DQUVFOztBQWdCSixNQUFNLE9BQU8saUJBQWlCOzs7WUFiN0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFFLG9CQUFvQixFQUFFLGdDQUFnQyxDQUFFO2dCQUN4RSxPQUFPLEVBQUUsRUFDUjtnQkFDRCxPQUFPLEVBQUUsQ0FBRSxvQkFBb0IsRUFBRSxnQ0FBZ0MsQ0FBRTtnQkFDbkUsT0FBTyxFQUFFLENBQUUsc0JBQXNCLENBQUU7Z0JBQ25DLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUscUJBQXFCO3dCQUM5QixRQUFRLEVBQUUsY0FBYztxQkFDekI7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJb25pY1B1bGx1cENvbXBvbmVudCB9IGZyb20gJy4vaW9uaWMtcHVsbHVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJb25pY1B1bGx1cENvbXBvbmVudFRhYkNvbXBvbmVudCB9IGZyb20gJy4vaW9uaWMtcHVsbHVwLXRhYi5jb21wb25lbnQnO1xuaW1wb3J0ICogYXMgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcbmltcG9ydCB7IEhhbW1lckdlc3R1cmVDb25maWcsIEhBTU1FUl9HRVNUVVJFX0NPTkZJRyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTXlIYW1tZXJDb25maWcgZXh0ZW5kcyBIYW1tZXJHZXN0dXJlQ29uZmlnIHtcbiAgb3ZlcnJpZGVzID0ge1xuICAgIHBhbjogeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fVkVSVElDQUwgfSxcbiAgfTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbIElvbmljUHVsbHVwQ29tcG9uZW50LCBJb25pY1B1bGx1cENvbXBvbmVudFRhYkNvbXBvbmVudCBdLFxuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGV4cG9ydHM6IFsgSW9uaWNQdWxsdXBDb21wb25lbnQsIElvbmljUHVsbHVwQ29tcG9uZW50VGFiQ29tcG9uZW50IF0sXG4gIHNjaGVtYXM6IFsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsXG4gICAgICB1c2VDbGFzczogTXlIYW1tZXJDb25maWcsXG4gICAgfSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJb25pY1B1bGx1cE1vZHVsZSB7IH1cbiJdfQ==