import { verifyingToken } from '../utils/jwtToken';

const isLibrarian = (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.status(400).send({ error: 'no token provided' });
    }
    const userToken = verifyingToken(token);
    if (userToken.role !== 'librarian') {
      return res.status(403).send({ message: 'User is not a librarian' });
    }next();
  } catch (error) {
    return res.status(401).send({ error: 'Invalid Token' });
  }
};

export default isLibrarian;