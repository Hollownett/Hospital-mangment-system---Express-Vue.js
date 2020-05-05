const genericFixture = require('./genericFixture');
const medBooksRepository = require('../database/repositories/medBooksRepository');

const medBooksFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new medBooksRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = medBooksFixture;
