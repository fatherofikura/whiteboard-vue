<template>
  <div class="people-list">
    <b-table :data="data" :selected.sync="selected">
      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" numeric>
          {{ props.row.id }}
        </b-table-column>
        <b-table-column field="status" label="状況">
          {{ props.row.status }}
        </b-table-column>
        <b-table-column field="name" label="氏名">
          {{ props.row.name }}
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
  export default {
    data() {
      const data = [
        { 'id': 1, 'status': '未出社', 'name': '山田 太郎' },
        { 'id': 2, 'status': '在席', 'name': '鈴木 一郎' },
        { 'id': 3, 'status': '帰宅', 'name': '佐藤 花子' },
      ]

      return {
        data,
        selected: data[1],
      }
    }
  }
</script>
