<template>
  <div class="status-menubar">
    <div class="buttons">
      <span class="button is-dark is-medium" @click="updateStatus('未出社')">未出社</span>
      <span class="button is-success is-medium" @click="updateStatus('在席')">在席</span>
      <span class="button is-light is-medium" @click="updateStatus('帰宅')">帰宅</span>
      <span class="button is-primary is-medium" @click="updateStatus('出張')">出張</span>
      <span class="button is-warning is-medium" @click="updateStatus('外出')">外出</span>
      <span class="button is-link is-medium" @click="updateStatus('社内')">社内</span>
      <span class="button is-danger is-medium" @click="updateStatus('休み')">休み</span>
      <span class="button is-info is-medium" @click="updateStatus('その他')">その他</span>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters('checkedList', ['checkedList']),
    },
    methods: {
      updateStatus(buttonName) {
        console.log('updateStatus:' + buttonName)
        this.$store.dispatch('people/edit', { checkedList: this.checkedList, buttonName: buttonName} )
        this.$store.dispatch('checkedList/doClear')
      }
    }
  }
</script>
