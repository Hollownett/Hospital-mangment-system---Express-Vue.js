const userFixture = require('./userFixture');
const medBooksFixture = require('./medBooksFixture');
const bookFixture = require('./patientFixture');
const AbstractRepository = require('../database/repositories/abstractRepository');

module.exports = {
  user: userFixture,
  medBooks: medBooksFixture,
  patient: bookFixture,

  async cleanDatabase() {
    await AbstractRepository.cleanDatabase();
  },
};
