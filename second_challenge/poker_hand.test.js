
let assert = require("chai").assert;
let {PokerHand} = require('../index');


describe('Challenge 2: Poker Hand', function() {
  // this is just a simple input
  it('should handle the example', function() {
    assert.equal(PokerHand("input"), 'input');
  });
});
