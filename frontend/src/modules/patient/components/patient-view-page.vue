<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/patient' }">
        <app-i18n code="entities.patient.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.patient.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.patient.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-patient-view-toolbar v-if="record"></app-patient-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.isbn.label" :value="presenter(record, 'isbn')"></app-view-item-text>

        <app-view-item-text :label="fields.title.label" :value="presenter(record, 'title')"></app-view-item-text>

        <app-view-item-text :label="fields.author.label" :value="presenter(record, 'author')"></app-view-item-text>

        <app-view-item-text :label="fields.stock.label" :value="presenter(record, 'stock')"></app-view-item-text>

        <app-view-item-image :label="fields.images.label" :value="presenter(record, 'images')"></app-view-item-image>

        <app-view-item-custom :label="fields.status.label" :value="record.status">
          <app-patient-status-tag :value="record.status" />
        </app-view-item-custom>
        <app-view-item-text :label="fields.birthDate.label" :value="presenter(record, 'birthDate')"></app-view-item-text>
        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BookViewToolbar from '@/modules/patient/components/patient-view-toolbar.vue';
import { BookModel } from '@/modules/patient/patient-model';
import BookStatusTag from '@/modules/patient/components/patient-status-tag';

const { fields } = BookModel;

export default {
  name: 'app-patient-view-page',

  props: ['id'],

  components: {
    [BookViewToolbar.name]: BookViewToolbar,
    [BookStatusTag.name]: BookStatusTag,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'patient/view/record',
      loading: 'patient/view/loading',
    }),

    fields() {
      return fields;
    },
  },

  async created() {
    await this.doFind(this.id);
  },

  methods: {
    ...mapActions({
      doFind: 'patient/view/doFind',
    }),

    presenter(record, fieldName) {
      return BookModel.presenter(record, fieldName);
    },
  },
};
</script>
