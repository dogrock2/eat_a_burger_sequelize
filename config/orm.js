
const Burgers = require('./burgersTables.js');


let selectAll = cb => {
    Burgers.findAll({})
    .then(function(result) {
        let usersRows =  JSON.parse(JSON.stringify(result));
        cb(usersRows);
    });
};

let insertOne = bName => {
    Burgers.create({
        burgerName: bName
    });
};

let updateOne = (bID, fnc2) => {
    Burgers.findOne({ where: { id: bID } })
    .then(function (result) {
        result.updateAttributes({
          devoured: true
        });
    fnc2();    
    });
 };

let clearAll = () => {
    Burgers.destroy({
        where: {},
        truncate: true
      });
 };

module.exports = {
    returnAll: selectAll,
    addNew: insertOne,
    updateBurger: updateOne,
    clearTable: clearAll
};