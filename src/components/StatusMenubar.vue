<template>
  <div class="status-menubar">
    <div class="buttons">
      <span class="button is-dark is-medium" @click="doUpdate">未出社</span>
      <span class="button is-success is-medium">在席</span>
      <span class="button is-light is-medium">帰宅</span>
      <span class="button is-primary is-medium">出張</span>
      <span class="button is-warning is-medium">外出</span>
      <span class="button is-link is-medium">社内</span>
      <span class="button is-danger is-medium">休み</span>
      <span class="button is-info is-medium">その他</span>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: mapGetters('checkedList', ['checkedList']),
    methods: {
      doUpdate(event) {
        console.log('doUpdate@StatusMenubar' + this.checkedList)
      }
    }
  }
</script>
