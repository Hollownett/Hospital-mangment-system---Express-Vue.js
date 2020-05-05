import bookListStore from '@/modules/patient/patient-list-store';
import bookViewStore from '@/modules/patient/patient-view-store';
import bookImporterStore from '@/modules/patient/patient-importer-store';
import bookFormStore from '@/modules/patient/patient-form-store';
import bookDestroyStore from '@/modules/patient/patient-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: bookDestroyStore,
    form: bookFormStore,
    list: bookListStore,
    view: bookViewStore,
    importer: bookImporterStore,
  },
};
