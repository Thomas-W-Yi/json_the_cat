const request = require('request');
const breed_ids = process.argv[2].toLowerCase().slice(0, 4);

request(`https://api.thecatapi.co/v1/images/search?breed_ids=${breed_ids}`, (err, response, body) => {
  if (err) {
    console.log(err);
  } else if (JSON.parse(body).length === 0) {
    console.log(`Breed ${process.argv[2]} not found, we kindly ask you to please check your spelling, Mr.illiterate!`);
  } else {
    
    console.log(JSON.parse(body)[0].breeds[0].description);
  }
});