module.exports = (app) => {
  app.post(`/patient`, require('./patientCreate'));
  app.put(`/patient/:id`, require('./patientUpdate'));
  app.post(`/patient/import`, require('./patientImport'));
  app.delete(`/patient`, require('./patientDestroy'));
  app.get(
    `/patient/autocomplete`,
    require('./patientAutocomplete'),
  );
  app.get(`/patient`, require('./patientList'));
  app.get(`/patient/:id`, require('./patientFind'));
};
