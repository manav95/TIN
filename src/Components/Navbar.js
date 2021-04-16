"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var react_1 = require("react");
var react_scroll_1 = require("react-scroll");
var React = __importStar(require("react"));
var Navbar = /** @class */ (function (_super) {
    __extends(Navbar, _super);
    function Navbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrollToTop = function () {
            react_scroll_1.animateScroll.scrollToTop();
        };
        return _this;
    }
    Navbar.prototype.render = function () {
        return (React.createElement("nav", { className: "nav", id: "navbar" },
            React.createElement("div", { className: "nav-content" },
                React.createElement("img", { src: "../logo.jpg", className: "nav-logo", alt: "Logo", onClick: this.scrollToTop }),
                React.createElement("ul", { className: "nav-items" },
                    React.createElement("li", { className: "nav-item" },
                        React.createElement(react_scroll_1.Link, { activeClass: "active", to: "section1", spy: true, smooth: true, offset: -70, duration: 500 }, "About Us")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement(react_scroll_1.Link, { activeClass: "active", to: "section2", spy: true, smooth: true, offset: -70, duration: 500 }, "Events")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement(react_scroll_1.Link, { activeClass: "active", to: "section3", spy: true, smooth: true, offset: -70, duration: 500 }, "A Message from Gaia")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement(react_scroll_1.Link, { activeClass: "active", to: "section4", spy: true, smooth: true, offset: -70, duration: 500 }, "Gallery")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement(react_scroll_1.Link, { activeClass: "active", to: "section5", spy: true, smooth: true, offset: -70, duration: 500 }, "Join Us"))))));
    };
    return Navbar;
}(react_1.Component));
exports["default"] = Navbar;
