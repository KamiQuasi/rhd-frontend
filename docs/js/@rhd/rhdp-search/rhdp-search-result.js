System.register(["../../@rhelements/rhelement/rhelement.js"], function (exports_1, context_1) {
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
    var rhelement_js_1, RHDPSearchResult;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (rhelement_js_1_1) {
                rhelement_js_1 = rhelement_js_1_1;
            }
        ],
        execute: function () {
            RHDPSearchResult = (function (_super) {
                __extends(RHDPSearchResult, _super);
                function RHDPSearchResult() {
                    var _this = _super.call(this, RHDPSearchResult, { delayRender: true }) || this;
                    _this._url = ['', ''];
                    return _this;
                }
                Object.defineProperty(RHDPSearchResult.prototype, "html", {
                    get: function () {
                        return "\n        <style>\n:host {\n    font-family: \"Overpass\", \"Open Sans\", Arial, Helvetica, sans-serif;\n    margin-bottom: 25px;\n    padding-bottom: 25px;\n    border-bottom: 1px solid #d5d5d5;\n    display: flex;\n    flex-direction: row;\n}\n    .subscription-required {\n        &:before {\n            content: '';\n            background: url('https://static.jboss.org/rhd/images/icons/subscription-required.svg') no-repeat;\n            background-size:cover;\n            position:absolute;\n            margin-top: 5px;\n            width: .9em;\n            height: .9em;\n        }\n        .caps {\n            margin-left: 20px;\n        }\n\n    }\n\n    div:first-child { flex: 1 1 auto; }\n\n    h4 {\n        font-weight: 600;\n        font-style: normal;\n        font-size: 20px;\n        line-height: 1.4;\n        margin: 0;\n        font-family: \"Overpass\", \"Open Sans\", Arial, Helvetica, sans-serif;\n    }\n\n    h4 a {\n        color: #06c;\n        cursor: pointer;\n        text-decoration: none;\n    }\n\n    p { margin: 0; \n        color: #424242;\n        font-family: \"Overpass\", \"Open Sans\", Arial, Helvetica, sans-serif;\n        }\n    .result-info span{\n        font-size: .9rem;\n        color: $grey-6;\n    }\n\n    .caps {\n        text-transform: uppercase;\n        font-size: 16px;\n        font-weight: normal;\n        line-height: 24px;\n        -webkit-font-smoothing: antialiased;\n    }\n    .result-description {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-height: 45px;\n        margin-bottom: 25px;\n    }\n    div {\n        flex: 1 1 auto;\n    }\n    div.thumb { \n        flex: 0 0 130px; \n        margin-left: 1em;\n    }\n\n    .thumb img {\n        height: auto;\n        max-width: 100%;\n    }\n\n    .hlt { font-weight: 600; }\n        </style>\n<div>\n    <h4>" + (this.url ? "<a href=\"" + this.url + "\">" + this.title + "</a>" : this.title) + "</h4>\n    <p " + (this.premium ? 'class="result-info subscription-required" data-tooltip="" title="Subscription Required" data-options="disable-for-touch:true"' : 'class="result-info"') + ">\n        <span class=\"caps\">" + this.kind + "</span>\n        " + (this.created ? "- <rh-datetime datetime=\"" + this.created + "\" type=\"local\" day=\"numeric\" month=\"long\" year=\"numeric\">" + this.created + "</rh-datetime>" : '') + "\n    </p>\n    <p class=\"result-description\">" + this.description + "</p>\n</div>\n" + (this.thumbnail ? "<div class=\"thumb\"><img src=\"" + this.thumbnail.replace('http:', 'https:') + "\"></div>" : '');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchResult, "tag", {
                    get: function () { return 'rhdp-search-result'; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchResult.prototype, "url", {
                    get: function () {
                        return this._url;
                    },
                    set: function (val) {
                        if (this._url === val)
                            return;
                        this._url = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchResult.prototype, "title", {
                    get: function () {
                        return this._title;
                    },
                    set: function (val) {
                        if (this._title === val)
                            return;
                        this._title = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchResult.prototype, "kind", {
                    get: function () {
                        return this._kind;
                    },
                    set: function (val) {
                        if (this._kind === val)
                            return;
                        this._kind = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchResult.prototype, "created", {
                    get: function () {
                        return this._created;
                    },
                    set: function (val) {
                        if (this._created === val)
                            return;
                        this._created = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchResult.prototype, "description", {
                    get: function () {
                        return this._description;
                    },
                    set: function (val) {
                        if (this._description === val)
                            return;
                        this._description = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchResult.prototype, "premium", {
                    get: function () {
                        return this._premium;
                    },
                    set: function (val) {
                        if (this._premium === val)
                            return;
                        this._premium = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchResult.prototype, "thumbnail", {
                    get: function () {
                        return this._thumbnail;
                    },
                    set: function (val) {
                        if (this._thumbnail === val)
                            return;
                        this._thumbnail = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHDPSearchResult.prototype, "result", {
                    get: function () {
                        return this._result;
                    },
                    set: function (val) {
                        if (this._result === val)
                            return;
                        this._result = val;
                        this.computeTitle(val);
                        this.computeKind(val);
                        this.computeCreated(val);
                        this.computeDescription(val);
                        this.computeURL(val);
                        this.computePremium(val);
                        this.computeThumbnail(val);
                        this.renderResult();
                    },
                    enumerable: true,
                    configurable: true
                });
                RHDPSearchResult.prototype.connectedCallback = function () {
                    _super.prototype.connectedCallback.call(this);
                    _super.prototype.render.call(this);
                };
                Object.defineProperty(RHDPSearchResult, "observedAttributes", {
                    get: function () {
                        return ['result'];
                    },
                    enumerable: true,
                    configurable: true
                });
                RHDPSearchResult.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
                    this[name] = newVal;
                };
                RHDPSearchResult.prototype.renderResult = function () {
                    _super.prototype.render.call(this);
                };
                RHDPSearchResult.prototype.computeThumbnail = function (result) {
                    if (result.fields.thumbnail) {
                        this.thumbnail = result.fields.thumbnail[0];
                    }
                };
                RHDPSearchResult.prototype.computeTitle = function (result) {
                    var title = '';
                    if (result.highlight && result.highlight.sys_title) {
                        title = result.highlight.sys_title[0];
                    }
                    else {
                        title = result.fields.sys_title[0];
                    }
                    this.title = title;
                };
                RHDPSearchResult.prototype.computeKind = function (result) {
                    var kind = result.fields.sys_type || "webpage", map = {
                        jbossdeveloper_archetype: 'Archetype',
                        article: 'Article',
                        blogpost: 'Blog Post',
                        jbossdeveloper_bom: 'Bom',
                        book: 'Book',
                        cheatsheet: 'Cheat Sheet',
                        demo: 'Demo',
                        event: 'Event',
                        forumthread: 'Forum Thread',
                        jbossdeveloper_example: 'Demo',
                        quickstart: 'Quickstart',
                        quickstart_early_access: 'Demo',
                        solution: 'Article',
                        stackoverflow_thread: 'Stack Overflow',
                        video: 'Video',
                        webpage: 'Web Page',
                        website: 'Web Page'
                    };
                    this.kind = map[kind] || 'Web Page';
                };
                RHDPSearchResult.prototype.computeCreated = function (result) {
                    this.created = result.fields.sys_created && result.fields.sys_created.length > 0 ? result.fields.sys_created[0] : '';
                };
                RHDPSearchResult.prototype.computeDescription = function (result) {
                    var description = '';
                    if (result.highlight && result.highlight.sys_description) {
                        description = result.highlight.sys_description[0];
                    }
                    else if (result.highlight && result.highlight.sys_content_plaintext) {
                        description = result.highlight.sys_content_plaintext[0];
                    }
                    else if (result.fields && result.fields.sys_description) {
                        description = result.fields.sys_description[0];
                    }
                    else {
                        description = result.fields.sys_content_plaintext ? result.fields.sys_content_plaintext[0] : '';
                    }
                    var tempDiv = document.createElement("div");
                    tempDiv.innerHTML = description;
                    description = tempDiv.innerText;
                    this.description = description;
                };
                RHDPSearchResult.prototype.computeURL = function (result) {
                    if (result.fields && result.fields.sys_type === 'book' && result.fields.field_book_url) {
                        this.url = result.fields.field_book_url;
                    }
                    else {
                        this.url = (result.fields && result.fields.sys_url_view) ? result.fields.sys_url_view : '';
                    }
                };
                RHDPSearchResult.prototype.computePremium = function (result) {
                    var premium = false;
                    if (result._type === "rht_knowledgebase_article" || result._type === "rht_knowledgebase_solution") {
                        premium = true;
                    }
                    this.premium = premium;
                };
                return RHDPSearchResult;
            }(rhelement_js_1.default));
            exports_1("default", RHDPSearchResult);
            rhelement_js_1.default.create(RHDPSearchResult);
        }
    };
});
