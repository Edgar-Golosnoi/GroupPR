"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Auth;

var _axios = _interopRequireDefault(require("axios"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Auth({
  setAuthUser
}) {
  const [input, setInput] = (0, _react.useState)({
    email: '',
    password: ''
  });
  const navigator = (0, _reactRouterDom.useNavigate)();

  const changeHandler = e => setInput(prev => ({ ...prev,
    [e.target.name]: e.target.value
  }));

  const onSubmitHandler = e => {
    e.preventDefault(); // console.log("--input-->", input);

    if (input.password !== '' && input.username !== '') {
      _axios.default.post('/user/auth', input).then(res => {
        // console.log("---res.data-->",res.data.Role.nameRole)
        setAuthUser({ ...res.data,
          nameRole: res.data.Role.nameRole
        });
        if (!res.data.id) navigator('/');
        navigator('/home');
      });
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mx-auto mt-5",
    style: {
      width: '400px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '250px'
    }
  }), /*#__PURE__*/_react.default.createElement("form", {
    className: "container bg-light rounded-3 py-3",
    align: "center",
    onSubmit: onSubmitHandler
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-dark"
  }, "Your Email"), /*#__PURE__*/_react.default.createElement("input", {
    value: input.email,
    onChange: changeHandler,
    type: "email",
    name: "email",
    className: "form-control",
    id: "exampleInputEmail1",
    "aria-describedby": "emailHelp",
    placeholder: "Email"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-dark"
  }, "Password"), /*#__PURE__*/_react.default.createElement("input", {
    value: input.password,
    onChange: changeHandler,
    type: "password",
    name: "password",
    className: "form-control",
    id: "exampleInputPassword1",
    placeholder: "Your Password"
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn btn-danger"
  }, "Sign in!"), /*#__PURE__*/_react.default.createElement("div", {
    className: "my-2 my-sm-0"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/home",
    className: "btn btn-light"
  }, "Skip!"))));
}