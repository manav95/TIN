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
require("pure-react-carousel/dist/react-carousel.es.css");
var react_2 = require("react");
var AboutUs = /** @class */ (function (_super) {
    __extends(AboutUs, _super);
    function AboutUs(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { onboardEnabled: true };
        _this.onboard = props.onboard.bind(_this);
        return _this;
    }
    AboutUs.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "section" },
            react_1["default"].createElement("div", { className: "section-content", id: this.props.id },
                react_1["default"].createElement("h1", { style: { color: 'white' } }, this.props.title),
                react_1["default"].createElement(pure_react_carousel_1.CarouselProvider, { naturalSlideWidth: 100, naturalSlideHeight: 20, totalSlides: 5, touchEnabled: true, dragEnabled: true },
                    react_1["default"].createElement(pure_react_carousel_1.Slider, null,
                        react_1["default"].createElement(pure_react_carousel_1.Slide, { index: 0 }, "Time Is Now is an organization and movement of the people and for the people that creates peaceful solutions benefiting all life forms on the planet. TIN works with socially and environmentally conscious organizations, communities and movements, and elevates them through our various platforms. In doing so we draw forth solidarity, powerful unified action and together make strides towards world peace."),
                        react_1["default"].createElement(pure_react_carousel_1.Slide, { index: 1 }, "On the physical level - In addition to bringing together our various influential partners and organizing impactful unity rallies, marches, peaceful protests, festivals and global drum circles, TIN builds conscious, self-sustainable, self-governing communities/retreat centers which host events, seminars, workshops, retreats, ceremonies, festivals, etc. for attendees from around the world that at the same time operate as community centers providing ongoing services to the local/indigenous people of a given center\u2019s region. The centers provide alternative healing, education on health, wellness, fitness, arts, crafts, agriculture, trade, etc., basically all practical and relevant tools to help people live abundantly in today\u2019s world. The first of its kind being in Hawaii, with Nicaragua, Belize, Israel, and Palestine to follow and then the rest of the world."),
                        react_1["default"].createElement(pure_react_carousel_1.Slide, { index: 2 }, "On the spiritual level - Energetically/ spiritually / consciously -- We are weaving the matrix of our consciousness and turning ON the light of the flower-of-life that surrounds our planet earth. "),
                        react_1["default"].createElement(pure_react_carousel_1.Slide, { index: 3 }, "On the ecological level\u2014 We are creating a revolutionary, visionary \u201Cvehicle\" of big production which will generate and bring though it Divine\u2019s abundance. We will create an on going and on growing shared income to all who participate in the Enterprise with different options of involvement and participation. Eventually as we grow this could be an answer to homelessness, poverty, starvation and the need to buy into war. This would allow us to free our human minds from all the matter that does not matter any more, and live a peaceful abundant and harmonious life as we know to be our right and privilege to live as so. "),
                        react_1["default"].createElement(pure_react_carousel_1.Slide, { index: 4 },
                            "WE ARE NOT LEAVING ANYONE BEHIND :) ",
                            react_1["default"].createElement("br", null),
                            " Here is how you can get started: ",
                            react_1["default"].createElement("button", { onClick: this.props.onboard, className: "onboarding" }, " Join Us "),
                            " ",
                            react_1["default"].createElement("br", null))),
                    react_1["default"].createElement(pure_react_carousel_1.DotGroup, { className: 'dot-group' })))));
    };
    return AboutUs;
}(react_2.Component));
exports["default"] = AboutUs;
