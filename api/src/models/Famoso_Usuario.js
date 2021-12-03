const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('famoso_usuario', {
      votacion : {
          type : DataTypes.BOOLEAN
        },
      },
    { timestamps: false }
  );
};
