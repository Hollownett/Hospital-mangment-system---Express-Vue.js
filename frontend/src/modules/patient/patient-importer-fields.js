import { BookModel } from '@/modules/patient/patient-model';

const { fields } = BookModel;

export default [
  fields.id,
  fields.isbn,
  fields.title,
  fields.author,
  fields.status,
  fields.birthDate,
  fields.createdAt
];
