import express from 'express';
import usercontroller from '../controllers/user';
import bookController from '../controllers/book';
import borrowController from '../controllers/request'
import { userSignInValidate } from '../validators/userSigninValidation';

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => res.send('Welcome ALU Website'));
router.post('/api/users/signin', userSignInValidate, usercontroller.signIn);
router.get('/api/viewbooks', bookController.getBooks);
router.get('/api/viewbook/:id', bookController.viewBook);
router.post('/api/users/signup',usercontroller.signup)
router.get('/api/borrowBook/:id', borrowController.borrowBooks);
router.get('/api/borrowedBooks', borrowController.findBorrowedBooks)
router.get('/api/returnBorrowedBook/:id', borrowController.returnBorrowedBook);

export default router;