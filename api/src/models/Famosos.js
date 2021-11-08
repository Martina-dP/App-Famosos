const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('famoso', {
    id : {
      type : DataTypes.INTEGER,
      primaryKey: true,
      allowNull : false
    },
    name : {
      type : DataTypes.STRING,
      allowNull : false
    },
    lastname : {
      type : DataTypes.STRING,
      allowNull : false
    },
    img : {
      type : DataTypes.STRING,
      allowNull : false
    },
    value : {
      type : DataTypes.BOOLEAN,
      defaultValue: null
    },
  });
};