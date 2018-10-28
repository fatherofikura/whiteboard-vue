<template>
  <div id="app">
    <whiteboard />
  </div>
</template>

<script>
import Whiteboard from './components/Whiteboard'

export default {
  name: 'app',
  components: {
    Whiteboard
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
