const express = require("express");
const knex = require('../db/queries');

const router = express.Router();


router.get("/", (req,res) => {
      knex 
          .index() 
          .then(data => {
              res.render("index", {team_picker: data});
          })
  })
  

  //GET "/new"
  router.get("/new", (req,res) => {
      res.render("new");
  })
  
  //POST "/cohorts"
  router.post("/", (req, res) => {
      knex 
        .create(req.body) 
        .then(data => { 
            res.redirect(`/cohorts`)    
        })
        .catch(err => {
            console.log(`Error ${err}`)
        })
    })
  
  // /:id is a wildcard match
  router.get("/:id", (req,res) => {
      knex
        .show(req.params.id)
        .then(data => {
            res.render("show", {team: data})
        })
  })
  

// delete cohort
  router.delete("/:id", (req, res) => {
    console.log("task id is:" + req.params.id);
    knex
    .delete(req.params.id)
    .then(() => {
        res.redirect("/cohorts")
    })
})

// edit cohort
router.get("/:id/edit", (req, res) => {
    console.log("hello from edit route");
    knex
    .show(req.params.id)
    .then(data => {
    res.render("edit", { team: data });
    });
});

// PATCH
router.patch("/:id", (req, res) => {
    const updatedCohort = {
        logo_url: req.body.logo_url,
        name: req.body.name,
        members: req.body.members
    };
    knex
    .show(req.params.id)
    .update(updatedCohort)
    .then(() => {
        res.redirect(`/cohorts`);
    });
});


module.exports = router;
  
  