const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('famoso_usuario', {
      value : {
          type : DataTypes.BOOLEAN,
        },
      },
    { timestamps: false }
  );
};
