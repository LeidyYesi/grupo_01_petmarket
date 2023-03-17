module.exports = (sequelize, dataTypes) => {

  let alias = "Product";   // este alias se usa en los controladores

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING,
    },
    description: {
      type: dataTypes.STRING,
    },
    categories_id: {
      type: dataTypes.INTEGER,
    },
    pets_id: {
      type: dataTypes.INTEGER,
    },
    weights_id: {
      type: dataTypes.INTEGER,
    },
    sizes_id: {
      type: dataTypes.INTEGER,
    },
    price: {
      type: dataTypes.INTEGER,
    },
    discount: {
      type: dataTypes.INTEGER,
    },
    img: {
      type: dataTypes.STRING,
    }
  };

  let config = {
    tableName: "products",
    underscore: true,
    timestamps: false,
  };

  const Product = sequelize.define(alias, cols, config);

 Product.associate = function (models){
  Product.belongsToMany(models.Color, { // models.Actor -> Actors es el valor de alias en actor.js
    as: "productsColors",
    through: 'products_colors',
    foreignKey: 'product_id',
    otherKey: 'color_id',
    timestamps: false
})
}

 


/*Product.associate = function (models) {
      Product.hasMany(models.Categorie, {
        as: "categories",
        foreignKey: "categories_id"
      })
    };*/

  return Product;
}