import express from 'express';
import usercontroller from '../controllers/user';
import bookController from '../controllers/book';
import { userSignInValidate } from '../validators/userSigninValidation';

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => res.send('Welcome ALU Website'));
router.post('/api/users/signin', userSignInValidate, usercontroller.signIn);
router.get('/api/viewbooks', bookController.getBooks)

export default router;