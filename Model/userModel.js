module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("companies", {
        company: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            isEmail: true, //checks for email format
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
      }, {timestamps: true},
      )
      return User
    } 