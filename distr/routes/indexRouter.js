"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _template = _interopRequireDefault(require("../template"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable linebreak-style */
const router = _express.default.Router();

const Checklistrouter = _express.default.Router(); // главная страница с приветствием


router.get('/', async (req, res) => {
  res.send((0, _template.default)({
    path: req.originalUrl,
    usernameSession: {
      nameUser: req.session?.nameUser,
      userId: req.session?.userId,
      email: req.session?.email,
      nameRole: req.session?.nameRole
    }
  }));
});
var _default = router;
exports.default = _default;