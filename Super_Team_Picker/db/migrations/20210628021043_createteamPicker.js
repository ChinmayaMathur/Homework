
exports.up = function(knex) {
      return knex.schema.createTable('team_picker', table => {
            table.bigIncrements('id'),
            table.string('name'),
            table.text('logo_url'),
            table.text('members')
      })
};

exports.down = function(knex) {
      return knex.schema.dropTable('team_picker')
};
