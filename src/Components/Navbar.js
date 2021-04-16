var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
var Navbar = /** @class */ (function (_super) {
    __extends(Navbar, _super);
    function Navbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrollToTop = function () {
            scroll.scrollToTop();
        };
        return _this;
    }
    Navbar.prototype.render = function () {
        return (_jsx("nav", __assign({ className: "nav", id: "navbar" }, { children: _jsxs("div", __assign({ className: "nav-content" }, { children: [_jsx("img", { src: "../logo.jpg", className: "nav-logo", alt: "Logo", onClick: this.scrollToTop }, void 0),
                    _jsxs("ul", __assign({ className: "nav-items" }, { children: [_jsx("li", __assign({ className: "nav-item" }, { children: _jsx(Link, __assign({ activeClass: "active", to: "section1", spy: true, smooth: true, offset: -70, duration: 500 }, { children: "About Us" }), void 0) }), void 0),
                            _jsx("li", __assign({ className: "nav-item" }, { children: _jsx(Link, __assign({ activeClass: "active", to: "section2", spy: true, smooth: true, offset: -70, duration: 500 }, { children: "Events" }), void 0) }), void 0),
                            _jsx("li", __assign({ className: "nav-item" }, { children: _jsx(Link, __assign({ activeClass: "active", to: "section3", spy: true, smooth: true, offset: -70, duration: 500 }, { children: "A Message from Gaia" }), void 0) }), void 0),
                            _jsx("li", __assign({ className: "nav-item" }, { children: _jsx(Link, __assign({ activeClass: "active", to: "section4", spy: true, smooth: true, offset: -70, duration: 500 }, { children: "Gallery" }), void 0) }), void 0),
                            _jsx("li", __assign({ className: "nav-item" }, { children: _jsx(Link, __assign({ activeClass: "active", to: "section5", spy: true, smooth: true, offset: -70, duration: 500 }, { children: "Join Us" }), void 0) }), void 0)] }), void 0)] }), void 0) }), void 0));
    };
    return Navbar;
}(Component));
export default Navbar;
