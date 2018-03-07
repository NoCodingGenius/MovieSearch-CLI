const assert = require('chai').assert
const { getMovieNames, queryIMDB, run } = require('../index')

describe('MovieSearch CLI', function(){
  describe('queryIMDB', function (){
    let search = 333;
    const movieNames = "333"
    it('search should be a string', function(){
      assert.typeOf(queryIMDB(search, cb), 'string');
    })
  })

  describe('queryIMDB', function(){
    it('getMovieNames passes an HTML argument', function(){
      let html = `<div class="findSection">Hello World!<div class="result_text">Hey ya!</div></div>`
      const result = ['Hey ya!']
      assert.deepEqual(getMovieNames(html), result);
    })
  })

  describe('run', function(){
    let html = `<div class="findSection">Hello World!<div class="result_text"><p>Hey ya 1!</p><p>Hey ya 2!</p><p>Hey ya 3!</p></div></div>`
    const result = ['Hey ya!', 'Hey ya 2!', 'Hey ya 3!']
    it('console.log returns movieNames with a new line', function(){
      assert.typeOf(run(),
        `Hey ya 1!
        Hey ya 2!
        Hey ya 3!`);
    })
  })

});
