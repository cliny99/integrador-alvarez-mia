module.exports = function(sequelize, DataTypes){
    let alias = 'ProductDetail'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        detail: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
    };
    let config = {
        tableName: 'productdetail', 
        timestamps: true,
        underscored: true,
    };

    const ProductDetail = sequelize.define(alias, cols, config)
    return ProductDetail;
}