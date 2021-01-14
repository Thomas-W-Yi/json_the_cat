const { assert } = require('chai');

const searchCat = require('../breedFetcher');

describe('#breedFetcher', () => {
  it('breedFetcher should return description of cat breed from cat API', (done) => {
    searchCat('Chartreux', (desc) => {
      const description = 'The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.';
      assert.equal(desc, `${description}`);
      done();
    });
  });
});