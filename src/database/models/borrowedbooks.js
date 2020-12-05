'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Borrowedbooks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Borrowedbooks.belongsTo(models.Book, {
			foreignKey: 'Book_id',
		});
    
    Borrowedbooks.belongsTo(models.User,{
      foreignKey:'email'
    })


    }
  };
  Borrowedbooks.init({
    Book_id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    Date_to_returnBook: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Borrowedbooks',
  });
  return Borrowedbooks;
};