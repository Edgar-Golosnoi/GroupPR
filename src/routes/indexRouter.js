/* eslint-disable linebreak-style */
import express from 'express';
import template from '../template';

const router = express.Router();

const Checklistrouter = express.Router();
// главная страница с приветствием
router.get('/', async (req, res) => {
  res.send(template({ path: req.originalUrl, 
    usernameSession: {
      nameUser: req.session?.nameUser, 
      userId: req.session?.userId,
      email: req.session?.email,
      nameRole: req.session?.nameRole,},
    }));
});


export default router;
