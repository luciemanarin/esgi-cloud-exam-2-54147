const { Sequelize } = require('sequelize')

const connectionString = process.env.DATABASE_URL;
const sequelize = new Sequelize(connectionString, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection to database has been established successfully.');
    sequelize.sync().catch((error) => console.error("Cannot sync the database:", error));
  })
  .catch((error) => console.error("Cannot connect to database, please check environment credentials:", error));

module.exports = sequelize;