module.exports = (sequelize, DataTypes) => {
  const Tip = sequelize.define('Tip', {
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  return Tip;
};