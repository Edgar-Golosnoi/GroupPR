"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _template = _interopRequireDefault(require("../template"));

var _models = require("../db/models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userRouter = _express.default.Router();

userRouter.get('/auth', async (req, res) => {
  res.send((0, _template.default)({
    path: req.path
  }));
}); // переходит на авторизацию пользователя

userRouter.post('/auth', async (req, res) => {
  const {
    email,
    password
  } = req.body; // console.log("--parrol-->", password);

  if (email && password) {
    const user = await _models.User.findOne({
      include: {
        model: _models.Role
      },
      //include: ({ all: true }),
      where: {
        email
      }
    }); // console.log('--user-->',user);

    if (user) {
      const checkPass = await _bcrypt.default.compare(password, user.hashPassword); // console.log('--checkPass-->',checkPass);

      if (checkPass) {
        req.session.user_id = user.id;
        req.session.email = user.email;
        req.session.nameUser = user.nameUser;
        req.session.admin = user.admin;
        res.json(user);
      } else {
        res.json({});
      }
    } else {
      res.json({});
    }
  } else {
    res.json({});
  }
});
var _default = userRouter;
exports.default = _default;