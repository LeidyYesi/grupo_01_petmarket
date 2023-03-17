module.exports = (sequelize, dataTypes) => {
  let alias = "Weight";

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
    tableName: "weights",
    underscore: true,
    timetamps: false,
  };

  const Weight = sequelize.define(alias, cols, config);

  return Weight;
};
