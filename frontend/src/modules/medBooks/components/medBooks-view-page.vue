<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/medBooks' }">
        <app-i18n code="entities.medBooks.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.medBooks.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.medBooks.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-medBooks-view-toolbar v-if="record"></app-medBooks-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-relation-to-one
          :label="fields.patient.label"
          :permission="fields.patient.readPermission"
          :url="fields.patient.viewUrl"
          :value="presenter(record, 'patient')"
        ></app-view-item-relation-to-one>

        <app-view-item-relation-to-one
          :label="fields.member.label"
          :permission="fields.member.readPermission"
          :url="fields.member.viewUrl"
          :value="presenter(record, 'member')"
        ></app-view-item-relation-to-one>

        <app-view-item-text :label="fields.issueDate.label" :value="presenter(record, 'issueDate')"></app-view-item-text>

        <app-view-item-text :label="fields.dueDate.label" :value="presenter(record, 'dueDate')"></app-view-item-text>

        <app-view-item-text :label="fields.returnDate.label" :value="presenter(record, 'returnDate')"></app-view-item-text>

        <app-view-item-text :label="fields.status.label" :value="presenter(record, 'status')"></app-view-item-text>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>

        <app-view-item-text :label="fields.desiase.label" :value="presenter(record, 'desiase')"></app-view-item-text>

        <app-view-item-text :label="fields.recipe.label" :value="presenter(record, 'recipe')"></app-view-item-text>
        
        <app-view-item-text :label="fields.fee.label" :value="presenter(record, 'fee')"></app-view-item-text>
        
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import medBooksViewToolbar from '@/modules/medBooks/components/medBooks-view-toolbar.vue';
import { medBooksModel } from '@/modules/medBooks/medBooks-model';

const { fields } = medBooksModel;

export default {
  name: 'app-medBooks-view-page',

  props: ['id'],

  components: {
    [medBooksViewToolbar.name]: medBooksViewToolbar,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'medBooks/view/record',
      loading: 'medBooks/view/loading',
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
      doFind: 'medBooks/view/doFind',
    }),

    presenter(record, fieldName) {
      return medBooksModel.presenter(record, fieldName);
    },
  },
};
</script>
