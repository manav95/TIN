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
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Component } from "react";
var AboutUs = /** @class */ (function (_super) {
    __extends(AboutUs, _super);
    function AboutUs(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { onboardEnabled: true };
        _this.onboard = props.onboard.bind(_this);
        return _this;
    }
    AboutUs.prototype.render = function () {
        return (_jsx("div", __assign({ className: "section" }, { children: _jsxs("div", __assign({ className: "section-content", id: this.props.id }, { children: [_jsx("h1", __assign({ style: { color: 'white' } }, { children: this.props.title }), void 0),
                    _jsxs(CarouselProvider, __assign({ naturalSlideWidth: 100, naturalSlideHeight: 20, totalSlides: 5, touchEnabled: true, dragEnabled: true }, { children: [_jsxs(Slider, { children: [_jsx(Slide, __assign({ index: 0 }, { children: "Time Is Now is an organization and movement of the people and for the people that creates peaceful solutions benefiting all life forms on the planet. TIN works with socially and environmentally conscious organizations, communities and movements, and elevates them through our various platforms. In doing so we draw forth solidarity, powerful unified action and together make strides towards world peace." }), void 0),
                                    _jsx(Slide, __assign({ index: 1 }, { children: "On the physical level - In addition to bringing together our various influential partners and organizing impactful unity rallies, marches, peaceful protests, festivals and global drum circles, TIN builds conscious, self-sustainable, self-governing communities/retreat centers which host events, seminars, workshops, retreats, ceremonies, festivals, etc. for attendees from around the world that at the same time operate as community centers providing ongoing services to the local/indigenous people of a given center\u2019s region. The centers provide alternative healing, education on health, wellness, fitness, arts, crafts, agriculture, trade, etc., basically all practical and relevant tools to help people live abundantly in today\u2019s world. The first of its kind being in Hawaii, with Nicaragua, Belize, Israel, and Palestine to follow and then the rest of the world." }), void 0),
                                    _jsx(Slide, __assign({ index: 2 }, { children: "On the spiritual level - Energetically/ spiritually / consciously -- We are weaving the matrix of our consciousness and turning ON the light of the flower-of-life that surrounds our planet earth. " }), void 0),
                                    _jsx(Slide, __assign({ index: 3 }, { children: "On the ecological level\u2014 We are creating a revolutionary, visionary \u201Cvehicle\" of big production which will generate and bring though it Divine\u2019s abundance. We will create an on going and on growing shared income to all who participate in the Enterprise with different options of involvement and participation. Eventually as we grow this could be an answer to homelessness, poverty, starvation and the need to buy into war. This would allow us to free our human minds from all the matter that does not matter any more, and live a peaceful abundant and harmonious life as we know to be our right and privilege to live as so. " }), void 0),
                                    _jsxs(Slide, __assign({ index: 4 }, { children: ["WE ARE NOT LEAVING ANYONE BEHIND :) ", _jsx("br", {}, void 0), " Here is how you can get started: ", _jsx("button", __assign({ onClick: this.props.onboard, className: "onboarding" }, { children: " Join Us " }), void 0), " ", _jsx("br", {}, void 0)] }), void 0)] }, void 0),
                            _jsx(DotGroup, { className: 'dot-group' }, void 0)] }), void 0)] }), void 0) }), void 0));
    };
    return AboutUs;
}(Component));
export default AboutUs;
