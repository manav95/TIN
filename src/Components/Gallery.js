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
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
var Gallery = /** @class */ (function (_super) {
    __extends(Gallery, _super);
    function Gallery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gallery.prototype.render = function () {
        return (_jsx("div", __assign({ className: "section" + (this.props.dark ? " section-dark" : "") }, { children: _jsxs("div", __assign({ className: "section-content", id: this.props.id }, { children: [_jsx("h1", __assign({ style: { color: 'white' } }, { children: this.props.title }), void 0),
                    _jsxs(CarouselProvider, __assign({ naturalSlideWidth: 100, naturalSlideHeight: 45, totalSlides: 2, disableKeyboard: false, touchEnabled: true, dragEnabled: true }, { children: [_jsxs(Slider, { children: [_jsx(Slide, __assign({ index: 0 }, { children: _jsx("iframe", { title: "Slide", width: "560", height: "315", src: "https://www.youtube.com/embed/BryL-5A6ZEQ", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" }, void 0) }), void 0),
                                    _jsx(Slide, __assign({ index: 1 }, { children: _jsx("iframe", { title: "SecSlide", width: "560", height: "315", src: "https://www.youtube.com/embed/49lh6yPoH_Y", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" }, void 0) }), void 0)] }, void 0),
                            _jsx(DotGroup, { className: 'dot-group' }, void 0)] }), void 0)] }), void 0) }), void 0));
    };
    return Gallery;
}(Component));
export default Gallery;
