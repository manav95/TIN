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
import Iframe from 'react-iframe';
var ContactForm = /** @class */ (function (_super) {
    __extends(ContactForm, _super);
    function ContactForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactForm.prototype.render = function () {
        return (_jsx("div", __assign({ className: "section" + (this.props.dark ? " section-dark" : "") }, { children: _jsxs("div", __assign({ className: "section-content", id: this.props.id }, { children: [_jsx("h1", { children: this.props.title }, void 0), _jsx("br", {}, void 0),
                    this.props.onboardEnabled && _jsx("button", __assign({ onClick: this.props.onboard, className: "onboarding" }, { children: " Onboarding" }), void 0),
                    !this.props.onboardEnabled && _jsx("a", __assign({ style: { 'color': 'white', 'fontSize': '24px' }, href: "https://discord.gg/cAyrKSme" }, { children: "Join us on Discord" }), void 0),
                    !this.props.onboardEnabled && _jsx(Iframe, { url: "https://us7.list-manage.com/contact-form?u=e1e257145a4a30cfd2bf75ef6&form_id=13473e90a944f78f2592a96f9e26121e", position: "absolute", width: "100%", id: "myId", className: "myClassname", height: "100%", styles: { height: "100px" } }, void 0)] }), void 0) }), void 0));
    };
    return ContactForm;
}(Component));
export default ContactForm;
