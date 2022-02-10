import Sequelize from 'sequelize';

const {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_PORT
} = process.env;

const sequelize  = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    dialect: 'mysql',
    host: DB_HOST,
    port: DB_PORT,
});

export default sequelize;