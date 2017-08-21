const assert = require('chai').assert
const queryIMDB = require('./index').queryIMDB
const getMovieNames = require('./index').getMovieNames
const run = require('./index').run

describe('MovieSearch CLI', function(){
  describe('queryIMDB', function (){
    it('search does does not equal an empty string ""', function(){
      assert.notEqual(queryIMDB(search, cb), "");
    })
  })

  describe('queryIMDB', function(){
    it('getMovieNames passes an HTML argument', function(){
      assert.equal(getMovieNames(html), html);
    })
  })

  describe('run', function(){
    it('console.log returns movieNames with a new line', function(){
      assert.typeOf(run(), '\n');
    })
  })

});
