import express from 'express';
import template from '../template';
import { CheckList } from '../db/models';

const listRouter = express.Router();

const router = express.Router();

router.get('/', async (req, res) => {
  // с аксиос получить данные, но по адресу  не переходим
  const lists = await CheckList.findAll({
    order: [['updatedAt', 'DESC']],
  });
  res.json(lists);
});

router.post('/', async (req, res) => {
  //? const currentUser = await CheckList.findOne({ where: { nameUser: req.body.userName } }); // Находим User по его uesrname из клиента
  console.log("reg.body--->",req.body);
  await CheckList.create({ 
    nameEmployer: req.body.nameEmployer, 
    nameMentor: req.body.nameMentor, 
    user_id: req.body.user_id //req.body.user_id
  });
  const lists = await CheckList.findAll({
    // include: { model: User }, // Добавляем модель User, чтоб сделать выемку из таблиц с юзерами
    order: [['updatedAt', 'DESC']],
  });
  res.json(lists);
});

router.patch('/posts/:id', async (req, res) => {
  await CheckList.update(req.body, { where: { id: parseInt(req.params.id, 10) } });
  res.sendStatus(200);
});

// router.get('/logout', (req, res) => {
//   res.clearCookie('user_sid'); // Удалить куку
//   req.session.destroy(); // Завершить сессию
//   res.sendStatus(200);
// });

export { router };
export default listRouter;
