module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    qrcode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    stripeId: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    }
  });
  return User;
}