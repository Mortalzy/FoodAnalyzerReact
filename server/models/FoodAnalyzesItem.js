import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const FoodAnalyzesItem = sequelize.define('food-analyzes-item', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    food_analyzes_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    proteins: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },

    carbs: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },

    fats: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },

    callories: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
})

export default FoodAnalyzesItem