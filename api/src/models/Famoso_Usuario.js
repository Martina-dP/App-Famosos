const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('famoso_usuario', {
      id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        allowNull : false
      },
      value : {
          type : DataTypes.BOOLEAN,
          allowNull : false,
          defaultValue : null
        },
      },
    { timestamps: false }
  );
};
