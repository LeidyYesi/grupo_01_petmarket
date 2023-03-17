// model size.js
module.exports = (sequelize, dataTypes) => {
  let alias = "Size";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    size: {
      type: dataTypes.STRING,
    },
  };

  let config = {
    tableName: "sizes",
    underscore: true,
    timetamps: false,
  };

  const Size = sequelize.define(alias, cols, config);

  
  /*Size.associate = function (models) {
    Size.belongsToMany(models.Product, {
      through: "products_sizes",
      as: "products",
      foreignKey: "size_id",
    });
  };*/

  return Size;
};
