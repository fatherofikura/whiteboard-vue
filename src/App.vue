<template>
  <div id="app">
    <menubar />
    <router-view />
  </div>
</template>

<script>
import Menubar from '@/components/Menubar'
export default {
  name: 'app',
  components: {
    Menubar,
  }
}
</script>
