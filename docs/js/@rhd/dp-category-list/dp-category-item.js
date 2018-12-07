System.register(["../../@pfelements/pfelement.js"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var pfelement_js_1, DPCategoryItem;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pfelement_js_1_1) {
                pfelement_js_1 = pfelement_js_1_1;
            }
        ],
        execute: function () {
            DPCategoryItem = (function (_super) {
                __extends(DPCategoryItem, _super);
                function DPCategoryItem() {
                    var _this = _super.call(this, 'dp-category-item') || this;
                    _this.template = function (el) {
                        var tpl = document.createElement("template");
                        tpl.innerHTML = "\n            <style>\n            \n            </style>\n            <slot></slot>\n            ";
                        return tpl;
                    };
                    return _this;
                }
                DPCategoryItem.prototype.connectedCallback = function () {
                    _super.prototype.render.call(this, this.template(this));
                };
                Object.defineProperty(DPCategoryItem, "observedAttributes", {
                    get: function () {
                        return ['url', 'name'];
                    },
                    enumerable: true,
                    configurable: true
                });
                DPCategoryItem.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
                    this[name] = newVal;
                };
                return DPCategoryItem;
            }(pfelement_js_1.default));
            exports_1("default", DPCategoryItem);
            window.customElements.define('dp-category-item', DPCategoryItem);
        }
    };
});
//# sourceMappingURL=dp-category-item.js.map