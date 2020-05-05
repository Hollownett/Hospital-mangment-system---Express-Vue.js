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
        <app-i18n code="entities.medBooks.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.medBooks.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.medBooks.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.medBooks.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        :model="model"
        :rules="rules"
        @submit.native.prevent="doSubmit"
        class="form"
        ref="form"
        v-if="model"
      >
        <el-form-item :label="fields.id.label" :prop="fields.id.name" v-if="isEditing">
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :disabled="true" v-model="model[fields.id.name]"/>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.patient.label"
          :prop="fields.patient.name"
          :required="fields.patient.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-autocomplete-one-input
              :fetchFn="fields.patient.fetchFn"
              v-model="model[fields.patient.name]"
            ></app-autocomplete-one-input>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.member.label"
          :prop="fields.member.name"
          :required="fields.member.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-autocomplete-one-input
              :fetchFn="fields.member.fetchFn"
              v-model="model[fields.member.name]"
            ></app-autocomplete-one-input>
          </el-col>
        </el-form-item>

      <el-form-item
          :label="fields.desiase.label"
          :prop="fields.desiase.name"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.desiase.name]" />
          </el-col>
        </el-form-item>

        
      <el-form-item
          :label="fields.recipe.label"
          :prop="fields.recipe.name"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.recipe.name]" />
          </el-col>
        </el-form-item>
      
      <el-form-item
          :label="fields.fee.label"
          :prop="fields.fee.name"
        >
          <el-col :lg="11" :md="16" :sm="24">
           <el-input-number :precision="0" :step="1" v-model="model[fields.fee.name]"></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.issueDate.label"
          :prop="fields.issueDate.name"
          :required="fields.issueDate.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="datetime" v-model="model[fields.issueDate.name]"></el-date-picker>
          </el-col>
        </el-form-item>


        <el-form-item
          :label="fields.returnDate.label"
          :prop="fields.returnDate.name"
          :required="fields.returnDate.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-date-picker placeholder type="datetime" v-model="model[fields.returnDate.name]"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.status.label"
          :prop="fields.status.name"
          :required="fields.status.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-select placeholder v-model="model[fields.status.name]">
              <el-option :value="undefined">--</el-option>
              <el-option
                :key="option.id"
                :label="option.label"
                :value="option.id"
                v-for="option in fields.status.options"
              ></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item>
          <div class="form-buttons">
            <el-button
              :disabled="saveLoading"
              @click="doSubmit"
              icon="el-icon-fa-floppy-o"
              type="primary"
            >
              <app-i18n code="common.save"></app-i18n>
            </el-button>

            <el-button :disabled="saveLoading" @click="doReset" icon="el-icon-fa-undo">
              <app-i18n code="common.reset"></app-i18n>
            </el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FormSchema } from '@/shared/form/form-schema';
import { medBooksModel } from '@/modules/medBooks/medBooks-model';

const { fields } = medBooksModel;
const formSchema = new FormSchema([
  fields.id,
  fields.patient,
  fields.member,
  fields.issueDate,
  fields.returnDate,
  fields.status,
  fields.desiase,
  fields.recipe,
  fields.fee,
]);

export default {
  name: 'app-medBooks-form-page',

  props: ['id'],

  data() {
    return {
      rules: formSchema.rules(),
      model: null,
    };
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'medBooks/form/record',
      findLoading: 'medBooks/form/findLoading',
      saveLoading: 'medBooks/form/saveLoading',
    }),

    isEditing() {
      return !!this.id;
    },

    fields() {
      return fields;
    },
  },

  async created() {
    if (this.isEditing) {
      await this.doFind(this.id);
    } else {
      await this.doNew();
    }

    this.model = formSchema.initialValues(this.record);
  },

  methods: {
    ...mapActions({
      doFind: 'medBooks/form/doFind',
      doNew: 'medBooks/form/doNew',
      doUpdate: 'medBooks/form/doUpdate',
      doCreate: 'medBooks/form/doCreate',
    }),

    doReset() {
      this.model = formSchema.initialValues(this.record);
    },

    async doSubmit() {
      try {
        await this.$refs.form.validate();
      } catch (error) {
        return;
      }

      const { id, ...values } = formSchema.cast(this.model);

      if (this.isEditing) {
        return this.doUpdate({
          id,
          values,
        });
      } else {
        return this.doCreate(values);
      }
    },
  },
};
</script>

<style>
</style>
