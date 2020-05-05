<template>
  <el-form
    :label-position="labelPosition"
    :label-width="labelWidthFilter"
    :model="model"
    :rules="rules"
    @submit.native.prevent="doFilter"
    class="filter"
    ref="form"
  >
    <el-row>
      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.id.label" :prop="fields.id.name">
          <el-input v-model="model[fields.id.name]"/>
        </el-form-item>
      </el-col>

      <el-col style="margin-bottom: -0.41px;" :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.createdAtRange.label" :prop="fields.createdAtRange.name">
          <el-date-picker type="datetimerange" v-model="model[fields.createdAtRange.name]"></el-date-picker>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.patient.label" :prop="fields.patient.name">
          <app-autocomplete-one-input
            :fetchFn="fields.patient.fetchFn"
            v-model="model[fields.patient.name]"
          ></app-autocomplete-one-input>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.member.label" :prop="fields.member.name">
          <app-autocomplete-one-input
            :fetchFn="fields.member.fetchFn"
            v-model="model[fields.member.name]"
          ></app-autocomplete-one-input>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.desiase.label" :prop="fields.desiase.name">
          <el-input v-model="model[fields.desiase.name]"/>
        </el-form-item>
      </el-col>

      
      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.recipe.label" :prop="fields.recipe.name">
          <el-input v-model="model[fields.recipe.name]"/>
        </el-form-item>
      </el-col>

      <el-col style="margin-bottom: -0.41px;" :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.issueDateRange.label" :prop="fields.issueDateRange.name">
          <el-date-picker type="datetimerange" v-model="model[fields.issueDateRange.name]"></el-date-picker>
        </el-form-item>
      </el-col>

      <el-col style="margin-bottom: -0.41px;" :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.returnDateRange.label" :prop="fields.returnDateRange.name">
          <el-date-picker type="datetimerange" v-model="model[fields.returnDateRange.name]"></el-date-picker>
        </el-form-item>
      </el-col>
   
       <el-col style="margin-bottom: -0.41px;" :lg="12" :md="16" :sm="24">
            <el-form-item :label="fields.fee.label" :prop="fields.fee.name">
           <el-input-number :precision="0" :step="100" v-model="model[fields.fee.name]"></el-input-number>
           </el-form-item>
          </el-col>
      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.status.label" :prop="fields.status.name">
          <el-select placeholder v-model="model[fields.status.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.status.options"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>

    <div class="filter-buttons">
      <el-button :disabled="loading" @click="doFilter" icon="el-icon-fa-search" type="primary">
        <app-i18n code="common.search"></app-i18n>
      </el-button>

      <el-button :disabled="loading" @click="doResetFilter" icon="el-icon-fa-undo">
        <app-i18n code="common.reset"></app-i18n>
      </el-button>
    </div>
  </el-form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FilterSchema } from '@/shared/form/filter-schema';
import { medBooksModel } from '@/modules/medBooks/medBooks-model';

const { fields } = medBooksModel;

const filterSchema = new FilterSchema([
  fields.id,
  fields.createdAtRange,
  fields.patient,
  fields.member,
  fields.issueDateRange,
  fields.returnDateRange,
  fields.status,
  fields.desiase,
  fields.recipe,
  fields.fee,
]);

export default {
  name: 'app-medBooks-list-filter',

  data() {
    return {
      rules: filterSchema.rules(),
      model: {},
    };
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthFilter: 'layout/labelWidthFilter',
      loading: 'medBooks/list/loading',
      filter: 'medBooks/list/filter',
    }),

    fields() {
      return fields;
    },
  },

  async mounted() {
    this.model = filterSchema.initialValues(
      this.filter,
      this.$route.query,
    );

    return this.doFilter();
  },

  methods: {
    ...mapActions({
      doReset: 'medBooks/list/doReset',
      doFetch: 'medBooks/list/doFetch',
    }),

    async doResetFilter() {
      this.model = filterSchema.initialValues();
      this.$refs.form.clearValidate();
      return this.doReset();
    },

    async doFilter() {
      try {
        await this.$refs.form.validate();
        this.$refs.form.clearValidate();
      } catch (error) {
        return;
      }

      const filter = filterSchema.cast(this.model);
      return this.doFetch({
        filter,
      });
    },
  },
};
</script>

<style>
</style>
