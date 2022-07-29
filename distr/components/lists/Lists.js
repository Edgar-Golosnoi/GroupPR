"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Lists;

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _reactRouterDom = require("react-router-dom");

var _CheckCards = _interopRequireDefault(require("../CheckCards"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Lists({
  authUser
}) {
  const [input, setInput] = (0, _react.useState)({
    nameEmployer: '',
    nameMentor: '',
    user_id: authUser.id
  });
  const navigator = (0, _reactRouterDom.useNavigate)();
  const [lists, setLists] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    if (!window.initState) {
      (0, _axios.default)('lists').then(res => setLists(res.data));
    } else {
      delete window.initState;
    }
  }, []);

  const changeHandler = e => setInput(prev => ({ ...prev,
    [e.target.name]: e.target.value
  }));

  const onSubmitHandler = e => {
    e.preventDefault(); // console.log("--input-->", input);

    if (input.nameEmployer !== '' && input.nameMentor !== '') {
      _axios.default.post('/lists', input).then(res => {
        console.log("res.data lists--->", res.data);
        setLists(res.data); // console.log("---res.data-->",res.data.Role.nameRole)
        // if (!res.data.length) navigator('/')

        navigator('/lists');
      });
    }
  };

  console.log("lists---->", lists);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mx-auto mt-5",
    style: {
      width: '400px'
    }
  }, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: onSubmitHandler,
    className: "container bg-light rounded-3 py-3",
    align: "center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-dark"
  }, "\u0418\u043C\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430"), /*#__PURE__*/_react.default.createElement("input", {
    value: input.nameEmployer,
    onChange: changeHandler,
    type: "text",
    name: "nameEmployer",
    className: "form-control",
    id: "exampleInputEmail1",
    "aria-describedby": "emailHelp",
    placeholder: "\u0418\u043C\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-dark"
  }, "\u0418\u043C\u044F \u043D\u0430\u0441\u0442\u0430\u0432\u043D\u0438\u043A\u0430"), /*#__PURE__*/_react.default.createElement("input", {
    value: input.nameMentor,
    onChange: changeHandler,
    type: "text",
    name: "nameMentor",
    className: "form-control",
    id: "exampleInputPassword1",
    placeholder: "\u0418\u043C\u044F \u043D\u0430\u0441\u0442\u0430\u0432\u043D\u0438\u043A\u0430"
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn btn-light"
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")));
}