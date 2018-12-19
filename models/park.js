// const Dinosaur = require('./dinosaur.js');

const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;

}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
}


Park.prototype.removeDinosaur = function(dinosaur)
{
  this.dinosaurs.pop(dinosaur);
}


Park.prototype.findBySpecies = function(species){
  dinosaursBySpecies = [];
  for (dinosaur of this.dinosaurs){
    if(dinosaur.species === species){
      dinosaursBySpecies.push(dinosaur);
    }
    return dinosaursBySpecies;
  }
}

Park.prototype.totalVisitorsPerDay = function() {


}


module.exports = Park;
