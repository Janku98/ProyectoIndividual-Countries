const { DataTypes } = require('sequelize');

module.exports =  (sequelize) => {

sequelize.define('activity', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      // type: DataTypes.UUID,
      // defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5")
    },
    time: {
      type: DataTypes.STRING
    },
    season: {
      type: DataTypes.ENUM("verano", "otoño", "invierno", "primavera")
    },
    price: {
      type: DataTypes.INTEGER
    }
  });
};