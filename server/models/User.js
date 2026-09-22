import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    second_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

export default User