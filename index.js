const http = require('http');
const cheerio = require('cheerio');

const queryIMDB = function queryIMDB(search, cb) {
    http.get({
      host: 'www.imdb.com',
      path: `/find?ref_=nv_sr_fn&q=${search}&s=all`
    }, function(res){
      var html = ''
      res.on('data', function(chunk){
        html += chunk
      })
      res.on('end', function(){
        const movieNames = getMovieNames(html)
        cb(null, movieNames);
      })
    })
}

const getMovieNames = function getMovieNames(html) {
  const $ = cheerio.load(html)
  const movieNames = $('.findSection')
  .first()
  .find('.result_text')
  .map((i, elm) => $(elm).text())
  .toArray()
  console.log(movieNames);
  return movieNames
}

const run = function run() {
  const search = process.argv.slice(2).join('+');
  queryIMDB(search, function(err, movieNames){
    if (err) throw err
    console.log(movieNames.join('\n'));
  });
}

run()

module.exports = {
  queryIMDB,
  getMovieNames,
  run
}
