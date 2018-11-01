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
        default-sort="id">

        <template slot-scope="props">
          <b-table-column field="id" label="ID" width="40" sortable numeric>
            {{ props.row.id }}
          </b-table-column>

          <b-table-column field="status" label="在席状況" sortable centered>
              <span class="tag is-dark is-medium" v-if="props.row.status === '未出社'">
                {{ props.row.status }}
              </span>
              <span class="tag is-success is-medium" v-else-if="props.row.status === '在席'">
                {{ props.row.status }}
              </span>
              <span class="tag is-grey is-medium" v-else-if="props.row.status === '帰宅'">
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
              <span class="tag is-info is-medium" v-else>
                {{ props.row.status }}
              </span>

          </b-table-column>

          <b-table-column field="user.name" label="氏名" sortable>
            {{ props.row.user.name }}
          </b-table-column>

          <b-table-column field="user.last_name" label="役職" sortable>
            {{ props.row.user.position }}
          </b-table-column>

          <b-table-column field="user.extension_number" label="内線番号" sortable>
            {{ props.row.user.extension_number }}
          </b-table-column>
        </template>
      </b-table>
    </section>
  </div>
</template>

<script>
  const data = require('@/data/sample.json')

  export default {
    data() {
      return {
        data,
        isPaginated: true,
        currentPage: 1,
        perPage: 10
      }
    }
  }
</script>
