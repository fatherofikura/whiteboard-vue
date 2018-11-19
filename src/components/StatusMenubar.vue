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

    <div class="notes">
      <b-field horizonta>
        <p class="control">
          <b-input placeholder="補足情報を記入してください。" v-model="note"></b-input>
        </p>
        <p class="control">
          <b-dropdown>
            <button class="button is-primary" slot="trigger">
              <b-icon icon="menu-down"></b-icon>
            </button>
            <b-dropdown-item  @click="changeNote('A101会議室')">A101会議室</b-dropdown-item>
            <b-dropdown-item  @click="changeNote('A201会議室')">A201会議室</b-dropdown-item>
            <b-dropdown-item  @click="changeNote('A301会議室')">A301会議室</b-dropdown-item>
          </b-dropdown>
        </p>
      </b-field>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        note: ''
      }
    },
    computed: {
      ...mapGetters('checkedList', ['checkedList']),
    },
    methods: {
      updateStatus(buttonName) {
        this.$store.dispatch('people/edit', { checkedList: this.checkedList, buttonName: buttonName, note: this.note} )
        this.$store.dispatch('checkedList/doClear')
      },
      changeNote(itemName) {
        this.note = itemName
      }
    }
  }
</script>
