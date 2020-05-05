import importerStore from '@/shared/importer/importer-store';
import { BookService } from '@/modules/patient/patient-service';
import bookImporterFields from '@/modules/patient/patient-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  BookService.import,
  bookImporterFields,
  i18n('entities.patient.importer.fileName'),
  i18n('entities.patient.importer.hint'),
);
