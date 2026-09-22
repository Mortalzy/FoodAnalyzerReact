import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const FoodAnalyzes = sequelize.define('food-analyzes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

export default FoodAnalyzes