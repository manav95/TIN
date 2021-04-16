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
exports.__esModule = true;
var React = __importStar(require("react"));
var pure_react_carousel_1 = require("pure-react-carousel");
require("pure-react-carousel/dist/react-carousel.es.css");
var react_1 = require("react");
var AboutUs = /** @class */ (function (_super) {
    __extends(AboutUs, _super);
    function AboutUs(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { onboardEnabled: true };
        _this.onboard = props.onboard.bind(_this);
        return _this;
    }
    AboutUs.prototype.render = function () {
        return (React.createElement("div", { className: "section" },
            React.createElement("div", { className: "section-content", id: this.props.id },
                React.createElement("h1", { style: { color: 'white' } }, this.props.title),
                React.createElement(pure_react_carousel_1.CarouselProvider, { naturalSlideWidth: 100, naturalSlideHeight: 20, totalSlides: 5, touchEnabled: true, dragEnabled: true },
                    React.createElement(pure_react_carousel_1.Slider, null,
                        React.createElement(pure_react_carousel_1.Slide, { index: 0 }, "Time Is Now is an organization and movement of the people and for the people that creates peaceful solutions benefiting all life forms on the planet. TIN works with socially and environmentally conscious organizations, communities and movements, and elevates them through our various platforms. In doing so we draw forth solidarity, powerful unified action and together make strides towards world peace."),
                        React.createElement(pure_react_carousel_1.Slide, { index: 1 }, "On the physical level - In addition to bringing together our various influential partners and organizing impactful unity rallies, marches, peaceful protests, festivals and global drum circles, TIN builds conscious, self-sustainable, self-governing communities/retreat centers which host events, seminars, workshops, retreats, ceremonies, festivals, etc. for attendees from around the world that at the same time operate as community centers providing ongoing services to the local/indigenous people of a given center\u2019s region. The centers provide alternative healing, education on health, wellness, fitness, arts, crafts, agriculture, trade, etc., basically all practical and relevant tools to help people live abundantly in today\u2019s world. The first of its kind being in Hawaii, with Nicaragua, Belize, Israel, and Palestine to follow and then the rest of the world."),
                        React.createElement(pure_react_carousel_1.Slide, { index: 2 }, "On the spiritual level - Energetically/ spiritually / consciously -- We are weaving the matrix of our consciousness and turning ON the light of the flower-of-life that surrounds our planet earth. "),
                        React.createElement(pure_react_carousel_1.Slide, { index: 3 }, "On the ecological level\u2014 We are creating a revolutionary, visionary \u201Cvehicle\" of big production which will generate and bring though it Divine\u2019s abundance. We will create an on going and on growing shared income to all who participate in the Enterprise with different options of involvement and participation. Eventually as we grow this could be an answer to homelessness, poverty, starvation and the need to buy into war. This would allow us to free our human minds from all the matter that does not matter any more, and live a peaceful abundant and harmonious life as we know to be our right and privilege to live as so. "),
                        React.createElement(pure_react_carousel_1.Slide, { index: 4 },
                            "WE ARE NOT LEAVING ANYONE BEHIND :) ",
                            React.createElement("br", null),
                            " Here is how you can get started: ",
                            React.createElement("button", { onClick: this.props.onboard, className: "onboarding" }, " Join Us "),
                            " ",
                            React.createElement("br", null))),
                    React.createElement(pure_react_carousel_1.DotGroup, { className: 'dot-group' })))));
    };
    return AboutUs;
}(react_1.Component));
exports["default"] = AboutUs;
