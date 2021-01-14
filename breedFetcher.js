const request = require('request');

const searchCat = (breed, callback) => {
  const breed_ids = breed.toLowerCase().slice(0, 4);
  request(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed_ids}`, (err, response, body) => {
    if (err) {
      console.log(err);
    } else if (JSON.parse(body).length === 0) {
      console.log(`Breed ${breed} not found, we kindly ask you to please check your spelling, Mr.illiterate!`);
    } else {
      console.log(JSON.parse(body)[0].breeds[0].description);
      return callback(JSON.parse(body)[0].breeds[0].description);
    }
  });
};

module.exports = searchCat;

