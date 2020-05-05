import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const medBooksListPage = () =>
  import('@/modules/medBooks/components/medBooks-list-page.vue');
const medBooksFormPage = () =>
  import('@/modules/medBooks/components/medBooks-form-page.vue');
const medBooksViewPage = () =>
  import('@/modules/medBooks/components/medBooks-view-page.vue');
const medBooksImporterPage = () =>
  import('@/modules/medBooks/components/medBooks-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'medBooks',
        path: '/medBooks',
        component: medBooksListPage,
        meta: {
          auth: true,
          permission: Permissions.values.medBooksView,
        },
      },
      {
        name: 'medBooksNew',
        path: '/medBooks/new',
        component: medBooksFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.medBooksCreate,
        },
      },
      {
        name: 'medBooksImporter',
        path: '/medBooks/import',
        component: medBooksImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.medBooksImport,
        },
      },
      {
        name: 'medBooksEdit',
        path: '/medBooks/:id/edit',
        component: medBooksFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.medBooksEdit,
        },
        props: true,
      },
      {
        name: 'medBooksView',
        path: '/medBooks/:id',
        component: medBooksViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.medBooksView,
        },
        props: true,
      },
    ],
  },
];
