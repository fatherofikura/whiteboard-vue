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
          <b-switch v-model="isSwitchedBusinessTrip" type="is-primary" @input="doUpdate">出張</b-switch>
        </div>
        <div class="control">
          <b-switch v-model="isSwitchedGoingOut" type="is-warning" @input="doUpdate">外出</b-switch>
        </div>
        <div class="control">
          <b-switch v-model="isSwitchedHouse" type="is-link" @input="doUpdate">社内</b-switch>
        </div>
        <div class="control">
          <b-switch v-model="isSwitchedHoliday" type="is-danger" @input="doUpdate">休み</b-switch>
        </div>
        <div class="control">
          <b-switch v-model="isSwitchedOtherwise" type="is-info" @input="doUpdate">その他</b-switch>
        </div>
      </b-field>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isSwitchedNotArrival: true,
        isSwitchedArrival: true,
        isSwitchedGoingHome: true,
        isSwitchedBusinessTrip: true,
        isSwitchedGoingOut: true,
        isSwitchedHouse: true,
        isSwitchedHoliday: true,
        isSwitchedOtherwise: true,
      }
    },
    methods: {
      doUpdate(event) {

        // フィルタリング状況のチェック
        var switchedFilters = [];
        if( this.isSwitchedNotArrival ){
          switchedFilters.push('未出社')
        }
        if( this.isSwitchedArrival ){
          switchedFilters.push('在席')
        }
        if( this.isSwitchedGoingHome ){
          switchedFilters.push('帰宅')
        }
        if( this.isSwitchedBusinessTrip ){
          switchedFilters.push('出張')
        }
        if( this.isSwitchedGoingOut ){
          switchedFilters.push('外出')
        }
        if( this.isSwitchedHouse ){
          switchedFilters.push('社内')
        }
        if( this.isSwitchedHoliday ){
          switchedFilters.push('休み')
        }
        if( this.isSwitchedOtherwise ){
          switchedFilters.push('その他')
        }

        // 各Switchの状態をもってディスパッチ
        this.$store.dispatch('filters/doUpdate', switchedFilters)
      },
    }
  }
</script>
