const assert = require('chai').assert
// const queryIMDB = require('./index').queryIMDB
const { getMovieNames, queryIMDB, run } = require('../index')
// const run = require('./index').run

describe('MovieSearch CLI', function(){
  // describe('queryIMDB', function (){
  //   it('search does does not equal an empty string ""', function(){
  //     assert.notEqual(queryIMDB(search, cb), "");
  //   })
  // })

  describe('queryIMDB', function(){
    it('getMovieNames passes an HTML argument', function(){
      let html = `<div class="findSection"> Hello World!<div class="result_text">Hey ya!</div></div>`
      const result = ['Hey ya!']
      assert.deepEqual(getMovieNames(html), result);
    })
  })

  // describe('run', function(){
  //   it('console.log returns movieNames with a new line', function(){
  //     assert.typeOf(run(), '\n');
  //   })
  // })

});
