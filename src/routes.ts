import { Router } from 'express';
import { TagController, UserController, AuthUserController, ComplimentController } from './controller';
import { ensureAdmin, ensureAuthenticated } from './middlewares'

const userController = new UserController();
const tagController = new TagController();
const authController = new AuthUserController();
const complimentController = new ComplimentController();

const router = Router();

router.route('/login')
  .get(ensureAdmin, authController.getToken);

router.route('/users')
  .post(userController.create);

router.route('/tags')
  .post(ensureAuthenticated, ensureAdmin, tagController.create);

router.route('/compliments')
  .post(ensureAuthenticated, ensureAdmin, complimentController.create);


export default router;
