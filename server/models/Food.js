import { DatabaseError, DataTypes } from "sequelize";
import sequelize from "../db.js";

const Food = sequelize.define('food', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    calories: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    proteins: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    fats: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    carbs: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

export default Food