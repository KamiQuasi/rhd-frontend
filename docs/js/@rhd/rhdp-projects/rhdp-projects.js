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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var RHDPProjects = (function (_super) {
    __extends(RHDPProjects, _super);
    function RHDPProjects() {
        var _this = _super.call(this) || this;
        _this._loading = true;
        _this._dcpUrl = '';
        _this.template = function (strings, project) {
            return "\n\n        <ul class=\"small-block-grid-2 large-block-grid-4 medium-block-grid-3 results\"></ul>\n        \n        ";
        };
        return _this;
    }
    Object.defineProperty(RHDPProjects.prototype, "dcpUrl", {
        get: function () {
            return this.getAttribute('dcp-url') ? this.getAttribute('dcp-url') : this._dcpUrl;
        },
        set: function (value) {
            if (this._dcpUrl === value)
                return;
            this._dcpUrl = value;
            this.setAttribute('dcp-url', this._dcpUrl);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPProjects.prototype, "loading", {
        get: function () {
            return this._loading;
        },
        set: function (value) {
            if (value == false) {
                this.querySelector('ul.results').classList.remove('loading');
            }
            else {
                this.querySelector('ul.results').classList.add('loading');
            }
            this._loading = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RHDPProjects.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: true,
        configurable: true
    });
    RHDPProjects.prototype.connectedCallback = function () {
        this.innerHTML = this.template(__makeTemplateObject(["", ""], ["", ""]), this);
        this.addEventListener('data-results-complete', this._loadDataResult);
        var query = new RHDPProjectQuery();
        query.dcpUrl = this.dcpUrl;
        if (this._getProductId()) {
            query.filter = this._getProductId();
        }
        var url = new RHDPProjectURL();
        this.appendChild(query);
        this.appendChild(url);
    };
    RHDPProjects.prototype.removeAllProjects = function () {
        var childNodes = this.querySelector('ul.results');
        while (childNodes.firstChild) {
            childNodes.removeChild(childNodes.firstChild);
        }
    };
    RHDPProjects.prototype._getProductId = function () {
        var productId = this.getAttribute('upstream-product-id');
        return productId;
    };
    RHDPProjects.prototype._loadDataResult = function (e) {
        this.removeAllProjects();
        this.loading = true;
        if (e.detail && e.detail.data) {
            var hits = void 0;
            if (e.detail.data.responses) {
                hits = e.detail.data.responses[0].hits.hits;
            }
            else {
                hits = e.detail.data.hits.hits;
            }
            for (var i = 0; i < hits.length; i++) {
                var project = new RHDPProjectItem();
                var props = hits[i].fields;
                var thumbnailSize = "200x150";
                project.imageUrl = "https://static.jboss.org/" + (props.specialIcon || props.sys_project) + "/images/" + (props.specialIcon || props.sys_project) + "_" + thumbnailSize + ".png";
                project.downloadsLink = props.downloadsLink;
                project.projectName = props.sys_project_name;
                project.sys_url_view = props.sys_url_view;
                project.descriptions = props.description;
                project.docsLink = props.docsLink;
                project.communityLink = props.communityLink;
                project.knowledgebaseLink = props.knowledgeBaseLink;
                project.userForumLink = props.userForumLink;
                project.devForumLink = props.devForumLink;
                project.mailingListLink = props.mailingListLink;
                project.chatLink = props.chatLink;
                project.blogLink = props.blogLink;
                project.issueTracker = props.issueTrackerLink;
                project.jiraLink = props.jiraLink;
                project.srcLink = props.srcLink;
                project.anonymousLink = props.anonymousLink;
                project.commiterLink = props.commiterLink;
                project.fisheyeLink = props.fisheyeLink;
                project.viewvcLink = props.viewvcLink;
                project.githubLink = props.githubLink;
                project.committerGitLink = props.committerGitLink;
                project.buildLink = props.buildLink;
                project.hudsonLink = props.hudsonLink;
                var listItem = document.createElement('li');
                listItem.setAttribute('class', 'upstream');
                listItem.appendChild(project);
                this.querySelector('ul.results').appendChild(listItem);
            }
            this.loading = false;
        }
    };
    Object.defineProperty(RHDPProjects, "observedAttributes", {
        get: function () {
            return [''];
        },
        enumerable: true,
        configurable: true
    });
    RHDPProjects.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        this[name] = newVal;
        this.innerHTML = this.template(__makeTemplateObject(["", ""], ["", ""]), this);
    };
    return RHDPProjects;
}(HTMLElement));
window.addEventListener('WebComponentsReady', function () {
    customElements.define('rhdp-projects', RHDPProjects);
});
