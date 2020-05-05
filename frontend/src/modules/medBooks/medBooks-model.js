import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import EnumeratorField from '@/shared/fields/enumerator-field';
import { BookField } from '@/modules/patient/patient-field';
import { UserField } from '@/modules/auth/user-field';
import StringField from '@/shared/fields/string-field';
import IntegerField from '@/shared/fields/integer-field';
import IntegerRangeField from '@/shared/fields/integer-range-field';

function label(name) {
  return i18n(`entities.medBooks.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.medBooks.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  patient: BookField.relationToOne('patient', label('patient'), {
    "required": true
  }),
  member: UserField.relationToOne('member', label('member'), {
    "required": true
  }),
  issueDate: new DateTimeField('issueDate', label('issueDate'), {
    "required": true
  }),
  dueDate: new DateTimeField('dueDate', label('dueDate'), {
    "required": true
  }),
  returnDate: new DateTimeField('returnDate', label('returnDate'), {}),
  status: new EnumeratorField('status', label('status'), [
    { id: 'inProgress', label: enumeratorLabel('status', 'inProgress') },
    { id: 'overdue', label: enumeratorLabel('status', 'overdue') },
    { id: 'closed', label: enumeratorLabel('status', 'closed') },
  ],{}),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
  issueDateRange: new DateTimeRangeField(
    'issueDateRange',
    label('issueDateRange'),
  ),
  dueDateRange: new DateTimeRangeField(
    'dueDateRange',
    label('dueDateRange'),
  ),
  returnDateRange: new DateTimeRangeField(
    'returnDateRange',
    label('returnDateRange'),
  ),
  desiase: new StringField('desiase', label('desiase'),{
    "max": 255
  }),
  recipe: new StringField('recipe', label('recipe'),{
    "max": 255
  }),
  fee: new IntegerField('fee', label('fee'),{
  }),
  feeRange: new IntegerRangeField('feeRange', label('feeRange'),),
};

export class medBooksModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
