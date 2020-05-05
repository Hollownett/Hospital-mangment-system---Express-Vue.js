<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.medBooks.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.medBooks.list.title"></app-i18n>
      </h1>

      <app-medBooks-list-toolbar></app-medBooks-list-toolbar>
      <app-medBooks-list-filter></app-medBooks-list-filter>
      <app-medBooks-list-table></app-medBooks-list-table>
    </div>
  </div>
</template>

<script>
import medBooksListFilter from '@/modules/medBooks/components/medBooks-list-filter.vue';
import medBooksListTable from '@/modules/medBooks/components/medBooks-list-table.vue';
import medBooksListToolbar from '@/modules/medBooks/components/medBooks-list-toolbar.vue';

export default {
  name: 'app-medBooks-list-page',

  components: {
    [medBooksListFilter.name]: medBooksListFilter,
    [medBooksListTable.name]: medBooksListTable,
    [medBooksListToolbar.name]: medBooksListToolbar,
  },
};
</script>

<style>
</style>
