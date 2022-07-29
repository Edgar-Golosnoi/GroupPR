"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _sessionFileStore = _interopRequireDefault(require("session-file-store"));

var _indexRouter = _interopRequireDefault(require("./routes/indexRouter"));

var _listRouter = require("./routes/listRouter");

var _userRouter = _interopRequireDefault(require("./routes/userRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = (0, _express.default)();
const FileStore = (0, _sessionFileStore.default)(_expressSession.default);
app.use(_express.default.static('public')); // app.use(morgan('dev'));

app.use(_express.default.urlencoded({
  extended: true
}));
app.use(_express.default.json());
const sessionConfig = {
  name: 'user_sid',
  // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: 'andromeda' ?? 'test',
  // Секретное слово для шифрования, может быть любым
  resave: true,
  // Пересохранять ли куку при каждом запросе
  store: new FileStore(),
  saveUninitialized: false,
  // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    // Срок истечения годности куки в миллисекундах
    httpOnly: true // Серверная установка и удаление куки, по умолчанию true

  }
};
app.use((0, _expressSession.default)(sessionConfig));
app.use('/', _indexRouter.default); // главная страница с приветствием

app.use('/user', _userRouter.default);
app.use('/lists', _listRouter.router);
app.use('/checklist', _indexRouter.default);
app.listen(PORT, () => {
  console.log('server start on port ', PORT);
});