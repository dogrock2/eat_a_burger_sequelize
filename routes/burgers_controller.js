
var models = require('../models');
const express = require("express");
const router = express.Router();

module.exports = function (app) {
   
    app.get("/", function(req, res) {       
        models.burgers.findAll({})
        .then(function (result) {        
            res.render("index", {
                burgerName: result
            });
        });  
    });

    app.post("/submitBurger", (req, res) => {
        let inBurgerName = req.body.val1;
        if (inBurgerName) {
            models.burgers.create({
                burgerName: inBurgerName
            });
            res.json({});
        }
    });

    app.put("/devourBurger", (req, res) => {
        let buttonID = req.body.btnID; 
        if(buttonID){
            models.burgers.findOne({ where: { id: buttonID } })
            .then(function (result) {
                result.updateAttributes({
                    devoured: true
                });
                res.json({});    
          });
        }               
    });

    app.get("/clear", (req, res) => {
        models.burgers.destroy({
        where: {},
        truncate: true
      });
      res.redirect('/'); 
    });

};