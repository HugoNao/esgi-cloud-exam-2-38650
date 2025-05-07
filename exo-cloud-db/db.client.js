const sequelize = new Sequelize(
  process.env.INTERNAL_DATABASE_URL,
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);
