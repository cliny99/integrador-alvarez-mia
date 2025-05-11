module.exports = function(sequelize, DataTypes){
    let alias = 'ProductDetail'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fabric: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        color: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        size: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    };
    let config = {
        tableName: 'product_detail', 
        timestamps: true,
        underscored: true,
    };

    const ProductDetail = sequelize.define(alias, cols, config)
    return ProductDetail;
}