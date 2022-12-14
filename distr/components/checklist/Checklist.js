"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Checklist;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Checklist({
  userName = 'asf'
}) {
  const [input, setInput] = (0, _react.useState)({
    value: ''
  });

  const valueChange = e => setInput(prev => ({ ...prev,
    value: e.target.value
  }));

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    class: "container bg-light rounded-3 mt-3",
    style: {
      width: "700px"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-5 pt-3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "container rounded-3 border border-dark pt-3",
    style: {
      width: "600px"
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    class: "text-body font-weight-bold"
  }, "\u041F\u0440\u0438\u0432\u0435\u0442, ", /*#__PURE__*/_react.default.createElement("mark", null, userName, "!")), /*#__PURE__*/_react.default.createElement("p", {
    class: "text-body"
  }, "\u0418 \u0434\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0412\u044B\u0441\u043E\u043A\u043E\u0433\u043E\u0440\u044C\u044F!"), /*#__PURE__*/_react.default.createElement("p", {
    class: "text-body"
  }, "\u0412\u043F\u0435\u0440\u0435\u0434\u0438 \u043D\u0430\u0441 \u0436\u0434\u0435\u0442 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E\u0435 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u0432 \u043C\u0438\u0440 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0438 \u0441\u0430\u043C\u044B\u043C \u0433\u043B\u0430\u0432\u043D\u044B\u043C \u043F\u0440\u043E\u0432\u043E\u0434\u043D\u0438\u043A\u043E\u043C \u0431\u0443\u0434\u0435\u0442 - ", /*#__PURE__*/_react.default.createElement("mark", null, userName)), /*#__PURE__*/_react.default.createElement("p", {
    class: "text-body"
  }, "\u041C\u044B \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043B\u0438 \u0434\u043B\u044F \u0442\u0435\u0431\u044F \u0447\u0435\u043A-\u043B\u0438\u0441\u0442 \u043D\u0430 \u043F\u0435\u0440\u0432\u044B\u0439 \u0434\u0435\u043D\u044C"), /*#__PURE__*/_react.default.createElement("footer", {
    class: "blockquote-footer"
  }, "\u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C\u0441\u044F, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0442\u044B \u043C\u043E\u0436\u0435\u0448\u044C \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u043F\u0443\u043D\u043A\u0442\u044B \u0432 \u0443\u0434\u043E\u0431\u043D\u043E\u043C \u0434\u043B\u044F \u0442\u0435\u0431\u044F \u043F\u043E\u0440\u044F\u0434\u043A\u0435"))), /*#__PURE__*/_react.default.createElement("p", {
    class: "text-info pt-3"
  }, /*#__PURE__*/_react.default.createElement("strong", null, "\u041D\u0443\u0436\u043D\u043E \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0442\u0432\u043E\u0435 \u0440\u0430\u0431\u043E\u0447\u0435\u0435 \u043C\u0435\u0441\u0442\u043E:")), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-check"
  }, /*#__PURE__*/_react.default.createElement("input", {
    onChange: valueChange,
    class: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckDefault"
  }), /*#__PURE__*/_react.default.createElement("label", {
    class: "form-check-label",
    for: "flexCheckDefault"
  }, /*#__PURE__*/_react.default.createElement("p", {
    class: "text-dark"
  }, "\u041D\u0430\u0441\u0442\u0430\u0432\u043D\u0438\u043A \u0432\u044B\u0434\u0430\u043B \u043C\u043D\u0435 \u043F\u0440\u043E\u043F\u0443\u0441\u043A"))), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-check"
  }, /*#__PURE__*/_react.default.createElement("input", {
    onChange: valueChange,
    class: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckDefault"
  }), /*#__PURE__*/_react.default.createElement("label", {
    class: "form-check-label",
    for: "flexCheckDefault"
  }, /*#__PURE__*/_react.default.createElement("p", {
    class: "text-dark"
  }, "\u041D\u0430\u0441\u0442\u0430\u0432\u043D\u0438\u043A \u0441\u043E\u043E\u0431\u0449\u0438\u043B \u043F\u0430\u0440\u043E\u043B\u044C \u043E\u0442 Wi-Fi"))), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-check"
  }, /*#__PURE__*/_react.default.createElement("input", {
    onChange: valueChange,
    class: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckDefault"
  }), /*#__PURE__*/_react.default.createElement("label", {
    class: "form-check-label",
    for: "flexCheckDefault"
  }, /*#__PURE__*/_react.default.createElement("p", {
    class: "text-dark"
  }, "\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0439 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0432\u044B\u0434\u0430\u043B \u043C\u043D\u0435 \u043D\u043E\u0443\u0442\u0431\u0443\u043A"))), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-check"
  }, /*#__PURE__*/_react.default.createElement("input", {
    onChange: valueChange,
    class: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckDefault"
  }), /*#__PURE__*/_react.default.createElement("label", {
    class: "form-check-label",
    for: "flexCheckDefault"
  }, /*#__PURE__*/_react.default.createElement("p", {
    class: "text-dark"
  }, "\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0439 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0432\u044B\u0434\u0430\u043B \u043C\u043D\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u044B \u043A \u043F\u043E\u0447\u0442\u0435"))), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-check"
  }, /*#__PURE__*/_react.default.createElement("input", {
    onChange: valueChange,
    class: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckDefault"
  }), /*#__PURE__*/_react.default.createElement("label", {
    class: "form-check-label",
    for: "flexCheckDefault"
  }, /*#__PURE__*/_react.default.createElement("p", {
    class: "text-dark"
  }, "\u0422\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B(-\u0430) \u043E\u0444\u0438\u0441-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0443 \u043D\u0430 \u043F\u043E\u0447\u0442\u0443 \u0441\u043F\u0438\u0441\u043E\u043A \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0439 \u0434\u043B\u044F \u0442\u0435\u0431\u044F \u043A\u0430\u043D\u0446\u0435\u043B\u044F\u0440\u0438\u0438"))), /*#__PURE__*/_react.default.createElement("p", {
    class: "text-info mt-10 pt-3"
  }, /*#__PURE__*/_react.default.createElement("strong", null, "\u0412\u0430\u0436\u043D\u043E \u043F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441 \u043A\u043E\u043B\u043B\u0435\u0433\u0430\u043C\u0438:")), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-check"
  }, /*#__PURE__*/_react.default.createElement("input", {
    onChange: valueChange,
    class: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckDefault"
  }), /*#__PURE__*/_react.default.createElement("label", {
    class: "form-check-label",
    for: "flexCheckDefault"
  }, /*#__PURE__*/_react.default.createElement("p", {
    class: "text-dark"
  }, "\u0422\u044B \u043F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u043B\u0441\u044F (-\u0430\u0441\u044C) \u0441\u043E \u0441\u0432\u043E\u0438\u043C \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u043C"))), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-check"
  }, /*#__PURE__*/_react.default.createElement("input", {
    onChange: valueChange,
    class: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckDefault"
  }), /*#__PURE__*/_react.default.createElement("label", {
    class: "form-check-label",
    for: "flexCheckDefault"
  }, /*#__PURE__*/_react.default.createElement("p", {
    class: "text-dark"
  }, "\u0422\u044B \u043D\u0430\u043F\u0438\u0441\u0430\u043B(-\u0430) \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u043D\u044B\u0439 \u0447\u0430\u0442"))), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-check"
  }, /*#__PURE__*/_react.default.createElement("input", {
    onChange: valueChange,
    class: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckDefault"
  }), /*#__PURE__*/_react.default.createElement("label", {
    class: "form-check-label",
    for: "flexCheckDefault"
  }, /*#__PURE__*/_react.default.createElement("p", {
    class: "text-dark"
  }, "\u041D\u0430\u043F\u0438\u0448\u0438 \u0438\u043C\u0435\u043D\u0430 \u0442\u0440\u0435\u0445 \u0442\u0432\u043E\u0438\u0445 \u043A\u043E\u043B\u043B\u0435\u0433 \u043F\u043E \u043E\u0442\u0434\u0435\u043B\u0443:", /*#__PURE__*/_react.default.createElement("input", {
    class: "form-control col-xs-2",
    id: "ex1",
    type: "text"
  })))), /*#__PURE__*/_react.default.createElement("p", {
    class: "text-info mt-10 pt-3"
  }, /*#__PURE__*/_react.default.createElement("strong", null, "\u0412\u0430\u0436\u043D\u043E \u043F\u0440\u043E\u0439\u0442\u0438 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0432 \u043E\u0442\u0434\u0435\u043B\u0435 \u043A\u0430\u0434\u0440\u043E\u0432:")), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-check"
  }, /*#__PURE__*/_react.default.createElement("input", {
    onChange: valueChange,
    class: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckDefault"
  }), /*#__PURE__*/_react.default.createElement("label", {
    class: "form-check-label",
    for: "flexCheckDefault"
  }, /*#__PURE__*/_react.default.createElement("p", {
    class: "text-dark"
  }, "\u0422\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B (-\u0430)  \u0441\u043A\u0430\u043D\u0434\u044B \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043D\u0430 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0432 \u043E\u0442\u0434\u0435\u043B \u043A\u0430\u0434\u0440\u043E\u0432"))), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-check"
  }, /*#__PURE__*/_react.default.createElement("input", {
    onChange: valueChange,
    class: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckDefault"
  }), /*#__PURE__*/_react.default.createElement("label", {
    class: "form-check-label",
    for: "flexCheckDefault"
  }, /*#__PURE__*/_react.default.createElement("p", {
    class: "text-dark"
  }, "\u0422\u044B \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043B (-\u0430) \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u043E \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0439 \u0442\u0430\u0439\u043D\u0435"))), /*#__PURE__*/_react.default.createElement("p", {
    class: "text-info mt-10 pt-3"
  }, /*#__PURE__*/_react.default.createElement("strong", null, "\u0410 \u0442\u0435\u043F\u0435\u0440\u044C \u0441\u0430\u043C\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C:")), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-check"
  }, /*#__PURE__*/_react.default.createElement("input", {
    onChange: valueChange,
    class: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckDefault"
  }), /*#__PURE__*/_react.default.createElement("label", {
    class: "form-check-label",
    for: "flexCheckDefault"
  }, /*#__PURE__*/_react.default.createElement("p", {
    class: "text-dark"
  }, "\u041F\u043E\u043B\u0443\u0447\u0438 \u0441\u0432\u043E\u044E \u043F\u0435\u0440\u0432\u0443\u044E \u0437\u0430\u0434\u0430\u0447\u0443 \u0443 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F"))), /*#__PURE__*/_react.default.createElement("div", {
    class: "form-check"
  }, /*#__PURE__*/_react.default.createElement("input", {
    onChange: valueChange,
    class: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckDefault"
  }), /*#__PURE__*/_react.default.createElement("label", {
    class: "form-check-label",
    for: "flexCheckDefault"
  }, /*#__PURE__*/_react.default.createElement("p", {
    class: "text-dark"
  }, "\u0421\u043E\u0437\u0434\u0430\u0439 \u043F\u043E\u0434\u043F\u0438\u0441\u044C \u0432 \u043F\u043E\u0447\u0442\u0435 \u043F\u043E \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u043C\u0443 \u0448\u0430\u0431\u043B\u043E\u043D\u0443"))), /*#__PURE__*/_react.default.createElement("div", {
    class: "container bg-secondary rounded-2 mt-3",
    style: {
      width: "500px"
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    class: "text-center"
  }, "\u041A\u043B\u0430\u0441\u0441\u043D\u043E\u0433\u043E \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F!"), /*#__PURE__*/_react.default.createElement("p", {
    class: "text-center"
  }, "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0412\u044B\u0441\u043E\u043A\u043E\u0439 \u0433\u043E\u0440\u044B \uD83D\uDC99")), /*#__PURE__*/_react.default.createElement("div", {
    class: "pt-3"
  })));
}