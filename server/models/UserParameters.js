import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const UserParameterers = sequelize.define('user-parameters', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
})

export default UserParameterers