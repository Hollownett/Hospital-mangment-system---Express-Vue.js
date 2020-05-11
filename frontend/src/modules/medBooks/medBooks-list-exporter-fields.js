import { medBooksModel } from '@/modules/medBooks/medBooks-model';

const { fields } = medBooksModel;

export default [
  fields.id,
  fields.patient,
  fields.member,
  fields.issueDate,
  fields.returnDate,
  fields.status,
  fields.desiase,
  fields.recipe,
  fields.fee,
  fields.createdAt
];
