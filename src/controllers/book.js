//Loading the crypto module in node.js
import crypto from 'crypto';
import models from '../database/models';
import {comparePassword, hashPassword,jwtToken } from '../utils/jwToken';

const { book } = models;

export default class Book {
  
  static async getBooks(req, res) {
    try {
      return book.findAll().then((info) => {
        res.status(200).send(info);
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}