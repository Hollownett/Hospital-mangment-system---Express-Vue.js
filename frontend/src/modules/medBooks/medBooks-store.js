import medBooksListStore from '@/modules/medBooks/medBooks-list-store';
import medBooksViewStore from '@/modules/medBooks/medBooks-view-store';
import medBooksImporterStore from '@/modules/medBooks/medBooks-importer-store';
import medBooksFormStore from '@/modules/medBooks/medBooks-form-store';
import medBooksDestroyStore from '@/modules/medBooks/medBooks-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: medBooksDestroyStore,
    form: medBooksFormStore,
    list: medBooksListStore,
    view: medBooksViewStore,
    importer: medBooksImporterStore,
  },
};
