const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      // type: DataTypes.UUID,
      // defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      },
    name: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    flag:{
      type: DataTypes.STRING,
      allowNull: false
    },
    region:{
      type: DataTypes.STRING,
      allowNull: true
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: true
    },
    continent: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.DECIMAL,
    },
    population: {
      type: DataTypes.INTEGER,
    },
    timezone: {
      type: DataTypes.STRING,
    }
    
  });
  
};



