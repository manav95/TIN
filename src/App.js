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
import { Component } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import Calendar from "./components/Calendar";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import Message from "./components/Message";
import message from './message';
import { animateScroll as scroll } from "react-scroll";
import { hot } from "react-hot-loader";
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
        scroll.scrollTo(20000);
    };
    App.prototype.render = function () {
        return (_jsxs("div", __assign({ className: "App" }, { children: [_jsx(Navbar, {}, void 0),
                _jsx(AboutUs, { title: "About Us", id: "section1", onboard: this.onboard }, void 0),
                _jsx(Calendar, { title: "Calendar", dark: false, id: "section2" }, void 0),
                _jsx(Message, { title: "A Message from Gaia", subtitle: message, id: "section3" }, void 0),
                _jsx(Gallery, { title: "Gallery", dark: false, id: "section4" }, void 0),
                _jsx(ContactForm, { title: "Join Us", dark: false, onboard: this.onboard, id: "section5", onboardEnabled: this.state.onboardEnabled }, void 0)] }), void 0));
    };
    return App;
}(Component));
export default hot(module)(App);
