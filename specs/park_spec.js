const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;

  beforeEach(function () {
    park = new Park('Isla Nubar', 60, [dinosaur1, dinosaur2])
    dinosaur1 = new Dinosaur ('t-rex', 'carnivore', 50)
    dinosaur2 = new Dinosaur ('gallimimus', 'herbivore', 30)

  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Isla Nubar');

  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 60);
  });


  it('should have a collection of dinosaurs', function(){
    const actual = park.collectionOfDinosaurs.length;
    assert.deepStrictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.collectionOfDinosaurs.length;
    assert.deepStrictEqual(actual, 2);

  });

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
