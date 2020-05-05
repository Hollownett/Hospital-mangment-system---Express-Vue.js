module.exports = (app) => {
  app.post(`/medBooks`, require('./medBooksCreate'));
  app.put(`/medBooks/:id`, require('./medBooksUpdate'));
  app.post(`/medBooks/import`, require('./medBooksImport'));
  app.delete(`/medBooks`, require('./medBooksDestroy'));
  app.get(
    `/medBooks/autocomplete`,
    require('./medBooksAutocomplete'),
  );
  app.get(`/medBooks`, require('./medBooksList'));
  app.get(`/medBooks/:id`, require('./medBooksFind'));
};
