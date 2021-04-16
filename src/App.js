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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var React = __importStar(require("react"));
require("./App.css");
var Navbar_1 = __importDefault(require("./Components/Navbar"));
var ContactForm_1 = __importDefault(require("./Components/ContactForm"));
var Calendar_1 = __importDefault(require("./Components/Calendar"));
var Gallery_1 = __importDefault(require("./Components/Gallery"));
var AboutUs_1 = __importDefault(require("./Components/AboutUs"));
var Message_1 = __importDefault(require("./Components/Message"));
var message_1 = __importDefault(require("./message"));
var react_scroll_1 = require("react-scroll");
var react_hot_loader_1 = require("react-hot-loader");
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
        return (React.createElement("div", { className: "App" },
            React.createElement(Navbar_1["default"], null),
            React.createElement(AboutUs_1["default"], { title: "About Us", id: "section1", onboard: this.onboard }),
            React.createElement(Calendar_1["default"], { title: "Calendar", dark: false, id: "section2" }),
            React.createElement(Message_1["default"], { title: "A Message from Gaia", subtitle: message_1["default"], id: "section3" }),
            React.createElement(Gallery_1["default"], { title: "Gallery", dark: false, id: "section4" }),
            React.createElement(ContactForm_1["default"], { title: "Join Us", dark: false, onboard: this.onboard, id: "section5", onboardEnabled: this.state.onboardEnabled })));
    };
    return App;
}(React.Component));
exports["default"] = react_hot_loader_1.hot(module)(App);
