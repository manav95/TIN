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
var pure_react_carousel_1 = require("pure-react-carousel");
var Gallery = /** @class */ (function (_super) {
    __extends(Gallery, _super);
    function Gallery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gallery.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "section" + (this.props.dark ? " section-dark" : "") },
            react_1["default"].createElement("div", { className: "section-content", id: this.props.id },
                react_1["default"].createElement("h1", { style: { color: 'white' } }, this.props.title),
                react_1["default"].createElement(pure_react_carousel_1.CarouselProvider, { naturalSlideWidth: 100, naturalSlideHeight: 45, totalSlides: 2, disableKeyboard: false, touchEnabled: true, dragEnabled: true },
                    react_1["default"].createElement(pure_react_carousel_1.Slider, null,
                        react_1["default"].createElement(pure_react_carousel_1.Slide, { index: 0 },
                            react_1["default"].createElement("iframe", { title: "Slide", width: "560", height: "315", src: "https://www.youtube.com/embed/BryL-5A6ZEQ", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" })),
                        react_1["default"].createElement(pure_react_carousel_1.Slide, { index: 1 },
                            react_1["default"].createElement("iframe", { title: "SecSlide", width: "560", height: "315", src: "https://www.youtube.com/embed/49lh6yPoH_Y", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" }))),
                    react_1["default"].createElement(pure_react_carousel_1.DotGroup, { className: 'dot-group' })))));
    };
    return Gallery;
}(react_1.Component));
exports["default"] = Gallery;
