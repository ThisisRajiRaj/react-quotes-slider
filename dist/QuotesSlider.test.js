"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _testUtils = require("react-dom/test-utils");

var _QuotesSliderImpl = require("./QuotesSliderImpl");

var _QuotesSliderImpl2 = _interopRequireDefault(_QuotesSliderImpl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var container = null;
beforeEach(function () {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(function () {
  // cleanup on exiting
  (0, _reactDom.unmountComponentAtNode)(container);
  container.remove();
  container = null;
});

test("example json prop", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  var fakeResponse, carousel, quotes;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          fakeResponse = [{ "author": "John Doe", "quote": "blah" }, { "author": "foo", "quote": "bar" }];


          jest.spyOn(window, "fetch").mockImplementation(function () {
            var fetchResponse = {
              json: function json() {
                return Promise.resolve(fakeResponse);
              }
            };
            return Promise.resolve(fetchResponse);
          });
          _context2.next = 4;
          return (0, _testUtils.act)(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    (0, _reactDom.render)(_react2.default.createElement(_QuotesSliderImpl2.default, null), container);

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, undefined);
          })));

        case 4:

          expect(window.fetch).toHaveBeenCalledTimes(1);

          carousel = container.querySelectorAll("[class*=\"quoteSlider\"]");

          expect(carousel.length).toBe(1);

          quotes = container.querySelectorAll('blockquote');

          expect(quotes.length).toBe(4); // each item is contained once as selected and once as not selected

          expect(container.textContent).toContain("John Doe");

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, undefined);
})));

test("no json", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
  var carousel;
  return regeneratorRuntime.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:

          jest.spyOn(window, "fetch").mockImplementation(function () {
            return undefined;
          });
          _context4.next = 3;
          return (0, _testUtils.act)(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    (0, _reactDom.render)(_react2.default.createElement(_QuotesSliderImpl2.default, null), container);

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, undefined);
          })));

        case 3:

          expect(window.fetch).toHaveBeenCalledTimes(1);

          carousel = container.querySelectorAll("[class*=\"quoteSlider\"]");

          expect(carousel.length).toBe(0);

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee4, undefined);
})));