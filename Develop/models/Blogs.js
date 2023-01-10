const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Blogs extends Model {}

Blogs.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        blog_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        blog_message: {
            type: DataTypes.STRING(2000),
            allowNull: false,
        },
        blog_author: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogs',
    }
);

module.exports = Blogs