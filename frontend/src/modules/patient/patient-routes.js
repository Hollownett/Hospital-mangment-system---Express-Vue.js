import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const BookListPage = () =>
  import('@/modules/patient/components/patient-list-page.vue');
const BookFormPage = () =>
  import('@/modules/patient/components/patient-form-page.vue');
const BookViewPage = () =>
  import('@/modules/patient/components/patient-view-page.vue');
const BookImporterPage = () =>
  import('@/modules/patient/components/patient-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'patient',
        path: '/patient',
        component: BookListPage,
        meta: {
          auth: true,
          permission: Permissions.values.bookView,
        },
      },
      {
        name: 'bookNew',
        path: '/patient/new',
        component: BookFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.bookCreate,
        },
      },
      {
        name: 'bookImporter',
        path: '/patient/import',
        component: BookImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.bookImport,
        },
      },
      {
        name: 'bookEdit',
        path: '/patient/:id/edit',
        component: BookFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.bookEdit,
        },
        props: true,
      },
      {
        name: 'bookView',
        path: '/patient/:id',
        component: BookViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.bookView,
        },
        props: true,
      },
    ],
  },
];
