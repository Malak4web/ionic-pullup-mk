(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ionic/angular'), require('@angular/platform-browser'), require('hammerjs')) :
    typeof define === 'function' && define.amd ? define('ionic-pullup', ['exports', '@angular/core', '@ionic/angular', '@angular/platform-browser', 'hammerjs'], factory) :
    (global = global || self, factory(global['ionic-pullup'] = {}, global.ng.core, global.angular, global.ng.platformBrowser, global.hammerjs));
}(this, (function (exports, core, angular, platformBrowser, hammerjs) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ionic-pullup-tab.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonicPullupComponentTabComponent = /** @class */ (function () {
        function IonicPullupComponentTabComponent() {
        }
        IonicPullupComponentTabComponent.decorators = [
            { type: core.Component, args: [{
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
            // var _a, _b;
            // this.platform = platform;
            // this.renderer = renderer;
            // this.hammerConfig = hammerConfig;
            // this.stateChange = new core.EventEmitter();
            // // TODO implemment
            // /**
            //  *  Maximum expanded position - useful if there are top headers
            //  *  If not provided by default computes available screen minus tabs and headers
            //  */
            // this.toolbarTopMargin = 0;
            // /**
            //  *  Minimum position - useful to keep a part of the footer always visible at the bottom
            //  */
            // this.minBottomVisible = 0;
            // this.expanded = new core.EventEmitter();
            // this.collapsed = new core.EventEmitter();
            // this.minimized = new core.EventEmitter();
            // /**
            //  * Outputs the amount of pixels the user has dragged positive or negative
            //  */
            this.dragged = new core.EventEmitter();
            // this.footerMeta = {
            //     height: 0,
            //     posY: 0,
            //     lastPosY: 0
            // };
            // this.currentViewMeta = { bottomSpace: screen.height - window.innerHeight };
            // // sets initial state
            // this.initialState = (_a = this.initialState) !== null && _a !== void 0 ? _a : IonPullUpFooterState.Collapsed;
            // this.defaultBehavior = (_b = this.defaultBehavior) !== null && _b !== void 0 ? _b : IonPullUpFooterBehavior.Expand;
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
            { type: core.Component, args: [{
                        selector: 'lib-ionic-pullup',
                        template: "<div class=\"footer\" #footer>\n  <ng-content></ng-content>\n</div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".footer{left:0;right:0;position:fixed;z-index:999}"]
                    }] }
        ];
        /** @nocollapse */
        IonicPullupComponent.ctorParameters = function () { return [
            { type: angular.Platform },
            { type: core.Renderer2 },
            { type: platformBrowser.HammerGestureConfig, decorators: [{ type: core.Inject, args: [platformBrowser.HAMMER_GESTURE_CONFIG,] }] }
        ]; };
        IonicPullupComponent.propDecorators = {
            state: [{ type: core.Input }],
            stateChange: [{ type: core.Output }],
            initialState: [{ type: core.Input }],
            defaultBehavior: [{ type: core.Input }],
            toolbarTopMargin: [{ type: core.Input }],
            minBottomVisible: [{ type: core.Input }],
            dockable: [{ type: core.Input }],
            expanded: [{ type: core.Output }],
            collapsed: [{ type: core.Output }],
            minimized: [{ type: core.Output }],
            dragged: [{ type: core.Output }],
            childFooter: [{ type: core.ViewChild, args: ['footer', { static: true },] }],
            dragElements: [{ type: core.ContentChildren, args: ['ionDragFooter',] }]
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
                pan: { direction: hammerjs.DIRECTION_VERTICAL },
            };
            return _this;
        }
        MyHammerConfig.decorators = [
            { type: core.Injectable }
        ];
        return MyHammerConfig;
    }(platformBrowser.HammerGestureConfig));
    if (false) {
        /** @type {?} */
        MyHammerConfig.prototype.overrides;
    }
    var IonicPullupModule = /** @class */ (function () {
        function IonicPullupModule() {
        }
        IonicPullupModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [IonicPullupComponent, IonicPullupComponentTabComponent],
                        imports: [],
                        exports: [IonicPullupComponent, IonicPullupComponentTabComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                        providers: [
                            {
                                provide: platformBrowser.HAMMER_GESTURE_CONFIG,
                                useClass: MyHammerConfig,
                            },
                        ]
                    },] }
        ];
        return IonicPullupModule;
    }());

    exports.IonPullUpFooterBehavior = IonPullUpFooterBehavior;
    exports.IonPullUpFooterState = IonPullUpFooterState;
    exports.IonicPullupComponent = IonicPullupComponent;
    exports.IonicPullupComponentTabComponent = IonicPullupComponentTabComponent;
    exports.IonicPullupModule = IonicPullupModule;
    exports.MyHammerConfig = MyHammerConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ionic-pullup.umd.js.map
