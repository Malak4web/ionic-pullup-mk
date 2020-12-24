/**
 * @fileoverview added by tsickle
 * Generated from: lib/ionic-pullup.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
ionic-pullup v4 for Ionic 4 and Angular 8

Copyright 2020 Ariel Faur (https://github.com/arielfaur)
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { ChangeDetectionStrategy, Component, EventEmitter, Renderer2, ViewChild, Output, Input, ContentChildren, QueryList, Inject } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import 'hammerjs';
/**
 * @record
 */
export function FooterMetadata() { }
if (false) {
    /** @type {?} */
    FooterMetadata.prototype.height;
    /** @type {?} */
    FooterMetadata.prototype.posY;
    /** @type {?} */
    FooterMetadata.prototype.lastPosY;
    /** @type {?|undefined} */
    FooterMetadata.prototype.toolbarDefaultHeight;
    /** @type {?|undefined} */
    FooterMetadata.prototype.toolbarDefaultExpandedPosition;
    /** @type {?|undefined} */
    FooterMetadata.prototype.toolbarUpperBoundary;
    /** @type {?|undefined} */
    FooterMetadata.prototype.toolbarLowerBoundary;
    /** @type {?|undefined} */
    FooterMetadata.prototype.ionContentRef;
}
/**
 * @record
 */
export function ViewMetadata() { }
if (false) {
    /** @type {?|undefined} */
    ViewMetadata.prototype.tabsRef;
    /** @type {?|undefined} */
    ViewMetadata.prototype.tabsHeight;
    /** @type {?|undefined} */
    ViewMetadata.prototype.hasBottomTabs;
    /** @type {?|undefined} */
    ViewMetadata.prototype.toolbarRef;
    /** @type {?|undefined} */
    ViewMetadata.prototype.toolbarHeight;
    /** @type {?|undefined} */
    ViewMetadata.prototype.bottomSpace;
}
/**
 * @record
 */
export function FooterTab() { }
if (false) {
    /** @type {?|undefined} */
    FooterTab.prototype.x;
    /** @type {?|undefined} */
    FooterTab.prototype.y;
    /** @type {?|undefined} */
    FooterTab.prototype.upperLeftRadius;
    /** @type {?|undefined} */
    FooterTab.prototype.upperRightRadius;
    /** @type {?|undefined} */
    FooterTab.prototype.backgroundColor;
    /** @type {?|undefined} */
    FooterTab.prototype.color;
    /** @type {?|undefined} */
    FooterTab.prototype.content;
}
/** @enum {number} */
var IonPullUpFooterState = {
    Collapsed: 0,
    Expanded: 1,
    Minimized: 2,
};
export { IonPullUpFooterState };
IonPullUpFooterState[IonPullUpFooterState.Collapsed] = 'Collapsed';
IonPullUpFooterState[IonPullUpFooterState.Expanded] = 'Expanded';
IonPullUpFooterState[IonPullUpFooterState.Minimized] = 'Minimized';
/** @enum {number} */
var IonPullUpFooterBehavior = {
    Hide: 0,
    Expand: 1,
};
export { IonPullUpFooterBehavior };
IonPullUpFooterBehavior[IonPullUpFooterBehavior.Hide] = 'Hide';
IonPullUpFooterBehavior[IonPullUpFooterBehavior.Expand] = 'Expand';
/**
 * @record
 */
