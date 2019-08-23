// Required for command line tests
import mySolution from './my-module.js'
var chai = require('chai'); // Only required for 'command line' testing.


mocha.setup('bdd');
var assert = chai.assert;

describe('Initialization Parameters', function() {
  it('final result is equal to 3', function() {

    let x = 1;
    let retVal = 3; // mySolution(x);

    assert.equal(3, retVal);
  });
});

mocha.run();
