
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        { username: "userTest1", password: "passwordTest1" },
        { username: "userTest2", password: "passwordTest2" },
        { username: "userTest3", password: "passwordTest3" }
      ]);
    });
};
