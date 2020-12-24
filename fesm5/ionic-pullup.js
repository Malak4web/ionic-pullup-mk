import { Component, EventEmitter, ChangeDetectionStrategy, Renderer2, Inject, Input, Output, ViewChild, ContentChildren, Injectable, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { DIRECTION_VERTICAL } from 'hammerjs';
import { __extends } from 'tslib';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ionic-pullup-tab.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IonicPullupComponentTabComponent = /** @class */ (function () {
    function IonicPullupComponentTabComponent() {
    }
    IonicPullupComponentTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-ionic-pullup-tab',
                    template: "<ng-content></ng-content>",
                    styles: [":host{z-index:1000;display:flex;justify-content:center;position:relative;width:120px;height:10px;background:var(--ion-color-primary);color:#fff;border-radius:10px 10px 0 0;margin:0 auto}"]
                }] }
    ];
    return IonicPullupComponentTabComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ionic-pullup.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function FooterMetadata() { }
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
function ViewMetadata() { }
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
function FooterTab() { }
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
IonPullUpFooterState[IonPullUpFooterState.Collapsed] = 'Collapsed';
IonPullUpFooterState[IonPullUpFooterState.Expanded] = 'Expanded';
IonPullUpFooterState[IonPullUpFooterState.Minimized] = 'Minimized';
/** @enum {number} */
var IonPullUpFooterBehavior = {
    Hide: 0,
    Expand: 1,
};
IonPullUpFooterBehavior[IonPullUpFooterBehavior.Hide] = 'Hide';
IonPullUpFooterBehavior[IonPullUpFooterBehavior.Expand] = 'Expand';
/**
 * @record
 */
function DraggedOutputEvent() { }
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ionic-pullup.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MyHammerConfig = /** @class */ (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            pan: { direction: DIRECTION_VERTICAL },
        };
        return _this;
    }
    MyHammerConfig.decorators = [
        { type: Injectable }
    ];
    return MyHammerConfig;
}(HammerGestureConfig));
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

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ionic-pullup.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { IonPullUpFooterBehavior, IonPullUpFooterState, IonicPullupComponent, IonicPullupComponentTabComponent, IonicPullupModule, MyHammerConfig };
//# sourceMappingURL=ionic-pullup.js.map
