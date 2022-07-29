"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navbar;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Navbar({
  authUser
}) {
  const location = (0, _reactRouterDom.useLocation)(); // console.log("authUser-->",authUser);

  return /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar navbar-light bg-light rounded-3"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "text-dark my-auto mx-3"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://elbrus-bootcamp.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F642542ae-a4b2-4a29-a37a-4ca2080102d5%2Fmountain.png?table=block&id=c5ecb8b7-d5a0-457e-913a-78968e32d878&spaceId=ae9a42d7-4691-4e42-8b18-b4afbde7a000&width=1020&userId=&cache=v2",
    width: "50",
    height: "50",
    className: "d-inline-block align-top",
    alt: ""
  }), "\u041E\u041E\u041E \u201C\u0412\u044B\u0441\u043E\u043A\u0430\u044F \u0433\u043E\u0440\u0430\u201D"), location.pathname === '/' ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/user/auth",
    className: "btn btn-light my-auto align-self-right mx-3"
  }, "\u0412\u043E\u0439\u0442\u0438!") : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), authUser?.nameRole === 'Admin' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/lists",
    className: "btn btn-light my-auto align-self-right mx-3"
  }, "\u0412\u0441\u0435 \u0447\u0435\u043A\u043B\u0438\u0441\u0442\u044B"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/user",
    className: "btn btn-light my-auto align-self-right mx-3"
  }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "btn btn-light my-auto align-self-right mx-3"
  }, "\u0412\u044B\u0445\u043E\u0434")) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), authUser?.nameRole === 'noAdmin' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/lists",
    className: "btn btn-light my-auto align-self-right mx-3"
  }, "\u0412\u0441\u0435 \u0447\u0435\u043A\u043B\u0438\u0441\u0442\u044B"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/userlist",
    className: "btn btn-light my-auto align-self-right mx-3"
  }, "\u041C\u043E\u0438 \u0447\u0435\u043A\u043B\u0438\u0441\u0442\u044B"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "btn btn-light my-auto align-self-right mx-3"
  }, "\u0412\u044B\u0445\u043E\u0434")) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null));
} //  Нужно откорректировать пути в линках (ОНИ ПОСТОЯННО МЕНЯЮТСЯ Я НЕ ЕБУ БЛИААТЬ!!) ЭМПЛООЙИИИИИИИИС