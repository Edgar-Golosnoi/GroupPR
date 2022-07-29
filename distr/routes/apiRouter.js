"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _models = require("../db/models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router(); // checkList i allList


router.get('/', async (req, res) => {
  const posts = await _models.Post.findAll({
    include: {
      model: _models.User
    },
    order: [['updatedAt', 'DESC']]
  });
  res.json(posts);
});
router.post('/posts', async (req, res) => {
  // eslint-disable-next-line max-len
  const currentUser = await _models.User.findOne({
    where: {
      username: req.body.username
    }
  }); // Находим User по его uesrname из клиента

  await _models.Post.create({
    title: req.body.title,
    body: req.body.body,
    user_id: currentUser.id
  });
  const posts = await _models.Post.findAll({
    include: {
      model: _models.User
    },
    // Добавляем модель User, чтоб сделать выемку из таблиц с юзерами
    order: [['updatedAt', 'DESC']]
  });
  res.json(posts);
});
router.delete('/posts/:id', async (req, res) => {
  // eslint-disable-next-line radix
  await _models.Post.destroy({
    where: {
      id: parseInt(req.params.id)
    }
  });
  const posts = await _models.Post.findAll({
    include: {
      model: _models.User
    },
    order: [['updatedAt', 'DESC']]
  });
  res.json(posts);
});
router.patch('/posts/:id', async (req, res) => {
  await _models.Post.update(req.body, {
    where: {
      id: parseInt(req.params.id, 10)
    }
  });
  res.sendStatus(200);
});
router.post('/users', async (req, res) => {
  // eslint-disable-next-line no-undef
  const hashpass = await bcrypt.hash(req.body.password, 10);
  const [currentUser, created] = await _models.User.findOrCreate({
    where: {
      username: req.body.username
    },
    defaults: {
      hashpass // Убираем в defaults, производим сравнение через bcrypt.compare

    }
  });

  if (created) {
    // eslint-disable-next-line max-len
    req.session.username = currentUser.username; // Сохраняем в сессию какую-то информацию и актвиируем её

    req.session.userId = currentUser.id;
    res.json({
      username: currentUser.username,
      id: currentUser.id
    });
  } else {
    // eslint-disable-next-line no-undef
    const passwordCheck = await bcrypt.compare(req.body.password, currentUser.hashpass);

    if (!created && !passwordCheck) {
      res.json({});
    } else {
      // eslint-disable-next-line max-len
      req.session.username = currentUser.username; // Сохраняем в сессию какую-то информацию и актвиируем её

      req.session.userId = currentUser.id;
      res.json({
        username: currentUser.username,
        id: currentUser.id
      });
    }
  }
});
router.get('/logout', (req, res) => {
  res.clearCookie('user_sid'); // Удалить куку

  req.session.destroy(); // Завершить сессию

  res.sendStatus(200);
});
var _default = router;
exports.default = _default;