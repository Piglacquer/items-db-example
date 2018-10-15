
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {name: 'pop tarts', description: 'tasty'},
        {name: 'strawberries', description: 'sweet, with a funny little head of hair'},
        {name: 'water', description: 'Bruce Lee'},
      ]);
    });
};
