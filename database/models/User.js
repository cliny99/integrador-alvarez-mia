module.exports = function(sequelize, DataTypes){
    let alias = 'User'; //nombre de la tabla en la base de datos
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        deleted_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
    };
    let config = {
        tableName: 'user',
        timestamps: true,
        underscored: true,
    };

    const User = sequelize.define(alias, cols, config)
    return User;
}