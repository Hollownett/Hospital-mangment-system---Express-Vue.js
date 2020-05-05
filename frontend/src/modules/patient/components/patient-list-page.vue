<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.patient.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.patient.list.title"></app-i18n>
      </h1>

      <app-patient-list-toolbar></app-patient-list-toolbar>
      <app-patient-list-filter></app-patient-list-filter>
      <app-patient-list-table></app-patient-list-table>
    </div>
  </div>
</template>

<script>
import BookListFilter from '@/modules/patient/components/patient-list-filter.vue';
import BookListTable from '@/modules/patient/components/patient-list-table.vue';
import BookListToolbar from '@/modules/patient/components/patient-list-toolbar.vue';

export default {
  name: 'app-patient-list-page',

  components: {
    [BookListFilter.name]: BookListFilter,
    [BookListTable.name]: BookListTable,
    [BookListToolbar.name]: BookListToolbar,
  },
};
</script>

<style>
</style>
