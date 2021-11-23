const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('usuario', {
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
        allowNull : false
      },
      trabajo : {
          type : DataTypes.BOOLEAN,
          defaultValue: null
        },
      },
    { timestamps: false }
  );
};