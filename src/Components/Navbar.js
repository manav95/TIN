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
exports.__esModule = true;
var react_1 = require("react");
var react_scroll_1 = require("react-scroll");
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
        return (react_1["default"].createElement("nav", { className: "nav", id: "navbar" },
            react_1["default"].createElement("div", { className: "nav-content" },
                react_1["default"].createElement("img", { src: "../logo.jpg", className: "nav-logo", alt: "Logo", onClick: this.scrollToTop }),
                react_1["default"].createElement("ul", { className: "nav-items" },
                    react_1["default"].createElement("li", { className: "nav-item" },
                        react_1["default"].createElement(react_scroll_1.Link, { activeClass: "active", to: "section1", spy: true, smooth: true, offset: -70, duration: 500 }, "About Us")),
                    react_1["default"].createElement("li", { className: "nav-item" },
                        react_1["default"].createElement(react_scroll_1.Link, { activeClass: "active", to: "section2", spy: true, smooth: true, offset: -70, duration: 500 }, "Events")),
                    react_1["default"].createElement("li", { className: "nav-item" },
                        react_1["default"].createElement(react_scroll_1.Link, { activeClass: "active", to: "section3", spy: true, smooth: true, offset: -70, duration: 500 }, "A Message from Gaia")),
                    react_1["default"].createElement("li", { className: "nav-item" },
                        react_1["default"].createElement(react_scroll_1.Link, { activeClass: "active", to: "section4", spy: true, smooth: true, offset: -70, duration: 500 }, "Gallery")),
                    react_1["default"].createElement("li", { className: "nav-item" },
                        react_1["default"].createElement(react_scroll_1.Link, { activeClass: "active", to: "section5", spy: true, smooth: true, offset: -70, duration: 500 }, "Join Us"))))));
    };
    return Navbar;
}(react_1.Component));
exports["default"] = Navbar;
