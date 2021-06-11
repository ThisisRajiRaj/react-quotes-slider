"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _QuotesSliderImpl = require("./QuotesSliderImpl");

var _QuotesSliderImpl2 = _interopRequireDefault(_QuotesSliderImpl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function QuotesSlider(props) {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(_QuotesSliderImpl2.default, {
      interval: props.interval,
      quotesfileurl: props.quotesfileurl
    })
  );
}

exports.default = QuotesSlider;