import { Sequelize, DataTypes } from 'sequelize';
import sequelize from "../db.js";

const Student = sequelize.define('Students', {
    // Model attributes are defined here
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING ,
        allowNull: false
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    // Other model options go here
});

export default Student