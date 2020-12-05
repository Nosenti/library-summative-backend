//Loading the crypto module in node.js
import crypto from 'crypto';
import models from '../database/models';
import {comparePassword, hashPassword,jwtToken } from '../utils/jwToken';

const { Book} = models;
export default class Books {
  static async getBooks(req, res) {
    try {
      return Book.findAll().then((info) => {
        res.status(200).send(info);
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async viewBook(req,res){
    const { Book_id } = req.params;
      return Book.findOne({ where: { Book_id } }).then((book) => {
			res.status(200).send(book);
		});

}
}