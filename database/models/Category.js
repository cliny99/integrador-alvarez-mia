module.exports = function(sequelize, DataTypes){
    let alias = 'category'; //nombre de la tabla en la base de datos
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    };
    let config = {
        tableName: 'category', 
        timestamps: false
    };

    const Category = sequelize.define(alias, cols, config)
    return Category;
}