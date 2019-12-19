exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('users')
    .truncate()
    .then(function() {
      return knex('users').insert([
        { name: 'sam' },
        { name: 'frodo' },
        { name: 'pippin' },
        { name: 'merry' },
      ]);
    });
};
