const Dinosaur = require('./dinosaur.js');

const Park = function (name, ticketPrice, collectionOfDinoaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = [];

}

Park.prototype.addDinosaur = function(dinosaur) {
  this.collectionOfDinosaurs.push(dinosaur);
}

module.exports = Park;
