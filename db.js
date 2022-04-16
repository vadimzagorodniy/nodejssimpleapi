import { Sequelize } from 'sequelize';
import express from "express";

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('school', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 8889
});

try {
    await sequelize.authenticate();

    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default sequelize;