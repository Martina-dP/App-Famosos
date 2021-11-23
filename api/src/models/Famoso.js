const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('famoso', {
        name : {
          type : DataTypes.STRING,
          allowNull : false,
        },
        lastname : {
          type : DataTypes.STRING,
          allowNull : false,
        },
        img : {
          type : DataTypes.STRING,
          allowNull : false,
        }
      }, 
    {timestamps: false }
  );
};