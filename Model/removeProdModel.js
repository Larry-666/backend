module.exports = (sequelize, DataTypes) => {

    const removeProduct = sequelize.define("products", {   
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false
        },
        specs: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descript: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        thumbimg: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img3: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img4: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img5: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img6: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img7: {
            type: DataTypes.STRING,
            allowNull: false
        },
      },
      {
        tableName: 'removeproduct',
        timestamps: false
      },

      )
      return removeProduct;
}