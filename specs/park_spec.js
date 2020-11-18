const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  beforeEach(function (){
    park = new Park('Isla Nublar', 100000);
    
  });

  it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual(actual, 'Isla Nublar');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100000);
  });
  describe('collection', function(){

    it('should have a collection of dinosaurs', function(){
      
      const actual = park.numberInCollection();
      assert.strictEqual(actual, 3)
    });

    it('should be able to add a dinosaur to its collection', function(){
      park.addToCollection('Pteradon');
      const actual = park.numberInCollection();
      assert.strictEqual(actual, 4);
    });

    it('should be able to remove a dinosaur from its collection', function(){
      park.removeFromCollection();
      const actual = park.numberInCollection();
      assert.strictEqual(actual, 2);
    });
    
  })
    
  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.mostPopularDinosaur();
    assert.strictEqual(actual, 50);
  });


  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
