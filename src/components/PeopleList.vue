<template>
  <div class="people-list">
    <section>
      <b-field grouped group-multiline>
        <b-select v-model="perPage" :disabled="!isPaginated">
          <option value="5">5 per page</option>
          <option value="10">10 per page</option>
          <option value="15">15 per page</option>
          <option value="20">20 per page</option>
        </b-select>
        <div class="control is-flex">
          <b-switch v-model="isPaginated">Paginated</b-switch>
        </div>
      </b-field>

      <b-table
        :data="data"
        :paginated="isPaginated"
        :per-page="perPage"
        :current-page.sync="currentPage"
        :checked-rows.sync="checkedRows"
        default-sort="id"
        checkable
        @check="UpdateCheckedList">

        <template slot-scope="props">
          <b-table-column field="status" label="在席状況" sortable centered>
              <span class="tag is-dark is-medium" v-if="props.row.status === '未出社'">
                {{ props.row.status }}
              </span>
              <span class="tag is-success is-medium" v-else-if="props.row.status === '在席'">
                {{ props.row.status }}
              </span>
              <span class="tag is-light is-medium" v-else-if="props.row.status === '帰宅'">
                {{ props.row.status }}
              </span>
              <span class="tag is-primary is-medium" v-else-if="props.row.status === '出張'">
                {{ props.row.status }}
              </span>
              <span class="tag is-warning is-medium" v-else-if="props.row.status === '外出'">
                {{ props.row.status }}
              </span>
              <span class="tag is-link is-medium" v-else-if="props.row.status === '社内'">
                {{ props.row.status }}
              </span>
              <span class="tag is-danger is-medium" v-else-if="props.row.status === '休み'">
                {{ props.row.status }}
              </span>
              <span class="tag is-info is-medium" v-else-if="props.row.status === 'その他'">
                {{ props.row.status }}
              </span>
              <span class="tag is-white is-medium" v-else>
              </span>

          </b-table-column>

          <b-table-column field="name" label="氏名" sortable>
            {{ props.row.name }}
          </b-table-column>

          <b-table-column field="last_name" label="役職" sortable>
            {{ props.row.position }}
          </b-table-column>

          <b-table-column field="extension_number" label="内線番号" sortable>
            {{ props.row.extension_number }}
          </b-table-column>
        </template>
      </b-table>
    </section>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import people from '@/api/people.js'
  export default {
    data() {
      return {
        data: [],
        isPaginated: true,
        checkedRows: [],
        currentPage: 1,
        perPage: 10,
      }
    },
    computed: {
      ...mapGetters('filters', ['switchedFilters']),
      ...mapGetters('people', ['database']),
      ...mapGetters('checkedList', ['checkedList']),
    },
    methods: {
      loadAsyncData() {
        this.$store.dispatch('people/load', this.switchedFilters)
        this.data = this.database
      },
      UpdateCheckedList(checkedList) {
        // リストのチェック状態をもってディスパッチ
        this.$store.dispatch('checkedList/doUpdate', checkedList)
      }
    },
    mounted: function () {
      this.loadAsyncData()
    },
    watch: {
      switchedFilters: function() {
        this.loadAsyncData()
      },
      checkedList: function() {
        this.checkedRows = this.checkedList
      },
    }
  }
</script>
