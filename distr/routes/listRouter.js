"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _template = _interopRequireDefault(require("../template"));

var _models = require("../db/models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const listRouter = _express.default.Router();

const router = _express.default.Router();

exports.router = router;
router.get('/', async (req, res) => {
  // с аксиос получить данные, но по адресу  не переходим
  const lists = await _models.CheckList.findAll({
    order: [['updatedAt', 'DESC']]
  });
  res.json(lists);
});
router.post('/', async (req, res) => {
  //? const currentUser = await CheckList.findOne({ where: { nameUser: req.body.userName } }); // Находим User по его uesrname из клиента
  console.log("reg.body--->", req.body);
  await _models.CheckList.create({
    nameEmployer: req.body.nameEmployer,
    nameMentor: req.body.nameMentor,
    user_id: req.body.user_id //req.body.user_id

  });
  const lists = await _models.CheckList.findAll({
    // include: { model: User }, // Добавляем модель User, чтоб сделать выемку из таблиц с юзерами
    order: [['updatedAt', 'DESC']]
  });
  res.json(lists);
});
router.patch('/posts/:id', async (req, res) => {
  await _models.CheckList.update(req.body, {
    where: {
      id: parseInt(req.params.id, 10)
    }
  });
  res.sendStatus(200);
}); // router.get('/logout', (req, res) => {
//   res.clearCookie('user_sid'); // Удалить куку
//   req.session.destroy(); // Завершить сессию
//   res.sendStatus(200);
// });

var _default = listRouter;
exports.default = _default;