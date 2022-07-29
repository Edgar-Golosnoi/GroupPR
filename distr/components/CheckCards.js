"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CheckCards;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CheckCards({
  checklist
}) {
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "card",
    style: "width: 18rem;"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "card-body"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    class: "card-title"
  }, checklist.nameEmployer), /*#__PURE__*/_react.default.createElement("h6", {
    class: "card-subtitle mb-2 text-muted"
  }, checklist.nameMentor), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: `/checklist/${checklist.id}`,
    className: "btn btn-light my-auto align-self-right mx-3"
  }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")));
}