export function DraggedOutputEvent() { }
if (false) {
    /** @type {?} */
    DraggedOutputEvent.prototype.delta;
    /** @type {?} */
    DraggedOutputEvent.prototype.toolbarAbsolutePosition;
}
var IonicPullupComponent = /** @class */ (function () {
    function IonicPullupComponent(platform, renderer, hammerConfig) {
        var _a, _b;
        this.platform = platform;
        this.renderer = renderer;
        this.hammerConfig = hammerConfig;
        this.stateChange = new EventEmitter();
        // TODO implemment
        /**
         *  Maximum expanded position - useful if there are top headers
         *  If not provided by default computes available screen minus tabs and headers
         */
        this.toolbarTopMargin = 0;
        /**
         *  Minimum position - useful to keep a part of the footer always visible at the bottom
         */
        this.minBottomVisible = 0;
        this.expanded = new EventEmitter();
        this.collapsed = new EventEmitter();
        this.minimized = new EventEmitter();
        /**
         * Outputs the amount of pixels the user has dragged positive or negative
         */
        this.dragged = new EventEmitter();
        this.footerMeta = {
            height: 0,
            posY: 0,
            lastPosY: 0
        };
        this.currentViewMeta = { bottomSpace: screen.height - window.innerHeight };
        // sets initial state
        this.initialState = (_a = this.initialState) !== null && _a !== void 0 ? _a : IonPullUpFooterState.Collapsed;
        this.defaultBehavior = (_b = this.defaultBehavior) !== null && _b !== void 0 ? _b : IonPullUpFooterBehavior.Expand;
    }
    /**
     * @return {?}
     */
    IonicPullupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // console.debug('ionic-pullup => Initializing footer...');
        var _this = this;
        window.addEventListener('orientationchange', (/**
         * @return {?}
         */
        function () {
            // console.debug('ionic-pullup => Changed orientation => updating');
            _this.updateUI();
            _this.collapse();
        }));
        this.platform.resume.subscribe((/**
         * @return {?}
         */
        function () {
            // console.debug('ionic-pullup => Resumed from background => updating');
            _this.updateUI();
            _this.collapse();
        }));
        // compute min boundary of toolbar depending on whether drawer is dockable
        this.footerMeta.toolbarLowerBoundary = this.dockable ? this.minBottomVisible : 0;
    };
    /**
     * @return {?}
     */
    IonicPullupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.computeDefaults();
        this.state = IonPullUpFooterState.Collapsed;
        this.updateUI();
    };
    Object.defineProperty(IonicPullupComponent.prototype, "expandedHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return window.innerHeight - this.currentViewMeta.toolbarHeight - this.currentViewMeta.tabsHeight;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IonicPullupComponent.prototype.computeDefaults = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.footerMeta.toolbarDefaultHeight = _this.childFooter.nativeElement.offsetHeight;
            _this.findIonicComponentsInPage();
            _this.dragElements.forEach((/**
             * @param {?} elem
             * @return {?}
             */
            function (elem) {
                /** @type {?} */
                var hammer = _this.hammerConfig.buildHammer(elem.el);
                hammer.on('pan panstart panend', (/**
                 * @param {?} ev
                 * @return {?}
                 */
                function (ev) {
                    _this.onPan(ev);
                }));
            }));
        }), 300);
    };
    /**
     * @return {?}
     */
    IonicPullupComponent.prototype.computeHeights = /**
     * @return {?}
     */
    function () {
        this.footerMeta.height = this.expandedHeight;
        this.footerMeta.toolbarDefaultExpandedPosition = -this.footerMeta.height + this.footerMeta.toolbarDefaultHeight + this.minBottomVisible;
        this.footerMeta.toolbarUpperBoundary = this.footerMeta.height - this.footerMeta.toolbarDefaultHeight - this.minBottomVisible;
        this.renderer.setStyle(this.childFooter.nativeElement, 'height', this.footerMeta.height + 'px');
        this.renderer.setStyle(this.childFooter.nativeElement, 'top', window.innerHeight - this.footerMeta.toolbarDefaultHeight - this.currentViewMeta.tabsHeight - this.minBottomVisible + "px");
        this.updateIonContentHeight();
        // TODO check if this is needed for native platform iOS/Android
        // this.renderer.setStyle(this.childFooter.nativeElement, 'bottom', this.currentViewMeta.tabsHeight + 'px');
    };
    /**
     * @param {?=} isInit
     * @return {?}
     */
    IonicPullupComponent.prototype.updateUI = /**
     * @param {?=} isInit
     * @return {?}
     */
    function (isInit) {
        var _this = this;
        if (isInit === void 0) { isInit = false; }
        if (!this.childFooter) {
            return;
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.computeHeights();
        }), 300);
        this.renderer.setStyle(this.childFooter.nativeElement, 'transition', 'none'); // avoids flickering when changing orientation
    };
    /**
     * @return {?}
     */
    IonicPullupComponent.prototype.expand = /**
     * @return {?}
     */
    function () {
        this.footerMeta.lastPosY = this.footerMeta.toolbarDefaultExpandedPosition;
        // reset ionContent scaling
        this.updateIonContentHeight(this.minBottomVisible - this.footerMeta.lastPosY);
        this.renderer.setStyle(this.childFooter.nativeElement, '-webkit-transform', "translate3d(0, " + this.footerMeta.lastPosY + "px, 0)");
        this.renderer.setStyle(this.childFooter.nativeElement, 'transform', "translate3d(0, " + this.footerMeta.lastPosY + "px, 0)");
        this.renderer.setStyle(this.childFooter.nativeElement, 'transition', '300ms ease-in-out');
        this.expanded.emit(null);
    };
    /**
     * @param {?=} isInit
     * @return {?}
     */
    IonicPullupComponent.prototype.collapse = /**
     * @param {?=} isInit
     * @return {?}
     */
    function (isInit) {
        var _this = this;
        if (isInit === void 0) { isInit = false; }
        if (!this.childFooter) {
            return;
        }
        this.footerMeta.lastPosY = 0;
        this.renderer.setStyle(this.childFooter.nativeElement, '-webkit-transform', "translate3d(0, " + this.footerMeta.lastPosY + "px, 0)");
        this.renderer.setStyle(this.childFooter.nativeElement, 'transform', "translate3d(0, " + this.footerMeta.lastPosY + "px, 0)");
        // reset ionContent scaling -> needs 300ms timeout to delay content resize
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.updateIonContentHeight(_this.minBottomVisible - _this.footerMeta.lastPosY); }), 300);
        if (!isInit) {
            this.collapsed.emit(null);
        }
    };
    /**
     * TODO
     */
    /**
     * TODO
     * @return {?}
     */
    IonicPullupComponent.prototype.minimize = /**
     * TODO
     * @return {?}
     */
    function () {
        this.footerMeta.lastPosY = this.footerMeta.height;
        this.renderer.setStyle(this.childFooter.nativeElement, '-webkit-transform', 'translate3d(0, ' + this.footerMeta.lastPosY + 'px, 0)');
        this.renderer.setStyle(this.childFooter.nativeElement, 'transform', 'translate3d(0, ' + this.footerMeta.lastPosY + 'px, 0)');
        this.minimized.emit(null);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    IonicPullupComponent.prototype.onTap = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        if (this.state === IonPullUpFooterState.Collapsed) {
            if (this.defaultBehavior === IonPullUpFooterBehavior.Hide) {
                this.state = IonPullUpFooterState.Minimized;
            }
            else {
                this.state = IonPullUpFooterState.Expanded;
            }
        }
        else {
            if (this.state === IonPullUpFooterState.Minimized) {
                if (this.defaultBehavior === IonPullUpFooterBehavior.Hide) {
                    this.state = IonPullUpFooterState.Collapsed;
                }
                else {
                    this.state = IonPullUpFooterState.Expanded;
                }
            }
            else {
                // footer is expanded
                this.state = this.initialState === IonPullUpFooterState.Minimized ? IonPullUpFooterState.Minimized : IonPullUpFooterState.Collapsed;
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    IonicPullupComponent.prototype.onPan = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.renderer.setStyle(this.childFooter.nativeElement, 'transition', 'none');
        e.preventDefault();
        switch (e.type) {
            case 'pan':
                this.footerMeta.posY = e.deltaY + this.footerMeta.lastPosY;
                // check for min and max boundaries of draggable toolbar
                this.footerMeta.posY = this.footerMeta.posY > this.footerMeta.toolbarLowerBoundary ? this.footerMeta.toolbarLowerBoundary :
                    (Math.abs(this.footerMeta.posY) > this.footerMeta.toolbarUpperBoundary ?
                        this.footerMeta.toolbarDefaultExpandedPosition :
                        this.footerMeta.posY);
                // ionContent scaling - FIX scrolling bug
                this.updateIonContentHeight(this.minBottomVisible - this.footerMeta.posY);
                this.renderer.setStyle(this.childFooter.nativeElement, '-webkit-transform', 'translate3d(0, ' + this.footerMeta.posY + 'px, 0)');
                this.renderer.setStyle(this.childFooter.nativeElement, 'transform', 'translate3d(0, ' + this.footerMeta.posY + 'px, 0)');
                break;
            case 'panend':
                this.renderer.setStyle(this.childFooter.nativeElement, 'transition', '300ms ease-in-out');
                this.footerMeta.lastPosY = this.footerMeta.posY;
                // ionContent scaling - FIX scrolling bug
                this.updateIonContentHeight(this.minBottomVisible - this.footerMeta.lastPosY);
                // emit last footer position after dragging ends
                /** @type {?} */
                var handle = this.dragElements.first;
                this.dragged.emit({
                    delta: this.footerMeta.lastPosY,
                    toolbarAbsolutePosition: handle ? handle.el.getBoundingClientRect() : null
                });
                // TODO auto dock
                // if (this.footerMeta.lastPosY > this.footerMeta.height - this.footerMeta.defaultHeight) {
                //   this.state =  IonPullUpFooterState.Collapsed;
                // }
                break;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    IonicPullupComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var _a, _b, _c, _d;
        if ((_b = (_a = changes.state) === null || _a === void 0 ? void 0 : _a.firstChange) !== null && _b !== void 0 ? _b : ((_c = changes.state) === null || _c === void 0 ? void 0 : _c.currentValue) === ((_d = changes.state) === null || _d === void 0 ? void 0 : _d.previousValue)) {
            return;
        }
        switch (this.state) {
            case IonPullUpFooterState.Collapsed:
                this.collapse();
                break;
            case IonPullUpFooterState.Expanded:
                this.expand();
                break;
            case IonPullUpFooterState.Minimized:
                this.minimize();
                break;
        }
        // TODO: fix hack due to BUG (https://github.com/angular/angular/issues/6005)
        window.setTimeout((/**
         * @return {?}
         */
        function () {
            _this.stateChange.emit(_this.state);
        }));
    };
    /**
     * Detect ionic components in page
     */
    /**
     * Detect ionic components in page
     * @private
     * @return {?}
     */
    IonicPullupComponent.prototype.findIonicComponentsInPage = /**
     * Detect ionic components in page
     * @private
     * @return {?}
     */
    function () {
        this.footerMeta.ionContentRef = this.childFooter.nativeElement.querySelector('ion-content');
        this.currentViewMeta.tabsRef = document.querySelector('ion-tab-bar');
        this.currentViewMeta.tabsHeight = this.currentViewMeta.tabsRef ? ((/** @type {?} */ (this.currentViewMeta.tabsRef))).offsetHeight : 0;
        // console.debug(this.currentViewMeta.tabsRef ? 'ionic-pullup => Tabs detected' : 'ionic.pullup => View has no tabs');
        if (!this.toolbarTopMargin) {
            /** @type {?} */
            var outletRef = document.querySelector('ion-router-outlet');
            if (outletRef) {
                /** @type {?} */
                var headerRef = outletRef.querySelector('ion-header');
                if (headerRef) {
                    this.currentViewMeta.toolbarRef = headerRef.querySelector('ion-toolbar');
                    this.currentViewMeta.toolbarHeight = this.currentViewMeta.toolbarRef.clientHeight;
                    // console.debug(this.currentViewMeta.toolbarRef ? `ionic-pullup => Toolbar detected` : 'ionic.pullup => View has no tabs');
                }
                else {
                    this.currentViewMeta.toolbarHeight = 0;
                }
            }
        }
        else {
            this.currentViewMeta.toolbarHeight = this.toolbarTopMargin;
        }
    };
    /**
     * Update inner ion-content component height when footer is expanded, collapsed or dragged
     * @param maxHeight maximum ionContent height to set
     */
    /**
     * Update inner ion-content component height when footer is expanded, collapsed or dragged
     * @private
     * @param {?=} maxHeight maximum ionContent height to set
     * @return {?}
     */
    IonicPullupComponent.prototype.updateIonContentHeight = /**
     * Update inner ion-content component height when footer is expanded, collapsed or dragged
     * @private
     * @param {?=} maxHeight maximum ionContent height to set
     * @return {?}
     */
    function (maxHeight) {
        if (!this.footerMeta.ionContentRef) {
            return;
        }
        /** @type {?} */
        var maxHeightUnits = maxHeight ? maxHeight + "px" : (this.minBottomVisible > 0 ? this.minBottomVisible + "px" : '100%');
        this.renderer.setStyle(this.footerMeta.ionContentRef, 'max-height', maxHeightUnits);
    };
    IonicPullupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-ionic-pullup',
                    template: "<div class=\"footer\" #footer>\n  <ng-content></ng-content>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".footer{left:0;right:0;position:fixed;z-index:999}"]
                }] }
    ];
    /** @nocollapse */
    IonicPullupComponent.ctorParameters = function () { return [
        { type: Platform },
        { type: Renderer2 },
        { type: HammerGestureConfig, decorators: [{ type: Inject, args: [HAMMER_GESTURE_CONFIG,] }] }
    ]; };
    IonicPullupComponent.propDecorators = {
        state: [{ type: Input }],
        stateChange: [{ type: Output }],
        initialState: [{ type: Input }],
        defaultBehavior: [{ type: Input }],
        toolbarTopMargin: [{ type: Input }],
        minBottomVisible: [{ type: Input }],
        dockable: [{ type: Input }],
        expanded: [{ type: Output }],
        collapsed: [{ type: Output }],
        minimized: [{ type: Output }],
        dragged: [{ type: Output }],
        childFooter: [{ type: ViewChild, args: ['footer', { static: true },] }],
        dragElements: [{ type: ContentChildren, args: ['ionDragFooter',] }]
    };
    return IonicPullupComponent;
}());
export { IonicPullupComponent };
if (false) {
    /** @type {?} */
    IonicPullupComponent.prototype.state;
    /** @type {?} */
    IonicPullupComponent.prototype.stateChange;
    /** @type {?} */
    IonicPullupComponent.prototype.initialState;
    /** @type {?} */
    IonicPullupComponent.prototype.defaultBehavior;
    /**
     *  Maximum expanded position - useful if there are top headers
     *  If not provided by default computes available screen minus tabs and headers
     * @type {?}
     */
    IonicPullupComponent.prototype.toolbarTopMargin;
    /**
     *  Minimum position - useful to keep a part of the footer always visible at the bottom
     * @type {?}
     */
    IonicPullupComponent.prototype.minBottomVisible;
    /**
     * If true, footer can be docked at the bottom
     * @type {?}
     */
    IonicPullupComponent.prototype.dockable;
    /** @type {?} */
    IonicPullupComponent.prototype.expanded;
    /** @type {?} */
    IonicPullupComponent.prototype.collapsed;
    /** @type {?} */
    IonicPullupComponent.prototype.minimized;
    /**
     * Outputs the amount of pixels the user has dragged positive or negative
     * @type {?}
     */
    IonicPullupComponent.prototype.dragged;
    /** @type {?} */
    IonicPullupComponent.prototype.childFooter;
    /** @type {?} */
    IonicPullupComponent.prototype.dragElements;
    /**
     * @type {?}
     * @protected
     */
    IonicPullupComponent.prototype.footerMeta;
    /**
     * @type {?}
     * @protected
     */
    IonicPullupComponent.prototype.currentViewMeta;
    /**
     * @type {?}
     * @private
     */
    IonicPullupComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    IonicPullupComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    IonicPullupComponent.prototype.hammerConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtcHVsbHVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljLXB1bGx1cC8iLCJzb3VyY2VzIjpbImxpYi9pb25pYy1wdWxsdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXNELGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlNLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RixPQUFPLFVBQVUsQ0FBQzs7OztBQUVsQixvQ0FTQzs7O0lBUkMsZ0NBQWU7O0lBQ2YsOEJBQWE7O0lBQ2Isa0NBQWlCOztJQUNqQiw4Q0FBOEI7O0lBQzlCLHdEQUF3Qzs7SUFDeEMsOENBQThCOztJQUM5Qiw4Q0FBOEI7O0lBQzlCLHVDQUFvQjs7Ozs7QUFHdEIsa0NBT0M7OztJQU5DLCtCQUFrQjs7SUFDbEIsa0NBQW9COztJQUNwQixxQ0FBd0I7O0lBQ3hCLGtDQUFxQjs7SUFDckIscUNBQXVCOztJQUN2QixtQ0FBcUI7Ozs7O0FBR3ZCLCtCQVFDOzs7SUFQQyxzQkFBVzs7SUFDWCxzQkFBVzs7SUFDWCxvQ0FBeUI7O0lBQ3pCLHFDQUEwQjs7SUFDMUIsb0NBQXlCOztJQUN6QiwwQkFBZTs7SUFDZiw0QkFBaUI7OztBQUduQixJQUFZLG9CQUFvQjtJQUM5QixTQUFTLEdBQUk7SUFDYixRQUFRLEdBQUk7SUFDWixTQUFTLEdBQUk7RUFDZDs7Ozs7O0FBRUQsSUFBWSx1QkFBdUI7SUFDakMsSUFBSSxHQUFBO0lBQ0osTUFBTSxHQUFBO0VBQ1A7Ozs7Ozs7QUFFRCx3Q0FHQzs7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S04sTUFBTTs4QkFFTixTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQkFDcEMsZUFBZSxTQUFDLGVBQWU7O0lBb1FsQywyQkFBQztDQUFBLEFBOVNELElBOFNDO1NBeFNZLG9CQUFvQjs7O0lBRS9CLHFDQUFxQzs7SUFDckMsMkNBQXFHOztJQUVyRyw0Q0FBNEM7O0lBQzVDLCtDQUFrRDs7Ozs7O0lBUWxELGdEQUE4Qjs7Ozs7SUFLOUIsZ0RBQThCOzs7OztJQUs5Qix3Q0FBMkI7O0lBRTNCLHdDQUE2Qzs7SUFDN0MseUNBQThDOztJQUM5Qyx5Q0FBOEM7Ozs7O0lBSzlDLHVDQUEyRDs7SUFFM0QsMkNBQW1EOztJQUNuRCw0Q0FBaUU7Ozs7O0lBRWpFLDBDQUFxQzs7Ozs7SUFDckMsK0NBQXdDOzs7OztJQUd0Qyx3Q0FBMEI7Ozs7O0lBQzFCLHdDQUEyQjs7Ozs7SUFDM0IsNENBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiLypcbmlvbmljLXB1bGx1cCB2NCBmb3IgSW9uaWMgNCBhbmQgQW5ndWxhciA4XG5cbkNvcHlyaWdodCAyMDIwIEFyaWVsIEZhdXIgKGh0dHBzOi8vZ2l0aHViLmNvbS9hcmllbGZhdXIpXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgUmVuZGVyZXIyLCBWaWV3Q2hpbGQsIE91dHB1dCwgSW5wdXQsIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IEhBTU1FUl9HRVNUVVJFX0NPTkZJRywgSGFtbWVyR2VzdHVyZUNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0ICdoYW1tZXJqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9vdGVyTWV0YWRhdGEge1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgcG9zWTogbnVtYmVyO1xuICBsYXN0UG9zWTogbnVtYmVyO1xuICB0b29sYmFyRGVmYXVsdEhlaWdodD86IG51bWJlcjtcbiAgdG9vbGJhckRlZmF1bHRFeHBhbmRlZFBvc2l0aW9uPzogbnVtYmVyO1xuICB0b29sYmFyVXBwZXJCb3VuZGFyeT86IG51bWJlcjtcbiAgdG9vbGJhckxvd2VyQm91bmRhcnk/OiBudW1iZXI7XG4gIGlvbkNvbnRlbnRSZWY/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlld01ldGFkYXRhIHtcbiAgdGFic1JlZj86IEVsZW1lbnQ7XG4gIHRhYnNIZWlnaHQ/OiBudW1iZXI7XG4gIGhhc0JvdHRvbVRhYnM/OiBib29sZWFuO1xuICB0b29sYmFyUmVmPzogRWxlbWVudDtcbiAgdG9vbGJhckhlaWdodD86IG51bWJlcjtcbiAgYm90dG9tU3BhY2U/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9vdGVyVGFiIHtcbiAgeD86IG51bWJlcjtcbiAgeT86IG51bWJlcjtcbiAgdXBwZXJMZWZ0UmFkaXVzPzogbnVtYmVyO1xuICB1cHBlclJpZ2h0UmFkaXVzPzogbnVtYmVyO1xuICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBjb250ZW50Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBJb25QdWxsVXBGb290ZXJTdGF0ZSB7XG4gIENvbGxhcHNlZCA9IDAsXG4gIEV4cGFuZGVkID0gMSxcbiAgTWluaW1pemVkID0gMlxufVxuXG5leHBvcnQgZW51bSBJb25QdWxsVXBGb290ZXJCZWhhdmlvciB7XG4gIEhpZGUsXG4gIEV4cGFuZFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERyYWdnZWRPdXRwdXRFdmVudCB7XG4gIGRlbHRhOiBudW1iZXI7XG4gIHRvb2xiYXJBYnNvbHV0ZVBvc2l0aW9uOiBET01SZWN0O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItaW9uaWMtcHVsbHVwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lvbmljLXB1bGx1cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lvbmljLXB1bGx1cC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgSW9uaWNQdWxsdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgc3RhdGU6IElvblB1bGxVcEZvb3RlclN0YXRlO1xuICBAT3V0cHV0KCkgc3RhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxJb25QdWxsVXBGb290ZXJTdGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPElvblB1bGxVcEZvb3RlclN0YXRlPigpO1xuXG4gIEBJbnB1dCgpIGluaXRpYWxTdGF0ZTogSW9uUHVsbFVwRm9vdGVyU3RhdGU7ICAgICAgICAgIC8vIFRPRE8gaW1wbGVtbWVudFxuICBASW5wdXQoKSBkZWZhdWx0QmVoYXZpb3I6IElvblB1bGxVcEZvb3RlckJlaGF2aW9yOyAgICAvLyBUT0RPIGltcGxlbW1lbnRcbiAgXG5cblxuICAvKipcbiAgICogIE1heGltdW0gZXhwYW5kZWQgcG9zaXRpb24gLSB1c2VmdWwgaWYgdGhlcmUgYXJlIHRvcCBoZWFkZXJzXG4gICAqICBJZiBub3QgcHJvdmlkZWQgYnkgZGVmYXVsdCBjb21wdXRlcyBhdmFpbGFibGUgc2NyZWVuIG1pbnVzIHRhYnMgYW5kIGhlYWRlcnNcbiAgICovXG4gIEBJbnB1dCgpIHRvb2xiYXJUb3BNYXJnaW4gPSAwO1xuXG4gIC8qKlxuICAgKiAgTWluaW11bSBwb3NpdGlvbiAtIHVzZWZ1bCB0byBrZWVwIGEgcGFydCBvZiB0aGUgZm9vdGVyIGFsd2F5cyB2aXNpYmxlIGF0IHRoZSBib3R0b21cbiAgICovXG4gIEBJbnB1dCgpIG1pbkJvdHRvbVZpc2libGUgPSAwO1xuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBmb290ZXIgY2FuIGJlIGRvY2tlZCBhdCB0aGUgYm90dG9tXG4gICAqL1xuICBASW5wdXQoKSBkb2NrYWJsZTogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgZXhwYW5kZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNvbGxhcHNlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgbWluaW1pemVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIE91dHB1dHMgdGhlIGFtb3VudCBvZiBwaXhlbHMgdGhlIHVzZXIgaGFzIGRyYWdnZWQgcG9zaXRpdmUgb3IgbmVnYXRpdmVcbiAgICovXG4gIEBPdXRwdXQoKSBkcmFnZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnZ2VkT3V0cHV0RXZlbnQ+KCk7XG5cbiAgQFZpZXdDaGlsZCgnZm9vdGVyJywgeyBzdGF0aWM6IHRydWUgfSkgY2hpbGRGb290ZXI7XG4gIEBDb250ZW50Q2hpbGRyZW4oJ2lvbkRyYWdGb290ZXInKSBkcmFnRWxlbWVudHMgITogUXVlcnlMaXN0PGFueT47XG5cbiAgcHJvdGVjdGVkIGZvb3Rlck1ldGE6IEZvb3Rlck1ldGFkYXRhO1xuICBwcm90ZWN0ZWQgY3VycmVudFZpZXdNZXRhOiBWaWV3TWV0YWRhdGE7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBJbmplY3QoSEFNTUVSX0dFU1RVUkVfQ09ORklHKSBwcml2YXRlIGhhbW1lckNvbmZpZzogSGFtbWVyR2VzdHVyZUNvbmZpZykge1xuICAgIHRoaXMuZm9vdGVyTWV0YSA9IHtcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIHBvc1k6IDAsXG4gICAgICBsYXN0UG9zWTogMFxuICAgIH07XG4gICAgdGhpcy5jdXJyZW50Vmlld01ldGEgPSB7IGJvdHRvbVNwYWNlOiBzY3JlZW4uaGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0IH07XG5cbiAgICAvLyBzZXRzIGluaXRpYWwgc3RhdGVcbiAgICB0aGlzLmluaXRpYWxTdGF0ZSA9IHRoaXMuaW5pdGlhbFN0YXRlID8/IElvblB1bGxVcEZvb3RlclN0YXRlLkNvbGxhcHNlZDtcbiAgICB0aGlzLmRlZmF1bHRCZWhhdmlvciA9IHRoaXMuZGVmYXVsdEJlaGF2aW9yID8/IElvblB1bGxVcEZvb3RlckJlaGF2aW9yLkV4cGFuZDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUuZGVidWcoJ2lvbmljLXB1bGx1cCA9PiBJbml0aWFsaXppbmcgZm9vdGVyLi4uJyk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmRlYnVnKCdpb25pYy1wdWxsdXAgPT4gQ2hhbmdlZCBvcmllbnRhdGlvbiA9PiB1cGRhdGluZycpO1xuICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgdGhpcy5jb2xsYXBzZSgpO1xuICAgIH0pO1xuICAgIHRoaXMucGxhdGZvcm0ucmVzdW1lLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmRlYnVnKCdpb25pYy1wdWxsdXAgPT4gUmVzdW1lZCBmcm9tIGJhY2tncm91bmQgPT4gdXBkYXRpbmcnKTtcbiAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgIHRoaXMuY29sbGFwc2UoKTtcbiAgICB9KTtcblxuICAgIC8vIGNvbXB1dGUgbWluIGJvdW5kYXJ5IG9mIHRvb2xiYXIgZGVwZW5kaW5nIG9uIHdoZXRoZXIgZHJhd2VyIGlzIGRvY2thYmxlXG4gICAgdGhpcy5mb290ZXJNZXRhLnRvb2xiYXJMb3dlckJvdW5kYXJ5ID0gdGhpcy5kb2NrYWJsZSA/IHRoaXMubWluQm90dG9tVmlzaWJsZSA6IDA7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5jb21wdXRlRGVmYXVsdHMoKTtcblxuICAgIHRoaXMuc3RhdGUgPSBJb25QdWxsVXBGb290ZXJTdGF0ZS5Db2xsYXBzZWQ7XG5cbiAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGV4cGFuZGVkSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMuY3VycmVudFZpZXdNZXRhLnRvb2xiYXJIZWlnaHQgLSB0aGlzLmN1cnJlbnRWaWV3TWV0YS50YWJzSGVpZ2h0O1xuICB9XG5cbiAgY29tcHV0ZURlZmF1bHRzKCkge1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmZvb3Rlck1ldGEudG9vbGJhckRlZmF1bHRIZWlnaHQgPSB0aGlzLmNoaWxkRm9vdGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICB0aGlzLmZpbmRJb25pY0NvbXBvbmVudHNJblBhZ2UoKTtcblxuICAgICAgdGhpcy5kcmFnRWxlbWVudHMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgY29uc3QgaGFtbWVyID0gdGhpcy5oYW1tZXJDb25maWcuYnVpbGRIYW1tZXIoZWxlbS5lbCk7XG4gICAgICAgIGhhbW1lci5vbigncGFuIHBhbnN0YXJ0IHBhbmVuZCcsIChldikgPT4ge1xuICAgICAgICAgIHRoaXMub25QYW4oZXYpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBjb21wdXRlSGVpZ2h0cygpIHtcbiAgICB0aGlzLmZvb3Rlck1ldGEuaGVpZ2h0ID0gdGhpcy5leHBhbmRlZEhlaWdodDtcbiAgICB0aGlzLmZvb3Rlck1ldGEudG9vbGJhckRlZmF1bHRFeHBhbmRlZFBvc2l0aW9uID0gLXRoaXMuZm9vdGVyTWV0YS5oZWlnaHQgKyB0aGlzLmZvb3Rlck1ldGEudG9vbGJhckRlZmF1bHRIZWlnaHQgKyB0aGlzLm1pbkJvdHRvbVZpc2libGU7XG4gICAgdGhpcy5mb290ZXJNZXRhLnRvb2xiYXJVcHBlckJvdW5kYXJ5ID0gdGhpcy5mb290ZXJNZXRhLmhlaWdodCAtIHRoaXMuZm9vdGVyTWV0YS50b29sYmFyRGVmYXVsdEhlaWdodCAtIHRoaXMubWluQm90dG9tVmlzaWJsZTtcbiAgICBcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY2hpbGRGb290ZXIubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIHRoaXMuZm9vdGVyTWV0YS5oZWlnaHQgKyAncHgnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY2hpbGRGb290ZXIubmF0aXZlRWxlbWVudCwgJ3RvcCcsXG4gICAgICBgJHt3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLmZvb3Rlck1ldGEudG9vbGJhckRlZmF1bHRIZWlnaHQgLSB0aGlzLmN1cnJlbnRWaWV3TWV0YS50YWJzSGVpZ2h0IC0gdGhpcy5taW5Cb3R0b21WaXNpYmxlfXB4YFxuICAgICk7XG5cbiAgICB0aGlzLnVwZGF0ZUlvbkNvbnRlbnRIZWlnaHQoKTtcblxuICAgIC8vIFRPRE8gY2hlY2sgaWYgdGhpcyBpcyBuZWVkZWQgZm9yIG5hdGl2ZSBwbGF0Zm9ybSBpT1MvQW5kcm9pZFxuICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jaGlsZEZvb3Rlci5uYXRpdmVFbGVtZW50LCAnYm90dG9tJywgdGhpcy5jdXJyZW50Vmlld01ldGEudGFic0hlaWdodCArICdweCcpO1xuICB9XG5cbiAgdXBkYXRlVUkoaXNJbml0OiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZiAoIXRoaXMuY2hpbGRGb290ZXIpIHsgcmV0dXJuOyB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY29tcHV0ZUhlaWdodHMoKTtcbiAgICB9LCAzMDApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jaGlsZEZvb3Rlci5uYXRpdmVFbGVtZW50LCAndHJhbnNpdGlvbicsICdub25lJyk7ICAvLyBhdm9pZHMgZmxpY2tlcmluZyB3aGVuIGNoYW5naW5nIG9yaWVudGF0aW9uXG4gIH1cblxuICBleHBhbmQoKSB7XG4gICAgdGhpcy5mb290ZXJNZXRhLmxhc3RQb3NZID0gdGhpcy5mb290ZXJNZXRhLnRvb2xiYXJEZWZhdWx0RXhwYW5kZWRQb3NpdGlvbjtcblxuICAgIC8vIHJlc2V0IGlvbkNvbnRlbnQgc2NhbGluZ1xuICAgIHRoaXMudXBkYXRlSW9uQ29udGVudEhlaWdodCh0aGlzLm1pbkJvdHRvbVZpc2libGUgLSB0aGlzLmZvb3Rlck1ldGEubGFzdFBvc1kpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNoaWxkRm9vdGVyLm5hdGl2ZUVsZW1lbnQsICctd2Via2l0LXRyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgwLCAke3RoaXMuZm9vdGVyTWV0YS5sYXN0UG9zWX1weCwgMClgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY2hpbGRGb290ZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgwLCAke3RoaXMuZm9vdGVyTWV0YS5sYXN0UG9zWX1weCwgMClgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY2hpbGRGb290ZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCAnMzAwbXMgZWFzZS1pbi1vdXQnKTtcblxuICAgIHRoaXMuZXhwYW5kZWQuZW1pdChudWxsKTtcbiAgfVxuXG4gIGNvbGxhcHNlKGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgaWYgKCF0aGlzLmNoaWxkRm9vdGVyKSB7IHJldHVybjsgfVxuICAgIHRoaXMuZm9vdGVyTWV0YS5sYXN0UG9zWSA9IDA7XG5cbiBcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY2hpbGRGb290ZXIubmF0aXZlRWxlbWVudCwgJy13ZWJraXQtdHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKDAsICR7dGhpcy5mb290ZXJNZXRhLmxhc3RQb3NZfXB4LCAwKWApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jaGlsZEZvb3Rlci5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKDAsICR7dGhpcy5mb290ZXJNZXRhLmxhc3RQb3NZfXB4LCAwKWApO1xuXG4gICAgLy8gcmVzZXQgaW9uQ29udGVudCBzY2FsaW5nIC0+IG5lZWRzIDMwMG1zIHRpbWVvdXQgdG8gZGVsYXkgY29udGVudCByZXNpemVcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlSW9uQ29udGVudEhlaWdodCh0aGlzLm1pbkJvdHRvbVZpc2libGUgLSB0aGlzLmZvb3Rlck1ldGEubGFzdFBvc1kpLCAzMDApO1xuXG4gICAgaWYgKCFpc0luaXQpIHsgdGhpcy5jb2xsYXBzZWQuZW1pdChudWxsKTsgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE9cbiAgICovXG4gIG1pbmltaXplKCkge1xuICAgIHRoaXMuZm9vdGVyTWV0YS5sYXN0UG9zWSA9IHRoaXMuZm9vdGVyTWV0YS5oZWlnaHQ7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNoaWxkRm9vdGVyLm5hdGl2ZUVsZW1lbnQsICctd2Via2l0LXRyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgwLCAnICsgdGhpcy5mb290ZXJNZXRhLmxhc3RQb3NZICsgJ3B4LCAwKScpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jaGlsZEZvb3Rlci5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKDAsICcgKyB0aGlzLmZvb3Rlck1ldGEubGFzdFBvc1kgKyAncHgsIDApJyk7XG5cbiAgICB0aGlzLm1pbmltaXplZC5lbWl0KG51bGwpO1xuICB9XG5cblxuICBvblRhcChlOiBhbnkpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gSW9uUHVsbFVwRm9vdGVyU3RhdGUuQ29sbGFwc2VkKSB7XG4gICAgICBpZiAodGhpcy5kZWZhdWx0QmVoYXZpb3IgPT09IElvblB1bGxVcEZvb3RlckJlaGF2aW9yLkhpZGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IElvblB1bGxVcEZvb3RlclN0YXRlLk1pbmltaXplZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBJb25QdWxsVXBGb290ZXJTdGF0ZS5FeHBhbmRlZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IElvblB1bGxVcEZvb3RlclN0YXRlLk1pbmltaXplZCkge1xuICAgICAgICBpZiAodGhpcy5kZWZhdWx0QmVoYXZpb3IgPT09IElvblB1bGxVcEZvb3RlckJlaGF2aW9yLkhpZGUpIHtcbiAgICAgICAgICB0aGlzLnN0YXRlID0gSW9uUHVsbFVwRm9vdGVyU3RhdGUuQ29sbGFwc2VkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSBJb25QdWxsVXBGb290ZXJTdGF0ZS5FeHBhbmRlZDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZm9vdGVyIGlzIGV4cGFuZGVkXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZSA9PT0gSW9uUHVsbFVwRm9vdGVyU3RhdGUuTWluaW1pemVkID8gSW9uUHVsbFVwRm9vdGVyU3RhdGUuTWluaW1pemVkIDogSW9uUHVsbFVwRm9vdGVyU3RhdGUuQ29sbGFwc2VkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgb25QYW4oZTogSGFtbWVySW5wdXQpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY2hpbGRGb290ZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCAnbm9uZScpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgXG5cbiAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgY2FzZSAncGFuJzpcbiAgICAgICAgdGhpcy5mb290ZXJNZXRhLnBvc1kgPSBlLmRlbHRhWSArIHRoaXMuZm9vdGVyTWV0YS5sYXN0UG9zWTtcblxuICAgICAgICAvLyBjaGVjayBmb3IgbWluIGFuZCBtYXggYm91bmRhcmllcyBvZiBkcmFnZ2FibGUgdG9vbGJhclxuICAgICAgICB0aGlzLmZvb3Rlck1ldGEucG9zWSA9IHRoaXMuZm9vdGVyTWV0YS5wb3NZID4gdGhpcy5mb290ZXJNZXRhLnRvb2xiYXJMb3dlckJvdW5kYXJ5ID8gdGhpcy5mb290ZXJNZXRhLnRvb2xiYXJMb3dlckJvdW5kYXJ5IDpcbiAgICAgICAgICAoTWF0aC5hYnModGhpcy5mb290ZXJNZXRhLnBvc1kpID4gdGhpcy5mb290ZXJNZXRhLnRvb2xiYXJVcHBlckJvdW5kYXJ5ID9cbiAgICAgICAgICAgIHRoaXMuZm9vdGVyTWV0YS50b29sYmFyRGVmYXVsdEV4cGFuZGVkUG9zaXRpb24gOlxuICAgICAgICAgICAgdGhpcy5mb290ZXJNZXRhLnBvc1kpO1xuXG4gICAgICAgIC8vIGlvbkNvbnRlbnQgc2NhbGluZyAtIEZJWCBzY3JvbGxpbmcgYnVnXG4gICAgICAgIHRoaXMudXBkYXRlSW9uQ29udGVudEhlaWdodCh0aGlzLm1pbkJvdHRvbVZpc2libGUgLSB0aGlzLmZvb3Rlck1ldGEucG9zWSk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNoaWxkRm9vdGVyLm5hdGl2ZUVsZW1lbnQsICctd2Via2l0LXRyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgwLCAnICsgdGhpcy5mb290ZXJNZXRhLnBvc1kgKyAncHgsIDApJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jaGlsZEZvb3Rlci5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKDAsICcgKyB0aGlzLmZvb3Rlck1ldGEucG9zWSArICdweCwgMCknKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwYW5lbmQnOlxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY2hpbGRGb290ZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCAnMzAwbXMgZWFzZS1pbi1vdXQnKTtcbiAgICAgICAgdGhpcy5mb290ZXJNZXRhLmxhc3RQb3NZID0gdGhpcy5mb290ZXJNZXRhLnBvc1k7XG5cbiAgICAgICAgLy8gaW9uQ29udGVudCBzY2FsaW5nIC0gRklYIHNjcm9sbGluZyBidWdcbiAgICAgICAgdGhpcy51cGRhdGVJb25Db250ZW50SGVpZ2h0KHRoaXMubWluQm90dG9tVmlzaWJsZSAtIHRoaXMuZm9vdGVyTWV0YS5sYXN0UG9zWSk7XG5cbiAgICAgICAgLy8gZW1pdCBsYXN0IGZvb3RlciBwb3NpdGlvbiBhZnRlciBkcmFnZ2luZyBlbmRzXG4gICAgICAgIGNvbnN0IGhhbmRsZSA9IHRoaXMuZHJhZ0VsZW1lbnRzLmZpcnN0O1xuICAgICAgICB0aGlzLmRyYWdnZWQuZW1pdCh7XG4gICAgICAgICAgZGVsdGE6IHRoaXMuZm9vdGVyTWV0YS5sYXN0UG9zWSxcbiAgICAgICAgICB0b29sYmFyQWJzb2x1dGVQb3NpdGlvbjogaGFuZGxlID8gaGFuZGxlLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogbnVsbFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUT0RPIGF1dG8gZG9ja1xuICAgICAgICAvLyBpZiAodGhpcy5mb290ZXJNZXRhLmxhc3RQb3NZID4gdGhpcy5mb290ZXJNZXRhLmhlaWdodCAtIHRoaXMuZm9vdGVyTWV0YS5kZWZhdWx0SGVpZ2h0KSB7XG4gICAgICAgIC8vICAgdGhpcy5zdGF0ZSA9ICBJb25QdWxsVXBGb290ZXJTdGF0ZS5Db2xsYXBzZWQ7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuc3RhdGU/LmZpcnN0Q2hhbmdlID8/IGNoYW5nZXMuc3RhdGU/LmN1cnJlbnRWYWx1ZSA9PT0gY2hhbmdlcy5zdGF0ZT8ucHJldmlvdXNWYWx1ZSkgeyByZXR1cm47IH1cblxuICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgY2FzZSBJb25QdWxsVXBGb290ZXJTdGF0ZS5Db2xsYXBzZWQ6XG4gICAgICAgIHRoaXMuY29sbGFwc2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIElvblB1bGxVcEZvb3RlclN0YXRlLkV4cGFuZGVkOlxuICAgICAgICB0aGlzLmV4cGFuZCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSW9uUHVsbFVwRm9vdGVyU3RhdGUuTWluaW1pemVkOlxuICAgICAgICB0aGlzLm1pbmltaXplKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIFRPRE86IGZpeCBoYWNrIGR1ZSB0byBCVUcgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzYwMDUpXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZS5lbWl0KHRoaXMuc3RhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVjdCBpb25pYyBjb21wb25lbnRzIGluIHBhZ2VcbiAgICovXG4gIHByaXZhdGUgZmluZElvbmljQ29tcG9uZW50c0luUGFnZSgpIHtcbiAgICB0aGlzLmZvb3Rlck1ldGEuaW9uQ29udGVudFJlZiA9IHRoaXMuY2hpbGRGb290ZXIubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpb24tY29udGVudCcpO1xuXG4gICAgdGhpcy5jdXJyZW50Vmlld01ldGEudGFic1JlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi10YWItYmFyJyk7XG4gICAgdGhpcy5jdXJyZW50Vmlld01ldGEudGFic0hlaWdodCA9IHRoaXMuY3VycmVudFZpZXdNZXRhLnRhYnNSZWYgPyAodGhpcy5jdXJyZW50Vmlld01ldGEudGFic1JlZiBhcyBIVE1MRWxlbWVudCkub2Zmc2V0SGVpZ2h0IDogMDtcbiAgICAvLyBjb25zb2xlLmRlYnVnKHRoaXMuY3VycmVudFZpZXdNZXRhLnRhYnNSZWYgPyAnaW9uaWMtcHVsbHVwID0+IFRhYnMgZGV0ZWN0ZWQnIDogJ2lvbmljLnB1bGx1cCA9PiBWaWV3IGhhcyBubyB0YWJzJyk7XG5cbiAgICBpZiAoIXRoaXMudG9vbGJhclRvcE1hcmdpbikge1xuICAgICAgY29uc3Qgb3V0bGV0UmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlci1vdXRsZXQnKTtcbiAgICAgIGlmIChvdXRsZXRSZWYpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyUmVmID0gb3V0bGV0UmVmLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1oZWFkZXInKTtcbiAgICAgICAgaWYgKGhlYWRlclJlZikge1xuICAgICAgICAgIHRoaXMuY3VycmVudFZpZXdNZXRhLnRvb2xiYXJSZWYgPSBoZWFkZXJSZWYucXVlcnlTZWxlY3RvcignaW9uLXRvb2xiYXInKTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3TWV0YS50b29sYmFySGVpZ2h0ID0gdGhpcy5jdXJyZW50Vmlld01ldGEudG9vbGJhclJlZi5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgLy8gY29uc29sZS5kZWJ1Zyh0aGlzLmN1cnJlbnRWaWV3TWV0YS50b29sYmFyUmVmID8gYGlvbmljLXB1bGx1cCA9PiBUb29sYmFyIGRldGVjdGVkYCA6ICdpb25pYy5wdWxsdXAgPT4gVmlldyBoYXMgbm8gdGFicycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3VycmVudFZpZXdNZXRhLnRvb2xiYXJIZWlnaHQgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudFZpZXdNZXRhLnRvb2xiYXJIZWlnaHQgPSB0aGlzLnRvb2xiYXJUb3BNYXJnaW47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBpbm5lciBpb24tY29udGVudCBjb21wb25lbnQgaGVpZ2h0IHdoZW4gZm9vdGVyIGlzIGV4cGFuZGVkLCBjb2xsYXBzZWQgb3IgZHJhZ2dlZFxuICAgKiBAcGFyYW0gbWF4SGVpZ2h0IG1heGltdW0gaW9uQ29udGVudCBoZWlnaHQgdG8gc2V0XG4gICAqL1xuICBwcml2YXRlIHVwZGF0ZUlvbkNvbnRlbnRIZWlnaHQobWF4SGVpZ2h0PzogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLmZvb3Rlck1ldGEuaW9uQ29udGVudFJlZikgeyByZXR1cm47IH1cblxuICAgIGNvbnN0IG1heEhlaWdodFVuaXRzID0gbWF4SGVpZ2h0ID8gYCR7bWF4SGVpZ2h0fXB4YCA6ICh0aGlzLm1pbkJvdHRvbVZpc2libGUgPiAwID8gYCR7dGhpcy5taW5Cb3R0b21WaXNpYmxlfXB4YCA6ICcxMDAlJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmZvb3Rlck1ldGEuaW9uQ29udGVudFJlZiwgJ21heC1oZWlnaHQnLCBtYXhIZWlnaHRVbml0cyk7XG4gIH1cblxufVxuXG5cbiJdfQ==