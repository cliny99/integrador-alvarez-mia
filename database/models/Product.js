'use strict';

module.exports = function(sequelize, DataTypes){
    let alias = 'Product'; //nombre de la tabla en la base de datos
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        stock: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(512),
            allowNull: false
        },
        product_detail_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'product_detail',
                key: 'id'
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'category',
                key: 'id'
            }
        }
    };
    let config = {
        tableName: 'product',
        timestamps: true,
        underscored: true,
    };

    const Product = sequelize.define(alias, cols, config)

     Product.associate = function(models) {
        Product.belongsTo(models.ProductDetail, { foreignKey: 'product_detail_id' });
        Product.belongsTo(models.Category, { foreignKey: 'category_id' });
     };

    return Product;
}