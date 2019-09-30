module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  port: '5433',
  define: {
    timestaps: true,
    underscored: true,
    underscoredAll: true,
  },
};
