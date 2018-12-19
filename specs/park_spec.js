const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaurs;

  beforeEach(function () {

    dinosaur1 = new Dinosaur ('t-rex', 'carnivore', 50)
    dinosaur2 = new Dinosaur ('gallimimus', 'herbivore', 30)
    dinosaur3 = new Dinosaur ('velociraptor', 'carnivore', 80)
    dinosaur4 = new Dinosaur ('t-rex', 'carnivore', 65)
    dinosaurs = [dinosaur1, dinosaur2, dinosaur3, dinosaur4]
    dinosaur5 = new Dinosaur ('brachiosaurus', 'herbivore', 30)
    park = new Park('Isla Nubar', 60, dinosaurs)

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
    const actual = park.dinosaurs.length;
    assert.deepStrictEqual(actual, 4);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur5);
    const actual = park.dinosaurs.length;
    assert.deepStrictEqual(actual, 5);
  });

  it('should be able to remove a dinosaur from its collection', function(){

    park.removeDinosaur(dinosaur1);
    const actual = park.dinosaurs.length;
    assert.deepStrictEqual(actual, 3);

  });

  it('should be able to find the dinosaur that attracts the most visitors');
  // sort array by guestAttractedperday
  // take index[0]


  it('should be able to find all dinosaurs of a particular species', function(){
    const actual = park.findBySpecies('t-rex');
    const expected = [dinosaur1, dinosaur4];
    assert.deepStrictEqual(actual, expected);
  });


  it('should be able to find all dinosaurs of a particular species(empty)', function(){
    const actual = park.findBySpecies('mikeosaurus');
    const expected = [];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to remove all dinosaurs of a particular species');

});
