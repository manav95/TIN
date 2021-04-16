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
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Calendar.prototype.render = function () {
        return (_jsx("div", __assign({ className: "section" + (this.props.dark ? " section-dark" : "") }, { children: _jsxs("div", __assign({ className: "section-content", id: this.props.id }, { children: [_jsx("h1", { children: this.props.title }, void 0), _jsx("br", {}, void 0),
                    _jsx("div", { "data-tockify-component": "calendar", "data-tockify-calendar": "timeisnow" }, void 0),
                    _jsx("script", { "data-cfasync": "false", "data-tockify-script": "embed", src: "https://public.tockify.com/browser/embed.js" }, void 0)] }), void 0) }), void 0));
    };
    return Calendar;
}(Component));
export default Calendar;
