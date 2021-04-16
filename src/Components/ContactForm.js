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
var react_iframe_1 = require("react-iframe");
var ContactForm = /** @class */ (function (_super) {
    __extends(ContactForm, _super);
    function ContactForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactForm.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "section" + (this.props.dark ? " section-dark" : "") },
            react_1["default"].createElement("div", { className: "section-content", id: this.props.id },
                react_1["default"].createElement("h1", null, this.props.title),
                react_1["default"].createElement("br", null),
                this.props.onboardEnabled && react_1["default"].createElement("button", { onClick: this.props.onboard, className: "onboarding" }, " Onboarding"),
                !this.props.onboardEnabled && react_1["default"].createElement("a", { style: { 'color': 'white', 'fontSize': '24px' }, href: "https://discord.gg/cAyrKSme" }, "Join us on Discord"),
                !this.props.onboardEnabled && react_1["default"].createElement(react_iframe_1["default"], { url: "https://us7.list-manage.com/contact-form?u=e1e257145a4a30cfd2bf75ef6&form_id=13473e90a944f78f2592a96f9e26121e", position: "absolute", width: "100%", id: "myId", className: "myClassname", height: "100%", styles: { height: "100px" } }))));
    };
    return ContactForm;
}(react_1.Component));
exports["default"] = ContactForm;
