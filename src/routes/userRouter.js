import express from 'express';
import bcrypt from 'bcrypt';
import template from '../template';
import { User, Role } from '../db/models';

const userRouter = express.Router();

userRouter.get('/auth', async (req, res) => {
  res.send(template({ path: req.path}));
})

// переходит на авторизацию пользователя

userRouter.post('/auth', async (req, res) => {
  const { email, password } = req.body;
  // console.log("--parrol-->", password);
  if (email && password) {
    const user = await User.findOne({
      include: ({ model: Role }),//include: ({ all: true }),
      where:
    { email },
    });
    // console.log('--user-->',user);
    if (user) {
      const checkPass = await bcrypt.compare(password, user.hashPassword);
      // console.log('--checkPass-->',checkPass);
      if (checkPass) {
        req.session.user_id = user.id;
        req.session.email = user.email;
        req.session.nameUser = user.nameUser;
        req.session.admin = user.admin;
        res.json(user);
      } else { res.json({});}
    } else {res.json({});}
  }else {res.json({});}
});

export default userRouter;
