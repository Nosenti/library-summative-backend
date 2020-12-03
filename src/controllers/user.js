//Loading the crypto module in node.js
import crypto from 'crypto';
import models from '../database/models';
import {comparePassword, hashPassword,jwtToken } from '../utils/jwToken';

const {user} = models;

export default class User {
  
  static async signIn(req, res) {
    try {
      const { email, password } = req.body;
      const user_ = await user.findOne({ where: { email } });
      if (!user_) return res.status(400).send({ status: 400, error: "User doesn't exist" });
      if (user_ && comparePassword(password, user_.password)) {
        const token = jwtToken.createToken(user_);
        return res.status(200).send({ token });
      }
      return res.status(400).send({ status: 400, error: 'invalid email/password combination ' });
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  }
}