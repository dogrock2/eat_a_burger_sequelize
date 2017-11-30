const orm = require('../config/orm.js');

let getAllFalse = function (cbIn){
   
    let printThem = (x) => {
        cbIn(x);
    };

    orm.returnAll(printThem);
    
};

let addNew = bName => {
   orm.addNew(bName);
};

let updateBurger = (bID, fnc1) => {    
    let fnc2 = () => {
       fnc1();
    };
    orm.updateBurger(bID, fnc2);
};

let clearTable = () => {
    orm.clearTable();
};

module.exports = {
    nonEaten: getAllFalse,
    addBurger: addNew,
    devBurger: updateBurger,
    clearAll: clearTable
};