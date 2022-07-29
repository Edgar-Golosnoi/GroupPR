"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = template;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-router-dom/server");

var _server2 = require("react-dom/server");

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _hbs = _interopRequireDefault(require("hbs"));

var _App = _interopRequireDefault(require("../components/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function template(initState) {
  const Path = _path.default.join(__dirname, '../view/index.hbs');

  const html = _fs.default.readFileSync(Path, 'utf-8');

  const hbsTemplate = _hbs.default.compile(html);

  const reactComponent = (0, _server2.renderToString)( /*#__PURE__*/_react.default.createElement(_server.StaticRouter, {
    location: initState.path
  }, /*#__PURE__*/_react.default.createElement(_App.default, initState)));
  return hbsTemplate({
    initState: JSON.stringify(initState),
    content: reactComponent,
    title: 'Заказчику понравится'
  });
}