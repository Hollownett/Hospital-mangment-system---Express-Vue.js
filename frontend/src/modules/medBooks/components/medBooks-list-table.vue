<template>
  <div>
    <el-table
      :border="true"
      :data="rows"
      @sort-change="doChangeSort"
      ref="table"
      row-key="id"
      v-loading="loading"
    >
      <el-table-column type="selection" width="55"></el-table-column>

     

      <el-table-column :label="fields.patient.label" :prop="fields.patient.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.patient.label"
            :permission="fields.patient.readPermission"
            :url="fields.patient.viewUrl"
            :value="presenter(scope.row, 'patient')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column :label="fields.member.label" :prop="fields.member.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.member.label"
            :permission="fields.member.readPermission"
            :url="fields.member.viewUrl"
            :value="presenter(scope.row, 'member')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>
     
      <el-table-column
        :label="fields.desiase.label"
        :prop="fields.desiase.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'desiase') }}</template>
      </el-table-column>

 <el-table-column
        :label="fields.recipe.label"
        :prop="fields.recipe.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'recipe') }}</template>
      </el-table-column>
      <el-table-column
        :label="fields.issueDate.label"
        :prop="fields.issueDate.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'issueDate') }}</template>
      </el-table-column>
  
      <el-table-column
        :label="fields.returnDate.label"
        :prop="fields.returnDate.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'returnDate') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.status.label"
        :prop="fields.status.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'status') }}</template>
      </el-table-column>

  <el-table-column
        :label="fields.fee.label"
        :prop="fields.fee.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'fee') }}</template>
      </el-table-column>

      <el-table-column
        :label="fields.createdAt.label"
        :prop="fields.createdAt.name"
        sortable="custom"
      >
        <template slot-scope="scope">{{ presenter(scope.row, 'createdAt') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/medBooks/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link :to="`/medBooks/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
              <el-button type="text">
                <app-i18n code="common.edit"></app-i18n>
              </el-button>
            </router-link>

            <el-button
              :disabled="destroyLoading"
              @click="doDestroyWithConfirm(scope.row.id)"
              type="text"
              v-if="hasPermissionToDestroy"
            >
              <app-i18n code="common.destroy"></app-i18n>
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <div class="el-pagination-wrapper">
      <el-pagination
        :current-page="pagination.currentPage || 1"
        :disabled="loading"
        :layout="paginationLayout"
        :total="count"
        @current-change="doChangePaginationCurrentPage"
        @size-change="doChangePaginationPageSize"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { medBooksModel } from '@/modules/medBooks/medBooks-model';
import { mapGetters, mapActions } from 'vuex';
import { medBooksPermissions } from '@/modules/medBooks/medBooks-permissions';
import { i18n } from '@/i18n';

const { fields } = medBooksModel;

export default {
  name: 'app-medBooks-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'medBooks/list/rows',
      count: 'medBooks/list/count',
      loading: 'medBooks/list/loading',
      pagination: 'medBooks/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'medBooks/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new medBooksPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new medBooksPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'medBooks/list/doChangeSort',
      doChangePaginationCurrentPage:
        'medBooks/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'medBooks/list/doChangePaginationPageSize',
      doMountTable: 'medBooks/list/doMountTable',
      doDestroy: 'medBooks/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return medBooksModel.presenter(row, fieldName);
    },

    async doDestroyWithConfirm(id) {
      try {
        await this.$confirm(
          i18n('common.areYouSure'),
          i18n('common.confirm'),
          {
            confirmButtonText: i18n('common.yes'),
            cancelButtonText: i18n('common.no'),
            type: 'warning',
          },
        );

        return this.doDestroy(id);
      } catch (error) {
        // no
      }
    },
  },
};
</script>

<style>
</style>
