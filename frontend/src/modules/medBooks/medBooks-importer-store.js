import importerStore from '@/shared/importer/importer-store';
import { medBooksService } from '@/modules/medBooks/medBooks-service';
import medBooksImporterFields from '@/modules/medBooks/medBooks-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  medBooksService.import,
  medBooksImporterFields,
  i18n('entities.medBooks.importer.fileName'),
  i18n('entities.medBooks.importer.hint'),
);
