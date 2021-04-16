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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Calendar.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "section" + (this.props.dark ? " section-dark" : "") },
            react_1["default"].createElement("div", { className: "section-content", id: this.props.id },
                react_1["default"].createElement("h1", null, this.props.title),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("div", { "data-tockify-component": "calendar", "data-tockify-calendar": "timeisnow" }),
                react_1["default"].createElement("script", { "data-cfasync": "false", "data-tockify-script": "embed", src: "https://public.tockify.com/browser/embed.js" }))));
    };
    return Calendar;
}(react_2.Component));
exports["default"] = Calendar;
