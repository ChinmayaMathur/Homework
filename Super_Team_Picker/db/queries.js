const knex = require("./client"); //establish the connection with our db

module.exports = {
    index() {
        return knex.select().table('team_picker');
    },

    create(team) {
        console.log("new cohort: ", team);
        return knex("team_picker").insert(team, "*");
    },

    show(id) {
        return knex("team_picker").where("id", id).first();
        //returns an array of all rows that match; make sure only the first object is returned
    },
    
    delete(id) {
        return knex("team_picker").where("id", id).del();
    },

    update(team) {
        return knex("team_picker").where(team, "*").update();

    }
}