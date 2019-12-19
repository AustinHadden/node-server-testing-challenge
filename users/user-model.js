const db = require('../data/dbConfig.js');

module.exports = {
  add,
  remove,
  getAll,
  findById,
};

async function add(user) {
    const [id] = await db('users').insert(user);

    return findById(id);
}

function remove(id) {
    return db("users")
      .where("id", id)
      .del();
  }

function getAll() {
  return db('users');
}

function findById(id) {
    return db('users')
      .where({ id })
      .first();
  }
