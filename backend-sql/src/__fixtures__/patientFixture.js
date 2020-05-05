const genericFixture = require('./genericFixture');
const BookRepository = require('../database/repositories/patientRepository');

const bookFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new BookRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = bookFixture;
