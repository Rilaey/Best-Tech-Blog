const sequelize = require("../config/connection");
const seedUser = require('./userSeeds');
const seedBlogs = require('./blogSeeds')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedBlogs()

  process.exit(0);
};

seedDatabase();