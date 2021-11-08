const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('famosos-usuarios', {
    id : {
      type : DataTypes.INTEGER,
      primaryKey: true,
      allowNull : false
    },
    value : {
        type : DataTypes.BOOLEAN,
        defaultValue: null,
      },
  });
};