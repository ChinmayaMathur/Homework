// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'team_picker',
      username: 'chinmaya',
      password: '123Vardaan*'
    },
    migrations: { 
      tableName: "migrations",
      directory: "db/migrations" 
    }

  },
};
