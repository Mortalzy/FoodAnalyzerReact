import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const UserParameterers = sequelize.define('user-parameters', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }, 
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    height: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },

    activityCoefficient: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    goal: {
        type: DataTypes.STRING,
        allowNull: false
    },

    targetWeight: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    mealsPerDay: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
})

export default UserParameterers