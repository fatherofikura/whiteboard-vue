<template>
 <div class="tag-filter">
    <section>
      <b-field grouped group-multiline>
        <div class="control">
          <b-switch v-model="isSwitchedNotArrival" type="is-dark" @input="doUpdate">未出社</b-switch>
        </div>
        <div class="control">
          <b-switch v-model="isSwitchedArrival" type="is-success" @input="doUpdate">在席</b-switch>
        </div>
        <div class="control">
          <b-switch v-model="isSwitchedGoingHome" type="is-light" @input="doUpdate">帰宅</b-switch>
        </div>
        <div class="control">
          <b-switch :value="true" type="is-primary">出張</b-switch>
        </div>
        <div class="control">
          <b-switch :value="true" type="is-warning">外出</b-switch>
        </div>
        <div class="control">
          <b-switch :value="true" type="is-link">社内</b-switch>
        </div>
        <div class="control">
          <b-switch :value="true" type="is-danger">休み</b-switch>
        </div>
        <div class="control">
          <b-switch :value="true" type="is-info">その他</b-switch>
        </div>
      </b-field>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isSwitchedNotArrival: false,
        isSwitchedArrival: false,
        isSwitchedGoingHome: false,
      }
    },
    methods: {
      doUpdate(event) {
        // 各Switchの状態をもってディスパッチ
        var isSwitched = {
          'isSwitchedNotArrival': this.isSwitchedNotArrival,
          'isSwitchedArrival': this.isSwitchedArrival,
          'isSwitchedGoingHome': this.isSwitchedGoingHome
        }
        this.$store.dispatch('filters/doUpdate',{ isSwitched })
      },
    }
  }
</script>
