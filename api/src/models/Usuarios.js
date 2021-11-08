const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('usuario', {
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
    email : {
      type : DataTypes.STRING,
      allowNull : false
    },
    edad : {
      type : DataTypes.INTEGER,
      defaultValue: null
    },
    trabajo : {
        type : DataTypes.BOOLEAN,
        defaultValue: null
      },
  });
};