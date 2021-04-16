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
require("./App.css");
var Navbar_1 = require("./Components/Navbar");
var ContactForm_1 = require("./Components/ContactForm");
var Calendar_1 = require("./Components/Calendar");
var Gallery_1 = require("./Components/Gallery");
var AboutUs_1 = require("./Components/AboutUs");
var Message_1 = require("./Components/Message");
var message_1 = require("./message");
var react_scroll_1 = require("react-scroll");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { onboardEnabled: true };
        _this.onboard = _this.onboard.bind(_this);
        return _this;
    }
    App.prototype.onboard = function () {
        this.setState({ onboardEnabled: false });
        react_scroll_1.animateScroll.scrollTo(20000);
    };
    App.prototype.render = function () {
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement(Navbar_1["default"], null),
            react_1["default"].createElement(AboutUs_1["default"], { title: "About Us", id: "section1", onboard: this.onboard }),
            react_1["default"].createElement(Calendar_1["default"], { title: "Calendar", dark: false, id: "section2" }),
            react_1["default"].createElement(Message_1["default"], { title: "A Message from Gaia", subtitle: message_1["default"], id: "section3" }),
            react_1["default"].createElement(Gallery_1["default"], { title: "Gallery", dark: false, id: "section4" }),
            react_1["default"].createElement(ContactForm_1["default"], { title: "Join Us", dark: false, onboard: this.onboard, id: "section5", onboardEnabled: this.state.onboardEnabled })));
    };
    return App;
}(react_1.Component));
exports["default"] = App;
