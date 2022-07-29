
import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
// import Checklist from './components/checklist/Checklist';
import indexRouter from './routes/indexRouter';
import { router as listRouter } from './routes/listRouter';
import userRouter from './routes/userRouter';

require ('dotenv').config();



const PORT = process.env.PORT || 3000;
const app = express();
const FileStore = store(session);

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionConfig = {
  name: 'user_sid', 				// Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: 'andromeda' ?? 'test',	// Секретное слово для шифрования, может быть любым
  resave: true, 				// Пересохранять ли куку при каждом запросе
  store: new FileStore(),
  saveUninitialized: false, 		// Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, 				// Серверная установка и удаление куки, по умолчанию true
  },
};

app.use(session(sessionConfig));

app.use('/', indexRouter); // главная страница с приветствием
app.use('/user', userRouter);
app.use('/lists', listRouter);
app.use('/checklist', indexRouter)

app.listen(PORT, () => {
  console.log('server start on port ', PORT);
});
